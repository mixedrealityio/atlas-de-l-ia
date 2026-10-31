// Chapitre 17 : Dans un GPU (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 17 · intermédiaire",
  "title": "Dans un GPU",
  "sub": "la machine qui calcule le modèle",
  "body": "\n    <p class=\"lede\">Un GPU n’est pas un « gros processeur » : c’est une machine à faire des <b>produits de matrices en parallèle</b>, avec une mémoire très rapide autour.</p>\n    <p>La puce contient des dizaines à des centaines de <b>multiprocesseurs</b> (SM), chacun avec ses cœurs et ses <b>cœurs tenseur</b>, spécialisés dans la multiplication-accumulation de petites matrices. Tout autour, des piles de mémoire <b>HBM</b> collées à la puce, avec un bus très large.</p>\n    <p>Les chapitres précédents ont montré qu’un modèle, c’est surtout cela : des produits de matrices. Ce chapitre explique pourquoi le matériel qui les fait décide de la vitesse.</p>",
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
  "lit": "puce",
  "look": {},
  "scene": "puce",
  "fig": ""
 },
 {
  "kicker": "17.1",
  "title": "Calcul et mémoire",
  "sub": "deux ressources distinctes",
  "body": "\n    <p class=\"lede\">Un GPU a deux limites indépendantes : <b>combien d’opérations il fait par seconde</b>, et <b>combien d’octets il lit par seconde</b>.</p>\n    <table class=\"data\">\n      <tr><th>GPU</th><th>calcul BF16</th><th>mémoire</th><th>capacité</th></tr>\n      <tr><td>A100</td><td>≈ 312 TFLOPs</td><td>≈ 2 To/s</td><td>80 Go</td></tr>\n      <tr><td>H100 SXM</td><td>≈ 989 TFLOPs</td><td>≈ 3,35 To/s</td><td>80 Go</td></tr>\n      <tr><td>RTX 4090</td><td>≈ 10² TFLOPs</td><td>≈ 1 To/s</td><td>24 Go</td></tr>\n    </table>\n    <p>Valeurs des constructeurs, en ordres de grandeur (dense, sans « sparsité »).</p>",
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
  "lit": "puce",
  "look": {},
  "scene": "puce",
  "fig": ""
 },
 {
  "kicker": "17.2",
  "title": "Le mur de la mémoire",
  "sub": "pourquoi le décodage est lent",
  "body": "\n    <p class=\"lede\">Pour produire un jeton, le modèle lit <b>chaque poids une fois</b> et fait environ deux opérations dessus : une multiplication, une addition.</p>\n    <p>Cela fait de l’ordre d’une opération par octet lu, très loin du seuil où le calcul devient la limite (près de 300 sur un H100). Le GPU attend donc la mémoire, comme le montre la pente de la figure.</p>\n    <div class=\"eq\">jetons par seconde ≲ bande passante ÷ taille des poids</div>\n    <p>Exemple : 3 350 Go/s ÷ 14 Go ≈ 240 jetons par seconde pour un modèle de 7 milliards en 16 bits, sur un H100, <b>pour une seule requête</b>. Servir plusieurs requêtes à la fois réutilise les poids lus et fait monter l’intensité.</p>",
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
  "lit": "roofline",
  "look": {},
  "scene": "roofline",
  "fig": ""
 },
 {
  "kicker": "17.3",
  "title": "Les précisions",
  "sub": "moins de bits, plus de vitesse",
  "body": "\n    <p class=\"lede\">Chaque nombre peut être stocké sur 32, 16, 8 ou 4 bits.</p>\n    <p>Diviser les bits par deux divise par deux la mémoire occupée <b>et</b> la quantité à lire, donc <b>double à peu près la vitesse de décodage</b>. Les GPU récents ont même des unités dédiées aux formats courts (FP8, FP4).</p>\n    <p>L’entraînement exige plus de précision pour accumuler de petites corrections (BF16 pour les poids, FP32 pour les cumuls). L’inférence supporte mieux les formats courts, surtout avec des méthodes de quantification qui protègent les poids les plus sensibles.</p>",
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
  "lit": "prec",
  "look": {},
  "scene": "prec",
  "fig": ""
 },
 {
  "kicker": "17.4",
  "title": "L’échelle des débits",
  "sub": "chaque niveau, dix fois plus rapide",
  "body": "\n    <p class=\"lede\">Entre le disque et le cœur de calcul, la donnée traverse plusieurs niveaux, chacun environ <b>dix fois plus rapide</b> que le précédent.</p>\n    <p>Un SSD donne quelques Go/s, un bus PCIe 4.0 ×16 une trentaine, la mémoire d’un PC une centaine, celle d’un Mac haut de gamme quelques centaines, celle d’un GPU de bureau environ un To/s, celle d’un GPU de centre de données plus de trois.</p>\n    <p>La conséquence pratique : un modèle qui <b>tient entièrement dans la mémoire du GPU</b> va vite ; dès qu’une partie est ailleurs, elle est lue par un chemin 10 à 100 fois plus lent.</p>",
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
  "lit": "debits",
  "look": {},
  "scene": "debits",
  "fig": ""
 },
 {
  "kicker": "17.5",
  "title": "Au-delà d’un seul fournisseur",
  "sub": "le paysage du matériel d’IA",
  "body": "\n    <p class=\"lede\">Un GPU de centre de données n’est pas un produit unique. Plusieurs fabricants proposent des accélérateurs d’IA, avec des architectures voisines.</p>\n    <p>En Chine, des acteurs comme Huawei (série Ascend), Cambricon ou Moore Threads développent leurs propres puces. La difficulté tient moins à la puce qu’au <b>logiciel</b> : pilotes, bibliothèques de calcul, compilateurs, outils d’entraînement. C’est ce socle qui décide qu’un modèle tourne facilement sur une puce, ou non.</p>\n    <p>Les grands principes de ce chapitre (calcul, mémoire, débits, précisions) s’appliquent à tous.</p>",
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
  "lit": "puce",
  "look": {},
  "scene": "puce",
  "fig": ""
 }
];
export const PLATES = {
  puce: { text: "Un GPU contient plusieurs dizaines à plus d’une centaine de multiprocesseurs (SM), chacun avec des cœurs de calcul et des cœurs tenseur dédiés aux produits de matrices. Autour de la puce, des piles de mémoire HBM fournissent des milliers de gigaoctets par seconde.", facts: () => [["SM", "plus de 100 sur un H100"], ["HBM", "mémoire empilée, très large"], ["cœurs tenseur", "produits de matrices"]] },
  roofline: { text: "Pour chaque octet lu en mémoire, on effectue un certain nombre d’opérations : c’est l’intensité arithmétique. Si elle est faible, la mémoire limite (montée en pente) ; si elle est élevée, c’est le calcul (plateau). Le décodage d’un modèle de langage, à une requête, est tout à gauche.", facts: () => [["décodage, 1 requête", "≈ 1 opération par octet"], ["prefill, gros lots", "des centaines"], ["conséquence", "la mémoire limite le décodage"]] },
  prec: { text: "Moins de bits, c’est moins de mémoire et moins de données à lire, donc un modèle plus rapide. L’entraînement utilise BF16 (et de plus en plus FP8), l’inférence descend souvent à 8 ou 4 bits.", facts: () => [["entraînement", "BF16, parfois FP8"], ["inférence", "16, 8 ou 4 bits"], ["coût", "perte de précision"]] },
  debits: { text: "Chaque niveau de mémoire est environ dix fois plus rapide que le précédent. C’est la raison de tous les compromis : plus un poids est loin du calcul, plus il coûte cher à lire. Débits théoriques en gigaoctets par seconde, ordres de grandeur.", facts: () => [["SSD → GPU", "quelques Go/s"], ["HBM d’un H100", "3 350 Go/s"], ["rapport", "≈ 500 ×"]] }
};
