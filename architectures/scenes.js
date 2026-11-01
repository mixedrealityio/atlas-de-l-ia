export const SPECS = [
 {
  "key": "rnn",
  "title": "Un réseau récurrent",
  "sub": "une mémoire passée de pas en pas",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Mot 1",
    "s": "x₁"
   },
   {
    "n": "État h₁",
    "s": "résumé de « mot 1 »",
    "pal": "blue"
   },
   {
    "n": "État h₂",
    "s": "+ « mot 2 »",
    "pal": "blue"
   },
   {
    "n": "État h₃",
    "s": "+ « mot 3 »",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "lstm",
  "title": "Les portes du LSTM",
  "sub": "oublier, écrire, lire",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Mémoire de cellule",
    "s": "le fil conducteur",
    "pal": "blue"
   },
   {
    "n": "Porte d’oubli",
    "s": "que garder ?",
    "pal": "red"
   },
   {
    "n": "Porte d’entrée",
    "s": "que écrire ?",
    "pal": "red"
   },
   {
    "n": "Porte de sortie",
    "s": "que montrer ?",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "cout",
  "title": "Le coût de l’attention",
  "sub": "n² contre n",
  "kind": "curve",
  "fn": "complexite",
  "x0": 80
 },
 {
  "key": "moe",
  "title": "Mélange d’experts",
  "sub": "n’activer qu’une partie du modèle",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Jeton",
    "s": "un vecteur"
   },
   {
    "n": "Routeur",
    "s": "choisit 2 experts sur 8",
    "pal": "red"
   },
   {
    "n": "Expert 3",
    "s": "un MLP spécialisé",
    "pal": "blue"
   },
   {
    "n": "Expert 7",
    "s": "un autre MLP",
    "pal": "blue"
   },
   {
    "n": "Somme pondérée",
    "s": "des deux sorties"
   },
   {
    "n": "Jeton suivant",
    "s": "couche suivante"
   }
  ],
  "x0": 120
 },
 {
  "key": "ssm",
  "title": "Les modèles à espace d’état",
  "sub": "Mamba et les hybrides",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Entrée",
    "s": "le jeton courant"
   },
   {
    "n": "État compact",
    "s": "taille fixe",
    "pal": "blue"
   },
   {
    "n": "Mise à jour sélective",
    "s": "dépend de l’entrée",
    "pal": "red"
   },
   {
    "n": "Sortie",
    "s": "coût linéaire"
   }
  ],
  "x0": 160
 },
 {
  "key": "gnn",
  "title": "Les réseaux de graphes",
  "sub": "raisonner en relations",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "loop": "plusieurs tours",
  "stages": [
   {
    "n": "Nœud",
    "s": "un atome, une personne"
   },
   {
    "n": "Messages",
    "s": "des voisins",
    "pal": "blue"
   },
   {
    "n": "Agrégation",
    "s": "somme, moyenne",
    "pal": "blue"
   },
   {
    "n": "Nouvel état",
    "s": "du nœud",
    "pal": "red"
   }
  ],
  "x0": 200
 },
 {
  "key": "alt",
  "title": "Autres architectures émergentes",
  "sub": "RWKV, RetNet, xLSTM, réseaux liquides",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "RWKV",
    "s": "RNN entraînable comme un transformeur, 2023",
    "pal": "blue"
   },
   {
    "n": "RetNet",
    "s": "« rétention » récurrente, 2023",
    "pal": "blue"
   },
   {
    "n": "xLSTM",
    "s": "LSTM modernisé, 2024",
    "pal": "blue"
   },
   {
    "n": "Réseaux liquides",
    "s": "neurones à équation différentielle",
    "pal": "red"
   },
   {
    "n": "But commun",
    "s": "coût linéaire, mémoire constante",
    "pal": "red"
   },
   {
    "n": "Statut",
    "s": "prometteur, peu déployé",
    "pal": "dark"
   }
  ],
  "x0": 240
 }
];
