// Chapitre 8 : La vision par ordinateur (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 8 · tous niveaux",
  "title": "La vision par ordinateur",
  "sub": "des grilles de nombres",
  "body": "\n    <p class=\"lede\">Pour une machine, une image est une <b>grille de nombres</b> : un pixel est une intensité (ou trois, pour le rouge, le vert et le bleu). La vision par ordinateur consiste à en tirer du sens.</p>\n    <p>Reconnaître un chat dans une photo exige d’ignorer l’éclairage, la position et la taille, et de repérer ce qui compte. Ce chapitre suit l’histoire de ces méthodes : les <b>filtres convolutifs</b>, les <b>réseaux convolutifs</b>, les <b>transformeurs de vision</b>, la <b>détection</b>, l’association <b>image-texte</b>, et la <b>génération</b> d’images par diffusion.</p>",
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
  "lit": "conv",
  "look": {},
  "scene": "conv",
  "fig": ""
 },
 {
  "kicker": "8.1",
  "title": "La convolution",
  "sub": "un détecteur de motif qui glisse",
  "body": "\n    <p class=\"lede\">Un <b>noyau</b> est une petite grille de poids (3 × 3 ici). On le place sur l’image, on multiplie chaque poids par le pixel en dessous, on additionne.</p>\n    <p>Un noyau qui compare un pixel à ses voisins met en évidence les <b>contours</b> ; un noyau de moyenne <b>floute</b>. Les <b>mêmes poids</b> servent partout : le motif est reconnu où qu’il soit, et le nombre de paramètres reste minuscule.</p>\n    <p>Dans un réseau, les noyaux ne sont pas écrits à la main : ils sont <b>appris</b>. Chaque noyau produit une carte ; une couche en calcule des dizaines à la fois.</p>",
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
  "lit": "conv",
  "look": {},
  "scene": "conv",
  "fig": ""
 },
 {
  "kicker": "8.2",
  "title": "Les réseaux convolutifs",
  "sub": "empiler les filtres",
  "body": "\n    <p class=\"lede\">Un <b>réseau convolutif</b> (CNN) enchaîne des couches de convolution, entrecoupées de réductions de taille et de non-linéarités.</p>\n    <p>Les premières couches voient de petits détails (bords, couleurs). À chaque couche, le <b>champ visuel</b> grandit : les cartes suivantes combinent les motifs précédents en coins, textures, parties d’objets. À la fin, des couches denses donnent un score par classe.</p>\n    <p>Ces réseaux ont dominé la vision de 2012 (AlexNet) à 2020 environ. Les <b>connexions résiduelles</b> (ResNet) ont permis de les rendre très profonds.</p>",
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
  "lit": "cnn",
  "look": {},
  "scene": "cnn",
  "fig": ""
 },
 {
  "kicker": "8.3",
  "title": "Les transformeurs de vision",
  "sub": "une image est une suite de jetons",
  "body": "\n    <p class=\"lede\">Plutôt que des filtres, le <b>ViT</b> traite l’image comme un texte : il la <b>découpe en patchs</b>.</p>\n    <p>Chaque patch (par exemple 16 × 16 pixels) est aplati et transformé en un vecteur ; on y ajoute sa position ; la suite de vecteurs entre dans un transformeur identique à celui du chapitre 2. Une image de 224 × 224 donne 196 jetons.</p>\n    <p>Avec assez de données, ce modèle égale ou dépasse les CNN, et il s’intègre naturellement aux modèles de langage : les patchs deviennent des jetons parmi d’autres.</p>",
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
  "lit": "vit",
  "look": {},
  "scene": "vit",
  "fig": ""
 },
 {
  "kicker": "8.4",
  "title": "Détecter et segmenter",
  "sub": "où sont les objets ?",
  "body": "\n    <p class=\"lede\">Classer une image ne dit pas où se trouve l’objet. La <b>détection</b> prédit des <b>cadres</b>, avec une classe et un score ; la <b>segmentation</b> étiquette chaque pixel.</p>\n    <ul class=\"rules\">\n      <li>Un détecteur propose des centaines de cadres ; on garde les meilleurs et on supprime les doublons (<b>suppression des non-maxima</b>).</li>\n      <li>L’accord entre un cadre et la vérité se mesure par l’<b>IoU</b> : aire commune divisée par aire réunie.</li>\n      <li>Les modèles de <b>segmentation « sur demande »</b> découpent n’importe quel objet à partir d’un clic ou d’un mot.</li>\n    </ul>",
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
  "lit": "detect",
  "look": {},
  "scene": "detect",
  "fig": ""
 },
 {
  "kicker": "8.5",
  "title": "Image et texte ensemble",
  "sub": "CLIP et les modèles vision-langage",
  "body": "\n    <p class=\"lede\">Deux encodeurs, l’un pour les images et l’autre pour les textes, sont entraînés pour que <b>chaque image soit proche de sa légende</b> dans un espace commun.</p>\n    <p>On peut ensuite classer une image <b>sans exemple d’entraînement</b> : on compare l’image à des phrases (« une photo de chat », « une photo de chien ») et on prend la plus proche.</p>\n    <p>Les <b>modèles vision-langage</b> vont plus loin : un encodeur d’images transforme la photo en jetons, qui sont donnés à un modèle de langage avec la question. Il répond alors en texte à propos de l’image.</p>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 2,
   "el": 4,
   "dist": 26,
   "auto": true
  },
  "lit": "clip",
  "look": {},
  "scene": "clip",
  "fig": ""
 },
 {
  "kicker": "8.6",
  "title": "Générer des images",
  "sub": "le principe de la diffusion",
  "body": "\n    <p class=\"lede\">Pour apprendre à <b>fabriquer</b> une image, on apprend d’abord à la <b>détruire</b> : on y ajoute du bruit, par petites étapes, jusqu’à ce qu’il n’en reste plus rien.</p>\n    <p>On entraîne un réseau à prédire le bruit ajouté, à chaque niveau de bruit. Pour générer, on part d’un bruit pur et on <b>retire le bruit étape par étape</b>, en s’appuyant sur un texte qui oriente le résultat (le <b>guidage</b>).</p>\n    <p>Les modèles récents travaillent dans un espace compressé (latent) plutôt que sur les pixels, ce qui les rend bien plus rapides.</p>",
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
  "lit": "diffusion",
  "look": {},
  "scene": "diffusion",
  "fig": ""
 }
];
export const PLATES = {
  conv: { text: "Un noyau 3 × 3 glisse sur l’image. À chaque position, on multiplie ses neuf valeurs par les neuf pixels en dessous, on additionne : le résultat est fort là où l’image ressemble au motif du noyau. Ici, le noyau détecte les contours.", facts: () => [["noyau", "3 × 3 = 9 poids partagés"], ["sortie", "une carte de caractéristiques"], ["appris", "les valeurs du noyau"]] },
  cnn: { text: "Un réseau convolutif empile des couches de convolution : les premières détectent des bords et des textures, les suivantes combinent ces détails en formes puis en parties d’objets. Une dernière couche donne un score par classe.", facts: () => [["profondeur typique", "dizaines de couches"], ["partage des poids", "même filtre partout"]] },
  vit: { text: "Le transformeur de vision (ViT) découpe l’image en patchs carrés, transforme chaque patch en un vecteur, et traite cette suite comme les jetons d’un texte : même architecture, mêmes couches d’attention.", facts: () => [["patch courant", "16 × 16 pixels"], ["image 224 × 224", "196 jetons"], ["position", "ajoutée à chaque patch"]] },
  detect: { text: "Un détecteur prédit des cadres, une classe et un score de confiance pour chacun. Plusieurs cadres se recouvrent sur le même objet : on garde le meilleur et on supprime les doublons (suppression des non-maxima). On mesure l’accord d’un cadre avec la vérité par l’intersection sur l’union (IoU).", facts: () => [["IoU", "aire commune / aire réunie"], ["seuil courant", "0,5"], ["modèles", "YOLO, DETR…"]] },
  clip: { text: "Un encodeur d’images et un encodeur de texte sont entraînés ensemble : chaque photo doit être proche de sa légende et loin des autres. On peut alors chercher une image par une phrase, ou classer une image sans l’avoir vue pendant l’entraînement.", facts: () => [["méthode", "perte contrastive (type CLIP)"], ["usage", "recherche, classification sans exemples"]] },
  diffusion: { text: "On apprend à un réseau à retirer un peu de bruit d’une image bruitée. Pour générer, on part de bruit pur et on débruite étape par étape, en guidant avec un texte : l’image émerge progressivement.", facts: () => [["entraînement", "prédire le bruit ajouté"], ["génération", "20 à 50 étapes"], ["guidage", "le texte oriente le débruitage"]] }
};
