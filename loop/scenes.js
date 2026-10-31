export const SPECS = [
 {
  "key": "gv",
  "title": "Générer, vérifier, corriger",
  "sub": "la boucle de base",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.5,
  "nodes": [
   {
    "n": "Générer",
    "pal": "blue"
   },
   {
    "n": "Vérifier",
    "pal": "red"
   },
   {
    "n": "Diagnostiquer"
   },
   {
    "n": "Corriger"
   }
  ],
  "center": "jusqu’à validation",
  "x0": 0
 },
 {
  "key": "passk",
  "title": "Essayer plusieurs fois",
  "sub": "pass@k : réussir au moins une fois en k essais",
  "kind": "curve",
  "fn": "passk",
  "x0": 40
 },
 {
  "key": "budget",
  "title": "Les garde-fous",
  "sub": "une boucle sans limite est un risque",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Nombre de tours",
    "s": "plafond dur",
    "pal": "red"
   },
   {
    "n": "Coût",
    "s": "jetons, argent"
   },
   {
    "n": "Temps",
    "s": "délai maximal"
   },
   {
    "n": "Pas de progrès",
    "s": "détecter les boucles",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "memoire",
  "title": "Tenir sur la durée",
  "sub": "le contexte se remplit",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "contexte propre",
  "stages": [
   {
    "n": "Travailler",
    "s": "le contexte se remplit",
    "pal": "blue"
   },
   {
    "n": "Contexte plein",
    "s": "limite atteinte",
    "pal": "red"
   },
   {
    "n": "Compacter",
    "s": "résumer l’essentiel"
   },
   {
    "n": "Notes dans des fichiers",
    "s": "plan, décisions, état"
   },
   {
    "n": "Contexte propre",
    "s": "relire les notes"
   }
  ],
  "x0": 120
 },
 {
  "key": "obs",
  "title": "Observer",
  "sub": "on ne corrige que ce qu’on voit",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Journaux",
    "s": "chaque appel"
   },
   {
    "n": "Traces",
    "s": "la trajectoire complète",
    "pal": "blue"
   },
   {
    "n": "Évaluations",
    "s": "suite de tâches test",
    "pal": "blue"
   },
   {
    "n": "Alertes",
    "s": "coût, échecs",
    "pal": "red"
   }
  ],
  "x0": 160
 }
];
