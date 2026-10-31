export const SPECS = [
 {
  "key": "boucle",
  "title": "La boucle d’entraînement",
  "sub": "six temps répétés des millions de fois",
  "kind": "cycle",
  "unit": "temps",
  "nodes": [
   {
    "n": "Lot de textes"
   },
   {
    "n": "Passe avant",
    "pal": "blue"
   },
   {
    "n": "Perte",
    "pal": "red"
   },
   {
    "n": "Rétropropagation",
    "pal": "blue"
   },
   {
    "n": "Optimiseur"
   },
   {
    "n": "Poids à jour",
    "pal": "red"
   }
  ],
  "center": "une étape",
  "speed": 0.6,
  "x0": 0
 },
 {
  "key": "perte",
  "title": "Le taux d’apprentissage",
  "sub": "trop faible, adapté, trop fort",
  "kind": "curve",
  "fn": "loss",
  "x0": 40
 },
 {
  "key": "planning",
  "title": "Le calendrier du taux",
  "sub": "échauffement puis décroissance en cosinus",
  "kind": "curve",
  "fn": "lrsched",
  "x0": 80
 },
 {
  "key": "memoire",
  "title": "La mémoire pour entraîner",
  "sub": "7 milliards de paramètres, en gigaoctets",
  "kind": "mem",
  "scale": 0.045,
  "limit": 80,
  "limitLabel": "GPU 80 Go",
  "configs": [
   {
    "n": "Inférence 16 bits",
    "segs": [
     [
      "Poids",
      14,
      "blue"
     ]
    ]
   },
   {
    "n": "Entraînement complet",
    "segs": [
     [
      "Poids",
      14,
      "blue"
     ],
     [
      "Gradients",
      14,
      "red"
     ],
     [
      "Poids maîtres",
      28,
      "dark"
     ],
     [
      "États Adam",
      56,
      "ink"
     ]
    ]
   },
   {
    "n": "LoRA",
    "segs": [
     [
      "Poids gelés",
      14,
      "blue"
     ],
     [
      "Adaptateurs + optimiseur",
      0.7,
      "red"
     ]
    ]
   },
   {
    "n": "QLoRA",
    "segs": [
     [
      "Poids 4 bits",
      4,
      "blue"
     ],
     [
      "Adaptateurs + optimiseur",
      0.7,
      "red"
     ]
    ]
   }
  ],
  "info": "hors activations (qui dépendent du lot et de la longueur)",
  "x0": 120
 },
 {
  "key": "lora",
  "title": "LoRA",
  "sub": "apprendre une petite correction",
  "kind": "pipeline",
  "per": 4,
  "bw": 2.0,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Entrée x",
    "s": ""
   },
   {
    "n": "W gelé",
    "s": "d × d, inchangé",
    "pal": "paper"
   },
   {
    "n": "+ B·A",
    "s": "rang r ≪ d, appris",
    "pal": "red"
   },
   {
    "n": "Sortie",
    "s": "W·x + (α/r)·B·A·x",
    "pal": "blue"
   }
  ],
  "x0": 160
 },
 {
  "key": "surapp",
  "title": "Le surapprentissage",
  "sub": "l’erreur sur les données vues et non vues",
  "kind": "curve",
  "fn": "overfit",
  "x0": 200
 }
];
