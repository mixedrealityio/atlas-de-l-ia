export const SPECS = [
 {
  "key": "archi",
  "title": "L’architecture d’ensemble",
  "sub": "une boucle de dialogue et d’action",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "loop": "boucle de dialogue",
  "stages": [
   {
    "n": "Micro, caméra",
    "s": "signaux bruts"
   },
   {
    "n": "Perception",
    "s": "parole, scène, sons",
    "pal": "blue"
   },
   {
    "n": "Mémoire",
    "s": "rappeler, enregistrer",
    "pal": "blue"
   },
   {
    "n": "Raisonnement",
    "s": "le modèle de langage",
    "pal": "red"
   },
   {
    "n": "État affectif",
    "s": "humeur simulée",
    "pal": "blue"
   },
   {
    "n": "Expression",
    "s": "voix, gestes, regard"
   },
   {
    "n": "Actions",
    "s": "API du robot, sous contrôle",
    "pal": "red"
   },
   {
    "n": "Capteurs",
    "s": "résultat observé"
   }
  ],
  "x0": 0
 },
 {
  "key": "memoire",
  "title": "Quatre mémoires",
  "sub": "le modèle seul n’en a aucune",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Court terme",
    "s": "le contexte en cours",
    "pal": "blue"
   },
   {
    "n": "Épisodique",
    "s": "journal des échanges",
    "pal": "red"
   },
   {
    "n": "Sémantique",
    "s": "faits, préférences",
    "pal": "red"
   },
   {
    "n": "Procédurale",
    "s": "savoir-faire, compétences",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "affect",
  "title": "L’état affectif",
  "sub": "valence et activation",
  "kind": "scatter",
  "by": 2.4,
  "points": [
   {
    "n": "neutre",
    "x": 0,
    "y": 0
   },
   {
    "n": "joie",
    "x": 2.6,
    "y": 1.2,
    "c": "red"
   },
   {
    "n": "enthousiasme",
    "x": 1.4,
    "y": 2.5,
    "c": "red"
   },
   {
    "n": "colère",
    "x": -2.4,
    "y": 2.3,
    "c": "blue"
   },
   {
    "n": "peur",
    "x": -2.9,
    "y": 1.2,
    "c": "blue"
   },
   {
    "n": "tristesse",
    "x": -2.6,
    "y": -1.7,
    "c": "blue"
   },
   {
    "n": "ennui",
    "x": -0.6,
    "y": -2.5
   },
   {
    "n": "calme",
    "x": 2.4,
    "y": -1.8,
    "c": "red"
   }
  ],
  "arrows": [
   [
    "neutre",
    "joie",
    "plus agréable"
   ],
   [
    "neutre",
    "colère",
    "plus tendu"
   ]
  ],
  "walk": [
   "neutre",
   "joie",
   "enthousiasme",
   "calme",
   "tristesse",
   "ennui"
  ],
  "info": "x : agréable → désagréable · y : calme → activé",
  "x0": 80
 },
 {
  "key": "creatif",
  "title": "La boucle créative",
  "sub": "diverger, critiquer, converger",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.5,
  "nodes": [
   {
    "n": "Générer plusieurs idées",
    "pal": "blue"
   },
   {
    "n": "Critiquer",
    "pal": "red"
   },
   {
    "n": "Combiner"
   },
   {
    "n": "Choisir"
   }
  ],
  "center": "créer, c’est trier",
  "x0": 120
 },
 {
  "key": "entrainement",
  "title": "La recette d’entraînement",
  "sub": "huit étapes, du modèle de base au robot",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "loop": "amélioration continue",
  "stages": [
   {
    "n": "Modèle ouvert de base",
    "s": "7 à 14 milliards",
    "pal": "blue"
   },
   {
    "n": "Données",
    "s": "dialogues, appels d’outils"
   },
   {
    "n": "SFT (LoRA)",
    "s": "persona, format",
    "pal": "blue"
   },
   {
    "n": "Préférences (DPO)",
    "s": "ton, concision, prudence",
    "pal": "blue"
   },
   {
    "n": "Évaluation",
    "s": "scénarios et sécurité",
    "pal": "red"
   },
   {
    "n": "Quantification",
    "s": "4 bits"
   },
   {
    "n": "Déploiement",
    "s": "module embarqué",
    "pal": "red"
   },
   {
    "n": "Journaux",
    "s": "avec consentement"
   }
  ],
  "x0": 160
 },
 {
  "key": "embarque",
  "title": "Tout sur un module embarqué",
  "sub": "mémoire d’un module de 16 Go",
  "kind": "mem",
  "scale": 0.2,
  "limit": 16,
  "limitLabel": "module de 16 Go",
  "configs": [
   {
    "n": "Agent local",
    "segs": [
     [
      "Modèle de langage 8B, 4 bits",
      4.9,
      "blue"
     ],
     [
      "Vision-langage 2B",
      2.2,
      "red"
     ],
     [
      "Parole (reconnaissance + voix)",
      1.5,
      "dark"
     ],
     [
      "Cache KV",
      1.0,
      "paper"
     ],
     [
      "Système et marge",
      3,
      "ink"
     ]
    ]
   }
  ],
  "info": "ordres de grandeur ; dépend des modèles choisis",
  "x0": 200
 }
];
