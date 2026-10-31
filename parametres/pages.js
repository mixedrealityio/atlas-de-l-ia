// Chapitre 16 : Le tableau de bord des paramètres (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 16 · intermédiaire",
  "title": "Le tableau de bord des paramètres",
  "sub": "tout ce qui se règle, et ce que ça change",
  "body": "\n    <p class=\"lede\">Un modèle à poids ouverts s’accompagne d’un tableau de bord de réglages. Mieux vaut savoir ce que chacun fait que les essayer au hasard.</p>\n    <p>On peut les ranger en quatre familles : ceux qui règlent l’<b>entraînement</b> (chapitre 6), ceux qui règlent l’<b>échantillonnage</b> (chapitre 4), ceux qui règlent la <b>mémoire</b> (quantification, longueur de contexte, taille de lot), et ceux du <b>serveur</b> (répartition sur les GPU, file d’attente).</p>\n    <p>Ce chapitre traite des deux dernières, qui décident de ce qu’on peut faire tourner chez soi.</p>",
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
  "lit": "panneau",
  "look": {},
  "scene": "panneau",
  "fig": ""
 },
 {
  "kicker": "16.1",
  "title": "Quantifier les poids",
  "sub": "moins de bits par nombre",
  "body": "\n    <p class=\"lede\">Un poids stocké sur 16 bits peut l’être sur 8, 5 ou 4 bits : le fichier rétrécit presque proportionnellement.</p>\n    <div class=\"eq\">taille ≈ paramètres × bits par poids ÷ 8</div>\n    <p>Exemple : 8 milliards × 4,9 ÷ 8 ≈ 4,9 Go en <b>Q4_K_M</b> (format de llama.cpp, le plus répandu), contre 16 Go en 16 bits. Les formats « K » mélangent plusieurs précisions, avec plus de bits pour les parties sensibles.</p>\n    <p>La perte de qualité est faible vers 5 à 8 bits, mesurable vers 4 bits, et nette en dessous de 3. Les sources divergent sur les chiffres exacts : testez sur vos propres tâches.</p>",
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
  "lit": "quant",
  "look": {},
  "scene": "quant",
  "fig": ""
 },
 {
  "kicker": "16.2",
  "title": "Le contexte et le cache KV",
  "sub": "la mémoire qui grandit",
  "body": "\n    <p class=\"lede\">Les poids sont fixes ; le <b>cache KV</b> grandit avec chaque jeton lu ou écrit.</p>\n    <div class=\"eq\">cache = 2 × couches × têtes KV × dim. de tête × jetons × lots × octets</div>\n    <p>Pour notre modèle de 8 milliards (32 couches, 8 têtes KV de 128), cela fait 128 Ko par jeton : 4 Go pour 32 000 jetons, 16 Go pour 128 000. Avec plusieurs utilisateurs en parallèle, tout se multiplie.</p>\n    <p>On le réduit en <b>quantifiant le cache</b> (8 bits au lieu de 16), en choisissant des modèles à peu de têtes KV (GQA), ou en limitant le contexte au nécessaire.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "ctx",
  "look": {},
  "scene": "ctx",
  "fig": ""
 },
 {
  "kicker": "16.3",
  "title": "Régler un serveur",
  "sub": "vLLM, llama.cpp, Ollama",
  "body": "\n    <p class=\"lede\">Chaque moteur expose ses boutons. Les plus utiles :</p>\n    <table class=\"data\">\n      <tr><th>réglage</th><th>effet</th></tr>\n      <tr><td>vLLM · <i>gpu_memory_utilization</i></td><td>part de la mémoire du GPU utilisée (0,85 à 0,9)</td></tr>\n      <tr><td>vLLM · <i>max_model_len</i></td><td>contexte maximal, donc taille du cache</td></tr>\n      <tr><td>vLLM · <i>max_num_seqs</i>, <i>tensor_parallel_size</i></td><td>requêtes simultanées ; nombre de GPU</td></tr>\n      <tr><td>llama.cpp · <i>-ngl</i></td><td>couches placées sur le GPU, le reste en RAM</td></tr>\n    </table>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "serveur",
  "look": {},
  "scene": "serveur",
  "fig": ""
 },
 {
  "kicker": "16.4",
  "title": "Ce qui change quoi",
  "sub": "mémoire, vitesse, qualité",
  "body": "\n    <p class=\"lede\">Chaque réglage déplace trois curseurs à la fois.</p>\n    <table class=\"data\">\n      <tr><th>on augmente…</th><th>mémoire</th><th>vitesse</th><th>qualité</th></tr>\n      <tr><td>les bits par poids</td><td>plus</td><td>plus lent</td><td>meilleure</td></tr>\n      <tr><td>la longueur de contexte</td><td>plus (cache)</td><td>plus lent</td><td>plus de contexte utile</td></tr>\n      <tr><td>le nombre de requêtes simultanées</td><td>plus (cache)</td><td>meilleur débit total</td><td>inchangée</td></tr>\n      <tr><td>la température</td><td>—</td><td>—</td><td>plus variée, moins fiable</td></tr>\n      <tr><td>le taux d’apprentissage (affinage)</td><td>—</td><td>—</td><td>trop fort : oubli</td></tr>\n    </table>\n    <p>Règle pratique : fixer d’abord le modèle et la quantification qui <b>tiennent</b>, puis le contexte nécessaire, puis régler la vitesse.</p>",
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
  "lit": "panneau",
  "look": {},
  "scene": "panneau",
  "fig": ""
 }
];
export const PLATES = {
  panneau: { text: "Les réglages d’un modèle ouvert tiennent en quatre familles. Les deux premières changent le comportement (chapitres 4 et 6). Les deux dernières changent ce qui tient dans la machine et la vitesse : c’est l’objet de ce chapitre.", facts: () => [["comportement", "entraînement, échantillonnage"], ["ressources", "mémoire, serveur"]] },
  quant: { text: "Les poids d’un modèle de 8 milliards pèsent 16 Go en 16 bits. Les formats de quantification de llama.cpp (Q8, Q5, Q4) les réduisent à 8,5, 5,7 et 4,9 Go environ, au prix d’une perte de qualité d’autant plus petite que le nombre de bits est élevé.", facts: () => [["Q4_K_M", "≈ 4,9 bits par poids"], ["Q5_K_M", "≈ 5,7 bits par poids"], ["Q8_0", "≈ 8,5 bits par poids"]] },
  ctx: { text: "Le cache KV grossit avec la longueur du contexte : 128 Ko par jeton pour ce modèle, soit 1 Go pour 8 000 jetons, 4 Go pour 32 000 et 16 Go pour 128 000. Un grand contexte peut peser plus que les poids quantifiés.", facts: () => [["formule", "2 × couches × têtes KV × dim × octets"], ["par jeton", "128 Ko ici"], ["×  utilisateurs", "le cache se multiplie"]] },
  serveur: { text: "Un serveur comme vLLM réserve une fraction de la mémoire du GPU : il charge les poids, garde un peu pour le contexte CUDA, et consacre le reste au cache KV. Monter la fraction de 0,85 à 0,95 agrandit le cache, donc le nombre de requêtes simultanées, mais réduit la marge.", facts: () => [["valeur courante", "0,85 à 0,90"], ["à éviter", "1,0 : aucune marge"]] }
};
