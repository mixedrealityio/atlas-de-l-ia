export const SPECS = [
 {
  "key": "posthoc",
  "title": "Expliquer après coup",
  "sub": "quelle partie de l’entrée a compté ?",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Entrée",
    "s": "texte ou image"
   },
   {
    "n": "Modèle",
    "s": "boîte noire",
    "pal": "dark"
   },
   {
    "n": "Sortie",
    "s": "la prédiction"
   },
   {
    "n": "Perturbation",
    "s": "masquer, modifier",
    "pal": "blue"
   },
   {
    "n": "Attribution",
    "s": "poids par mot ou pixel",
    "pal": "red"
   },
   {
    "n": "Carte",
    "s": "ce qui a compté"
   }
  ],
  "x0": 0
 },
 {
  "key": "circuit",
  "title": "Un circuit",
  "sub": "têtes d’induction",
  "kind": "net",
  "layers": [
   3,
   4,
   4,
   3
  ],
  "names": [
   "Jetons",
   "Tête A : précédent",
   "Tête B : copie",
   "Sortie"
  ],
  "params": "deux têtes qui coopèrent pour répéter un motif",
  "x0": 40
 },
 {
  "key": "sae",
  "title": "Autoencodeur parcimonieux",
  "sub": "séparer les concepts mêlés",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Activations",
    "s": "mélange dense"
   },
   {
    "n": "Encodeur",
    "s": "beaucoup de directions",
    "pal": "blue"
   },
   {
    "n": "Parcimonie",
    "s": "peu de traits actifs",
    "pal": "red"
   },
   {
    "n": "Décodeur",
    "s": "reconstruit",
    "pal": "blue"
   },
   {
    "n": "Caractéristiques",
    "s": "concepts lisibles"
   },
   {
    "n": "Intervention",
    "s": "amplifier ou couper",
    "pal": "red"
   }
  ],
  "x0": 80
 }
];
