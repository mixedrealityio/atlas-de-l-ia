// Simulateur de LLM local : un modèle en 3D (requête, préremplissage, génération), la mémoire (VRAM, RAM, cache KV),
// et le débit estimé en jetons par seconde selon le modèle, la quantification, le contexte et le matériel.
// Les chiffres sont des ordres de grandeur issus de fiches techniques arrondies et d'un modèle de type « roofline ».
import { V, lines, shadeMat } from './parts.js';
import { sizedBox, setBox, ball, rod, rodTo, fr } from './kit.js';

export const MODELS = {
  m8:   { n: '8 Md (dense)', N: 8.0, Na: 8.0, L: 32, Hkv: 8, d: 128, Hq: 32 },
  m14:  { n: '14 Md (dense)', N: 14.8, Na: 14.8, L: 48, Hkv: 8, d: 128, Hq: 40 },
  m32:  { n: '32 Md (dense)', N: 32.8, Na: 32.8, L: 64, Hkv: 8, d: 128, Hq: 40 },
  m70:  { n: '70 Md (dense)', N: 70.6, Na: 70.6, L: 80, Hkv: 8, d: 128, Hq: 64 },
  mx:   { n: '47 Md en 8 experts (13 Md actifs)', N: 46.7, Na: 12.9, L: 32, Hkv: 8, d: 128, Hq: 32, moe: true },
  q235: { n: '235 Md en experts (22 Md actifs)', N: 235, Na: 22, L: 94, Hkv: 4, d: 128, Hq: 64, moe: true },
  m405: { n: '405 Md (dense)', N: 405, Na: 405, L: 126, Hkv: 8, d: 128, Hq: 128 },
};
export const WQ = { fp16: ['FP16 / BF16', 16], q8: ['Q8_0', 8.5], q6: ['Q6_K', 6.56], q5: ['Q5_K_M', 5.69], q4: ['Q4_K_M', 4.85], q3: ['Q3_K_M', 3.91], q2: ['Q2_K', 3.35] };
export const KQ = { kv16: ['FP16', 16], kv8: ['Q8', 8.5], kv4: ['Q4', 4.5] };
// mem : Go utilisables par le calcul ; bw : Go/s ; tf : TFLOPS FP16 (ordre de grandeur) ; ram, rambw : mémoire système séparée
export const HW = {
  cpu:   { n: 'PC sans GPU (DDR5)', mem: 0, bw: 0, tf: 1, ram: 64, rambw: 80 },
  g3060: { n: 'RTX 3060 12 Go', mem: 12, bw: 360, tf: 25, ram: 32, rambw: 50 },
  g3090: { n: 'RTX 3090 24 Go', mem: 24, bw: 936, tf: 70, ram: 64, rambw: 50 },
  g4090: { n: 'RTX 4090 24 Go', mem: 24, bw: 1008, tf: 165, ram: 64, rambw: 60 },
  g5090: { n: 'RTX 5090 32 Go', mem: 32, bw: 1792, tf: 210, ram: 64, rambw: 80 },
  m4max: { n: 'Mac M4 Max 128 Go (≈ 96 utilisables)', mem: 96, bw: 546, tf: 18, ram: 0, rambw: 1 },
  m3u:   { n: 'Mac M3 Ultra 512 Go (≈ 448 utilisables)', mem: 448, bw: 819, tf: 28, ram: 0, rambw: 1 },
  halo:  { n: 'PC à mémoire unifiée 128 Go (≈ 96)', mem: 96, bw: 256, tf: 30, ram: 0, rambw: 1 },
  spark: { n: 'Mini-station 128 Go mémoire unifiée', mem: 120, bw: 273, tf: 60, ram: 0, rambw: 1 },
  a100:  { n: 'A100 80 Go', mem: 80, bw: 2039, tf: 312, ram: 256, rambw: 100 },
  h100:  { n: 'H100 80 Go', mem: 80, bw: 3350, tf: 989, ram: 512, rambw: 150 },
  h200:  { n: 'H200 141 Go', mem: 141, bw: 4800, tf: 989, ram: 512, rambw: 150 },
};
export const SIM = { model: 'm8', wq: 'q4', kq: 'kv16', ctx: 4096, gen: 256, batch: 1, hw: 'g4090', mem: 24, bw: 1008, tf: 165, ngpu: 1, ram: 64, rambw: 60, eff: 70 };
let ver = 1;

