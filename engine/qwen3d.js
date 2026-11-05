// Atlas 3D de Qwen 3.8 27B tel qu'il tourne sur un MacBook (mtplx, version « MTPLX-Optimized-Speed ») :
// le trajet d'une requête (tokenisation, embeddings, 64 couches, tête de sortie, échantillonnage, tête MTP),
// la quantification dynamique (4, 8 ou 16 bits selon la partie) et la mémoire du serveur local.
// Couleurs : papier = 4 bits, bleu = 8 bits, rouge = 16 bits ; gris = pas de poids (texte, calcul).
import { V, lines, shadeMat } from './parts.js';
import { sizedBox, setBox, ball, rod, rodTo, fr } from './kit.js';

const setPal = (m, pal) => { if (m.userData.pal !== pal) { m.userData.pal = pal; m.material = shadeMat(pal); } };
const keep = (m, pal) => { m.userData.pal = pal; m.userData.home0 = pal; return m; };
const rnd = n => { const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };
const lerpV = (a, b, u) => a.clone().lerp(b, Math.min(1, Math.max(0, u)));
const BITS = { paper: '4 bits', blue: '8 bits', red: '16 bits' };
// sur petit écran (téléphone), seules les étiquettes principales (t1) restent : les autres sont lues dans la page
const wide = () => typeof innerWidth === 'undefined' || innerWidth > 900;
const slim = label => (cls, html, at, text) => (cls === 't1' ? label(cls, html, at, text) : label(cls, '', at, () => (wide() ? (text ? text() : html) : '')));
const NL = 64, isAttn = i => i % 4 === 3;          // une couche sur quatre (4, 8, …, 64) : attention complète
const mlpPal = i => (i >= 56 ? 'blue' : 'paper');  // MLP des couches 57 à 64 en 8 bits

function legend(g, label, x, y) {
  [['paper', '4 bits · ~90 % des poids'], ['blue', '8 bits · les goulots'], ['red', '16 bits · les parties fragiles']].forEach(([p, t], i) => {
    const m = sizedBox(g, { pal: p, tone: 'hi', name: `Légende : ${BITS[p]}` }); setBox(m, x, x + 0.42, y - i * 0.55, y - i * 0.55 + 0.32, -0.15, 0.15);
    label('lgl' + (p === 'paper' ? '' : ' ' + p), t, () => V(x + 0.62, y - i * 0.55 + 0.16, 0));
  });
}

