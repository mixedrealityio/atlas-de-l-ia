export const SPECS = [
 {
  "key": "sourcebiais",
  "title": "D’où vient le biais",
  "sub": "de la donnée à la décision",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Monde",
    "s": "inégalités réelles"
   },
   {
    "n": "Données",
    "s": "échantillon biaisé",
    "pal": "red"
   },
   {
    "n": "Modèle",
    "s": "reproduit les motifs",
    "pal": "blue"
   },
   {
    "n": "Décision",
    "s": "inégale selon les groupes",
    "pal": "red"
   },
   {
    "n": "Boucle",
    "s": "la décision change le monde",
    "pal": "red"
   },
   {
    "n": "Audit",
    "s": "mesurer par groupe",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "equite",
  "title": "Plusieurs définitions de l’équité",
  "sub": "on ne peut pas tout avoir",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Parité",
    "s": "mêmes taux de décision"
   },
   {
    "n": "Égalité des chances",
    "s": "mêmes taux de vrais positifs"
   },
   {
    "n": "Calibration",
    "s": "un score vaut pareil partout"
   },
   {
    "n": "Théorème",
    "s": "incompatibles si les groupes diffèrent",
    "pal": "red"
   },
   {
    "n": "Choix",
    "s": "selon l’enjeu et la loi",
    "pal": "blue"
   },
   {
    "n": "Documentation",
    "s": "expliquer le compromis",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "provenance",
  "title": "Prouver l’origine",
  "sub": "filigrane, signature, métadonnées",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Création",
    "s": "caméra ou IA"
   },
   {
    "n": "Signature",
    "s": "métadonnées C2PA",
    "pal": "blue"
   },
   {
    "n": "Édition",
    "s": "historique ajouté",
    "pal": "blue"
   },
   {
    "n": "Publication",
    "s": "plateforme"
   },
   {
    "n": "Vérification",
    "s": "contrôle de la chaîne",
    "pal": "red"
   },
   {
    "n": "Limites",
    "s": "métadonnées effaçables",
    "pal": "red"
   }
  ],
  "x0": 80
 }
];
