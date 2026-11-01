export const SPECS = [
 {
  "key": "limites",
  "title": "Six limites des modèles de langage",
  "sub": "ce qu’ils font mal ou pas du tout",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Calcul exact",
    "s": "sans outil, des erreurs",
    "pal": "red"
   },
   {
    "n": "Faits fiables",
    "s": "inventent parfois",
    "pal": "red"
   },
   {
    "n": "Causalité",
    "s": "corrélation ≠ cause"
   },
   {
    "n": "Planification longue",
    "s": "les erreurs s’accumulent"
   },
   {
    "n": "Mémoire durable",
    "s": "aucune en propre"
   },
   {
    "n": "Corps",
    "s": "pas de monde physique",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "genie",
  "title": "Prédire des mondes à la force du calcul",
  "sub": "le cas de Genie",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "image suivante",
  "stages": [
   {
    "n": "Image + action",
    "s": "« avance », « tourne »"
   },
   {
    "n": "Modèle autorégressif",
    "s": "génère l’image suivante",
    "pal": "blue"
   },
   {
    "n": "Historique",
    "s": "la trajectoire grandit à chaque image",
    "pal": "red"
   },
   {
    "n": "24 images/s",
    "s": "en temps réel"
   },
   {
    "n": "Calcul massif",
    "s": "matériel de centre de données",
    "pal": "red"
   },
   {
    "n": "Cohérence",
    "s": "quelques minutes, pas plus",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "approches",
  "title": "Calculer moins",
  "sub": "six pistes pour comprendre le monde à moindre coût",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Prédire en latent",
    "s": "JEPA : l’abstrait, pas les pixels",
    "pal": "blue"
   },
   {
    "n": "Simulateur + correction",
    "s": "la physique connue, le reste appris",
    "pal": "blue"
   },
   {
    "n": "Modèles creux",
    "s": "experts : peu de poids actifs"
   },
   {
    "n": "Capteurs événementiels",
    "s": "ne voir que ce qui change"
   },
   {
    "n": "Apprendre en agissant",
    "s": "interaction plutôt que vidéos",
    "pal": "red"
   },
   {
    "n": "Calculer à la demande",
    "s": "plus de calcul si le cas est dur"
   }
  ],
  "x0": 80
 },
 {
  "key": "energie",
  "title": "Cerveau et machines",
  "sub": "la puissance électrique, en watts",
  "kind": "logbars",
  "unit": "W",
  "axis": "échelle logarithmique, ordres de grandeur",
  "items": [
   {
    "n": "Cerveau humain",
    "v": 20,
    "pal": "red"
   },
   {
    "n": "GPU H100",
    "v": 700,
    "pal": "blue"
   },
   {
    "n": "Serveur 8 GPU",
    "v": 10000,
    "pal": "blue"
   },
   {
    "n": "10 000 GPU",
    "v": 14000000,
    "pal": "dark"
   }
  ],
  "x0": 120
 },
 {
  "key": "culture",
  "title": "Des cellules sur des électrodes",
  "sub": "biocalcul : lire et stimuler des neurones cultivés",
  "kind": "mea",
  "x0": 160
 },
 {
  "key": "hybride",
  "title": "Un modèle hybride",
  "sub": "du vivant, du silicium, un robot",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "retour sensoriel",
  "stages": [
   {
    "n": "Cellules cultivées",
    "s": "support de vie, nutriments",
    "pal": "red"
   },
   {
    "n": "Électrodes",
    "s": "lire et stimuler",
    "pal": "blue"
   },
   {
    "n": "Puce d’interface",
    "s": "signaux ↔ numérique",
    "pal": "blue"
   },
   {
    "n": "Logiciel",
    "s": "apprentissage, décodage"
   },
   {
    "n": "Robot",
    "s": "mouvements, capteurs",
    "pal": "red"
   },
   {
    "n": "Capteurs",
    "s": "renvoient des signaux"
   }
  ],
  "x0": 200
 },
 {
  "key": "chien",
  "title": "Un robot quadrupède",
  "sub": "perception, équilibre, marche",
  "kind": "quad",
  "x0": 240
 },
 {
  "key": "neurosym",
  "title": "Neuro-symbolique",
  "sub": "intuition + vérification",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Modèle neuronal",
    "s": "propose",
    "pal": "blue"
   },
   {
    "n": "Outil symbolique",
    "s": "solveur, prouveur, code",
    "pal": "red"
   },
   {
    "n": "Vérification",
    "s": "exacte et déterministe",
    "pal": "red"
   },
   {
    "n": "Retour",
    "s": "erreur → nouvelle tentative",
    "pal": "blue"
   },
   {
    "n": "Résultat",
    "s": "fiable parce que vérifié"
   },
   {
    "n": "Exemple",
    "s": "AlphaProof + Lean"
   }
  ],
  "x0": 280
 }
];
