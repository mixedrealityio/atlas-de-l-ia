export const SPECS = [
 {
  "key": "fichiers",
  "title": "Deux fichiers",
  "sub": "un modèle, c’est tout",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Paramètres",
    "s": "140 Go pour Llama 2 70B",
    "pal": "blue"
   },
   {
    "n": "70 milliards",
    "s": "× 2 octets (float16)",
    "pal": "blue"
   },
   {
    "n": "run.c",
    "s": "≈ 500 lignes de C",
    "pal": "blue"
   },
   {
    "n": "Un ordinateur",
    "s": "aucune connexion"
   },
   {
    "n": "Entrée",
    "s": "un texte"
   },
   {
    "n": "Sortie",
    "s": "le mot suivant, en boucle",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "compresser",
  "title": "Compresser internet",
  "sub": "le pré-entraînement",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Texte du web",
    "s": "≈ 10 To"
   },
   {
    "n": "6 000 GPU",
    "s": "≈ 12 jours",
    "pal": "red"
   },
   {
    "n": "Coût",
    "s": "≈ 2 millions de dollars",
    "pal": "red"
   },
   {
    "n": "Paramètres",
    "s": "140 Go",
    "pal": "blue"
   },
   {
    "n": "Compression",
    "s": "≈ 100 fois, avec perte",
    "pal": "blue"
   },
   {
    "n": "Tâche",
    "s": "prédire le mot suivant",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "reve",
  "title": "Le modèle rêve des documents",
  "sub": "ce que produit un modèle de base",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Amorce",
    "s": "un début de page"
   },
   {
    "n": "Code Java",
    "s": "plausible",
    "pal": "blue"
   },
   {
    "n": "Fiche produit",
    "s": "plausible",
    "pal": "blue"
   },
   {
    "n": "Article Wikipédia",
    "s": "plausible",
    "pal": "blue"
   },
   {
    "n": "Numéro ISBN",
    "s": "inventé",
    "pal": "red"
   },
   {
    "n": "Faits",
    "s": "parfois justes, parfois non",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "assistant",
  "title": "Du document à l’assistant",
  "sub": "trois étapes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "1. Pré-entraînement",
    "s": "internet, des mois, très cher",
    "pal": "blue"
   },
   {
    "n": "Modèle de base",
    "s": "complète des documents"
   },
   {
    "n": "2. Affinage",
    "s": "≈ 100 000 dialogues écrits par des humains",
    "pal": "blue"
   },
   {
    "n": "Assistant",
    "s": "répond aux questions"
   },
   {
    "n": "3. Comparaisons",
    "s": "choisir la meilleure de deux réponses",
    "pal": "red"
   },
   {
    "n": "Boucle",
    "s": "repérer les erreurs, corriger, recommencer",
    "pal": "red"
   }
  ],
  "x0": 120
 },
 {
  "key": "outils",
  "title": "Les capacités qui s’ajoutent",
  "sub": "échelle, outils, modalités",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Lois d’échelle",
    "s": "plus de N et de D : prévisible",
    "pal": "blue"
   },
   {
    "n": "Navigateur",
    "s": "chercher",
    "pal": "blue"
   },
   {
    "n": "Calculatrice",
    "s": "calculer juste",
    "pal": "blue"
   },
   {
    "n": "Python",
    "s": "tracer, analyser",
    "pal": "blue"
   },
   {
    "n": "Image",
    "s": "voir et dessiner",
    "pal": "red"
   },
   {
    "n": "Voix",
    "s": "écouter et parler",
    "pal": "red"
   }
  ],
  "x0": 160
 },
 {
  "key": "systemes",
  "title": "Système 1 et système 2",
  "sub": "penser vite, penser lentement",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Système 1",
    "s": "rapide, instinctif",
    "pal": "blue"
   },
   {
    "n": "2 + 2 =",
    "s": "réponse immédiate",
    "pal": "blue"
   },
   {
    "n": "LLM de 2023",
    "s": "même effort par jeton"
   },
   {
    "n": "Système 2",
    "s": "lent, délibéré",
    "pal": "red"
   },
   {
    "n": "17 × 24",
    "s": "poser le calcul",
    "pal": "red"
   },
   {
    "n": "Souhait",
    "s": "échanger du temps contre de la justesse",
    "pal": "red"
   }
  ],
  "x0": 200
 },
 {
  "key": "alphago",
  "title": "S’améliorer seul",
  "sub": "la leçon d’AlphaGo",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Étape 1",
    "s": "imiter des experts humains",
    "pal": "blue"
   },
   {
    "n": "Plafond",
    "s": "le niveau humain"
   },
   {
    "n": "Étape 2",
    "s": "jouer contre soi-même",
    "pal": "red"
   },
   {
    "n": "Récompense",
    "s": "gagner : facile à vérifier",
    "pal": "red"
   },
   {
    "n": "Résultat",
    "s": "au-delà des humains",
    "pal": "red"
   },
   {
    "n": "Langage",
    "s": "pas de critère simple"
   }
  ],
  "x0": 240
 },
 {
  "key": "os",
  "title": "Le LLM, noyau d’un système d’exploitation",
  "sub": "une analogie",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Noyau",
    "s": "le modèle",
    "pal": "red"
   },
   {
    "n": "Mémoire vive",
    "s": "la fenêtre de contexte",
    "pal": "blue"
   },
   {
    "n": "Disque",
    "s": "fichiers et RAG",
    "pal": "blue"
   },
   {
    "n": "Réseau",
    "s": "le navigateur",
    "pal": "blue"
   },
   {
    "n": "Périphériques",
    "s": "calculatrice, Python, image, voix",
    "pal": "blue"
   },
   {
    "n": "Écosystème",
    "s": "fermés et ouverts"
   }
  ],
  "x0": 280
 },
 {
  "key": "attaques",
  "title": "Trois familles d’attaques",
  "sub": "un nouveau terrain de sécurité",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Jailbreak",
    "s": "contourner les refus",
    "pal": "red"
   },
   {
    "n": "Mise en scène, codage",
    "s": "rôle, autre alphabet",
    "pal": "red"
   },
   {
    "n": "Suffixes, images bruitées",
    "s": "trouvés par optimisation",
    "pal": "red"
   },
   {
    "n": "Injection",
    "s": "ordres cachés dans un contenu lu",
    "pal": "red"
   },
   {
    "n": "Empoisonnement",
    "s": "données piégées",
    "pal": "red"
   },
   {
    "n": "Déclencheur",
    "s": "comportement caché sur un mot",
    "pal": "red"
   }
  ],
  "x0": 320
 }
];
