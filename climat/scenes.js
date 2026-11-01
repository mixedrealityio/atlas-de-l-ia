export const SPECS = [
 {
  "key": "prevoir",
  "title": "Prévoir et observer",
  "sub": "le climat vu par l’IA",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Météo",
    "s": "modèles appris comme GraphCast (chapitre 47)",
    "pal": "blue"
   },
   {
    "n": "Climat",
    "s": "émulateurs de modèles lourds",
    "pal": "blue"
   },
   {
    "n": "Extrêmes",
    "s": "crues, incendies, cyclones",
    "pal": "red"
   },
   {
    "n": "Satellites",
    "s": "déforestation, fuites de méthane",
    "pal": "blue"
   },
   {
    "n": "Biodiversité",
    "s": "sons, pièges photographiques, ADN",
    "pal": "blue"
   },
   {
    "n": "Océans",
    "s": "navires, pêche illégale"
   }
  ],
  "x0": 0
 },
 {
  "key": "reduire",
  "title": "Réduire les émissions",
  "sub": "optimiser des systèmes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Réseaux électriques",
    "s": "prévoir solaire et éolien",
    "pal": "blue"
   },
   {
    "n": "Bâtiments",
    "s": "chauffage et climatisation pilotés",
    "pal": "blue"
   },
   {
    "n": "Industrie",
    "s": "procédés, nouveaux matériaux"
   },
   {
    "n": "Centres de données",
    "s": "refroidissement optimisé",
    "pal": "blue"
   },
   {
    "n": "Transports",
    "s": "itinéraires, recharge (chapitre 63)",
    "pal": "blue"
   },
   {
    "n": "Effet rebond",
    "s": "les gains peuvent être annulés (chapitre 35)",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "empreinte",
  "title": "L’empreinte de l’IA",
  "sub": "énergie, eau, matériel",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Entraînement",
    "s": "un coût ponctuel élevé",
    "pal": "red"
   },
   {
    "n": "Inférence",
    "s": "un coût répété, souvent dominant",
    "pal": "red"
   },
   {
    "n": "Électricité",
    "s": "≈ 1,5 % de la consommation mondiale pour les centres de données (2024)",
    "pal": "red"
   },
   {
    "n": "Eau",
    "s": "refroidissement, production d’électricité",
    "pal": "red"
   },
   {
    "n": "Matériel",
    "s": "métaux, fabrication, déchets"
   },
   {
    "n": "Mesurer",
    "s": "publier énergie et émissions",
    "pal": "blue"
   }
  ],
  "x0": 80
 },
 {
  "key": "sobre",
  "title": "Une IA sobre",
  "sub": "choisir le juste outil",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Petit modèle",
    "s": "souvent suffisant",
    "pal": "blue"
   },
   {
    "n": "Quantifier",
    "s": "chapitre 43",
    "pal": "blue"
   },
   {
    "n": "Lieu et heure",
    "s": "électricité bas carbone",
    "pal": "blue"
   },
   {
    "n": "Réutiliser",
    "s": "affiner plutôt que réentraîner"
   },
   {
    "n": "Juste besoin",
    "s": "l’IA n’est pas toujours la solution",
    "pal": "red"
   },
   {
    "n": "Transparence",
    "s": "des chiffres publiés"
   }
  ],
  "x0": 120
 }
];
