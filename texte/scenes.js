export const SPECS = [
 {
  "key": "tok",
  "title": "Le texte en jetons",
  "sub": "une phrase découpée en morceaux",
  "kind": "tokens",
  "y": 2.2,
  "info": "exemple illustratif : les identifiants varient selon le modèle",
  "items": [
   {
    "t": "L",
    "id": 43
   },
   {
    "t": "’",
    "id": 6
   },
   {
    "t": "intelligence",
    "id": 9120
   },
   {
    "t": " artificielle",
    "id": 18011
   },
   {
    "t": " apprend",
    "id": 5521
   },
   {
    "t": " à",
    "id": 311
   },
   {
    "t": " prédire",
    "id": 21874
   },
   {
    "t": " la",
    "id": 264
   },
   {
    "t": " suite",
    "id": 7312
   },
   {
    "t": ".",
    "id": 13
   }
  ],
  "x0": 0
 },
 {
  "key": "bpe",
  "title": "Fusionner les paires fréquentes",
  "sub": "le principe du BPE",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.4,
  "gap": 0.9,
  "y": 1.6,
  "stages": [
   {
    "n": "l·o·w·e·r",
    "s": "départ : lettres"
   },
   {
    "n": "lo·w·e·r",
    "s": "« l o » fréquent"
   },
   {
    "n": "low·e·r",
    "s": "« lo w » fréquent"
   },
   {
    "n": "low·er",
    "s": "« e r » fréquent"
   },
   {
    "n": "lower",
    "s": "un seul jeton",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "emb",
  "title": "L’espace des sens",
  "sub": "un point par jeton, des directions pour les relations",
  "kind": "scatter",
  "by": 2.6,
  "points": [
   {
    "n": "homme",
    "x": -3.6,
    "y": -0.8,
    "c": "blue"
   },
   {
    "n": "femme",
    "x": -3.6,
    "y": 0.8,
    "c": "blue"
   },
   {
    "n": "roi",
    "x": -1.2,
    "y": -0.5
   },
   {
    "n": "reine",
    "x": -1.2,
    "y": 1.1
   },
   {
    "n": "France",
    "x": 1.4,
    "y": -1.4,
    "c": "red"
   },
   {
    "n": "Paris",
    "x": 1.4,
    "y": 0.2,
    "c": "red"
   },
   {
    "n": "Italie",
    "x": 3.6,
    "y": -1.4,
    "c": "red"
   },
   {
    "n": "Rome",
    "x": 3.6,
    "y": 0.2,
    "c": "red"
   }
  ],
  "arrows": [
   [
    "homme",
    "femme",
    ""
   ],
   [
    "roi",
    "reine",
    "même direction"
   ],
   [
    "France",
    "Paris",
    ""
   ],
   [
    "Italie",
    "Rome",
    "capitale de"
   ]
  ],
  "walk": [
   "roi",
   "reine",
   "France",
   "Paris"
  ],
  "info": "projection en 2 dimensions (le vrai espace en a des milliers)",
  "x0": 80
 },
 {
  "key": "flow",
  "title": "De la phrase au mot suivant",
  "sub": "le trajet complet",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.8,
  "y": 1.6,
  "stages": [
   {
    "n": "Texte"
   },
   {
    "n": "Jetons",
    "s": "découpage"
   },
   {
    "n": "Identifiants",
    "s": "vocabulaire"
   },
   {
    "n": "Plongements",
    "s": "vecteurs"
   },
   {
    "n": "Transformeur",
    "s": "N couches",
    "pal": "blue"
   },
   {
    "n": "Scores",
    "s": "un par mot",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
