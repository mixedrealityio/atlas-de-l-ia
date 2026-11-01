export const SPECS = [
 {
  "key": "chaine",
  "title": "La chaîne de conduite",
  "sub": "percevoir, prévoir, agir",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Capteurs",
    "s": "caméras, radar, LiDAR",
    "pal": "blue"
   },
   {
    "n": "Perception",
    "s": "détecter et suivre (chapitre 8)",
    "pal": "blue"
   },
   {
    "n": "Prédiction",
    "s": "que vont faire les autres ?",
    "pal": "red"
   },
   {
    "n": "Planification",
    "s": "une trajectoire sûre et confortable"
   },
   {
    "n": "Commande",
    "s": "volant, accélérateur, freins",
    "pal": "blue"
   },
   {
    "n": "Supervision",
    "s": "conducteur ou téléassistance",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "niveaux",
  "title": "Les niveaux d’automatisation",
  "sub": "l’échelle SAE J3016",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Niveau 0",
    "s": "aucune automatisation"
   },
   {
    "n": "Niveau 1",
    "s": "une aide : régulateur adaptatif"
   },
   {
    "n": "Niveau 2",
    "s": "aides combinées, conducteur vigilant",
    "pal": "blue"
   },
   {
    "n": "Niveau 3",
    "s": "le système conduit, reprise sur demande",
    "pal": "blue"
   },
   {
    "n": "Niveau 4",
    "s": "sans conducteur, dans une zone définie",
    "pal": "red"
   },
   {
    "n": "Niveau 5",
    "s": "partout, en toutes conditions",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "approches",
  "title": "Deux philosophies",
  "sub": "et le problème de la longue traîne",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Modulaire",
    "s": "perception, prédiction, plan séparés",
    "pal": "blue"
   },
   {
    "n": "Bout en bout",
    "s": "un réseau des pixels aux commandes",
    "pal": "red"
   },
   {
    "n": "Cartes détaillées et LiDAR",
    "s": "approche de type Waymo"
   },
   {
    "n": "Caméras seules",
    "s": "approche de type Tesla"
   },
   {
    "n": "Simulation",
    "s": "des milliards de kilomètres virtuels",
    "pal": "blue"
   },
   {
    "n": "Longue traîne",
    "s": "les cas rares décident de la sûreté",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "logistique",
  "title": "Logistique et villes",
  "sub": "au-delà de la voiture",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Tournées",
    "s": "optimiser les livraisons",
    "pal": "blue"
   },
   {
    "n": "Trafic",
    "s": "feux adaptatifs, prévision",
    "pal": "blue"
   },
   {
    "n": "Rail et aérien",
    "s": "maintenance prédictive (chapitre 51)"
   },
   {
    "n": "Entrepôts",
    "s": "robots et planification"
   },
   {
    "n": "Robotaxis",
    "s": "en service commercial dans quelques villes",
    "pal": "red"
   },
   {
    "n": "Responsabilité",
    "s": "qui répond d’un accident ?",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
