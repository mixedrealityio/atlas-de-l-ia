export const SPECS = [
 {
  "key": "satur",
  "title": "Un benchmark saturé",
  "sub": "du défi à l’évidence",
  "kind": "curve",
  "fn": "saturation",
  "x0": 0
 },
 {
  "key": "bench",
  "title": "Les familles de tests",
  "sub": "ce qu’on mesure",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Connaissances",
    "s": "MMLU, GPQA",
    "pal": "blue"
   },
   {
    "n": "Raisonnement",
    "s": "maths, ARC-AGI",
    "pal": "blue"
   },
   {
    "n": "Code",
    "s": "SWE-bench",
    "pal": "blue"
   },
   {
    "n": "Agents",
    "s": "tâches en environnement",
    "pal": "red"
   },
   {
    "n": "Préférences",
    "s": "arène humaine"
   },
   {
    "n": "Sécurité",
    "s": "refus, jailbreaks"
   }
  ],
  "x0": 40
 },
 {
  "key": "contam",
  "title": "La contamination",
  "sub": "tricher sans le vouloir",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Test public",
    "s": "sur Internet"
   },
   {
    "n": "Corpus du modèle",
    "s": "aspire le web",
    "pal": "blue"
   },
   {
    "n": "Fuite",
    "s": "le test est dans l’entraînement",
    "pal": "red"
   },
   {
    "n": "Score gonflé",
    "s": "mémoire, pas capacité",
    "pal": "red"
   },
   {
    "n": "Parades",
    "s": "tests privés, renouvelés",
    "pal": "blue"
   },
   {
    "n": "Contrôle",
    "s": "recherche de doublons"
   }
  ],
  "x0": 80
 },
 {
  "key": "juge",
  "title": "Arène et modèle-juge",
  "sub": "mesurer l’utilité perçue",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Deux réponses",
    "s": "anonymes"
   },
   {
    "n": "Juge",
    "s": "humain ou modèle",
    "pal": "blue"
   },
   {
    "n": "Vote",
    "s": "A, B ou égalité",
    "pal": "red"
   },
   {
    "n": "Classement Elo",
    "s": "mis à jour",
    "pal": "blue"
   },
   {
    "n": "Biais",
    "s": "longueur, style, auto-préférence",
    "pal": "red"
   },
   {
    "n": "Contrôles",
    "s": "ordre, longueur"
   }
  ],
  "x0": 120
 },
 {
  "key": "halluc",
  "title": "Réduire les hallucinations",
  "sub": "ancrer les réponses",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Question",
    "s": "factuelle"
   },
   {
    "n": "Récupération",
    "s": "documents fiables (RAG)",
    "pal": "blue"
   },
   {
    "n": "Génération",
    "s": "réponse avec sources",
    "pal": "blue"
   },
   {
    "n": "Vérification",
    "s": "citations contrôlées",
    "pal": "red"
   },
   {
    "n": "Abstention",
    "s": "« je ne sais pas »",
    "pal": "red"
   },
   {
    "n": "Journal",
    "s": "erreurs mesurées"
   }
  ],
  "x0": 160
 }
];
