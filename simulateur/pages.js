// Chapitre 38 : Simulateur de LLM local (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 38 · simulateur",
  "title": "Simulateur de LLM local",
  "sub": "réglez, regardez, comparez",
  "body": "\n    <p class=\"lede\">Un grand modèle en 3D : une requête entre, le préremplissage traverse les couches, puis chaque jeton de la réponse est calculé un par un.</p>\n    <p>Les réglages des pages suivantes agissent tous sur la même figure. Ou essayez un scénario :</p>\n    <div class=\"simbtns\"><button type=\"button\" data-simset=\"{&quot;model&quot;: &quot;m8&quot;, &quot;wq&quot;: &quot;q4&quot;, &quot;kq&quot;: &quot;kv16&quot;, &quot;ctx&quot;: 4096, &quot;gen&quot;: 256, &quot;batch&quot;: 1, &quot;hw&quot;: &quot;g4090&quot;, &quot;ngpu&quot;: 1}\">8 Md Q4 sur RTX 4090</button><button type=\"button\" data-simset=\"{&quot;model&quot;: &quot;m70&quot;, &quot;wq&quot;: &quot;q4&quot;, &quot;kq&quot;: &quot;kv16&quot;, &quot;ctx&quot;: 4096, &quot;gen&quot;: 256, &quot;batch&quot;: 1, &quot;hw&quot;: &quot;g4090&quot;, &quot;ngpu&quot;: 1}\">70 Md Q4 sur RTX 4090 (déborde en RAM)</button><button type=\"button\" data-simset=\"{&quot;model&quot;: &quot;m70&quot;, &quot;wq&quot;: &quot;q4&quot;, &quot;kq&quot;: &quot;kv16&quot;, &quot;ctx&quot;: 8192, &quot;gen&quot;: 256, &quot;batch&quot;: 1, &quot;hw&quot;: &quot;m4max&quot;, &quot;ngpu&quot;: 1}\">70 Md Q4 sur Mac M4 Max</button><button type=\"button\" data-simset=\"{&quot;model&quot;: &quot;m32&quot;, &quot;wq&quot;: &quot;q4&quot;, &quot;kq&quot;: &quot;kv8&quot;, &quot;ctx&quot;: 32768, &quot;gen&quot;: 256, &quot;batch&quot;: 1, &quot;hw&quot;: &quot;g3090&quot;, &quot;ngpu&quot;: 1}\">32 Md Q4, contexte 32 k, RTX 3090</button><button type=\"button\" data-simset=\"{&quot;model&quot;: &quot;q235&quot;, &quot;wq&quot;: &quot;q4&quot;, &quot;kq&quot;: &quot;kv16&quot;, &quot;ctx&quot;: 8192, &quot;gen&quot;: 256, &quot;batch&quot;: 1, &quot;hw&quot;: &quot;m3u&quot;, &quot;ngpu&quot;: 1}\">235 Md en experts, Q4, Mac M3 Ultra</button><button type=\"button\" data-simset=\"{&quot;model&quot;: &quot;m70&quot;, &quot;wq&quot;: &quot;fp16&quot;, &quot;kq&quot;: &quot;kv16&quot;, &quot;ctx&quot;: 2048, &quot;gen&quot;: 256, &quot;batch&quot;: 16, &quot;hw&quot;: &quot;h100&quot;, &quot;ngpu&quot;: 2}\">70 Md FP16, 2× H100, 16 requêtes</button><button type=\"button\" data-simset=\"{&quot;model&quot;: &quot;m8&quot;, &quot;wq&quot;: &quot;q4&quot;, &quot;kq&quot;: &quot;kv16&quot;, &quot;ctx&quot;: 4096, &quot;gen&quot;: 256, &quot;batch&quot;: 1, &quot;hw&quot;: &quot;cpu&quot;, &quot;ngpu&quot;: 1}\">8 Md Q4 sur PC sans GPU</button></div>\n    <div class=\"simout\"><span>génération</span><span data-out=\"tpsSeq\"></span><span>mémoire</span><span data-out=\"fit\"></span><span>premier jeton</span><span data-out=\"ttft\"></span></div>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.1",
  "title": "Le modèle",
  "sub": "taille, couches, têtes KV",
  "body": "\n    <p class=\"lede\">La taille fixe la mémoire à lire à chaque jeton ; les couches et les têtes KV fixent la taille du cache.</p>\n    <div class=\"simctl\"><label>modèle<select data-sim=\"model\"><option value=\"m8\">8 Md (dense)</option><option value=\"m14\">14 Md (dense)</option><option value=\"m32\">32 Md (dense)</option><option value=\"m70\">70 Md (dense)</option><option value=\"mx\">47 Md en 8 experts (13 Md actifs)</option><option value=\"q235\">235 Md en experts (22 Md actifs)</option><option value=\"m405\">405 Md (dense)</option></select></label></div><div class=\"simout\"><span>paramètres</span><span data-out=\"params\"></span><span>profondeur</span><span data-out=\"layers\"></span><span>cache KV</span><span data-out=\"heads\"></span><span>poids</span><span data-out=\"W\"></span></div>\n    <p>Pour un modèle <b>à experts</b>, seuls quelques experts travaillent par jeton : la lecture est plus faible, mais toute la mémoire reste nécessaire (chapitre 27).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.2",
  "title": "La quantification",
  "sub": "moins de bits, moins de mémoire",
  "body": "\n    <p class=\"lede\">Chaque poids passe de 16 bits à 4 ou 5 : le modèle est environ 3,3 fois plus petit, donc se lit environ 3,3 fois plus vite.</p>\n    <div class=\"simctl\"><label>poids<select data-sim=\"wq\"><option value=\"fp16\">FP16 / BF16 (16 bits)</option><option value=\"q8\">Q8_0 (≈ 8,5 bits)</option><option value=\"q6\">Q6_K (≈ 6,6)</option><option value=\"q5\">Q5_K_M (≈ 5,7)</option><option value=\"q4\">Q4_K_M (≈ 4,85)</option><option value=\"q3\">Q3_K_M (≈ 3,9)</option><option value=\"q2\">Q2_K (≈ 3,35)</option></select></label><label>cache KV<select data-sim=\"kq\"><option value=\"kv16\">FP16</option><option value=\"kv8\">Q8</option><option value=\"kv4\">Q4</option></select></label></div><div class=\"simout\"><span>poids</span><span data-out=\"W\"></span><span>bits</span><span data-out=\"bits\"></span><span>cache KV</span><span data-out=\"kv\"></span><span>mémoire</span><span data-out=\"memuse\"></span></div>\n    <p>Perte de qualité : faible à Q8, modérée à Q4, nette sous Q3 selon le modèle et la tâche. Quantifier le cache KV libère de la mémoire pour du contexte, avec un petit coût en précision.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.3",
  "title": "La requête",
  "sub": "contexte, longueur de réponse, requêtes parallèles",
  "body": "\n    <p class=\"lede\">Chaque jeton de contexte laisse en mémoire 2 × couches × têtes KV × dimension × bits d’octets.</p>\n    <div class=\"simctl\"><label>contexte : <b data-out=\"ctx\"></b><input type=\"range\" data-sim=\"ctx\" min=\"7\" max=\"17\" step=\"0.5\" data-log=\"1\"></label><label>réponse : <b data-out=\"gen\"></b><input type=\"range\" data-sim=\"gen\" min=\"16\" max=\"2048\" step=\"16\"></label><label>requêtes simultanées : <b data-out=\"batch\"></b><input type=\"range\" data-sim=\"batch\" min=\"1\" max=\"64\" step=\"1\"></label></div><div class=\"simout\"><span>cache KV</span><span data-out=\"kv\"></span><span>contexte max</span><span data-out=\"ctxMax\"></span></div>\n    <p>Doubler le contexte ou les requêtes double le cache KV.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.4",
  "title": "Le matériel",
  "sub": "mémoire, bande passante, calcul",
  "body": "\n    <p class=\"lede\">Trois nombres décident : la <b>mémoire</b> (ce qui tient), la <b>bande passante</b> (la vitesse de génération), les <b>TFLOPS</b> (le préremplissage).</p>\n    <div class=\"simctl\"><label>matériel<select data-sim=\"hw\"><option value=\"cpu\">PC sans GPU (DDR5)</option><option value=\"g3060\">RTX 3060 12 Go</option><option value=\"g3090\">RTX 3090 24 Go</option><option value=\"g4090\">RTX 4090 24 Go</option><option value=\"g5090\">RTX 5090 32 Go</option><option value=\"m4max\">Mac M4 Max 128 Go (≈ 96 utilisables)</option><option value=\"m3u\">Mac M3 Ultra 512 Go (≈ 448)</option><option value=\"halo\">PC à mémoire unifiée 128 Go (≈ 96)</option><option value=\"spark\">Mini-station 128 Go unifiée</option><option value=\"a100\">A100 80 Go</option><option value=\"h100\">H100 80 Go</option><option value=\"h200\">H200 141 Go</option><option value=\"custom\">personnalisé</option></select></label><label>mémoire GPU : <b data-out=\"mem\"></b><input type=\"range\" data-sim=\"mem\" min=\"0\" max=\"512\" step=\"4\"></label><label>bande passante : <b data-out=\"bw\"></b><input type=\"range\" data-sim=\"bw\" min=\"0\" max=\"5000\" step=\"10\"></label><label>calcul : <b data-out=\"tf\"></b><input type=\"range\" data-sim=\"tf\" min=\"1\" max=\"1000\" step=\"1\"></label></div><div class=\"simout\"><span>mémoire</span><span data-out=\"memuse\"></span><span>ajustement</span><span data-out=\"fit\"></span></div>\n    <p>Valeurs de fiches techniques arrondies : à vérifier pour votre machine.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.5",
  "title": "Déborder en RAM, multiplier les GPU",
  "sub": "le précipice de la mémoire",
  "body": "\n    <p class=\"lede\">Si le modèle ne tient pas en mémoire GPU, une partie reste en RAM, bien plus lente : le débit s’effondre.</p>\n    <div class=\"simctl\"><label>nombre de GPU : <b data-out=\"ngpu\"></b><input type=\"range\" data-sim=\"ngpu\" min=\"1\" max=\"8\" step=\"1\"></label><label>RAM système : <b data-out=\"ram\"></b><input type=\"range\" data-sim=\"ram\" min=\"0\" max=\"512\" step=\"8\"></label><label>bande passante RAM : <b data-out=\"rambw\"></b><input type=\"range\" data-sim=\"rambw\" min=\"10\" max=\"200\" step=\"5\"></label></div><div class=\"simout\"><span>génération</span><span data-out=\"tpsSeq\"></span><span>mémoire</span><span data-out=\"fit\"></span></div>\n    <p>Plusieurs GPU additionnent mémoire et bande passante (≈ 7 % de perte par GPU ajouté).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.6",
  "title": "Le débit en génération",
  "sub": "octets lus ÷ bande passante",
  "body": "\n    <div class=\"eq\">jetons/s ≈ bande passante × efficacité ÷ octets lus par jeton</div>\n    <p>Chaque jeton relit les poids actifs et le cache KV. Avec plusieurs requêtes, les poids sont lus une fois pour le lot : le débit total monte jusqu’à ce que le calcul limite.</p>\n    <div class=\"simctl\"><label>requêtes simultanées : <b data-out=\"batch\"></b><input type=\"range\" data-sim=\"batch\" min=\"1\" max=\"64\" step=\"1\"></label><label>efficacité du moteur : <b data-out=\"eff\"></b><input type=\"range\" data-sim=\"eff\" min=\"40\" max=\"95\" step=\"5\"></label></div><div class=\"simout\"><span>par requête</span><span data-out=\"tpsSeq\"></span><span>total</span><span data-out=\"tpsTot\"></span><span>limite</span><span data-out=\"bound\"></span></div>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.7",
  "title": "Le temps avant le premier jeton",
  "sub": "le préremplissage",
  "body": "\n    <p class=\"lede\">Le prompt est traité d’un coup : c’est limité par le <b>calcul</b>, pas par la mémoire.</p>\n    <div class=\"simctl\"><label>contexte : <b data-out=\"ctx\"></b><input type=\"range\" data-sim=\"ctx\" min=\"7\" max=\"17\" step=\"0.5\" data-log=\"1\"></label></div><div class=\"simout\"><span>premier jeton</span><span data-out=\"ttft\"></span><span>préremplissage</span><span data-out=\"pre\"></span><span>réponse complète</span><span data-out=\"latency\"></span></div>\n    <p>L’attention croît comme le carré du contexte (chapitre 27).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "38.8",
  "title": "Servir à l’échelle",
  "sub": "lot continu, cache paginé, décodage spéculatif",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Lot continu</b> : ajouter et retirer des requêtes à chaque pas pour garder le GPU plein.</li>\n      <li><b>PagedAttention</b> : le cache KV en blocs, comme la mémoire virtuelle, pour limiter le gaspillage.</li>\n      <li><b>Préfixe partagé</b> : ne pas recalculer un prompt système commun.</li>\n      <li><b>Décodage spéculatif</b> : un petit modèle propose plusieurs jetons, le grand les valide d’un coup.</li>\n    </ul>\n    <p>Ils améliorent le débit réel au-delà de ce que le simulateur affiche.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "serving",
  "look": {},
  "scene": "serving",
  "fig": ""
 },
 {
  "kicker": "38.9",
  "title": "Limites du simulateur",
  "sub": "ce qui n’est pas modélisé",
  "body": "\n    <ul class=\"rules\">\n      <li>Un modèle <b>roofline</b> simple : en vrai, ±30 % selon moteur, noyaux et version.</li>\n      <li>Non pris en compte : températures, bridage, FlashAttention précise, placement des experts, latences réseau.</li>\n      <li>Les modèles et valeurs matérielles sont des <b>approximations</b> des fiches publiques.</li>\n      <li>La <b>qualité</b> des réponses n’est pas simulée : seul le débit l’est.</li>\n    </ul>\n    <p>Pour mesurer pour de vrai : <code>llama-bench</code> ou le banc de votre moteur d’inférence.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 }
];
export const PLATES = {
  sim: { text: "Le modèle est une pile de tranches de couches : leur largeur croît avec la taille des poids en Go (la quantification l’amincit), bleu = en mémoire GPU, clair = déporté en RAM. Les barres rouges à droite de chaque tranche sont le cache KV, qui grandit pendant la génération. La mémoire GPU et la RAM sont les deux barres de droite ; les deux dernières barres comparent le temps de lecture mémoire et le temps de calcul pour un jeton : la plus haute est le facteur limitant. Valeurs estimées par un modèle simple (roofline) à partir de fiches techniques arrondies : ordres de grandeur.", facts: () => [["limite en génération", "bande passante mémoire"], ["limite au préremplissage", "calcul"], ["précision", "ordre de grandeur, ±30 %"]] },
  serving: { text: "Un moteur de service ne traite pas les requêtes une à une : il regroupe en continu celles en cours (lot continu), range le cache KV en blocs pour limiter le gaspillage (PagedAttention), réutilise un préfixe de prompt commun et peut accélérer la génération avec un petit modèle qui propose des jetons validés par le grand. Ces optimisations ne sont pas simulées ici.", facts: () => [["lot continu", "pas de file d’attente figée"], ["spéculatif", "gain typique 1,5 à 3 fois"], ["non simulé", "ici : un modèle simple"]] }
};
