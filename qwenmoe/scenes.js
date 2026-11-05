export const SPECS = [
 {
  "key": "moe",
  "title": "Le trajet d’une requête",
  "sub": "blanc 4 bits · bleu 8 bits · rouge 16 bits",
  "kind": "qwenmoe",
  "x0": 0
 },
 {
  "key": "lu",
  "title": "Stocker n’est pas lire",
  "sub": "milliards de poids",
  "kind": "qbars",
  "sp": 2.8,
  "bars": [
   {
    "n": "27B dense : stockés",
    "v": 27,
    "pal": "paper",
    "s": "27 Md"
   },
   {
    "n": "27B dense : lus par token",
    "v": 27,
    "pal": "blue",
    "s": "27 Md"
   },
   {
    "n": "35B-A3B : stockés",
    "v": 35,
    "pal": "paper",
    "s": "35 Md"
   },
   {
    "n": "35B-A3B : lus par token",
    "v": 3,
    "pal": "blue",
    "s": "~3 Md"
   }
  ],
  "info": "un MoE garde tout en mémoire, mais n’en lit qu’une petite partie par token",
  "x0": 40
 },
 {
  "key": "go",
  "title": "La taille en mémoire",
  "sub": "selon la quantification (ordres de grandeur)",
  "kind": "qbars",
  "sp": 2.8,
  "bars": [
   {
    "n": "16 bits",
    "v": 70,
    "pal": "red",
    "s": "~70 Go"
   },
   {
    "n": "8 bits",
    "v": 37,
    "pal": "blue",
    "s": "~37 Go"
   },
   {
    "n": "4 bits (+ échelles)",
    "v": 20,
    "pal": "paper",
    "s": "~20 Go"
   }
  ],
  "info": "35 milliards × bits ÷ 8, plus les échelles des groupes",
  "x0": 80
 }
];
