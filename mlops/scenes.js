export const SPECS = [
 {
  "key": "chaine",
  "title": "La chaîne de livraison",
  "sub": "de l’expérience à la production",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Versionner",
    "s": "code, données, modèle, prompt",
    "pal": "blue"
   },
   {
    "n": "Tester",
    "s": "évaluations automatiques",
    "pal": "blue"
   },
   {
    "n": "Registre",
    "s": "modèles approuvés"
   },
   {
    "n": "Déployer",
    "s": "canary, A/B",
    "pal": "red"
   },
   {
    "n": "Observer",
    "s": "latence, coût, dérive, erreurs",
    "pal": "red"
   },
   {
    "n": "Boucle",
    "s": "retour vers l’amélioration",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "obs",
  "title": "Observer un système à LLM",
  "sub": "ce qu’on mesure",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Traces",
    "s": "chaque appel, chaque outil",
    "pal": "blue"
   },
   {
    "n": "Coût",
    "s": "jetons par requête"
   },
   {
    "n": "Latence",
    "s": "premier jeton, total"
   },
   {
    "n": "Qualité",
    "s": "notes, retours, juge",
    "pal": "red"
   },
   {
    "n": "Dérive",
    "s": "les entrées changent",
    "pal": "red"
   },
   {
    "n": "Sécurité",
    "s": "injections, fuites",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