export function calc(S) {
  const m = MODELS[S.model], bits = WQ[S.wq][1], kb = KQ[S.kq][1], B = S.batch, C = S.ctx, G = S.gen, eff = S.eff / 100;
  const cpu = S.mem <= 0, nG = cpu ? 1 : S.ngpu, par = nG > 1 ? 1 / (1 + 0.07 * (nG - 1)) : 1;
  const M = S.mem * nG, bwG = S.bw * nG * par, tf = S.tf * nG * par, over = cpu ? 0 : 1.5;
  const W = m.N * bits / 8, kvTok = 2 * m.L * m.Hkv * m.d * kb / 8, kv = B * (C + G) * kvTok / 1e9;
  const kvG = cpu ? 0 : Math.min(kv, Math.max(0, M - over)), kvC = kv - kvG;
  const wFree = cpu ? 0 : Math.max(0, M - over - kvG), fg = cpu ? 0 : Math.min(1, wFree / W), wG = W * fg, wC = W - wG;
  const ramNeed = wC + kvC, ramOk = ramNeed <= S.ram + 1e-9;
  const p = m.Na / m.N, rf = m.moe ? 1 - Math.pow(1 - p, B) : 1, rW = W * rf;
  const ctxAvg = C + G / 2, kvRead = B * ctxAvg * kvTok / 1e9, kvRG = kv > 0 ? kvRead * kvG / kv : 0, kvRC = kvRead - kvRG;
  const tG = bwG > 0 ? (rW * fg + kvRG) / (bwG * eff) : 0, tC = (rW * (1 - fg) + kvRC) / (Math.max(S.rambw, 1) * eff);
  const flops = 2 * m.Na * 1e9 * B + 4 * m.L * m.Hq * m.d * ctxAvg * B, tComp = flops / (tf * 1e12 * eff * 0.6), tMem = tG + tC;
  const step = Math.max(tMem, tComp) + 0.00005 * m.L, tpsSeq = 1 / step, tpsTot = B / step;
  const bound = tComp > tMem ? 'calcul' : tC > tG ? 'mémoire vive (RAM)' : 'bande passante de la mémoire GPU';
  const fP = 2 * m.Na * 1e9 * C + 2 * m.L * m.Hq * m.d * C * C, tPc = fP / (tf * 1e12 * eff * 0.6);
  const tPm = (bwG > 0 ? wG / (bwG * eff) : 0) + wC / (Math.max(S.rambw, 1) * eff), ttft = Math.max(tPc, tPm) + 0.01;
  const free = (cpu ? S.ram : M - over) - W, ctxMax = free > 0 ? Math.floor(free * 1e9 / (kvTok * B)) : 0;
  return { m, bits, W, kvTok, kv, kvG, kvC, M, over, fg, wG, wC, ramNeed, ramOk, tG, tC, tMem, tComp, step, tpsSeq, tpsTot, bound, ttft, tpsPre: C / ttft, latency: ttft + G * step, ctxMax, cpu, nG };
}

