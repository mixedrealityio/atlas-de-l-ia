export const SPECS = [
 {
  "key": "loi",
  "title": "La loi de puissance",
  "sub": "plus de calcul, moins de perte",
  "kind": "curve",
  "fn": "scaling",
  "x0": 0
 },
 {
  "key": "optimal",
  "title": "Le bon équilibre",
  "sub": "Chinchilla : autant de données que de paramètres",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Budget de calcul fixé",
    "s": "C ≈ 6 N D",
    "pal": "blue"
   },
   {
    "n": "Trop de paramètres",
    "s": "peu de données : gaspillage"
   },
   {
    "n": "Trop de données",
    "s": "petit modèle : plafond"
   },
   {
    "n": "Optimal (2022)",
    "s": "≈ 20 jetons par paramètre",
    "pal": "red"
   },
   {
    "n": "Pratique actuelle",
    "s": "bien plus : servir moins cher",
    "pal": "blue"
   },
   {
    "n": "Compromis",
    "s": "entraînement vs inférence"
   }
  ],
  "x0": 40
 },
 {
  "key": "emergence",
  "title": "Émergence ou mirage ?",
  "sub": "le débat",
  "kind": "curve",
  "fn": "emergence",
  "x0": 80
 },
 {
  "key": "cot",
  "title": "La chaîne de pensée",
  "sub": "raisonner à voix haute",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Question",
    "s": "un problème à étapes"
   },
   {
    "n": "Étapes écrites",
    "s": "une par une",
    "pal": "blue"
   },
   {
    "n": "Vérifications",
    "s": "calculs intermédiaires",
    "pal": "blue"
   },
   {
    "n": "Réponse",
    "s": "déduite des étapes",
    "pal": "red"
   }
  ],
  "x0": 120
 },
 {
  "key": "testtime",
  "title": "Calculer au moment de répondre",
  "sub": "le calcul à l’inférence",
  "kind": "curve",
  "fn": "testtime",
  "x0": 160
 },
 {
  "key": "murs",
  "title": "Les limites de la course à l’échelle",
  "sub": "quatre murs",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Données",
    "s": "le texte public est fini",
    "pal": "red"
   },
   {
    "n": "Énergie",
    "s": "mégawatts, réseau électrique",
    "pal": "red"
   },
   {
    "n": "Argent",
    "s": "milliards par entraînement",
    "pal": "red"
   },
   {
    "n": "Fiabilité",
    "s": "hallucinations persistent",
    "pal": "blue"
   }
  ],
  "x0": 200
 }
];
