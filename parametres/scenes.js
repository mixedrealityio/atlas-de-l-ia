export const SPECS = [
 {
  "key": "panneau",
  "title": "Quatre familles de réglages",
  "sub": "du bouton au gigaoctet",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Entraînement",
    "s": "taux, lot, époques, rang",
    "pal": "blue"
   },
   {
    "n": "Échantillonnage",
    "s": "T, top-p, min-p, graine",
    "pal": "red"
   },
   {
    "n": "Mémoire",
    "s": "quantification, contexte, lot",
    "pal": "blue"
   },
   {
    "n": "Serveur",
    "s": "GPU, parallélisme, file",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "quant",
  "title": "La quantification",
  "sub": "un modèle de 8 milliards en gigaoctets",
  "kind": "mem",
  "scale": 0.15,
  "limit": 24,
  "limitLabel": "GPU 24 Go",
  "configs": [
   {
    "n": "16 bits",
    "segs": [
     [
      "Poids",
      16,
      "blue"
     ]
    ]
   },
   {
    "n": "Q8_0",
    "segs": [
     [
      "Poids",
      8.5,
      "blue"
     ]
    ]
   },
   {
    "n": "Q5_K_M",
    "segs": [
     [
      "Poids",
      5.7,
      "blue"
     ]
    ]
   },
   {
    "n": "Q4_K_M",
    "segs": [
     [
      "Poids",
      4.9,
      "blue"
     ]
    ]
   }
  ],
  "x0": 40
 },
 {
  "key": "ctx",
  "title": "Le contexte coûte de la mémoire",
  "sub": "cache KV selon la longueur",
  "kind": "mem",
  "scale": 0.15,
  "limit": 24,
  "limitLabel": "GPU 24 Go",
  "configs": [
   {
    "n": "Poids Q4",
    "segs": [
     [
      "Poids",
      4.9,
      "blue"
     ]
    ]
   },
   {
    "n": "Cache 8k",
    "segs": [
     [
      "Cache KV",
      1,
      "red"
     ]
    ]
   },
   {
    "n": "Cache 32k",
    "segs": [
     [
      "Cache KV",
      4,
      "red"
     ]
    ]
   },
   {
    "n": "Cache 128k",
    "segs": [
     [
      "Cache KV",
      16,
      "red"
     ]
    ]
   }
  ],
  "info": "8 milliards, 32 couches, 8 têtes KV de 128 : 128 Ko par jeton",
  "x0": 80
 },
 {
  "key": "serveur",
  "title": "Un serveur d’inférence réglé",
  "sub": "gpu_memory_utilization sur une carte de 24 Go",
  "kind": "mem",
  "scale": 0.15,
  "limit": 24,
  "limitLabel": "GPU 24 Go",
  "configs": [
   {
    "n": "0,85",
    "segs": [
     [
      "Poids",
      16,
      "blue"
     ],
     [
      "Contexte CUDA",
      1,
      "dark"
     ],
     [
      "Cache KV",
      3.4,
      "red"
     ],
     [
      "Réserve",
      3.6,
      "paper"
     ]
    ]
   },
   {
    "n": "0,95",
    "segs": [
     [
      "Poids",
      16,
      "blue"
     ],
     [
      "Contexte CUDA",
      1,
      "dark"
     ],
     [
      "Cache KV",
      5.8,
      "red"
     ],
     [
      "Réserve",
      1.2,
      "paper"
     ]
    ]
   }
  ],
  "info": "chiffres illustratifs pour un modèle de 8 milliards en 16 bits",
  "x0": 120
 }
];