// ------------------------------------------------------------------ le trajet d'une requête
export function qwen({ g, S, x0, label: label0, ext }) {
  const label = slim(label0);
  ext.w = 27; ext.h = 12.6; ext.cy = 5.6; ext.cx = 0.6;
  const y0 = 0.5, st = 0.16, sh = 0.11, top = y0 + NL * st, xt = x0 - 0.6;
  // requête
  const REQ = S.req || ['Que', ' fait', ' la', ' photo', 'synthèse', ' ?'];
  const xr = x0 - 11.2, req = REQ.map((w, i) => { const m = keep(sizedBox(g, { pal: 'base', tone: 'hi', name: `Requête : « ${w.trim()} »` }), 'base');
    const yy = y0 + 4.6 - i * 0.62; setBox(m, xr - 0.75, xr + 0.75, yy, yy + 0.44, -0.2, 0.2); label('t2', w.replace(/ /g, '␣'), () => V(xr, yy + 0.22, 0.3)); return m; });
  label('t1', 'requête', () => V(xr, y0 + 5.55, 0));
  // tokeniseur (pas de poids)
  const xk = x0 - 8.3, tok = keep(sizedBox(g, { pal: 'base', tone: 'hi', name: 'Tokeniseur : découpe le texte en morceaux (tokens) et donne leur numéro' }), 'base');
  setBox(tok, xk - 0.7, xk + 0.7, y0 + 1.4, y0 + 3.6, -0.5, 0.5);
  label('t1', 'tokeniseur', () => V(xk, y0 + 4.0, 0)); label('t2', 'texte → numéros', () => V(xk, y0 + 1.0, 0));
  // embeddings (8 bits)
  const xe = x0 - 5.5, emb = keep(sizedBox(g, { pal: 'blue', tone: 'hi', name: 'Embeddings (8 bits) : une ligne de nombres par token, ~250 000 lignes' }), 'blue');
  setBox(emb, xe - 0.55, xe + 0.55, y0, y0 + 5.2, -0.9, 0.9);
  label('t1', 'embeddings', () => V(xe, y0 + 5.6, 0)); label('t2', '~250 000 tokens · 8 bits', () => V(xe, y0 - 0.4, 0));
  // les 64 couches : mélange (GDN ou attention) + normalisation + MLP
  const L = [];
  for (let i = 0; i < NL; i++) {
    const a = y0 + i * st, b = a + sh, A = isAttn(i), n = i + 1, o = { a, b, parts: [] };
    if (A) {
      const m = keep(sizedBox(g, { pal: 'paper', tone: 'hi', name: `Couche ${n} · attention complète (4 bits) : regarde précisément chaque mot précédent` }), 'paper');
      setBox(m, xt - 3.0, xt - 0.95, a, b, -0.7, 0.7); o.parts.push(m);
    } else {
      const c = keep(sizedBox(g, { pal: 'red', tone: 'hi', name: `Couche ${n} · GDN : noyau de convolution et état récurrent (16 bits)` }), 'red');
      const m = keep(sizedBox(g, { pal: 'paper', tone: 'hi', name: `Couche ${n} · Gated DeltaNet (4 bits) : un résumé compact mis à jour à chaque mot` }), 'paper');
      const p = keep(sizedBox(g, { pal: 'blue', tone: 'hi', name: `Couche ${n} · projection de sortie du GDN (8 bits)` }), 'blue');
      setBox(c, xt - 2.6, xt - 2.38, a, b, -0.4, 0.4); setBox(m, xt - 2.38, xt - 1.25, a, b, -0.4, 0.4); setBox(p, xt - 1.25, xt - 0.95, a, b, -0.4, 0.4); o.parts.push(c, m, p);
    }
    const nm = keep(sizedBox(g, { pal: 'red', tone: 'hi', name: `Couche ${n} · normalisation (16 bits)` }), 'red'); setBox(nm, xt - 0.9, xt - 0.78, a, b, -0.45, 0.45);
    const ml = keep(sizedBox(g, { pal: mlpPal(i), tone: 'hi', name: `Couche ${n} · MLP, la « réflexion » (${BITS[mlpPal(i)]})` }), mlpPal(i)); setBox(ml, xt - 0.72, xt + 2.2, a, b, -0.55, 0.55);
    o.parts.push(nm, ml); L.push(o);
  }
  const fn = keep(sizedBox(g, { pal: 'red', tone: 'hi', name: 'Normalisation finale (16 bits)' }), 'red'); setBox(fn, xt - 3.0, xt + 2.2, top + 0.05, top + 0.16, -0.6, 0.6);
  label('t1', '64 couches', () => V(xt - 0.4, top + 0.6, 0));
  label('t2', 'mélange', () => V(xt - 1.95, y0 - 0.35, 0)); label('t2', 'réflexion (MLP)', () => V(xt + 0.75, y0 - 0.35, 0));
  label('lgl blue', '← MLP 57–64 : 8 bits', () => V(xt + 2.4, y0 + 60 * st, 0));
  label('mark', 'attention ×16 : les blocs larges', () => V(xt - 6.4, y0 + 56 * st, 0)); label('mark', 'GDN ×48 : les autres', () => V(xt - 6.4, y0 + 52 * st, 0));
  // tête de sortie (8 bits), échantillonnage, tête MTP (16 bits)
  const xh = x0 + 5.0, head = keep(sizedBox(g, { pal: 'blue', tone: 'hi', name: 'Tête de sortie (8 bits) : un score pour chacun des ~250 000 tokens' }), 'blue');
  setBox(head, xh - 0.55, xh + 0.55, top - 4.2, top, -0.9, 0.9);
  label('t1', 'tête de sortie', () => V(xh, top + 0.4, 0)); label('t2', '8 bits', () => V(xh, top - 4.6, 0));
  const mtp = keep(sizedBox(g, { pal: 'red', tone: 'hi', name: 'Tête MTP (16 bits) : devine les 3 mots suivants d’avance' }), 'red');
  setBox(mtp, xh - 0.55, xh + 0.55, y0 + 0.3, y0 + 2.4, -0.7, 0.7);
  label('t1', 'tête MTP', () => V(xh, y0 + 2.8, 0)); label('t2', '16 bits', () => V(xh, y0 - 0.05, 0));
  const xs = x0 + 8.0, P = [0.46, 0.21, 0.13, 0.08, 0.05], bars = P.map((p, i) => keep(sizedBox(g, { pal: 'base', tone: 'hi', name: `Probabilité du candidat n° ${i + 1}` }), 'base'));
  label('t1', 'échantillonnage', () => V(xs + 0.4, top + 0.4, 0)); label('t2', 'on tire un token', () => V(xs + 0.4, top - 4.1, 0));
  const drafts = [0, 1, 2].map(i => keep(sizedBox(g, { pal: 'base', tone: 'hi', name: `Mot deviné d’avance n° ${i + 1}` }), 'base'));
  label('t2', '3 mots devinés', () => V(xs + 0.4, y0 + 2.8, 0)); label('mark', '', () => V(xs + 0.4, y0 - 0.05, 0), () => info.acc);
  // réponse
  const ANS = S.ans || ['La', ' plante', ' capte', ' la', ' lumière', ' et'], xa = x0 + 11.6;
  const ans = ANS.map((w, i) => { const m = keep(sizedBox(g, { pal: 'base', tone: 'hi', name: `Réponse : « ${w.trim()} »` }), 'base'); const yy = y0 + 4.6 - i * 0.62;
    setBox(m, xa - 0.75, xa + 0.75, yy, yy + 0.44, -0.2, 0.2); label('t2', '', () => V(xa, yy + 0.22, 0.3), () => (m.visible ? w.replace(/ /g, '␣') : '')); return m; });
  label('t1', 'réponse', () => V(xa, y0 + 5.55, 0)); label('mark', '↺ chaque token produit repart en entrée', () => V(x0 + 1, top + 1.25, 0));
  legend(g, label, x0 - 12, top + 0.9);
  // trajet
  const cur = ball(g, 'ink', 'Le token en cours de calcul', 0.17);
  const W = [V(xr + 0.8, y0 + 2.6, 0.9), V(xk, y0 + 2.5, 0.9), V(xe, y0 + 2.5, 1.1), V(xt - 3.2, y0, 0.9), V(xt - 3.2, top, 0.9), V(xh, top - 0.5, 1.1), V(xs, top - 2, 0.9), V(xa, y0 + 2.6, 0.9)];
  [[0, 1], [1, 2], [2, 3]].forEach(([a, b]) => rodTo(rod(g, { r: 0.02, pal: 'dark', name: 'Flux' }), V(W[a].x + 0.9, W[a].y, 0), V(W[b].x - 0.8, W[b].y, 0)));
  rodTo(rod(g, { r: 0.02, pal: 'dark', name: 'Flux' }), V(xt + 2.3, top - 0.3, 0), V(xh - 0.65, top - 0.3, 0));
  rodTo(rod(g, { r: 0.02, pal: 'dark', name: 'Flux' }), V(xt + 2.3, top - 0.6, 0), V(xh - 0.65, y0 + 1.4, 0));
  const info = { phase: '', acc: '' };
  const PER = 12;
  return {
    update: t => {
      const c = Math.floor(t / PER), u = t % PER;
      // remise des couleurs de base
      for (const o of L) for (const m of o.parts) setPal(m, m.userData.home0);
      [emb, head, mtp, tok].forEach(m => setPal(m, m.userData.home0));
      req.forEach((m, i) => setPal(m, u < 1.8 && Math.floor(u / 0.3) === i ? 'dark' : 'base'));
      let p;
      if (u < 1.8) { p = lerpV(W[0], W[1], u / 1.8); info.phase = 'tokenisation'; if (u > 1.2) setPal(tok, 'dark'); }
      else if (u < 2.6) { p = lerpV(W[1], W[2], (u - 1.8) / 0.8); info.phase = 'embeddings'; setPal(emb, 'dark'); }
      else if (u < 3.0) { p = lerpV(W[2], W[3], (u - 2.6) / 0.4); info.phase = 'vers les 64 couches'; }
      else if (u < 8.0) { const k = Math.min(NL - 1, Math.floor((u - 3.0) / 5.0 * NL)); p = lerpV(W[3], W[4], (u - 3.0) / 5.0);
        for (const m of L[k].parts) setPal(m, 'ink');
        info.phase = `couche ${k + 1}/64 · ${isAttn(k) ? 'attention' : 'GDN'} + MLP`; }
      else if (u < 9.0) { p = lerpV(W[4], W[5], (u - 8.0) / 0.6); setPal(head, 'dark'); info.phase = 'tête de sortie'; }
      else if (u < 10.0) { p = lerpV(W[5], W[6], (u - 9.0) / 0.5); info.phase = 'échantillonnage'; }
      else { p = lerpV(W[6], W[7], (u - 10.0) / 1.2); setPal(mtp, u < 11 ? 'dark' : 'red'); info.phase = 'tête MTP : 3 mots d’avance'; }
      cur.position.copy(p);
      // échantillonnage
      const g1 = u < 8.6 ? 0 : Math.min(1, (u - 8.6) / 0.8), chosen = c % 3 === 2 ? 1 : 0;
      bars.forEach((m, i) => { const h = 3.6 * P[i] * g1 / P[0]; setBox(m, xs - 0.6 + i * 0.42, xs - 0.6 + i * 0.42 + 0.32, top - 3.9, top - 3.9 + h, -0.2, 0.2); setPal(m, u > 9.5 && i === chosen ? 'ink' : 'base'); });
      // tête MTP : 3 propositions ; ~85 % acceptées (ici : la 3e est refusée un tour sur trois)
      const nd = u < 10.2 ? 0 : Math.min(3, Math.floor((u - 10.2) / 0.3) + 1), rej = c % 3 === 1 ? 2 : 9;
      drafts.forEach((m, i) => { m.visible = i < nd; setBox(m, xs - 0.2, xs + 1.0, y0 + 0.4 + (2 - i) * 0.6, y0 + 0.4 + (2 - i) * 0.6 + 0.42, -0.2, 0.2); m.visible = i < nd;
        setPal(m, u > 11.3 ? (i >= rej ? 'dark' : 'blue') : 'base'); });
      info.acc = u > 11.3 ? (rej < 3 ? '2 acceptés, 1 refusé' : '3 acceptés') : '';
      const na = (c % (ANS.length + 1)) + (u > 10 ? 1 : 0);
      ans.forEach((m, i) => { m.visible = i < na; setPal(m, i === na - 1 && u > 10 ? 'dark' : 'base'); });
    },
    info: () => info.phase,
  };
}

