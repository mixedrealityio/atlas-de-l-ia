export const SPECS = [
 {
  "key": "fichier",
  "title": "Anatomie d’un fichier",
  "sub": "ce qu’il y a dedans",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "En-tête",
    "s": "noms, formes, types des tenseurs"
   },
   {
    "n": "Configuration",
    "s": "couches, têtes, dimensions",
    "pal": "blue"
   },
   {
    "n": "Vocabulaire",
    "s": "les jetons et leurs règles de découpe",
    "pal": "blue"
   },
   {
    "n": "Plongements",
    "s": "une ligne de nombres par jeton",
    "pal": "red"
   },
   {
    "n": "Couches × L",
    "s": "attention et MLP : des matrices",
    "pal": "red"
   },
   {
    "n": "Tête de sortie",
    "s": "scores sur tout le vocabulaire",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "taille",
  "title": "Taille = paramètres × bits",
  "sub": "un modèle de 8 milliards",
  "kind": "mem",
  "scale": 0.15,
  "limit": 24,
  "limitLabel": "GPU 24 Go",
  "configs": [
   {
    "n": "FP16 (16 bits)",
    "segs": [
     [
      "Poids",
      16,
      "blue"
     ]
    ]
   },
   {
    "n": "Q8 (≈ 8,5)",
    "segs": [
     [
      "Poids",
      8.5,
      "blue"
     ]
    ]
   },
   {
    "n": "Q6 (≈ 6,6)",
    "segs": [
     [
      "Poids",
      6.6,
      "blue"
     ]
    ]
   },
   {
    "n": "Q4 (≈ 4,9)",
    "segs": [
     [
      "Poids",
      4.9,
      "blue"
     ]
    ]
   },
   {
    "n": "Q2 (≈ 3,4)",
    "segs": [
     [
      "Poids",
      3.4,
      "blue"
     ]
    ]
   }
  ],
  "info": "8 milliards de paramètres, taille du fichier selon la précision",
  "x0": 40
 },
 {
  "key": "ratio",
  "title": "Tout internet dans 5 Go ?",
  "sub": "non : le modèle ne garde pas les textes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Corpus",
    "s": "≈ 15 000 milliards de jetons ≈ plusieurs dizaines de To",
    "pal": "red"
   },
   {
    "n": "Compression sans perte",
    "s": "texte : gain de 3 à 8 fois"
   },
   {
    "n": "Modèle Q4 de 8 Md",
    "s": "≈ 5 Go",
    "pal": "blue"
   },
   {
    "n": "Rapport",
    "s": "≈ 10 000 pour 1",
    "pal": "red"
   },
   {
    "n": "Conclusion",
    "s": "compression avec perte : des régularités, pas des documents",
    "pal": "red"
   },
   {
    "n": "Capacité",
    "s": "≈ 2 bits d’information par paramètre",
    "pal": "blue"
   }
  ],
  "x0": 80
 },
 {
  "key": "bloc",
  "title": "Ce que fait la quantification",
  "sub": "arrondir par blocs",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "32 poids",
    "s": "un bloc, en 16 bits"
   },
   {
    "n": "Échelle du bloc",
    "s": "plus grand écart, une valeur",
    "pal": "blue"
   },
   {
    "n": "Division et arrondi",
    "s": "chaque poids → un entier de 0 à 15",
    "pal": "red"
   },
   {
    "n": "Stockage",
    "s": "4 bits par poids + 1 échelle",
    "pal": "blue"
   },
   {
    "n": "Lecture",
    "s": "entier × échelle ≈ poids d’origine",
    "pal": "red"
   },
   {
    "n": "Erreur",
    "s": "petit arrondi, répartie"
   }
  ],
  "x0": 120
 },
 {
  "key": "qualite",
  "title": "Jusqu’où descendre ?",
  "sub": "la perte de qualité",
  "kind": "curve",
  "fn": "qualitebits",
  "x0": 160
 }
];
