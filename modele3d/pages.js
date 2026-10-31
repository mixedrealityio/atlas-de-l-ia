// Chapitre 15 : L’IA et la modélisation 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 15 · tous niveaux",
  "title": "L’IA et la modélisation 3D",
  "sub": "reconstruire et fabriquer des objets",
  "body": "\n    <p class=\"lede\">Modéliser en 3D, c’est décrire la forme et l’apparence d’un objet. Longtemps l’affaire d’artistes et de capteurs, c’est aujourd’hui aussi celle de modèles d’IA.</p>\n    <p>Deux problèmes : la <b>reconstruction</b> (à partir de photos d’un objet réel, retrouver sa forme) et la <b>génération</b> (inventer un objet à partir d’un texte ou d’une image). Ils reposent sur les mêmes idées que le reste de cet atlas : une fonction apprise, une comparaison, une descente de gradient.</p>",
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
  "lit": "reps",
  "look": {},
  "scene": "reps",
  "fig": ""
 },
 {
  "kicker": "15.1",
  "title": "Représenter un objet",
  "sub": "points, voxels, maillages, champs",
  "body": "\n    <p class=\"lede\">Le choix de la <b>représentation</b> décide de ce qu’on peut faire.</p>\n    <ul class=\"rules\">\n      <li><b>Maillage</b> : sommets et triangles. Le format des jeux, de la CAO et de l’impression 3D.</li>\n      <li><b>Nuage de points, voxels</b> : simples, mais lourds ou grossiers.</li>\n      <li><b>Champ implicite</b> (SDF) : une fonction dit si un point est dedans ou dehors. On en extrait un maillage par <i>marching cubes</i>.</li>\n      <li><b>Champ de radiance</b> (NeRF) et <b>gaussiennes</b> : pensés pour reproduire des images, pas pour être modifiés par un artiste.</li>\n    </ul>",
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
  "lit": "reps",
  "look": {},
  "scene": "reps",
  "fig": ""
 },
 {
  "kicker": "15.2",
  "title": "NeRF",
  "sub": "un champ de lumière appris",
  "body": "\n    <p class=\"lede\">En 2020, <b>NeRF</b> (<i>neural radiance field</i>) a montré qu’un petit réseau pouvait mémoriser une scène entière.</p>\n    <p>On lui donne un point de l’espace et une direction de vue ; il renvoie une <b>densité</b> (y a-t-il de la matière ?) et une <b>couleur</b>. Pour obtenir un pixel, on lance un rayon, on cumule densités et couleurs le long du rayon (le <b>rendu volumique</b>), et on compare le résultat à la vraie photo. Quelques dizaines de photos suffisent.</p>\n    <p>Défaut : l’entraînement dure longtemps et chaque image coûte beaucoup de calcul.</p>",
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
  "lit": "nerf",
  "look": {},
  "scene": "nerf",
  "fig": ""
 },
 {
  "kicker": "15.3",
  "title": "Les gaussiennes 3D",
  "sub": "le « splatting »",
  "body": "\n    <p class=\"lede\">Le <b>3D Gaussian Splatting</b> (2023) remplace le réseau par des millions de petites <b>gaussiennes 3D</b> explicites.</p>\n    <p>Chacune a une position, une taille, une orientation, une couleur et une opacité. Pour faire une image, on les projette (« éclabousse ») sur l’écran ; on compare aux photos et on ajuste chaque gaussienne par descente de gradient, comme les poids d’un réseau. La figure rejoue cette optimisation : le nuage désordonné se resserre en un tore.</p>\n    <p>Le gain majeur est la <b>vitesse de rendu</b>, assez grande pour afficher la scène en temps réel. Le défaut : on obtient un nuage, pas un maillage propre.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 18,
   "el": 16,
   "dist": 26,
   "auto": true
  },
  "lit": "gauss",
  "look": {},
  "scene": "gauss",
  "fig": ""
 },
 {
  "kicker": "15.4",
  "title": "Générer des objets",
  "sub": "forme, puis texture",
  "body": "\n    <p class=\"lede\">Pour <b>fabriquer</b> un objet à partir d’un texte ou d’une image, les modèles récents procèdent en deux temps.</p>\n    <ol class=\"rules\">\n      <li><b>La forme</b> : un modèle de diffusion (chapitre 8) travaille dans un espace latent de formes et produit un champ de distance ; on en extrait un maillage.</li>\n      <li><b>La texture</b> : un second modèle de diffusion peint l’objet vu de plusieurs angles, en s’appuyant sur la géométrie ; les vues sont fusionnées en une carte de texture, parfois avec des matériaux réalistes.</li>\n    </ol>\n    <p>Des laboratoires chinois comme Tencent (<b>Hunyuan3D</b>) ont publié ce type de modèles en libre accès, ce qui permet de les faire tourner chez soi sur un GPU.</p>",
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
  "lit": "gen3d",
  "look": {},
  "scene": "gen3d",
  "fig": ""
 },
 {
  "kicker": "15.5",
  "title": "De l’objet généré à l’objet utilisable",
  "sub": "ce qui reste à faire",
  "body": "\n    <p class=\"lede\">Un objet généré est impressionnant en image, moins en production.</p>\n    <ul class=\"rules\">\n      <li><b>Topologie</b> : les maillages générés sont souvent trop denses ou irréguliers ; on les simplifie et on les « retopologise ».</li>\n      <li><b>Dépliage UV et matériaux</b> : pour que la texture s’applique proprement, avec des matériaux physiques (PBR).</li>\n      <li><b>Échelle et précision</b> : un objet beau n’est pas un objet aux bonnes cotes, ce qui compte en CAO ou en impression 3D.</li>\n      <li><b>Usages</b> : jeux et effets visuels, jumeaux numériques, simulation pour la robotique (chapitre 12), commerce en ligne.</li>\n    </ul>",
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
  "lit": "reps",
  "look": {},
  "scene": "reps",
  "fig": ""
 }
];
export const PLATES = {
  reps: { text: "Il n’existe pas une seule manière de décrire un objet 3D. Les jeux et la CAO utilisent des maillages ; les réseaux de neurones aiment les champs continus (SDF, NeRF) ; les gaussiennes offrent un rendu rapide. On passe de l’un à l’autre par des algorithmes (par exemple marching cubes pour extraire un maillage d’un champ).", facts: () => [["maillage", "standard des jeux et de la CAO"], ["NeRF", "continu, lent à rendre"], ["gaussiennes", "explicite, rapide"]] },
  nerf: { text: "NeRF apprend une fonction qui, pour un point de l’espace et une direction de vue, donne une densité et une couleur. On génère l’image en cumulant ces valeurs le long de chaque rayon, on la compare à la photo, et on ajuste le réseau.", facts: () => [["entrée", "position 3D + direction"], ["sortie", "densité + couleur"], ["défaut", "entraînement et rendu lents"]] },
  gauss: { text: "Le gaussian splatting représente la scène par des millions de gaussiennes 3D (position, taille, orientation, couleur, opacité). On les projette sur l’image, on compare à la photo, et on ajuste chaque gaussienne. Le rendu est assez rapide pour du temps réel.", facts: () => [["primitives", "gaussiennes 3D explicites"], ["rendu", "temps réel (≥ 30 images/s)"], ["optimisation", "descente de gradient"]] },
  gen3d: { text: "Les générateurs 3D récents séparent deux étapes : d’abord la forme (un modèle de diffusion produit un champ de distance, dont on extrait un maillage), puis la texture (un modèle de diffusion peint l’objet depuis plusieurs vues, fusionnées en une carte de texture).", facts: () => [["étape 1", "géométrie"], ["étape 2", "texture et matériaux"], ["exemple libre", "Hunyuan3D (Tencent)"]] }
};
