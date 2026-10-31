export const SPECS = [
 {
  "key": "boucle",
  "title": "La boucle du robot",
  "sub": "percevoir, comprendre, décider, agir",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.5,
  "nodes": [
   {
    "n": "Percevoir",
    "pal": "blue"
   },
   {
    "n": "Comprendre"
   },
   {
    "n": "Planifier",
    "pal": "red"
   },
   {
    "n": "Agir"
   }
  ],
  "center": "des dizaines de fois par seconde",
  "x0": 0
 },
 {
  "key": "bras",
  "title": "Un bras qui saisit",
  "sub": "deux articulations, une caméra",
  "kind": "arm",
  "targetName": "Objet à saisir",
  "targetLabel": "objet",
  "x0": 40
 },
 {
  "key": "vla",
  "title": "Les modèles vision-langage-action",
  "sub": "une consigne, des images, des mouvements",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Images",
    "s": "caméras du robot"
   },
   {
    "n": "Consigne",
    "s": "« range la tasse »"
   },
   {
    "n": "Modèle VLA",
    "s": "vision + langage + action",
    "pal": "blue"
   },
   {
    "n": "Actions",
    "s": "mouvements des articulations",
    "pal": "red"
   },
   {
    "n": "Robot",
    "s": "exécute"
   },
   {
    "n": "Nouvelles images",
    "s": "retour au début"
   }
  ],
  "x0": 80
 },
 {
  "key": "sim",
  "title": "De la simulation au réel",
  "sub": "s’entraîner des millions de fois sans casser un robot",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Simulateur",
    "s": "millions d’essais",
    "pal": "blue"
   },
   {
    "n": "Randomisation",
    "s": "masses, frottements, lumière"
   },
   {
    "n": "Politique apprise",
    "s": "par renforcement",
    "pal": "red"
   },
   {
    "n": "Robot réel",
    "s": "test et ajustements"
   },
   {
    "n": "Écart sim-réel",
    "s": "ce que la simulation rate"
   },
   {
    "n": "Données réelles",
    "s": "pour corriger",
    "pal": "blue"
   }
  ],
  "x0": 120
 }
];
