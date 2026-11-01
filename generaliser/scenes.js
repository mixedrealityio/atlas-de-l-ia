export const SPECS = [
 {
  "key": "biaisvar",
  "title": "Biais et variance",
  "sub": "le compromis classique",
  "kind": "curve",
  "fn": "biasvar",
  "x0": 0
 },
 {
  "key": "surapprentissage",
  "title": "Entraînement et validation",
  "sub": "quand les courbes se séparent",
  "kind": "curve",
  "fn": "overfit",
  "x0": 40
 },
 {
  "key": "remedes",
  "title": "Les remèdes au surapprentissage",
  "sub": "contraindre, enrichir, arrêter",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Plus de données",
    "s": "le meilleur remède",
    "pal": "blue"
   },
   {
    "n": "Augmentation",
    "s": "variantes des exemples",
    "pal": "blue"
   },
   {
    "n": "Pénalité L1 / L2",
    "s": "poids petits ou épars"
   },
   {
    "n": "Dropout",
    "s": "éteindre des neurones au hasard"
   },
   {
    "n": "Arrêt précoce",
    "s": "stopper à la meilleure validation",
    "pal": "red"
   },
   {
    "n": "Modèle plus simple",
    "s": "moins de paramètres"
   }
  ],
  "x0": 80
 },
 {
  "key": "doubledescente",
  "title": "La double descente",
  "sub": "quand plus de paramètres généralisent mieux",
  "kind": "curve",
  "fn": "doubledescent",
  "x0": 120
 }
];