// ------------------------------------------------------------------ quantifier un groupe de 32 poids, et le bilan
export function qwenquant({ g, S, x0, label: label0, ext }) {
  const label = slim(label0);
  ext.w = 22; ext.h = 8.5; ext.cy = 3.4; ext.cx = 0.5;
  const N = 32, bw = 0.22, gx = x0 - 9.6, mid = 3.4, A = 2.6;
  const w = Array.from({ length: N }, (_, i) => (rnd(i + 3) * 2 - 1) * (0.35 + 0.65 * rnd(i + 40)));
  const mx = Math.max(...w.map(Math.abs)), q = w.map(v => Math.max(-8, Math.min(7, Math.round(v / mx * 7))) * mx / 7);
  const bars = w.map((v, i) => keep(sizedBox(g, { pal: 'paper', tone: 'hi', name: `Poids n° ${i + 1} du groupe` }), 'paper'));
  for (let k = -8; k <= 7; k++) { const y = mid + A * k / 7; lines(g, [gx - 0.2, y, -0.1, gx + N * (bw + 0.05), y, -0.1], '#c9c9c4'); }
  lines(g, [gx - 0.2, mid, 0.2, gx + N * (bw + 0.05), mid, 0.2], '#57575a');
  const sc = keep(sizedBox(g, { pal: 'red', tone: 'hi', name: 'L’échelle du groupe (un nombre précis, partagé par les 32 poids)' }), 'red');
  setBox(sc, gx + N * (bw + 0.05) + 0.3, gx + N * (bw + 0.05) + 0.9, mid - 0.3, mid + 0.3, -0.3, 0.3);
  label('t1', 'un groupe de 32 poids', () => V(gx + 4, mid + A + 1.0, 0));
  label('t2', '16 niveaux possibles = 4 bits par poids', () => V(gx + 4, mid - A - 0.7, 0));
  label('t2', '× échelle', () => V(gx + N * (bw + 0.05) + 0.6, mid + 0.65, 0));
  label('mark', '', () => V(gx + 4, mid + A + 0.5, 0), () => (st.qz > 0.5 ? 'arrondi au niveau le plus proche' : 'valeurs d’origine (16 bits)'));
  // le bilan : tailles et fidélité
  const xb = x0 + 2.6, H = 6.4 / 54, y0 = 0.6, B = [['red', 54, 'original 16 bits', '~54 Go', 'référence'], ['blue', 20, 'dynamique', '~20 Go', 'KL 0,022'], ['paper', 15, '4 bits partout', '~15 Go', 'KL ~0,037']];
  const sb = B.map(([p, go, n], i) => { const m = keep(sizedBox(g, { pal: p, tone: 'hi', name: `${n} : ${go} Go` }), p); return m; });
  B.forEach(([p, go, n, s, k], i) => { const x = xb + i * 3.0; label('t1', s, () => V(x, y0 + go * H * st.gr + 0.35, 0)); label('t2', n, () => V(x, y0 - 0.35, 0)); label('mark', k, () => V(x, y0 - 0.8, 0)); if (i === 1) label('mark', '96 % même mot', () => V(x, y0 - 1.25, 0)); });
  const st = { qz: 0, gr: 1 };
  return {
    update: t => {
      const u = t % 10; st.qz = u < 2 ? 0 : u < 3 ? u - 2 : u < 7 ? 1 : u < 8 ? 8 - u : 0;
      bars.forEach((m, i) => { const v = w[i] + (q[i] - w[i]) * st.qz, x = gx + i * (bw + 0.05), y = mid + A * v / mx;
        setBox(m, x, x + bw, Math.min(mid, y), Math.max(mid, y) + 0.001, -0.15, 0.15); setPal(m, st.qz > 0.5 ? 'dark' : 'paper'); });
      st.gr = Math.min(1, 0.2 + t / 2);
      sb.forEach((m, i) => { const x = xb + i * 3.0; setBox(m, x - 0.6, x + 0.6, y0, y0 + B[i][1] * H * st.gr, -0.6, 0.6); });
    },
    info: () => (st.qz > 0.5 ? '4 bits : 16 niveaux × une échelle' : 'poids d’origine'),
  };
}

