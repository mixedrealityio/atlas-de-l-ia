export const SPECS = [
 {
  "key": "etapes",
  "title": "Neuf étapes",
  "sub": "du besoin à l’exploitation",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Cadrer",
    "s": "usages, données, volumes",
    "pal": "blue"
   },
   {
    "n": "Dimensionner",
    "s": "mémoire, débit, marge",
    "pal": "blue"
   },
   {
    "n": "Matériel",
    "s": "GPU, serveurs, alimentation"
   },
   {
    "n": "Réseau et stockage",
    "s": "modèles, données"
   },
   {
    "n": "Plateforme",
    "s": "conteneurs, orchestrateur",
    "pal": "red"
   },
   {
    "n": "Service d’inférence",
    "s": "moteur + passerelle",
    "pal": "red"
   },
   {
    "n": "Sécurité",
    "s": "accès, journaux, cloisonnement",
    "pal": "red"
   },
   {
    "n": "Observabilité",
    "s": "métriques, alertes"
   },
   {
    "n": "Exploitation",
    "s": "mises à jour, capacité"
   }
  ],
  "x0": 0
 },
 {
  "key": "dimension",
  "title": "Un exemple de dimensionnement",
  "sub": "un modèle de 70 milliards pour 20 utilisateurs",
  "kind": "mem",
  "scale": 0.03,
  "limit": 160,
  "limitLabel": "2 GPU de 80 Go",
  "configs": [
   {
    "n": "Besoin total",
    "segs": [
     [
      "Poids 70B en 4 bits",
      43,
      "blue"
     ],
     [
      "Cache : 20 × 8 000 jetons",
      50,
      "red"
     ],
     [
      "Marge 10 %",
      9,
      "paper"
     ]
    ]
   }
  ],
  "info": "cache de 320 Ko par jeton (80 couches, 8 têtes KV de 128, 16 bits)",
  "x0": 40
 },
 {
  "key": "plateforme",
  "title": "La plateforme en couches",
  "sub": "du GPU à l’application",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Applications",
    "s": "chat, RAG, agents"
   },
   {
    "n": "Passerelle API",
    "s": "authentification, quotas, journaux",
    "pal": "red"
   },
   {
    "n": "Routage de modèles",
    "s": "le bon modèle pour chaque usage",
    "pal": "blue"
   },
   {
    "n": "Moteurs d’inférence",
    "s": "vLLM, llama.cpp…",
    "pal": "blue"
   },
   {
    "n": "Orchestrateur",
    "s": "Kubernetes + pilotes GPU"
   },
   {
    "n": "GPU et stockage",
    "s": "poids, cache, données",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "rentabilite",
  "title": "Sur site ou cloud ?",
  "sub": "un exemple de point d’équilibre",
  "kind": "curve",
  "fn": "breakeven",
  "x0": 120
 }
];
