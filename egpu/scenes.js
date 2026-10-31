export const SPECS = [
 {
  "key": "liens",
  "title": "Le lien compte moins que la mémoire",
  "sub": "débits en Go/s, échelle logarithmique",
  "kind": "logbars",
  "unit": "Go/s",
  "axis": "échelle logarithmique : ordres de grandeur",
  "items": [
   {
    "n": "Thunderbolt 4",
    "v": 3.5,
    "pal": "dark"
   },
   {
    "n": "OCuLink ×4",
    "v": 7.9,
    "pal": "blue"
   },
   {
    "n": "PCIe 4 ×16",
    "v": 31.5,
    "pal": "blue"
   },
   {
    "n": "PCIe 5 ×16",
    "v": 63,
    "pal": "blue"
   },
   {
    "n": "VRAM RTX 4090",
    "v": 1008,
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "chaine",
  "title": "Un GPU en boîtier",
  "sub": "de l’ordinateur à la carte",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Ordinateur",
    "s": "portable ou mini-PC"
   },
   {
    "n": "Câble",
    "s": "Thunderbolt ou OCuLink",
    "pal": "blue"
   },
   {
    "n": "Boîtier eGPU",
    "s": "alimentation dédiée",
    "pal": "red"
   },
   {
    "n": "GPU",
    "s": "mémoire vive : 16 à 24 Go",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "choix",
  "title": "Quel modèle sur quelle carte ?",
  "sub": "poids en 4 bits, carte de 24 Go",
  "kind": "mem",
  "scale": 0.15,
  "limit": 24,
  "limitLabel": "carte 24 Go",
  "configs": [
   {
    "n": "8B Q4",
    "segs": [
     [
      "Poids",
      4.9,
      "blue"
     ]
    ]
   },
   {
    "n": "14B Q4",
    "segs": [
     [
      "Poids",
      8.6,
      "blue"
     ]
    ]
   },
   {
    "n": "32B Q4",
    "segs": [
     [
      "Poids",
      19.6,
      "blue"
     ]
    ]
   },
   {
    "n": "70B Q4",
    "segs": [
     [
      "Poids",
      42.9,
      "red"
     ]
    ]
   }
  ],
  "info": "sans le cache KV ni la marge (à ajouter)",
  "x0": 80
 },
 {
  "key": "debord",
  "title": "Quand le modèle déborde",
  "sub": "une partie des couches en RAM",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Couches en VRAM",
    "s": "1 000 Go/s",
    "pal": "blue"
   },
   {
    "n": "Couches en RAM",
    "s": "≈ 90 Go/s",
    "pal": "dark"
   },
   {
    "n": "Par le bus PCIe",
    "s": "≈ 32 Go/s",
    "pal": "red"
   },
   {
    "n": "Chaque jeton",
    "s": "attend le maillon lent",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
