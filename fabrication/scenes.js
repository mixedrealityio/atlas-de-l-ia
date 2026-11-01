export const SPECS = [
 {
  "key": "chaine",
  "title": "La chaîne de fabrication",
  "sub": "neuf étapes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.4,
  "gap": 0.9,
  "y": 1.4,
  "stages": [
   {
    "n": "Données",
    "s": "collecter"
   },
   {
    "n": "Nettoyage",
    "s": "filtrer, dédupliquer"
   },
   {
    "n": "Tokenizer",
    "s": "vocabulaire"
   },
   {
    "n": "Pré-entraînement",
    "s": "prédire le jeton suivant",
    "pal": "blue"
   },
   {
    "n": "Mi-entraînement",
    "s": "contexte long, données ciblées",
    "pal": "blue"
   },
   {
    "n": "Affinage supervisé",
    "s": "SFT : imiter des exemples",
    "pal": "red"
   },
   {
    "n": "Préférences",
    "s": "RLHF / DPO",
    "pal": "red"
   },
   {
    "n": "Évaluation",
    "s": "tests, sécurité"
   },
   {
    "n": "Déploiement",
    "s": "quantifier, servir"
   }
  ],
  "x0": 0
 },
 {
  "key": "donnees",
  "title": "Le tri des données",
  "sub": "de l’entonnoir au corpus",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.9,
  "y": 1.4,
  "stages": [
   {
    "n": "Web brut",
    "s": "pages, livres, code"
   },
   {
    "n": "Extraction",
    "s": "texte propre"
   },
   {
    "n": "Filtres qualité",
    "s": "langue, bruit, toxicité"
   },
   {
    "n": "Déduplication",
    "s": "doublons exacts et proches"
   },
   {
    "n": "Mélange",
    "s": "proportions par source",
    "pal": "blue"
   },
   {
    "n": "Corpus",
    "s": "des trillions de jetons",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "echelle",
  "title": "Les lois d’échelle",
  "sub": "plus de calcul, une perte plus basse",
  "kind": "curve",
  "fn": "scaling",
  "x0": 80
 },
 {
  "key": "post",
  "title": "Du modèle de base à l’assistant",
  "sub": "trois étapes d’alignement",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Modèle de base",
    "s": "continue un texte"
   },
   {
    "n": "SFT",
    "s": "suit des consignes",
    "pal": "blue"
   },
   {
    "n": "Préférences",
    "s": "réponses préférées",
    "pal": "blue"
   },
   {
    "n": "RL vérifiable",
    "s": "raisonner, coder",
    "pal": "red"
   }
  ],
  "x0": 120
 },
 {
  "key": "ouvert",
  "title": "Ouvert ou fermé ?",
  "sub": "ce que contient un modèle publié",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Poids",
    "s": "les paramètres appris",
    "pal": "blue"
   },
   {
    "n": "Code",
    "s": "architecture, inférence",
    "pal": "blue"
   },
   {
    "n": "Données",
    "s": "souvent non publiées",
    "pal": "red"
   },
   {
    "n": "Recette",
    "s": "hyperparamètres, étapes",
    "pal": "red"
   },
   {
    "n": "Licence",
    "s": "usage permis ou limité",
    "pal": "blue"
   },
   {
    "n": "Ouvert au sens fort",
    "s": "tout est public"
   }
  ],
  "x0": 160
 }
];
