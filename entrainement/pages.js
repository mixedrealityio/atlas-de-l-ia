// Chapitre 6 : Entraîner son modèle (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 6 · débutant à avancé",
  "title": "Entraîner son modèle",
  "sub": "la boucle, de A à Z",
  "body": "\n    <p class=\"lede\">Entraîner un modèle, c’est répéter une petite boucle des millions de fois : <b>prédire, mesurer l’erreur, corriger</b>.</p>\n    <p>La mesure d’erreur est l’<b>entropie croisée</b> : −log <i>p</i>, où <i>p</i> est la probabilité que le modèle donnait au vrai jeton suivant. La <b>rétropropagation</b> calcule, pour chacun des milliards de poids, de combien l’erreur changerait s’il bougeait un peu : c’est le <b>gradient</b>. L’optimiseur déplace alors chaque poids dans le sens qui réduit l’erreur.</p>\n    ",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "6.1",
  "title": "Optimiseur et taux d’apprentissage",
  "sub": "AdamW, échauffement, cosinus",
  "body": "\n    <p class=\"lede\">Le <b>taux d’apprentissage</b> est le réglage le plus sensible de tout l’entraînement.</p>\n    <p>L’optimiseur standard est <b>AdamW</b> : il garde, pour chaque poids, une moyenne des gradients et de leurs carrés, ce qui adapte le pas à chaque poids, et applique une décroissance de poids séparée. Réglages usuels : β = (0,9 ; 0,95), décroissance de poids 0,1 en pré-entraînement.</p>\n    <ul class=\"rules\">\n      <li><b>Taux</b> : de l’ordre de 10⁻⁴ pour pré-entraîner, 10⁻⁵ pour affiner tout le modèle, 10⁻⁴ pour LoRA. Plus le modèle est gros, plus le taux optimal baisse.</li>\n      <li><b>Taille de lot</b> : en jetons par étape (de l’ordre de millions en pré-entraînement). Un lot plus gros donne un gradient moins bruité.</li>\n      <li><b>Écrêtage du gradient</b> à 1,0 : évite qu’un lot aberrant ne casse l’entraînement.</li>\n    </ul>",
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
  "lit": "perte",
  "look": {},
  "scene": "perte",
  "fig": ""
 },
 {
  "kicker": "6.2",
  "title": "Le calendrier du taux",
  "sub": "échauffer puis décroître",
  "body": "\n    <p class=\"lede\">Un taux constant n’est ni stable au début ni précis à la fin.</p>\n    <p>On monte donc linéairement pendant l’<b>échauffement</b> (quelques centaines à quelques milliers d’étapes), puis on décroît en <b>cosinus</b> jusqu’à environ un dixième du pic. Cela stabilise le début, quand les gradients sont encore chaotiques, et affine la fin.</p>\n    <p>Quand une courbe de perte explose soudain (un « pic »), on suspecte d’abord un taux trop fort, un lot corrompu, ou une précision numérique insuffisante.</p>",
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
  "lit": "planning",
  "look": {},
  "scene": "planning",
  "fig": ""
 },
 {
  "kicker": "6.3",
  "title": "La mémoire d’entraînement",
  "sub": "16 octets par paramètre",
  "body": "\n    <p class=\"lede\">En inférence, il suffit de garder les poids. En entraînement, il faut aussi <b>tout ce dont l’optimiseur a besoin</b>.</p>\n    <p>En précision mixte avec AdamW : poids en bf16 (2 octets), gradients (2), copie maîtresse en fp32 (4) et deux états Adam (8), soit <b>environ 16 octets par paramètre</b>. Pour 7 milliards de paramètres : 112 Go, plus les <b>activations</b>, qui croissent avec la taille du lot et la longueur de séquence.</p>\n    <p>On les réduit avec le <b>recalcul d’activations</b> (on en oublie et on les recalcule : plus de calcul, moins de mémoire), des lots plus petits avec <b>accumulation de gradients</b>, ou en changeant de méthode : LoRA et QLoRA (page 6.5).</p>",
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
  "lit": "memoire",
  "look": {},
  "scene": "memoire",
  "fig": ""
 },
 {
  "kicker": "6.4",
  "title": "Plusieurs GPU",
  "sub": "découper les données, les matrices, les couches, les états",
  "body": "\n    <p class=\"lede\">Aucun GPU ne contient seul un grand modèle en entraînement : on répartit le travail.</p>\n    <ul class=\"rules\">\n      <li><b>Parallélisme de données</b> : chaque GPU a une copie du modèle et traite un lot différent ; les gradients sont moyennés.</li>\n      <li><b>Parallélisme de tenseurs</b> : on découpe les grandes matrices entre GPU d’une même machine.</li>\n      <li><b>Parallélisme de pipeline</b> : chaque GPU porte quelques couches.</li>\n      <li><b>ZeRO et FSDP</b> : on répartit aussi les gradients et les états de l’optimiseur entre les GPU, ce qui divise la mémoire par le nombre de GPU.</li>\n      <li><b>Experts</b> : dans un mélange d’experts, chaque GPU porte quelques experts.</li>\n    </ul>\n    <p>Le coût réel vient de la <b>communication</b> entre GPU : un entraînement bien conçu l’empile derrière le calcul.</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "6.5",
  "title": "Affiner un modèle ouvert",
  "sub": "LoRA et QLoRA",
  "body": "\n    <p class=\"lede\">Réentraîner entièrement un modèle de 7 milliards de paramètres demande 112 Go. <b>LoRA</b> évite cela en n’entraînant que de petites matrices ajoutées aux grandes.</p>\n    <p>Au lieu de modifier la matrice <i>W</i>, on apprend deux petites matrices <i>B</i> et <i>A</i> dont le produit est la correction. Au départ <i>B</i> vaut zéro : le modèle n’a pas bougé.</p>\n    <p><b>QLoRA</b> garde en plus les poids gelés en 4 bits, ce qui permet d’affiner un modèle de 7 à 14 milliards sur une carte de 16 à 24 Go. Quelques milliers d’exemples <b>de bonne qualité</b> valent mieux que des centaines de milliers d’exemples médiocres.</p>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "lora",
  "look": {},
  "scene": "lora",
  "fig": ""
 },
 {
  "kicker": "6.6",
  "title": "Les réglages de LoRA",
  "sub": "ordres de grandeur",
  "body": "\n    <table class=\"data\">\n      <tr><th>réglage</th><th>ordre de grandeur</th><th>effet</th></tr>\n      <tr><td>rang <i>r</i></td><td>8 à 64</td><td>capacité de l’adaptateur</td></tr>\n      <tr><td>α (alpha)</td><td>≈ <i>r</i> à 2<i>r</i></td><td>échelle de la correction (α/<i>r</i>)</td></tr>\n      <tr><td>taux</td><td>10⁻⁴ à 2 × 10⁻⁴</td><td>trop fort : oubli ; trop faible : rien ne change</td></tr>\n      <tr><td>époques</td><td>1 à 3</td><td>plus : surapprentissage</td></tr>\n      <tr><td>lot effectif</td><td>16 à 128</td><td>stabilité (accumulation de gradients)</td></tr>\n    </table>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "lora",
  "look": {},
  "scene": "lora",
  "fig": ""
 },
 {
  "kicker": "6.7",
  "title": "Ce qui peut mal tourner",
  "sub": "surapprentissage, oubli, évaluation",
  "body": "\n    <p class=\"lede\">Un affinage réussi sur les exemples vus peut dégrader tout le reste.</p>\n    <ul class=\"rules\">\n      <li><b>Surapprentissage</b> : la perte d’entraînement baisse, celle de validation remonte (figure). Gardez un jeu de validation, jamais utilisé pour entraîner.</li>\n      <li><b>Oubli catastrophique</b> : affiner sur un domaine étroit abîme les autres compétences. Mélangez des données générales, baissez le taux, ou limitez le rang.</li>\n      <li><b>Format de conversation</b> : un modèle affiné avec un gabarit de dialogue différent de celui prévu répond mal. Respectez le gabarit exact du modèle.</li>\n      <li><b>Évaluation</b> : comparez avant et après sur des cas que vous n’avez pas utilisés pour entraîner, et relisez des sorties.</li>\n    </ul>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "surapp",
  "look": {},
  "scene": "surapp",
  "fig": ""
 }
];
export const PLATES = {
  boucle: { text: "À chaque étape : on lit un lot de textes, on calcule les prédictions (passe avant), on mesure l’erreur (la perte), on calcule comment chaque poids a contribué à l’erreur (rétropropagation), et l’optimiseur ajuste les poids.", facts: () => [["perte", "entropie croisée"], ["gradient", "direction qui augmente l’erreur"], ["étape", "poids −= taux × direction"]] },
  perte: { text: "Le taux d’apprentissage règle la taille du pas. Trop faible : la perte baisse à peine. Trop fort : elle oscille ou diverge. Adapté : elle baisse vite puis se stabilise. Courbes illustratives.", facts: () => [["pré-entraînement", "≈ 10⁻⁴ à 3 × 10⁻⁴"], ["affinage complet", "≈ 10⁻⁵"], ["LoRA", "≈ 10⁻⁴"]] },
  planning: { text: "On ne garde pas le taux constant : on le monte lentement au début (échauffement, pour stabiliser les premières étapes) puis on le fait redescendre en cosinus vers une petite valeur, ce qui améliore la perte finale.", facts: () => [["échauffement", "≈ 0,1 % à 2 % des étapes"], ["décroissance", "cosinus vers ≈ 10 % du pic"]] },
  memoire: { text: "L’entraînement complet d’un modèle en précision mixte avec AdamW demande environ 16 octets par paramètre : 112 Go pour 7 milliards, avant même les activations. LoRA ne met à jour que de petits adaptateurs ; QLoRA garde en plus les poids gelés en 4 bits.", facts: () => [["poids bf16", "2 octets"], ["gradients", "2 octets"], ["poids maîtres fp32", "4 octets"], ["états Adam (m, v)", "8 octets"]] },
  lora: { text: "Au lieu de modifier la grande matrice W, LoRA ajoute le produit de deux petites matrices B (d×r) et A (r×d). Seules A et B sont entraînées : 2·d·r nombres par matrice au lieu de d². Les adaptateurs se rangent dans un petit fichier et peuvent être fusionnés avec les poids.", facts: () => [["paramètres entraînés", "2 · d · r par matrice"], ["rang r courant", "8 à 64"], ["initialisation", "B = 0 : au départ, rien ne change"]] },
  surapp: { text: "La perte d’entraînement continue de baisser, mais celle de validation (des textes jamais vus) remonte à partir d’un certain point : le modèle apprend les exemples par cœur. On arrête avant, ou on réduit le nombre d’époques.", facts: () => [["à surveiller", "perte de validation"], ["remèdes", "moins d’époques, plus de données, régularisation"]] }
};
