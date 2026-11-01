export const SPECS = [
 {
  "key": "usages",
  "title": "Usages",
  "sub": "du crédit à la fraude",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Scoring de crédit",
    "s": "estimer le risque",
    "pal": "red"
   },
   {
    "n": "Détection de fraude",
    "s": "anomalies en temps réel",
    "pal": "blue"
   },
   {
    "n": "Trading algorithmique",
    "s": "signaux, exécution"
   },
   {
    "n": "Conseil automatisé",
    "s": "robo-advisors"
   },
   {
    "n": "Conformité (RegTech)",
    "s": "lutte anti-blanchiment",
    "pal": "blue"
   },
   {
    "n": "Assurance",
    "s": "tarification, sinistres",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "risque",
  "title": "Le risque de modèle",
  "sub": "gouverner les modèles",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Inventaire",
    "s": "tous les modèles"
   },
   {
    "n": "Validation indépendante",
    "s": "avant usage",
    "pal": "red"
   },
   {
    "n": "Documentation",
    "s": "hypothèses, limites",
    "pal": "blue"
   },
   {
    "n": "Suivi",
    "s": "dérive, performances",
    "pal": "blue"
   },
   {
    "n": "Explicabilité",
    "s": "décisions justifiées",
    "pal": "red"
   },
   {
    "n": "Normes",
    "s": "SR 11-7, BCBS 239"
   }
  ],
  "x0": 40
 }
];
