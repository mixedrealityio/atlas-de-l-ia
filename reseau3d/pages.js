// Chapitre 14 : Voir un réseau de neurones en 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 14 · tous niveaux",
  "title": "Voir un réseau de neurones en 3D",
  "sub": "rendre visible ce qui n’est que nombres",
  "body": "\n    <p class=\"lede\">Un modèle d’IA est un tableau de nombres et des opérations. Rien de cela ne se voit : c’est pourquoi on a inventé des manières de le <b>dessiner en 3D</b>.</p>\n    <p>L’idée n’est pas neuve. <b>TensorSpace</b>, un cadre libre né en Chine vers 2018 sur Three.js et TensorFlow.js, affiche dans un navigateur chaque couche d’un réseau convolutif sous forme d’une pile de cartes, que l’on peut tourner et inspecter. Cet atlas reprend ce principe pour tous les types de modèles.</p>\n    <p>Ce chapitre montre quatre vues : le <b>réseau de neurones</b>, les <b>cartes</b> d’un réseau convolutif, le <b>bloc de nombres</b> d’un transformeur et le <b>paysage de la perte</b>.</p>",
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
  "lit": "mlp",
  "look": {},
  "scene": "mlp",
  "fig": ""
 },
 {
  "kicker": "14.1",
  "title": "Neurones et couches",
  "sub": "la brique de base",
  "body": "\n    <p class=\"lede\">Un <b>neurone</b> artificiel fait deux choses : une somme pondérée de ses entrées, puis une fonction non linéaire (par exemple « ne garder que le positif »).</p>\n    <div class=\"eq\"><i>y</i> = σ( Σ <i>w</i><sub>i</sub> <i>x</i><sub>i</sub> + <i>b</i> )</div>\n    <p>Les <i>w</i> sont les <b>poids</b>, <i>b</i> le <b>biais</b> : ce sont les paramètres appris. Une <b>couche</b> regroupe des neurones qui lisent les mêmes entrées ; le réseau en enchaîne plusieurs.</p>\n    <p>La figure compte : 4 × 6 + 6 × 6 + 6 × 3 = 78 poids, plus 15 biais, soit 93 paramètres. La couleur indique la couche active à l’instant : l’information avance couche après couche.</p>",
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
  "lit": "mlp",
  "look": {},
  "scene": "mlp",
  "fig": ""
 },
 {
  "kicker": "14.2",
  "title": "Les cartes d’un réseau convolutif",
  "sub": "la vue TensorSpace",
  "body": "\n    <p class=\"lede\">Dans un réseau convolutif (chapitre 8), chaque couche produit plusieurs <b>cartes</b> de la taille de l’image ou de moins.</p>\n    <p>Ici : une image de 28 × 28 pixels, six filtres 5 × 5 (six cartes de 24 × 24), une réduction à 12 × 12, seize filtres (cartes de 8 × 8), une nouvelle réduction à 4 × 4, puis une couche dense de 120 valeurs et dix scores de sortie. C’est l’architecture d’un lecteur de chiffres manuscrits, de la famille de LeNet.</p>\n    <p>La largeur de chaque pile se lit d’un coup d’œil : <b>moins de pixels, plus de cartes</b>.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 14,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "cnn",
  "look": {},
  "scene": "cnn",
  "fig": ""
 },
 {
  "kicker": "14.3",
  "title": "Le bloc de nombres du transformeur",
  "sub": "ce qui circule vraiment",
  "body": "\n    <p class=\"lede\">Un transformeur n’a pas de neurones visibles : il manipule un <b>bloc de nombres</b> à trois axes.</p>\n    <ul class=\"rules\">\n      <li>un axe pour les <b>jetons</b> de la séquence ;</li>\n      <li>un axe pour les <b>dimensions</b> du modèle (4 096 pour un modèle de 7 milliards) ;</li>\n      <li>un axe pour les <b>couches</b> : chacune lit la tranche précédente et en écrit une nouvelle.</li>\n    </ul>\n    <p>Ces nombres sont les <b>activations</b>. Pour 1 000 jetons, 4 096 dimensions et 32 couches : environ 131 millions de valeurs, stockées pendant l’entraînement pour la rétropropagation, d’où l’importance du recalcul d’activations (chapitre 6).</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 28,
   "el": 16,
   "dist": 26,
   "auto": true
  },
  "lit": "bloc",
  "look": {},
  "scene": "bloc",
  "fig": ""
 },
 {
  "kicker": "14.4",
  "title": "Le paysage de la perte",
  "sub": "descendre en 3D",
  "body": "\n    <p class=\"lede\">Imaginez que chaque réglage possible des poids soit un point d’un terrain, et que la <b>perte</b> en soit l’altitude. Entraîner un modèle, c’est <b>descendre</b> vers une vallée.</p>\n    <p>La figure en montre trois descentes depuis le même point, avec trois taux d’apprentissage : trop faible (la boule avance à peine), adapté (elle rejoint la vallée), trop fort (elle rebondit d’un versant à l’autre). Le chapitre 6 en donne les ordres de grandeur.</p>\n    <p>Attention : ce terrain a <b>deux dimensions</b>. Celui d’un vrai modèle en a des milliards, et ses « pièges » sont surtout des cols plutôt que des cuvettes, ce qui facilite la descente.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 20,
   "el": 24,
   "dist": 26,
   "auto": true
  },
  "lit": "paysage",
  "look": {},
  "scene": "paysage",
  "fig": ""
 },
 {
  "kicker": "14.5",
  "title": "Voir soi-même",
  "sub": "outils pour inspecter un modèle",
  "body": "\n    <p class=\"lede\">Plusieurs outils permettent d’explorer un modèle sans écrire de visualisation.</p>\n    <ul class=\"rules\">\n      <li><b>TensorSpace</b> : réseaux convolutifs en 3D dans le navigateur (projet libre, plus ancien, centré sur les CNN).</li>\n      <li><b>Netron</b> : affiche le graphe d’opérations d’un fichier de modèle (ONNX et autres).</li>\n      <li><b>TensorBoard</b> : suit les courbes de perte, les distributions de poids et les graphes pendant l’entraînement.</li>\n      <li><b>Projecteurs de plongements</b> : placent des vecteurs en 2D ou 3D pour voir quels mots se regroupent (chapitre 1).</li>\n      <li><b>Visualisations pédagogiques de transformeurs</b> : certaines déroulent en 3D, couche par couche, le calcul d’un petit modèle de langage.</li>\n    </ul>",
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
  "lit": "mlp",
  "look": {},
  "scene": "mlp",
  "fig": ""
 }
];
export const PLATES = {
  mlp: { text: "Chaque neurone calcule une somme pondérée de ses entrées puis applique une fonction non linéaire. Chaque trait est un poids. Ce petit réseau a 78 poids et 15 biais : 93 paramètres. Un grand modèle de langage en a des dizaines de milliards, mais l’ossature est la même.", facts: () => [["poids", "4×6 + 6×6 + 6×3 = 78"], ["biais", "6 + 6 + 3 = 15"], ["total", "93 paramètres"]] },
  cnn: { text: "C’est la manière de TensorSpace : chaque couche d’un réseau convolutif est une pile de cartes. La largeur diminue (mise en commun) pendant que le nombre de cartes augmente, jusqu’aux couches denses et à la sortie.", facts: () => [["cartes", "une par filtre"], ["réduction", "la taille baisse, la profondeur monte"]] },
  bloc: { text: "Pendant un calcul, un transformeur manipule un bloc de nombres : une ligne par jeton, une colonne par dimension, et une tranche par couche. Chaque couche transforme la tranche précédente. Avec 1 000 jetons, 4 096 dimensions et 32 couches, cela fait 131 millions de valeurs.", facts: () => [["exemple réel", "1 000 × 4 096 × 32 ≈ 1,3 × 10⁸ valeurs"], ["activations", "ce qu’on garde pour la rétropropagation"]] },
  paysage: { text: "La perte est une altitude : chaque position est un réglage possible des poids. Entraîner, c’est descendre. Avec un taux trop faible, on avance à peine ; avec un taux adapté, on rejoint la vallée ; avec un taux trop fort, on rebondit d’un versant à l’autre. Ici 2 poids : un vrai modèle en a des milliards.", facts: () => [["dimensions", "2 ici ; des milliards en vrai"], ["méthode", "descente de gradient"]] }
};