// ---------- affichage des valeurs dans la page ----------
const f0 = x => Math.round(x).toLocaleString('fr-FR'), f1 = x => fr(x, x < 10 ? 1 : 0);
const dur = s => s < 1 ? f0(s * 1000) + ' ms' : s < 100 ? fr(s, 1) + ' s' : f0(s) + ' s';
const OUT = {
  tpsSeq: R => f1(R.tpsSeq) + ' jetons/s', tpsTot: R => f1(R.tpsTot) + ' jetons/s', ttft: R => dur(R.ttft), pre: R => f0(R.tpsPre) + ' jetons/s', latency: R => dur(R.latency),
  W: R => fr(R.W, R.W < 10 ? 1 : 0) + ' Go', kv: R => fr(R.kv, R.kv < 10 ? 2 : 1) + ' Go', kvTok: R => f0(R.kvTok / 1024) + ' Ko', bound: R => R.bound,
  fit: R => !R.ramOk ? 'ne tient pas : mémoire insuffisante' : R.cpu ? 'tient en mémoire vive (RAM)' : R.wC > 0.01 ? 'déborde : ' + fr(R.wC, 1) + ' Go de poids en RAM' : 'tient en mémoire GPU',
  ctxMax: R => R.ctxMax > 0 ? f0(R.ctxMax) + ' jetons' : 'aucun (poids non résidents)', tmem: R => dur(R.tMem), tcomp: R => dur(R.tComp),
  params: R => fr(R.m.N, 0) + ' Md' + (R.m.moe ? ' (' + fr(R.m.Na, 0) + ' Md actifs)' : ''), layers: R => R.m.L + ' couches', heads: R => R.m.Hkv + ' têtes KV × ' + R.m.d,
  bits: R => fr(R.bits, 2) + ' bits/poids', memuse: R => R.cpu ? 'RAM ' + fr(R.ramNeed, 0) + ' Go' : 'GPU ' + fr(Math.min(R.W, R.wG) + R.kvG + R.over, 0) + ' / ' + fr(R.M, 0) + ' Go',
};
const FMT = { ctx: v => f0(v) + ' jetons', gen: v => f0(v) + ' jetons', batch: v => v + (v > 1 ? ' requêtes' : ' requête'), mem: v => v + ' Go', bw: v => f0(v) + ' Go/s', tf: v => v + ' TFLOPS', ngpu: v => v + (v > 1 ? ' GPU' : ' GPU'), ram: v => v + ' Go', rambw: v => v + ' Go/s', eff: v => v + ' %' };
let R0 = null, lastVer = -1, tick = 0;
function applyHW(k) { const h = HW[k]; if (h) { SIM.mem = h.mem; SIM.bw = h.bw; SIM.tf = h.tf; SIM.ram = h.ram; SIM.rambw = h.rambw; } }
function apply(obj) { const keep = obj.ngpu !== undefined; Object.assign(SIM, obj); if (obj.hw && obj.hw !== 'custom' && !(obj.mem !== undefined)) applyHW(obj.hw); if (!keep && obj.hw) SIM.ngpu = SIM.ngpu || 1; ver++; }
function syncDom() {
  if (!R0 || typeof document === 'undefined') return;
  document.querySelectorAll('[data-sim]').forEach(el => {
    const k = el.dataset.sim; if (document.activeElement === el) return;
    if (el.tagName === 'SELECT') { const v = String(SIM[k]); if (el.value !== v) el.value = v; }
    else if (el.type === 'range') { const v = el.dataset.log ? Math.log2(SIM[k]) : SIM[k]; if (+el.value !== v) el.value = v; }
  });
  document.querySelectorAll('[data-out]').forEach(el => { const k = el.dataset.out, f = OUT[k] ? OUT[k](R0) : (FMT[k] ? FMT[k](SIM[k]) : ''); if (el.textContent !== f) el.textContent = f; });
  document.querySelectorAll('[data-flag]').forEach(el => { const bad = !R0.ramOk; el.classList.toggle('bad', bad); });
}
let wired = false;
function wire() {
  if (wired || typeof document === 'undefined') return; wired = true;
  const onIn = e => { const el = e.target.closest?.('[data-sim]'); if (!el) return; const k = el.dataset.sim;
    if (el.tagName === 'SELECT') { if (k === 'hw') { SIM.hw = el.value; applyHW(el.value); } else SIM[k] = el.value; }
    else { let v = +el.value; if (el.dataset.log) v = Math.round(Math.pow(2, v)); SIM[k] = v; if (['mem', 'bw', 'tf', 'ram', 'rambw'].includes(k)) SIM.hw = 'custom'; }
    ver++; };
  document.addEventListener('input', onIn); document.addEventListener('change', onIn);
  document.addEventListener('click', e => { const b = e.target.closest?.('[data-simset]'); if (!b) return; try { apply(JSON.parse(b.dataset.simset)); } catch { } });
}

