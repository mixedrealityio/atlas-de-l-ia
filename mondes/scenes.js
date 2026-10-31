export const SPECS = [
 {
  "key": "latent",
  "title": "Un modèle du monde",
  "sub": "encoder, prédire, comparer",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "l’état suivant devient l’état courant",
  "stages": [
   {
    "n": "Observation",
    "s": "image, capteurs"
   },
   {
    "n": "Encodeur",
    "s": "vers un état latent",
    "pal": "blue"
   },
   {
    "n": "État latent",
    "s": "résumé compact"
   },
   {
    "n": "Dynamique",
    "s": "état + action → état suivant",
    "pal": "red"
   },
   {
    "n": "Prédiction",
    "s": "état suivant"
   },
   {
    "n": "Comparaison",
    "s": "avec la réalité"
   }
  ],
  "x0": 0
 },
 {
  "key": "imagine",
  "title": "Imaginer avant d’agir",
  "sub": "plusieurs futurs essayés dans la tête",
  "kind": "grid",
  "rows": 4,
  "cols": 6,
  "walls": [
   [
    1,
    1
   ],
   [
    1,
    2
   ],
   [
    2,
    4
   ]
  ],
  "goal": [
   0,
   5
  ],
  "traps": [
   [
    3,
    3
   ]
  ],
  "goalLabel": "but",
  "showGhost": true,
  "paths": [
   {
    "cells": [
     [
      3,
      0
     ],
     [
      3,
      1
     ],
     [
      3,
      2
     ],
     [
      3,
      3
     ]
    ],
    "ghost": true,
    "pal": "blue"
   },
   {
    "cells": [
     [
      3,
      0
     ],
     [
      2,
      0
     ],
     [
      2,
      1
     ],
     [
      2,
      2
     ],
     [
      2,
      3
     ]
    ],
    "ghost": true,
    "pal": "blue"
   },
   {
    "cells": [
     [
      3,
      0
     ],
     [
      2,
      0
     ],
     [
      2,
      1
     ],
     [
      2,
      2
     ],
     [
      1,
      3
     ],
     [
      0,
      3
     ],
     [
      0,
      4
     ],
     [
      0,
      5
     ]
    ],
    "info": "trajectoire choisie : la meilleure parmi celles imaginées"
   }
  ],
  "x0": 40
 },
 {
  "key": "jepa",
  "title": "Prédire des représentations",
  "sub": "l’idée JEPA",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Contexte",
    "s": "partie visible"
   },
   {
    "n": "Encodeur",
    "s": "représentation",
    "pal": "blue"
   },
   {
    "n": "Prédicteur",
    "s": "devine la représentation masquée",
    "pal": "red"
   },
   {
    "n": "Cible",
    "s": "représentation de la partie masquée"
   },
   {
    "n": "Erreur",
    "s": "dans l’espace des représentations"
   },
   {
    "n": "Pas de pixels",
    "s": "on ne prédit pas chaque détail",
    "pal": "paper"
   }
  ],
  "x0": 80
 },
 {
  "key": "video",
  "title": "Les modèles du monde génératifs",
  "sub": "générer la suite d’une scène",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "on recommence",
  "stages": [
   {
    "n": "Image + action",
    "s": "« avance », « saute »"
   },
   {
    "n": "Modèle génératif",
    "s": "vidéo, jeu, simulation",
    "pal": "blue"
   },
   {
    "n": "Image suivante",
    "s": "la scène qui évolue",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
