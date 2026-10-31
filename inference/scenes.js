export const SPECS = [
 {
  "key": "phase",
  "title": "Deux phases",
  "sub": "lire l’invite, puis écrire",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.6,
  "loop": "un jeton de plus",
  "stages": [
   {
    "n": "Invite",
    "s": "tout le prompt"
   },
   {
    "n": "Prefill",
    "s": "en parallèle",
    "pal": "blue"
   },
   {
    "n": "Cache KV",
    "s": "rempli",
    "pal": "red"
   },
   {
    "n": "Décodage",
    "s": "1 jeton à la fois",
    "pal": "blue"
   },
   {
    "n": "Échantillonnage",
    "s": "choisit un mot"
   },
   {
    "n": "Jeton ajouté",
    "s": "au cache"
   }
  ],
  "x0": 0
 },
 {
  "key": "cache",
  "title": "Le cache clé-valeur",
  "sub": "ne pas tout recalculer",
  "kind": "kv",
  "tokens": [
   "Paris",
   "est",
   "la",
   "capitale",
   "de",
   "la",
   "France"
  ],
  "cy": 3.0,
  "x0": 40
 },
 {
  "key": "memoire",
  "title": "La mémoire d’un modèle de 7 milliards",
  "sub": "poids et cache en gigaoctets",
  "kind": "mem",
  "scale": 0.18,
  "limit": 24,
  "limitLabel": "GPU 24 Go",
  "configs": [
   {
    "n": "Poids fp16",
    "segs": [
     [
      "Poids",
      14,
      "blue"
     ]
    ]
   },
   {
    "n": "Poids 4 bits",
    "segs": [
     [
      "Poids",
      4,
      "blue"
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
    "n": "Cache sans GQA",
    "segs": [
     [
      "Cache KV",
      16,
      "red"
     ]
    ]
   }
  ],
  "info": "exemple : 32 couches, 8 têtes KV de 128, 32 000 jetons de contexte",
  "x0": 80
 },
 {
  "key": "spec",
  "title": "Le décodage spéculatif",
  "sub": "un petit modèle propose, un gros vérifie",
  "kind": "pipeline",
  "per": 2,
  "bw": 3.2,
  "gap": 0.9,
  "y": 1.6,
  "loop": "on recommence",
  "stages": [
   {
    "n": "Petit modèle",
    "s": "propose 4 jetons vite",
    "pal": "blue"
   },
   {
    "n": "Gros modèle",
    "s": "vérifie les 4 d’un coup",
    "pal": "red"
   },
   {
    "n": "Accepter",
    "s": "les jetons corrects"
   },
   {
    "n": "Corriger",
    "s": "le premier faux"
   }
  ],
  "x0": 120
 }
];
