export const SPECS = [
 {
  "key": "att",
  "title": "La matrice d’attention",
  "sub": "qui regarde qui",
  "kind": "attn",
  "causal": true,
  "tokens": [
   "Le",
   "chat",
   "dort",
   "car",
   "il",
   "est",
   "fatigué"
  ],
  "scores": [
   [
    1,
    0,
    0,
    0,
    0,
    0,
    0
   ],
   [
    1.2,
    1.5,
    0,
    0,
    0,
    0,
    0
   ],
   [
    0.4,
    2.2,
    1.2,
    0,
    0,
    0,
    0
   ],
   [
    0.2,
    1.0,
    1.3,
    1.0,
    0,
    0,
    0
   ],
   [
    0.1,
    2.9,
    0.8,
    0.3,
    0.9,
    0,
    0
   ],
   [
    0.2,
    1.7,
    0.4,
    0.2,
    1.8,
    0.7,
    0
   ],
   [
    0.1,
    1.6,
    0.9,
    0.2,
    1.5,
    0.8,
    0.9
   ]
  ],
  "x0": 0
 },
 {
  "key": "qkv",
  "title": "Requête, clé, valeur",
  "sub": "les trois projections",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.65,
  "y": 1.6,
  "stages": [
   {
    "n": "Jeton",
    "s": "vecteur x"
   },
   {
    "n": "Q = x·Wq",
    "s": "que cherché-je ?",
    "pal": "blue"
   },
   {
    "n": "K = x·Wk",
    "s": "qu’ai-je à offrir ?",
    "pal": "blue"
   },
   {
    "n": "V = x·Wv",
    "s": "mon contenu",
    "pal": "red"
   },
   {
    "n": "Q·Kᵀ/√d",
    "s": "scores"
   },
   {
    "n": "softmax",
    "s": "poids (somme 1)"
   },
   {
    "n": "Σ poids·V",
    "s": "mélange des valeurs",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "bloc",
  "title": "Un bloc de transformeur",
  "sub": "attention, puis réseau dense, avec des raccourcis",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.7,
  "gap": 0.6,
  "y": 1.4,
  "loop": "× N couches",
  "stages": [
   {
    "n": "Entrée",
    "s": "x"
   },
   {
    "n": "Attention",
    "s": "entre jetons",
    "pal": "blue"
   },
   {
    "n": "+ Norme",
    "s": "raccourci"
   },
   {
    "n": "MLP",
    "s": "par jeton",
    "pal": "red"
   },
   {
    "n": "+ Norme",
    "s": "raccourci"
   }
  ],
  "x0": 80
 },
 {
  "key": "pile",
  "title": "L’empilement",
  "sub": "de l’entrée aux scores",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.1,
  "gap": 0.8,
  "y": 1.6,
  "stages": [
   {
    "n": "Plongements"
   },
   {
    "n": "Bloc 1",
    "s": "",
    "pal": "blue"
   },
   {
    "n": "Bloc 2",
    "pal": "blue"
   },
   {
    "n": "…",
    "pal": "blue"
   },
   {
    "n": "Bloc N",
    "pal": "blue"
   },
   {
    "n": "Logits",
    "s": "un score par mot",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