// ------------------------------------------------------------------ le serveur local sur le Mac
export function qwenmac({ g, S, x0, label: label0, ext }) {
  const label = slim(label0);
  ext.w = 22; ext.h = 8.6; ext.cy = 3.5; ext.cx = 0.2;
  const y0 = 0.6, H = 6.0, k = H / 28, xm = x0 - 8;
  // la mémoire autorisée : 28 Go
  lines(g, [xm - 0.8, y0, 0.7, xm + 0.8, y0, 0.7, xm + 0.8, y0, 0.7, xm + 0.8, y0 + H, 0.7, xm + 0.8, y0 + H, 0.7, xm - 0.8, y0 + H, 0.7, xm - 0.8, y0 + H, 0.7, xm - 0.8, y0, 0.7], '#57575a');
  const seg = [['blue', 20, 'Poids du modèle (~20 Go)'], ['dark', 3, 'Banque de sessions (3 Go au plus)'], ['paper', 5, 'Le reste (~5 Go) : cache KV de la conversation en cours et calculs']];
  let yy = y0; seg.forEach(([p, go, n]) => { const m = keep(sizedBox(g, { pal: p, tone: 'hi', name: n }), p); setBox(m, xm - 0.75, xm + 0.75, yy, yy + go * k, -0.6, 0.6); const c = yy + go * k / 2; label('lgl' + (p === 'blue' ? ' blue' : ' grey'), n.split(' (')[0].replace('Le reste', 'cache KV + calculs'), () => V(xm + 1.0, c, 0)); yy += go * k; });
  label('t1', '--memory-limit 28G', () => V(xm, y0 + H + 0.45, 0)); label('t2', 'mémoire unifiée du Mac', () => V(xm, y0 - 0.4, 0));
  // la fenêtre de contexte : 65 536 tokens = 64 tranches de 1 024
  const xc = x0 - 1.2, cs = 0.52, chunks = [];
  for (let i = 0; i < 64; i++) { const r = Math.floor(i / 8), c = i % 8, m = keep(sizedBox(g, { pal: 'base', tone: 'hi', name: `Tranche n° ${i + 1} de 1 024 tokens` }), 'base');
    setBox(m, xc + c * cs, xc + c * cs + cs - 0.08, y0 + (7 - r) * cs + 0.6, y0 + (7 - r) * cs + 0.6 + cs - 0.08, -0.15, 0.15); chunks.push(m); }
  label('t1', '--context-window 65536', () => V(xc + 2.05, y0 + 8 * cs + 1.0, 0)); label('t2', '64 tranches de 1 024 tokens (--prefill-chunk-tokens)', () => V(xc + 2.05, y0 + 0.2, 0));
  label('mark', '', () => V(xc + 2.05, y0 - 0.35, 0), () => st.txt);
  // le cache : 16 couches d'attention (pages en 8 bits, qui s'allongent) ; 48 couches GDN (un état de taille fixe)
  const xk = x0 + 4.6, kv = Array.from({ length: 16 }, (_, i) => keep(sizedBox(g, { pal: 'blue', tone: 'hi', name: `Cache KV de la couche d’attention n° ${i + 1} : des pages en 8 bits (--paged-kv-quantization q8)` }), 'blue'));
  const gd = Array.from({ length: 12 }, (_, i) => keep(sizedBox(g, { pal: 'red', tone: 'hi', name: 'État récurrent des couches GDN : taille fixe, quelle que soit la longueur' }), 'red'));
  gd.forEach((m, i) => setBox(m, xk + 4.0, xk + 4.6, y0 + 0.4 + i * 0.36, y0 + 0.4 + i * 0.36 + 0.26, -0.3, 0.3));
  label('t1', 'cache KV paginé (q8)', () => V(xk + 1.4, y0 + 6.6, 0)); label('t2', '16 couches d’attention', () => V(xk + 1.4, y0 + 0.05, 0));
  label('t1', 'état GDN', () => V(xk + 4.3, y0 + 5.1, 0)); label('t2', '48 couches · fixe', () => V(xk + 4.3, y0 + 0.05, 0));
  const st = { txt: '' };
  return {
    update: t => {
      const u = t % 14, n = u < 10 ? Math.floor(u / 10 * 64) : 64;
      chunks.forEach((m, i) => setPal(m, i < n ? 'blue' : i === n ? 'ink' : 'base'));
      st.txt = u < 10 ? `préremplissage : tranche ${n + 1} / 64` : 'contexte plein : 65 536 tokens';
      kv.forEach((m, i) => { const l = 0.1 + 3.4 * Math.min(1, u / 10); const pg = Math.ceil(l / 0.4) * 0.4; setBox(m, xk, xk + Math.min(3.5, pg), y0 + 0.4 + i * 0.36, y0 + 0.4 + i * 0.36 + 0.26, -0.3, 0.3); });
    },
    info: () => st.txt,
  };
}
