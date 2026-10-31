export const SPECS = [
 {
  "key": "agent",
  "title": "Agent et environnement",
  "sub": "la boucle du renforcement",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.5,
  "nodes": [
   {
    "n": "Agent (politique)",
    "pal": "blue"
   },
   {
    "n": "Action"
   },
   {
    "n": "Environnement",
    "pal": "red"
   },
   {
    "n": "État + récompense"
   }
  ],
  "center": "essai et erreur",
  "x0": 0
 },
 {
  "key": "grille",
  "title": "Un monde en grille",
  "sub": "chemin appris et chemin hasardeux",
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
  "goalLabel": "+1",
  "paths": [
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
    "info": "politique apprise : atteint le but en 7 pas"
   },
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
    "info": "essai au hasard : tombe dans le piège (−1)"
   }
  ],
  "x0": 40
 },
 {
  "key": "rlhf",
  "title": "Renforcement pour un modèle de langage",
  "sub": "écrire, noter, corriger",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "mise à jour de la politique",
  "stages": [
   {
    "n": "Invite",
    "s": "une consigne"
   },
   {
    "n": "Réponses",
    "s": "k essais par invite",
    "pal": "blue"
   },
   {
    "n": "Juge",
    "s": "préférence, test…",
    "pal": "red"
   },
   {
    "n": "Avantage",
    "s": "mieux que la moyenne ?"
   },
   {
    "n": "Mise à jour",
    "s": "poids du modèle",
    "pal": "blue"
   },
   {
    "n": "Garde-fou",
    "s": "rester près du modèle initial (KL)"
   }
  ],
  "x0": 80
 },
 {
  "key": "hacking",
  "title": "Quand la récompense trompe",
  "sub": "proxy contre qualité réelle",
  "kind": "curve",
  "fn": "reward",
  "x0": 120
 }
];
