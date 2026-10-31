export const SPECS = [
 {
  "key": "temp",
  "title": "La température",
  "sub": "aplatir ou durcir la distribution",
  "mode": "temp",
  "kind": "bars",
  "labels": [
   "Paris",
   "la",
   "une",
   "Lyon",
   "située",
   "le",
   "en",
   "Marseille"
  ],
  "logits": [
   6.0,
   3.2,
   2.6,
   2.2,
   1.9,
   1.6,
   1.2,
   0.8
  ],
  "x0": 0
 },
 {
  "key": "topk",
  "title": "Le top-k",
  "sub": "ne garder que les k meilleurs mots",
  "mode": "topk",
  "kind": "bars",
  "labels": [
   "Paris",
   "la",
   "une",
   "Lyon",
   "située",
   "le",
   "en",
   "Marseille"
  ],
  "logits": [
   6.0,
   3.2,
   2.6,
   2.2,
   1.9,
   1.6,
   1.2,
   0.8
  ],
  "x0": 40
 },
 {
  "key": "topp",
  "title": "Le top-p (noyau)",
  "sub": "le plus petit ensemble qui atteint la probabilité p",
  "mode": "topp",
  "kind": "bars",
  "labels": [
   "Paris",
   "la",
   "une",
   "Lyon",
   "située",
   "le",
   "en",
   "Marseille"
  ],
  "logits": [
   6.0,
   3.2,
   2.6,
   2.2,
   1.9,
   1.6,
   1.2,
   0.8
  ],
  "x0": 80
 },
 {
  "key": "minp",
  "title": "Le min-p",
  "sub": "un seuil relatif au meilleur mot",
  "mode": "minp",
  "kind": "bars",
  "labels": [
   "Paris",
   "la",
   "une",
   "Lyon",
   "située",
   "le",
   "en",
   "Marseille"
  ],
  "logits": [
   6.0,
   3.2,
   2.6,
   2.2,
   1.9,
   1.6,
   1.2,
   0.8
  ],
  "x0": 120
 },
 {
  "key": "penalty",
  "title": "La pénalité de répétition",
  "sub": "décourager les mots déjà écrits",
  "mode": "penalty",
  "seen": [
   0
  ],
  "kind": "bars",
  "labels": [
   "Paris",
   "la",
   "une",
   "Lyon",
   "située",
   "le",
   "en",
   "Marseille"
  ],
  "logits": [
   6.0,
   3.2,
   2.6,
   2.2,
   1.9,
   1.6,
   1.2,
   0.8
  ],
  "x0": 160
 },
 {
  "key": "chain",
  "title": "La chaîne d’échantillonnage",
  "sub": "les réglages s’appliquent dans un ordre",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.1,
  "gap": 0.9,
  "stages": [
   {
    "n": "Logits",
    "s": "scores bruts",
    "pal": "paper"
   },
   {
    "n": "Pénalités",
    "s": "répétition…"
   },
   {
    "n": "Température",
    "s": "÷ T"
   },
   {
    "n": "top-k",
    "s": "garder k"
   },
   {
    "n": "top-p / min-p",
    "s": "filtrer"
   },
   {
    "n": "Tirage",
    "s": "avec la graine",
    "pal": "red"
   }
  ],
  "x0": 200
 }
];
