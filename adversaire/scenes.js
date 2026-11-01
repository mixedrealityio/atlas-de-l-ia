export const SPECS = [
 {
  "key": "exemples",
  "title": "Exemples adverses",
  "sub": "une perturbation qui trompe",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Image saine",
    "s": "classée correctement"
   },
   {
    "n": "Perturbation minime",
    "s": "invisible à l’œil",
    "pal": "red"
   },
   {
    "n": "Image perturbée",
    "s": "même aspect"
   },
   {
    "n": "Classement faux",
    "s": "avec forte confiance",
    "pal": "red"
   },
   {
    "n": "Défense",
    "s": "entraînement adverse, détection",
    "pal": "blue"
   },
   {
    "n": "Garantie",
    "s": "robustesse certifiée, limitée",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "poison",
  "title": "Empoisonnement et portes dérobées",
  "sub": "attaquer les données",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Données ouvertes",
    "s": "web, dépôts"
   },
   {
    "n": "Insertion",
    "s": "quelques exemples piégés",
    "pal": "red"
   },
   {
    "n": "Entraînement",
    "s": "le modèle les apprend",
    "pal": "blue"
   },
   {
    "n": "Déclencheur",
    "s": "un motif précis",
    "pal": "red"
   },
   {
    "n": "Comportement caché",
    "s": "porte dérobée",
    "pal": "red"
   },
   {
    "n": "Parades",
    "s": "provenance, filtrage, audits",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "surface",
  "title": "Les surfaces d’attaque d’un système à LLM",
  "sub": "où cela se passe",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Injection de prompt",
    "s": "directe ou via un document",
    "pal": "red"
   },
   {
    "n": "Jailbreak",
    "s": "contourner les règles",
    "pal": "red"
   },
   {
    "n": "Extraction",
    "s": "copier le modèle ou ses données",
    "pal": "red"
   },
   {
    "n": "Inférence d’appartenance",
    "s": "cette donnée était-elle dans l’entraînement ?",
    "pal": "red"
   },
   {
    "n": "Chaîne logicielle",
    "s": "paquets, plugins",
    "pal": "red"
   },
   {
    "n": "Défense",
    "s": "moindre privilège, filtres, tests",
    "pal": "blue"
   }
  ],
  "x0": 80
 }
];
