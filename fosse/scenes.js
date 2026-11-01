export const SPECS = [
 {
  "key": "banal",
  "title": "Ce qui se banalise",
  "sub": "ce que l’IA fait déjà bien",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Code standard",
    "s": "CRUD, formulaires, glue",
    "pal": "red"
   },
   {
    "n": "Tests simples",
    "s": "cas évidents",
    "pal": "red"
   },
   {
    "n": "Traduction de code",
    "s": "d’un langage à un autre",
    "pal": "red"
   },
   {
    "n": "Documentation",
    "s": "premier jet",
    "pal": "red"
   },
   {
    "n": "Exemples connus",
    "s": "problèmes bien documentés",
    "pal": "red"
   },
   {
    "n": "Conséquence",
    "s": "le coût d’écrire baisse",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "rare",
  "title": "Ce qui reste rare",
  "sub": "où la valeur se déplace",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Comprendre le besoin",
    "s": "le vrai problème",
    "pal": "blue"
   },
   {
    "n": "Spécifier",
    "s": "intention précise, cas limites",
    "pal": "blue"
   },
   {
    "n": "Arbitrer",
    "s": "architecture, coûts, risques",
    "pal": "blue"
   },
   {
    "n": "Vérifier",
    "s": "tests, revue, sécurité",
    "pal": "red"
   },
   {
    "n": "Exploiter",
    "s": "fiabilité, pannes, données réelles",
    "pal": "red"
   },
   {
    "n": "Répondre de",
    "s": "responsabilité, confiance",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "chaine",
  "title": "La nouvelle chaîne",
  "sub": "de l’intention à l’exploitation",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Intention",
    "s": "ce qu’on veut vraiment",
    "pal": "blue"
   },
   {
    "n": "Spécification",
    "s": "contraintes, critères",
    "pal": "blue"
   },
   {
    "n": "Agent",
    "s": "génère et teste",
    "pal": "red"
   },
   {
    "n": "Vérification",
    "s": "revue, tests, sécurité",
    "pal": "blue"
   },
   {
    "n": "Mise en production",
    "s": "déploiement, observabilité"
   },
   {
    "n": "Retour",
    "s": "incidents, usage réel",
    "pal": "red"
   }
  ],
  "loop": "itérer",
  "x0": 80
 },
 {
  "key": "goulot",
  "title": "Le goulot de la vérification",
  "sub": "générer vite, vérifier lentement",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Génération",
    "s": "quasi instantanée",
    "pal": "blue"
   },
   {
    "n": "Volume de code",
    "s": "explose",
    "pal": "red"
   },
   {
    "n": "Relecture",
    "s": "limitée par l’attention humaine",
    "pal": "red"
   },
   {
    "n": "Dette cachée",
    "s": "code non compris",
    "pal": "red"
   },
   {
    "n": "Parades",
    "s": "tests, types, revues ciblées",
    "pal": "blue"
   },
   {
    "n": "Compétence rare",
    "s": "juger vite et juste",
    "pal": "red"
   }
  ],
  "x0": 120
 },
 {
  "key": "fossesdurables",
  "title": "Des fossés durables",
  "sub": "ce qui protège un ingénieur",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Connaissance du domaine",
    "s": "métier, réglementation",
    "pal": "blue"
   },
   {
    "n": "Confiance",
    "s": "relation, réputation",
    "pal": "blue"
   },
   {
    "n": "Systèmes réels",
    "s": "contraintes, héritage, données",
    "pal": "blue"
   },
   {
    "n": "Sécurité et fiabilité",
    "s": "enjeu critique",
    "pal": "red"
   },
   {
    "n": "Coordination",
    "s": "équipes, parties prenantes",
    "pal": "blue"
   },
   {
    "n": "Apprendre vite",
    "s": "outils et domaines nouveaux",
    "pal": "red"
   }
  ],
  "x0": 160
 }
];
