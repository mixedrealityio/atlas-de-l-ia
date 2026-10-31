export const SPECS = [
 {
  "key": "mlp",
  "title": "Un petit réseau",
  "sub": "4 → 6 → 6 → 3 neurones",
  "kind": "net",
  "layers": [
   4,
   6,
   6,
   3
  ],
  "names": [
   "Entrée",
   "Couche cachée 1",
   "Couche cachée 2",
   "Sortie"
  ],
  "params": "93 paramètres : 78 poids + 15 biais",
  "x0": 0
 },
 {
  "key": "cnn",
  "title": "Un réseau convolutif en cartes",
  "sub": "de 28 × 28 pixels à 10 classes",
  "kind": "fmaps",
  "layers": [
   {
    "n": "Entrée",
    "size": 28,
    "depth": 1,
    "dim": "28×28×1"
   },
   {
    "n": "Convolution",
    "size": 24,
    "depth": 6,
    "dim": "24×24×6"
   },
   {
    "n": "Mise en commun",
    "size": 12,
    "depth": 6,
    "dim": "12×12×6"
   },
   {
    "n": "Convolution",
    "size": 8,
    "depth": 16,
    "dim": "8×8×16"
   },
   {
    "n": "Mise en commun",
    "size": 4,
    "depth": 16,
    "dim": "4×4×16"
   },
   {
    "n": "Dense",
    "size": 1,
    "depth": 1,
    "vec": 120,
    "dim": "120"
   },
   {
    "n": "Sortie",
    "size": 1,
    "depth": 1,
    "vec": 10,
    "dim": "10 classes"
   }
  ],
  "x0": 40
 },
 {
  "key": "bloc",
  "title": "Le bloc de nombres d’un transformeur",
  "sub": "jetons × dimensions × couches",
  "kind": "tensor",
  "tokens": 6,
  "dims": 6,
  "depth": 5,
  "x0": 80
 },
 {
  "key": "paysage",
  "title": "Le paysage de la perte",
  "sub": "trois façons de descendre",
  "kind": "landscape",
  "x0": 120
 }
];
