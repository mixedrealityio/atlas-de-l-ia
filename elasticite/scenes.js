export const SPECS = [
 {
  "key": "elast",
  "title": "Trois élasticités",
  "sub": "quand le prix baisse",
  "kind": "curve",
  "fn": "elasticite",
  "x0": 0
 },
 {
  "key": "jevons",
  "title": "Le paradoxe de Jevons",
  "sub": "plus efficace, donc plus utilisé",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Coût unitaire baisse",
    "s": "la ressource devient efficace",
    "pal": "blue"
   },
   {
    "n": "Usages nouveaux",
    "s": "devenus rentables",
    "pal": "blue"
   },
   {
    "n": "Demande élastique",
    "s": "ε > 1",
    "pal": "red"
   },
   {
    "n": "Consommation totale monte",
    "s": "malgré l’efficacité",
    "pal": "red"
   },
   {
    "n": "Demande inélastique",
    "s": "ε < 1"
   },
   {
    "n": "Consommation totale baisse",
    "s": "l’efficacité suffit"
   }
  ],
  "x0": 40
 },
 {
  "key": "taches",
  "title": "Des tâches, pas des métiers",
  "sub": "ce que l’IA touche vraiment",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Un métier",
    "s": "un faisceau de tâches"
   },
   {
    "n": "Tâches automatisées",
    "s": "l’IA les fait seule",
    "pal": "red"
   },
   {
    "n": "Tâches augmentées",
    "s": "l’humain va plus vite",
    "pal": "blue"
   },
   {
    "n": "Tâches nouvelles",
    "s": "créées autour de l’outil",
    "pal": "blue"
   },
   {
    "n": "Tâches intactes",
    "s": "relation, décision, responsabilité"
   },
   {
    "n": "Résultat",
    "s": "le métier se recompose",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "facteurs",
  "title": "Ce qui fait pencher la balance",
  "sub": "cinq facteurs",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Élasticité du produit",
    "s": "plus de demande si moins cher ?",
    "pal": "blue"
   },
   {
    "n": "Part de la tâche",
    "s": "dans la valeur du produit",
    "pal": "blue"
   },
   {
    "n": "Substitut ou complément",
    "s": "l’IA remplace-t-elle ou aide ?",
    "pal": "red"
   },
   {
    "n": "Goulots restants",
    "s": "vérification, régulation, confiance",
    "pal": "blue"
   },
   {
    "n": "Vitesse de diffusion",
    "s": "adoption et réorganisation"
   },
   {
    "n": "Concurrence",
    "s": "gains gardés ou rendus aux clients"
   }
  ],
  "x0": 120
 }
];
