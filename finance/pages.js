// Chapitre 50 : Finance et assurance (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 50 · secteurs",
  "title": "Finance et assurance",
  "sub": "performance sous contrainte",
  "body": "<p class='lede'>Dans un secteur régulé, un modèle doit être non seulement précis mais <b>explicable, documenté et contrôlé</b>.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "usages",
  "look": {},
  "scene": "usages",
  "fig": ""
 },
 {
  "kicker": "50.1",
  "title": "Crédit, fraude, assurance",
  "sub": "les usages établis",
  "body": "<ul class=\"rules\"><li><b>Crédit</b> : décisions encadrées, droit à explication, équité (chapitre 32).</li><li><b>Fraude</b> : détection d’anomalies en temps réel ; adversaires qui s’adaptent.</li><li><b>Assurance</b> : tarification et gestion des sinistres.</li></ul>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "usages",
  "look": {},
  "scene": "usages",
  "fig": ""
 },
 {
  "kicker": "50.2",
  "title": "Marchés et conseil",
  "sub": "trading, robo-advisors",
  "body": "<ul class=\"rules\"><li><b>Trading</b> : signaux et exécution ; les marchés s’adaptent, les avantages s’érodent.</li><li><b>Conseil</b> : assistants pour clients et conseillers ; responsabilité et information claires.</li><li>Aucune méthode ne « prédit » les marchés : prudence.</li></ul>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "usages",
  "look": {},
  "scene": "usages",
  "fig": ""
 },
 {
  "kicker": "50.3",
  "title": "Gérer le risque de modèle",
  "sub": "SR 11-7, BCBS 239",
  "body": "<ul class=\"rules\"><li>Inventorier, <b>valider indépendamment</b>, documenter, suivre.</li><li><b>Explicabilité</b> et recours pour le client.</li><li><b>Données synthétiques</b> pour les événements rares, avec précaution (chapitre 41).</li></ul>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "risque",
  "look": {},
  "scene": "risque",
  "fig": ""
 }
];
export const PLATES = {
  usages: { text: "La finance emploie depuis longtemps des modèles statistiques (arbres boostés, chapitre 40). Les nouveaux modèles de langage servent surtout à lire des documents, assister le conseil et la conformité. Le scoring de crédit et la tarification d’assurances vie et santé sont des usages « à haut risque » dans le règlement européen.", facts: () => [["classique", "boosting très présent"], ["LLM", "documents, conformité"]] },
  risque: { text: "Les régulateurs exigent une gestion du risque de modèle : inventaire, validation indépendante, documentation, suivi, explicabilité des décisions envers les clients. Des textes de référence : la lettre SR 11-7 de la Réserve fédérale américaine (2011) et les principes BCBS 239 sur l’agrégation des données de risque.", facts: () => [["SR 11-7", "gestion du risque de modèle"], ["BCBS 239", "données de risque"]] }
};