// ---------- la scène ----------
const setPal = (m, pal) => { if (m.userData.pal !== pal) { m.userData.pal = pal; m.material = shadeMat(pal); } };
export function llmsim({ g, S, x0, label, ext }) {
  wire(); ext.w = 31; ext.h = 8; ext.cy = 3.0; ext.cx = 1.0;
  const NS = 16, y0 = 0.9, sh = 0.24, st = 0.3, xs = x0 - 5.2, H = 5.0, tokW = 1.1;
  const req = Array.from({ length: 8 }, (_, i) => { const m = sizedBox(g, { pal: 'paper', tone: 'hi', name: 'Jeton de la requête' }); setBox(m, x0 - 11.1, x0 - 11.1 + tokW, y0 + i * 0.6, y0 + i * 0.6 + 0.46, -0.2, 0.2); return m; });
  const arrow = rod(g, { r: 0.03, pal: 'ink', name: 'Requête vers le modèle' }); rodTo(arrow, V(x0 - 9.8, 3.1, 0), V(x0 - 8.8, 3.1, 0));
  const slabs = Array.from({ length: NS }, (_, i) => sizedBox(g, { pal: 'blue', tone: 'hi', name: `Couches ${Math.floor(i * 1) + 1}/16 du modèle` }));
  const kvb = Array.from({ length: NS }, (_, i) => sizedBox(g, { pal: 'red', tone: 'hi', name: 'Cache KV de cette tranche de couches' }));
  const resp = Array.from({ length: 8 }, () => { const m = sizedBox(g, { pal: 'paper', tone: 'hi', name: 'Jeton de la réponse' }); return m; });
  const cur = ball(g, 'red', 'Jeton en cours de calcul', 0.2);
  // barres de mémoire : GPU (poids, KV, surcoût) et RAM (poids déportés, KV déporté)
  const xv = x0 + 2.4, xr = x0 + 7.0, bw = 1.2, vSeg = ['blue', 'red', 'dark'].map(p => sizedBox(g, { pal: p, tone: 'hi', name: 'Mémoire GPU' })), rSeg = ['paper', 'red'].map(p => sizedBox(g, { pal: p, tone: 'hi', name: 'Mémoire vive (RAM)' }));
  [xv, xr].forEach(x => lines(g, [x - bw / 2, y0, 0.3, x + bw / 2, y0, 0.3, x + bw / 2, y0, 0.3, x + bw / 2, y0 + H, 0.3, x + bw / 2, y0 + H, 0.3, x - bw / 2, y0 + H, 0.3, x - bw / 2, y0 + H, 0.3, x - bw / 2, y0, 0.3], '#57575a'));
  const xt = [x0 + 10.4, x0 + 12.2], tb = [sizedBox(g, { pal: 'blue', tone: 'hi', name: 'Temps de lecture mémoire par jeton' }), sizedBox(g, { pal: 'blue', tone: 'hi', name: 'Temps de calcul par jeton' })];
  label('t1', 'requête', () => V(x0 - 10.5, y0 + 5.25, 0)); label('t1', 'modèle', () => V(xs, y0 + 5.15, 0)); label('t1', 'réponse', () => V(xs - 2.2, y0 - 1.15, 0));
  label('mark', '', () => V(xs, y0 + 5.6, 0), () => `${R0 ? R0.m.n : ''} · ${WQ[SIM.wq][0]} · ${R0 ? fr(R0.W, R0.W < 10 ? 1 : 0) : ''} Go`);
  label('mark', '', () => V(x0 - 10.5, y0 - 0.45, 0), () => `${f0(SIM.ctx)} jetons`);
  label('t1', 'mémoire GPU', () => V(xv, y0 + 5.25, 0)); label('t1', 'RAM', () => V(xr, y0 + 5.25, 0));
  label('mark', '', () => V(xv, y0 - 0.4, 0), () => R0 ? (R0.cpu ? 'aucun GPU' : `${fr(R0.M, 0)} Go`) : '');
  label('mark', '', () => V(xr, y0 - 0.4, 0), () => R0 ? `${f0(SIM.ram)} Go` : '');
  label('vec', 'poids', () => V(xv + 2.1, y0 + 0.5, 0)); label('vec red', 'cache KV', () => V(xv + 2.35, y0 + 1.3, 0));
  label('t1', 'temps par jeton', () => V((xt[0] + xt[1]) / 2, y0 + 5.25, 0)); label('t2', 'lecture mémoire', () => V(xt[0], y0 - 0.4, 0)); label('t2', 'calcul', () => V(xt[1], y0 - 0.4, 0));
  label('mark', '', () => V(xt[0], y0 - 0.85, 0), () => R0 ? dur(R0.tMem) : ''); label('mark', '', () => V(xt[1], y0 - 0.85, 0), () => R0 ? dur(R0.tComp) : '');
  label('vec red', '', () => V(xt[0] + 0.2, y0 - 1.4, 0), () => R0 ? `limite : ${R0.bound.startsWith('bande') ? 'mémoire GPU' : R0.bound.startsWith('mémoire') ? 'RAM' : 'calcul'}` : '');
  label('mark', '', () => V(x0 + 4.7, y0 + 6.35, 0), () => R0 ? (R0.ramOk ? OUT.fit(R0) : '⚠ ' + OUT.fit(R0)) : '');
  label('mark', '', () => V(x0 + 10.9, y0 + 6.35, 0), () => R0 ? `${f1(R0.tpsSeq)} jetons/s` : '');
  return {
    update: t => {
      if (ver !== lastVer) { R0 = calc(SIM); lastVer = ver; }
      if (R0) syncDom(); const R = R0; if (!R) return;
      // modèle : tranches de couches, largeur ~ taille en Go ; bleu = en mémoire GPU, papier = en RAM
      const w = Math.min(6, 0.6 + 0.55 * Math.log2(1 + R.W)), nG = Math.round(R.fg * NS), pc = t % 14, pre = pc < 3.4 ? pc / 3.4 : 1;
      const tv = Math.min(2.4, 0.22 + 1.5 / Math.sqrt(Math.max(R.tpsSeq, 0.05))), u = pc < 3.4 ? 0 : (pc - 3.4) / tv, k = Math.floor(u), fz = u - k, steps = Math.floor(10.6 / tv);
      const hot = pc < 3.4 ? (pre * (NS + 1)) : fz * (NS + 1), growth = pc < 3.4 ? 0 : Math.min(1, k / Math.max(1, steps));
      const kvLen = Math.min(2.2, 2.4 * R.kv / Math.max(R.cpu ? SIM.ram : R.M, 1));
      slabs.forEach((m, i) => { setBox(m, xs - w / 2, xs + w / 2, y0 + i * st, y0 + i * st + sh, -0.4, 0.4); setPal(m, (hot > i && hot < i + 2.2) ? 'red' : i < nG ? 'blue' : 'paper'); });
      kvb.forEach((m, i) => { const l = Math.max(0.03, kvLen * (SIM.ctx / (SIM.ctx + SIM.gen) + growth * SIM.gen / (SIM.ctx + SIM.gen))); setBox(m, xs + w / 2 + 0.12, xs + w / 2 + 0.12 + l, y0 + i * st + 0.04, y0 + i * st + sh - 0.04, -0.3, 0.3); });
      const nReq = Math.max(1, Math.min(8, Math.round(2 + 1.1 * Math.log2(Math.max(SIM.ctx, 128) / 128) * 0.5)));
      req.forEach((m, i) => { m.visible = i < nReq; setPal(m, pc < 3.4 && pre > i / nReq ? 'blue' : 'paper'); });
      cur.position.set(xs, y0 + Math.min(NS, Math.max(0, hot)) * st + 0.1, 0.6); cur.visible = pc > 0.3;
      resp.forEach((m, i) => { const on = pc >= 3.4 && k > i; setBox(m, xs - 3.2 + i * 0.95, xs - 3.2 + i * 0.95 + 0.82, y0 - 0.7, y0 - 0.28, -0.2, 0.2); m.visible = on; setPal(m, on && k - 1 === i ? 'red' : 'blue'); });
      // mémoire
      const cap = R.cpu ? 1 : R.M, hv = x => Math.min(H, H * x / Math.max(cap, 1e-6)), a = hv(R.wG), b = a + hv(R.kvG), c = b + hv(R.over);
      setBox(vSeg[0], xv - bw / 2, xv + bw / 2, y0, y0 + a, -0.3, 0.3); setBox(vSeg[1], xv - bw / 2, xv + bw / 2, y0 + a, y0 + b, -0.3, 0.3); setBox(vSeg[2], xv - bw / 2, xv + bw / 2, y0 + b, y0 + Math.min(H, c), -0.3, 0.3);
      const hr = x => Math.min(H, H * x / Math.max(SIM.ram, 1e-6)); setBox(rSeg[0], xr - bw / 2, xr + bw / 2, y0, y0 + hr(R.wC), -0.3, 0.3); setBox(rSeg[1], xr - bw / 2, xr + bw / 2, y0 + hr(R.wC), y0 + hr(R.wC + R.kvC), -0.3, 0.3);
      // temps par jeton
      const mx = Math.max(R.tMem, R.tComp, 1e-9); setBox(tb[0], xt[0] - 0.55, xt[0] + 0.55, y0, y0 + H * R.tMem / mx, -0.3, 0.3); setBox(tb[1], xt[1] - 0.55, xt[1] + 0.55, y0, y0 + H * R.tComp / mx, -0.3, 0.3);
      setPal(tb[0], R.tMem >= R.tComp ? 'red' : 'blue'); setPal(tb[1], R.tComp > R.tMem ? 'red' : 'blue');
    },
    info: () => { const R = R0; if (!R) return ''; return `${R.m.n} · ${WQ[SIM.wq][0]} · poids ${fr(R.W, 1)} Go · cache KV ${fr(R.kv, 2)} Go\n${f1(R.tpsSeq)} jetons/s par requête · ${f1(R.tpsTot)} au total\npremier jeton ${dur(R.ttft)}`; },
  };
}
