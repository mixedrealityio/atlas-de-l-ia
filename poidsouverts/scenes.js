export const SPECS = [
 {
  "key": "carte",
  "title": "La carte des possibilités",
  "sub": "du plus léger au plus lourd",
  "kind": "pipeline",
  "per": 4,
  "bw": 2.1,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Utiliser",
    "s": "prompt, RAG, outils, réglages"
   },
   {
    "n": "Convertir",
    "s": "quantifier, changer de format",
    "pal": "blue"
   },
   {
    "n": "Adapter",
    "s": "LoRA, QLoRA",
    "pal": "blue"
   },
   {
    "n": "Réentraîner",
    "s": "affinage complet, préférences, RL",
    "pal": "red"
   },
   {
    "n": "Modifier sans entraîner",
    "s": "fusion, édition, pilotage",
    "pal": "red"
   },
   {
    "n": "Transformer",
    "s": "élaguer, distiller, nouvelle tête"
   }
  ],
  "x0": 0
 },
 {
  "key": "full",
  "title": "Affinage complet",
  "sub": "tous les poids bougent",
  "kind": "openw",
  "mode": "full",
  "cap": "tout est réentraîné",
  "x0": 40
 },
 {
  "key": "freeze",
  "title": "Geler une partie",
  "sub": "n’entraîner que le haut",
  "kind": "openw",
  "mode": "freeze",
  "cap": "couches 49 à 64 entraînées",
  "x0": 80
 },
 {
  "key": "lora",
  "title": "LoRA",
  "sub": "de petites matrices ajoutées",
  "kind": "openw",
  "mode": "lora",
  "cap": "base gelée + adaptateurs",
  "x0": 120
 },
 {
  "key": "qlora",
  "title": "QLoRA",
  "sub": "LoRA sur une base en 4 bits",
  "kind": "openw",
  "mode": "qlora",
  "cap": "base 4 bits gelée + LoRA",
  "x0": 160
 },
 {
  "key": "pref",
  "title": "Préférences et renforcement",
  "sub": "apprendre ce qui est mieux",
  "kind": "openw",
  "mode": "pref",
  "cap": "comportement ajusté",
  "x0": 200
 },
 {
  "key": "distill",
  "title": "Distillation",
  "sub": "imiter un maître",
  "kind": "openw",
  "mode": "distill",
  "cap": "l’élève imite le maître",
  "x0": 240
 },
 {
  "key": "merge",
  "title": "Fusion de modèles",
  "sub": "additionner des poids, sans entraîner",
  "kind": "openw",
  "mode": "merge",
  "cap": "A et B fusionnés",
  "x0": 280
 },
 {
  "key": "edit",
  "title": "Éditer une connaissance",
  "sub": "modifier quelques poids précis",
  "kind": "openw",
  "mode": "edit",
  "cap": "quelques MLP modifiés",
  "x0": 320
 },
 {
  "key": "steer",
  "title": "Piloter sans rien changer",
  "sub": "ajouter une direction au flux",
  "kind": "openw",
  "mode": "steer",
  "cap": "un vecteur ajouté au flux",
  "x0": 360
 },
 {
  "key": "abl",
  "title": "Retirer une direction",
  "sub": "l’« ablitération »",
  "kind": "openw",
  "mode": "abl",
  "cap": "une direction retirée",
  "x0": 400
 },
 {
  "key": "prune",
  "title": "Élaguer",
  "sub": "retirer des couches ou des experts",
  "kind": "openw",
  "mode": "prune",
  "cap": "3 paquets de couches retirés",
  "x0": 440
 },
 {
  "key": "head",
  "title": "Changer la tête",
  "sub": "un autre usage du même cerveau",
  "kind": "openw",
  "mode": "head",
  "cap": "nouvelle tête",
  "x0": 480
 },
 {
  "key": "vision",
  "title": "Ajouter des sens",
  "sub": "images, son",
  "kind": "openw",
  "mode": "vision",
  "cap": "un encodeur branché",
  "x0": 520
 },
 {
  "key": "vocab",
  "title": "Étendre le vocabulaire",
  "sub": "de nouveaux tokens",
  "kind": "openw",
  "mode": "vocab",
  "cap": "nouveaux tokens",
  "x0": 560
 },
 {
  "key": "cout",
  "title": "Ce que ça coûte en mémoire",
  "sub": "pour un 27B, ordres de grandeur",
  "kind": "qbars",
  "sp": 2.6,
  "bars": [
   {
    "n": "inférence 4 bits",
    "v": 20,
    "pal": "paper",
    "s": "~20 Go"
   },
   {
    "n": "QLoRA",
    "v": 30,
    "pal": "blue",
    "s": "~25–35 Go"
   },
   {
    "n": "LoRA 16 bits",
    "v": 70,
    "pal": "blue",
    "s": "~60–80 Go"
   },
   {
    "n": "affinage complet",
    "v": 450,
    "pal": "red",
    "s": "~430 Go +"
   }
  ],
  "info": "hors activations : elles croissent avec la longueur des exemples et la taille des lots",
  "max": 450,
  "h": 6.0,
  "x0": 600
 }
];
