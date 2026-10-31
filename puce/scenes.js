export const SPECS = [
 {
  "key": "puce",
  "title": "Une puce de GPU",
  "sub": "des milliers d’unités et de la mémoire proche",
  "kind": "chip",
  "x0": 0
 },
 {
  "key": "roofline",
  "title": "Calcul ou mémoire : qui limite ?",
  "sub": "le modèle du toit (roofline)",
  "kind": "curve",
  "fn": "roofline",
  "x0": 40
 },
 {
  "key": "prec",
  "title": "Les précisions",
  "sub": "chaque étage divise la mémoire",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "FP32",
    "s": "4 octets",
    "pal": "dark"
   },
   {
    "n": "BF16 / FP16",
    "s": "2 octets",
    "pal": "blue"
   },
   {
    "n": "FP8",
    "s": "1 octet",
    "pal": "blue"
   },
   {
    "n": "INT4 / FP4",
    "s": "0,5 octet",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "debits",
  "title": "L’échelle des débits",
  "sub": "de l’SSD à la mémoire HBM",
  "kind": "logbars",
  "unit": "Go/s",
  "axis": "échelle logarithmique : chaque graduation est 10 fois plus grande",
  "items": [
   {
    "n": "SSD NVMe",
    "v": 7,
    "pal": "dark"
   },
   {
    "n": "PCIe 4 ×16",
    "v": 32,
    "pal": "dark"
   },
   {
    "n": "DDR5 (PC)",
    "v": 90,
    "pal": "paper"
   },
   {
    "n": "Mac M3 Max",
    "v": 400,
    "pal": "blue"
   },
   {
    "n": "RTX 4090",
    "v": 1008,
    "pal": "blue"
   },
   {
    "n": "A100",
    "v": 2039,
    "pal": "red"
   },
   {
    "n": "H100",
    "v": 3350,
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
