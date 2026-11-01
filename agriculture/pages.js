// Chapitre 64 : Agriculture et alimentation (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 64 · agriculture",
  "title": "Agriculture et alimentation",
  "sub": "produire mieux avec moins",
  "body": "\n    <p class=\"lede\">Nourrir plus de monde avec moins d’eau, d’engrais et de pesticides, sous un climat qui change : l’agriculture est un terrain d’usage concret pour l’IA.</p>\n    <p>Ce chapitre présente l’agriculture de précision, les autres usages du champ à l’assiette, et les limites qui décident de qui en profite.</p>",
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
  "lit": "precision",
  "look": {},
  "scene": "precision",
  "fig": ""
 },
 {
  "kicker": "64.1",
  "title": "L’agriculture de précision",
  "sub": "traiter la plante, pas la parcelle",
  "body": "<ul class=\"rules\"><li><b>Voir l’invisible</b> : les images proche infrarouge révèlent le stress d’une culture avant qu’il ne se voie.</li><li><b>Cartographier</b> : croiser images, capteurs de sol et météo pour repérer les zones à traiter.</li><li><b>Moduler</b> : irrigation et engrais à dose variable selon la zone.</li><li><b>Cibler</b> : des pulvérisateurs et robots à caméras ne traitent que les mauvaises herbes reconnues.</li></ul><p>Les économies annoncées varient beaucoup selon les cultures et les fabricants ; elles se vérifient parcelle par parcelle.</p>",
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
  "lit": "precision",
  "look": {},
  "scene": "precision",
  "fig": ""
 },
 {
  "kicker": "64.2",
  "title": "Du champ à l’assiette",
  "sub": "élevage, prévisions, sélection",
  "body": "<ul class=\"rules\"><li><b>Diagnostic</b> de maladies sur photo, utile là où les conseillers agricoles manquent.</li><li><b>Élevage</b> : caméras et colliers détectent tôt boiteries, maladies, mises bas.</li><li><b>Prévisions</b> de rendement pour les marchés et l’aide alimentaire.</li><li><b>Sélection variétale</b> : prédire, à partir du génome, quelles variétés résisteront à la sécheresse.</li><li><b>Chaîne alimentaire</b> : tri, contrôle qualité, réduction du gaspillage.</li></ul>",
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
  "lit": "usages",
  "look": {},
  "scene": "usages",
  "fig": ""
 },
 {
  "kicker": "64.3",
  "title": "Les limites",
  "sub": "qui en profite ?",
  "body": "<ul class=\"rules\"><li><b>Coût</b> et <b>connectivité</b> : avantage aux grandes exploitations bien équipées.</li><li><b>Données</b> : l’agriculteur doit savoir qui les possède et qui les utilise.</li><li><b>Généralisation</b> : un modèle appris dans une région peut se tromper ailleurs.</li><li><b>Savoir local</b> : l’expérience de l’agriculteur reste indispensable pour interpréter les cartes.</li></ul><p>Les modèles ouverts, les coopératives et les services publics (instituts techniques, stations météo) rendent ces outils accessibles aux petites fermes.</p>",
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
  "lit": "limites",
  "look": {},
  "scene": "limites",
  "fig": ""
 }
];
export const PLATES = {
  precision: { text: "Des images de satellites et de drones, dans des longueurs d’onde invisibles à l’œil, révèlent le stress hydrique ou les maladies avant qu’ils ne se voient. Croisées avec des capteurs au sol et la météo, elles produisent des cartes qui permettent de moduler l’eau, l’engrais ou les traitements. Des robots équipés de caméras reconnaissent les mauvaises herbes et ne traitent qu’elles.", facts: () => [["pulvérisation ciblée", "réduction importante des herbicides annoncée par les fabricants"], ["vision", "chapitre 8"]] },
  usages: { text: "Un agriculteur peut photographier une feuille malade et obtenir un diagnostic. En élevage, des caméras et des capteurs détectent boiteries, maladies ou chaleurs. Les prévisions de récolte aident marchés et politiques alimentaires. La sélection de variétés plus résistantes combine génomique et apprentissage, et l’IA aide à adapter les calendriers de culture au changement climatique.", facts: () => [["élevage", "détection précoce des maladies"], ["sécurité alimentaire", "prévisions de récoltes"]] },
  limites: { text: "Les équipements de précision coûtent cher et profitent d’abord aux grandes exploitations. Beaucoup de zones rurales ont une connexion médiocre. La question de la propriété des données (qui les possède, qui les revend ?) est vive. Un modèle entraîné sur une région ou un sol se transpose mal ailleurs (chapitre 26). Coopératives et services publics peuvent mutualiser outils et données.", facts: () => [["dépendance", "machines et logiciels fermés"], ["généraliser", "chapitre 26"]] }
};
