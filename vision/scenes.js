export const SPECS = [
 {
  "key": "conv",
  "title": "La convolution",
  "sub": "un petit filtre qui glisse sur l’image",
  "kind": "conv",
  "img": [
   "........",
   "..####..",
   ".#....#.",
   ".#....#.",
   ".######.",
   ".#....#.",
   ".#....#.",
   "........"
  ],
  "kernel": "contours",
  "x0": 0
 },
 {
  "key": "cnn",
  "title": "Un réseau convolutif",
  "sub": "des bords aux objets",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Image",
    "s": "pixels"
   },
   {
    "n": "Convolutions",
    "s": "bords, textures",
    "pal": "blue"
   },
   {
    "n": "Convolutions",
    "s": "coins, motifs",
    "pal": "blue"
   },
   {
    "n": "Convolutions",
    "s": "parties d’objets",
    "pal": "blue"
   },
   {
    "n": "Mise en commun",
    "s": "résumer, réduire"
   },
   {
    "n": "Classe",
    "s": "« chat » 0,94",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "vit",
  "title": "Le transformeur de vision",
  "sub": "une image découpée en patchs",
  "kind": "patches",
  "img": [
   "........",
   "..####..",
   ".#....#.",
   ".#....#.",
   ".######.",
   ".#....#.",
   ".#....#.",
   "........"
  ],
  "patch": 2,
  "dim": 768,
  "x0": 80
 },
 {
  "key": "detect",
  "title": "La détection d’objets",
  "sub": "où, quoi, avec quelle confiance",
  "kind": "detect",
  "objects": [
   {
    "n": "chat",
    "x": 0.08,
    "y": 0.15,
    "w": 0.38,
    "h": 0.7,
    "score": 0.94,
    "pal": "dark"
   },
   {
    "n": "chien",
    "x": 0.55,
    "y": 0.28,
    "w": 0.33,
    "h": 0.62,
    "score": 0.88,
    "pal": "paper"
   }
  ],
  "info": "chaque cadre : une classe, une position, un score",
  "x0": 120
 },
 {
  "key": "clip",
  "title": "Image et texte dans un même espace",
  "sub": "l’apprentissage contrastif",
  "kind": "scatter",
  "by": 2.4,
  "points": [
   {
    "n": "photo de chat",
    "x": -3.2,
    "y": 0.8,
    "c": "blue"
   },
   {
    "n": "« un chat »",
    "x": -2.2,
    "y": 1.1,
    "c": "red"
   },
   {
    "n": "photo de chien",
    "x": 1.6,
    "y": -0.6,
    "c": "blue"
   },
   {
    "n": "« un chien »",
    "x": 2.6,
    "y": -0.9,
    "c": "red"
   },
   {
    "n": "photo de voiture",
    "x": 0.6,
    "y": 2.1,
    "c": "blue"
   },
   {
    "n": "« une voiture »",
    "x": 1.6,
    "y": 2.4,
    "c": "red"
   }
  ],
  "arrows": [
   [
    "photo de chat",
    "« un chat »",
    ""
   ],
   [
    "photo de chien",
    "« un chien »",
    ""
   ]
  ],
  "walk": [
   "photo de chat",
   "« un chat »",
   "photo de chien",
   "« un chien »"
  ],
  "info": "deux encodeurs, un espace commun",
  "x0": 160
 },
 {
  "key": "diffusion",
  "title": "La diffusion",
  "sub": "ajouter du bruit, puis l’enlever",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Image",
    "s": "vraie"
   },
   {
    "n": "Un peu de bruit",
    "s": "étape t = 100"
   },
   {
    "n": "Beaucoup de bruit",
    "s": "étape t = 700"
   },
   {
    "n": "Bruit pur",
    "s": "t = 1000",
    "pal": "dark"
   },
   {
    "n": "Débruitage",
    "s": "le réseau enlève le bruit",
    "pal": "blue"
   },
   {
    "n": "Nouvelle image",
    "s": "guidée par un texte",
    "pal": "red"
   }
  ],
  "x0": 200
 }
];
