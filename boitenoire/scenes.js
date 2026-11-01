export const SPECS = [
 {
  "key": "savoir",
  "title": "Ce qu’on sait, ce qu’on ne sait pas",
  "sub": "observer n’est pas comprendre",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Architecture",
    "s": "connue, publiée",
    "pal": "blue"
   },
   {
    "n": "Chaque poids",
    "s": "lisible, copiable",
    "pal": "blue"
   },
   {
    "n": "Chaque calcul",
    "s": "rejouable à l’identique",
    "pal": "blue"
   },
   {
    "n": "Chaque activation",
    "s": "mesurable",
    "pal": "blue"
   },
   {
    "n": "Pourquoi ce résultat ?",
    "s": "pas d’explication lisible",
    "pal": "red"
   },
   {
    "n": "Que fera-t-il demain ?",
    "s": "non prévisible en général",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "raisons",
  "title": "Six raisons",
  "sub": "pourquoi c’est si difficile",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Programme non écrit",
    "s": "appris, sans intention lisible",
    "pal": "red"
   },
   {
    "n": "Des milliards de nombres",
    "s": "sans noms ni commentaires",
    "pal": "red"
   },
   {
    "n": "Représentations distribuées",
    "s": "un concept sur des milliers de neurones",
    "pal": "red"
   },
   {
    "n": "Superposition",
    "s": "un neurone, plusieurs concepts",
    "pal": "red"
   },
   {
    "n": "Interactions non linéaires",
    "s": "tout dépend de tout",
    "pal": "red"
   },
   {
    "n": "Pas de spécification",
    "s": "on ne sait pas ce qu’il devrait calculer",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "distribue",
  "title": "Un concept, plusieurs neurones",
  "sub": "représentation distribuée et superposition",
  "kind": "net",
  "layers": [
   3,
   6,
   6,
   3
  ],
  "names": [
   "Entrée",
   "Couche 1",
   "Couche 2",
   "Sortie"
  ],
  "params": "chaque concept est une direction dans un espace de milliers de dimensions",
  "x0": 80
 },
 {
  "key": "fidele",
  "title": "Le modèle peut-il expliquer ?",
  "sub": "ses explications ne sont pas fiables",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Question",
    "s": "pourquoi cette réponse ?"
   },
   {
    "n": "Explication écrite",
    "s": "plausible",
    "pal": "blue"
   },
   {
    "n": "Calcul réel",
    "s": "autre chose",
    "pal": "red"
   },
   {
    "n": "Écart",
    "s": "raison non citée",
    "pal": "red"
   },
   {
    "n": "Études",
    "s": "chaînes de pensée non fidèles",
    "pal": "red"
   },
   {
    "n": "Conséquence",
    "s": "ne pas la prendre pour une preuve",
    "pal": "red"
   }
  ],
  "x0": 120
 },
 {
  "key": "compris",
  "title": "Ce qu’on a quand même compris",
  "sub": "des éclairages locaux",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Têtes d’induction",
    "s": "copier un motif (2022)",
    "pal": "blue"
   },
   {
    "n": "Circuits d’arithmétique",
    "s": "petits modèles, addition modulaire",
    "pal": "blue"
   },
   {
    "n": "Caractéristiques (SAE)",
    "s": "millions identifiées (2024)",
    "pal": "blue"
   },
   {
    "n": "Planification interne",
    "s": "rimes anticipées (2025)",
    "pal": "blue"
   },
   {
    "n": "Couverture",
    "s": "partielle, petits cas",
    "pal": "red"
   },
   {
    "n": "Reste",
    "s": "les grands modèles en général",
    "pal": "red"
   }
  ],
  "x0": 160
 },
 {
  "key": "analogie",
  "title": "Trois analogies",
  "sub": "pour s’y retrouver",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Le cerveau",
    "s": "on voit les neurones, pas la pensée",
    "pal": "blue"
   },
   {
    "n": "La machine à vapeur",
    "s": "construite avant la thermodynamique",
    "pal": "blue"
   },
   {
    "n": "La météo",
    "s": "équations connues, comportement non prévisible",
    "pal": "blue"
   },
   {
    "n": "Un très gros programme",
    "s": "sans le code source",
    "pal": "blue"
   },
   {
    "n": "Point commun",
    "s": "le système marche avant d’être compris",
    "pal": "red"
   },
   {
    "n": "Différence",
    "s": "ici on peut tout mesurer",
    "pal": "red"
   }
  ],
  "x0": 200
 },
 {
  "key": "enjeux",
  "title": "Pourquoi cela compte",
  "sub": "conséquences pratiques",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Sûreté",
    "s": "pas de garantie d’absence de comportement caché",
    "pal": "red"
   },
   {
    "n": "Confiance",
    "s": "décisions à enjeu",
    "pal": "red"
   },
   {
    "n": "Audit et droit",
    "s": "expliquer une décision",
    "pal": "red"
   },
   {
    "n": "Débogage",
    "s": "corriger à l’aveugle",
    "pal": "red"
   },
   {
    "n": "Parades",
    "s": "tests, red teaming, surveillance",
    "pal": "blue"
   },
   {
    "n": "Recherche",
    "s": "interprétabilité",
    "pal": "blue"
   }
  ],
  "x0": 240
 }
];
