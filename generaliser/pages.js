// Chapitre 26 : Généraliser (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 26 · fondations",
  "title": "Généraliser",
  "sub": "le vrai but de l’apprentissage",
  "body": "\n    <p class=\"lede\">Apprendre par cœur est facile. L’objectif est de réussir sur des cas <b>jamais vus</b> : c’est la généralisation.</p>\n    <p>Presque tous les problèmes pratiques de l’apprentissage (un modèle brillant en laboratoire et médiocre en production, un score qui s’effondre sur de nouveaux clients) sont des problèmes de généralisation. Ce chapitre donne les notions pour les comprendre.</p>",
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
  "lit": "biaisvar",
  "look": {},
  "scene": "biaisvar",
  "fig": ""
 },
 {
  "kicker": "26.1",
  "title": "Biais et variance",
  "sub": "le compromis",
  "body": "\n    <p class=\"lede\">Un modèle trop simple (une droite pour des données courbes) a un <b>biais</b> élevé : il se trompe toujours de la même façon. Un modèle trop souple a une <b>variance</b> élevée : son résultat change beaucoup d’un échantillon à l’autre.</p>\n    <div class=\"eq\">erreur attendue = biais<sup>2</sup> + variance + bruit</div>\n    <p>La courbe en U de la figure est le compromis classique. Le <b>bruit</b> est la part irréductible : même un modèle parfait ne la supprime pas.</p>",
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
  "lit": "biaisvar",
  "look": {},
  "scene": "biaisvar",
  "fig": ""
 },
 {
  "kicker": "26.2",
  "title": "Le surapprentissage",
  "sub": "repérer le moment où l’on apprend par cœur",
  "body": "\n    <p class=\"lede\">Le signe du surapprentissage est l’écart entre l’erreur d’entraînement (très basse) et celle de validation (qui remonte).</p>\n    <ul class=\"rules\">\n      <li><b>Trois jeux de données</b> : entraînement (pour apprendre), validation (pour régler), test (pour juger une seule fois à la fin).</li>\n      <li><b>Fuite de données</b> : si une information du test s’est glissée dans l’entraînement (doublons, même client, futur), le score est faussement flatteur.</li>\n      <li><b>Changement de distribution</b> : les données de production diffèrent de celles d’entraînement ; la validation ne le voit pas.</li>\n    </ul>",
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
  "lit": "surapprentissage",
  "look": {},
  "scene": "surapprentissage",
  "fig": ""
 },
 {
  "kicker": "26.3",
  "title": "Régularisation",
  "sub": "contraindre pour mieux généraliser",
  "body": "\n    <p class=\"lede\">Régulariser, c’est rendre le surapprentissage plus difficile.</p>\n    <ul class=\"rules\">\n      <li><b>L2 (weight decay)</b> : pénalise les gros poids ; <b>L1</b> : pousse beaucoup de poids vers zéro.</li>\n      <li><b>Dropout</b> : à chaque étape, éteindre au hasard une fraction des neurones, pour que le réseau ne dépende pas d’un seul.</li>\n      <li><b>Arrêt précoce</b> : garder les poids du meilleur point de validation.</li>\n      <li><b>Augmentation de données</b> : retourner, recadrer, bruiter les exemples ; pour le texte, reformuler.</li>\n    </ul>\n    <p>Mais le meilleur remède reste <b>plus de données</b>, plus variées.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "remedes",
  "look": {},
  "scene": "remedes",
  "fig": ""
 },
 {
  "kicker": "26.4",
  "title": "La double descente",
  "sub": "le résultat qui a surpris",
  "body": "\n    <p class=\"lede\">Selon la théorie classique, un modèle avec plus de paramètres que d’exemples devrait surapprendre. Or les réseaux actuels ont des milliards de paramètres et généralisent bien.</p>\n    <p>La <b>double descente</b> (Belkin et collaborateurs, 2019) décrit ce paradoxe : l’erreur monte jusqu’au seuil où le modèle peut tout juste mémoriser ses données, puis <b>redescend</b> quand on agrandit encore. Parmi les nombreuses solutions qui mémorisent tout, la descente de gradient en choisit une « simple », ce qui joue le rôle d’une régularisation implicite.</p>\n    <p>La théorie est encore en construction : c’est un bon rappel que l’intuition classique ne s’applique pas telle quelle aux grands modèles.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "doubledescente",
  "look": {},
  "scene": "doubledescente",
  "fig": ""
 }
];
export const PLATES = {
  biaisvar: { text: "L’erreur d’un modèle sur des données neuves vient de trois sources : le biais (le modèle est trop simple pour la réalité), la variance (il est trop sensible aux exemples particuliers) et le bruit irréductible. Augmenter la complexité baisse le biais et monte la variance : l’erreur totale a une forme en U. Courbes illustratives.", facts: () => [["erreur", "biais² + variance + bruit"], ["trop simple", "sous-apprentissage"], ["trop souple", "surapprentissage"]] },
  surapprentissage: { text: "La perte d’entraînement baisse toujours ; la perte de validation (des exemples jamais vus) baisse puis remonte. Le point de séparation est le moment où l’on arrête, ou où l’on régularise.", facts: () => [["jeux", "entraînement / validation / test"], ["règle", "ne jamais régler sur le jeu de test"]] },
  remedes: { text: "On peut agir sur les données (en ajouter, les varier) ou sur le modèle : pénaliser les poids trop grands (L2) ou nombreux (L1), éteindre au hasard des neurones pendant l’entraînement (dropout), s’arrêter quand la validation cesse de s’améliorer, ou choisir un modèle plus petit.", facts: () => [["L2", "« weight decay » dans AdamW"], ["dropout", "souvent 0,1 à 0,5"], ["arrêt précoce", "surveiller la validation"]] },
  doubledescente: { text: "Pour de très grands modèles, l’erreur redescend après un pic situé au seuil où le modèle peut juste apprendre tous ses exemples par cœur. C’est la double descente : les très grands réseaux, malgré leurs milliards de paramètres, généralisent. Courbes illustratives.", facts: () => [["pic", "au seuil d’interpolation"], ["après", "l’erreur redescend"], ["raison", "régularisation implicite de la descente de gradient"]] }
};
