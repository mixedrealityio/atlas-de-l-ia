export const SPECS = [
 {
  "key": "cycle",
  "title": "Le cycle des données",
  "sub": "de la source au modèle",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Collecte",
    "s": "sources, droits",
    "pal": "blue"
   },
   {
    "n": "Nettoyage",
    "s": "doublons, bruit, fuite",
    "pal": "blue"
   },
   {
    "n": "Annotation",
    "s": "étiquettes, consignes, accord",
    "pal": "red"
   },
   {
    "n": "Versionnage",
    "s": "DVC, LakeFS, dates"
   },
   {
    "n": "Découpage",
    "s": "entraîner / valider / tester",
    "pal": "blue"
   },
   {
    "n": "Surveillance",
    "s": "dérive en production",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "synth",
  "title": "Données synthétiques",
  "sub": "produire des exemples",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Modèle fort",
    "s": "génère des exemples",
    "pal": "blue"
   },
   {
    "n": "Filtrage",
    "s": "qualité, diversité",
    "pal": "red"
   },
   {
    "n": "Vérification",
    "s": "code exécuté, règles",
    "pal": "red"
   },
   {
    "n": "Entraînement",
    "s": "d’un modèle",
    "pal": "blue"
   },
   {
    "n": "Risque",
    "s": "effondrement si on boucle",
    "pal": "red"
   },
   {
    "n": "Mélange",
    "s": "toujours avec du réel"
   }
  ],
  "x0": 40
 }
];
