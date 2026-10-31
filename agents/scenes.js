export const SPECS = [
 {
  "key": "react",
  "title": "La boucle de l’agent",
  "sub": "penser, agir, observer",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.45,
  "nodes": [
   {
    "n": "Penser",
    "pal": "blue"
   },
   {
    "n": "Agir (outil)",
    "pal": "red"
   },
   {
    "n": "Observer"
   },
   {
    "n": "Fini ?"
   }
  ],
  "center": "jusqu’à l’objectif",
  "x0": 0
 },
 {
  "key": "plan",
  "title": "Planifier",
  "sub": "décomposer un objectif",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Objectif",
    "s": "« corriger ce bogue »",
    "pal": "red"
   },
   {
    "n": "Plan",
    "s": "étapes ordonnées",
    "pal": "blue"
   },
   {
    "n": "Étape 1",
    "s": "lire le code"
   },
   {
    "n": "Étape 2",
    "s": "reproduire le bogue"
   },
   {
    "n": "Étape 3",
    "s": "corriger et tester"
   },
   {
    "n": "Vérification",
    "s": "le plan a-t-il réussi ?",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "multi",
  "title": "Plusieurs agents",
  "sub": "un orchestrateur et des spécialistes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Orchestrateur",
    "s": "découpe la tâche",
    "pal": "blue"
   },
   {
    "n": "Agent A",
    "s": "recherche"
   },
   {
    "n": "Agent B",
    "s": "écriture"
   },
   {
    "n": "Agent C",
    "s": "tests"
   },
   {
    "n": "Fusion",
    "s": "combine les résultats"
   },
   {
    "n": "Réponse",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "chaine",
  "title": "Les erreurs s’accumulent",
  "sub": "la fiabilité d’une chaîne d’étapes",
  "kind": "curve",
  "fn": "chain",
  "x0": 120
 }
];
