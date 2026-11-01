// Chapitre 54 : Économie de l’IA (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 54 · économie",
  "title": "Économie de l’IA",
  "sub": "des chiffres, des incertitudes",
  "body": "<p class='lede'>Quelques ordres de grandeur et quelques mécanismes aident à lire l’actualité économique de l’IA.</p>",
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
  "lit": "couts",
  "look": {},
  "scene": "couts",
  "fig": ""
 },
 {
  "kicker": "54.1",
  "title": "La chaîne de valeur",
  "sub": "de la puce à l’usage",
  "body": "<ul class=\"rules\"><li><b>Matériel et énergie</b> : part majeure du coût de l’entraînement (chapitre 18).</li><li><b>Inférence</b> : coût par jeton en baisse rapide, usage en hausse.</li><li><b>Applications</b> : la valeur dépend de l’intégration au travail réel.</li></ul>",
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
  "lit": "couts",
  "look": {},
  "scene": "couts",
  "fig": ""
 },
 {
  "kicker": "54.2",
  "title": "Modèles économiques",
  "sub": "API, abonnement, ouvert",
  "body": "<ul class=\"rules\"><li><b>API</b> facturée au jeton ; <b>abonnement</b> pour les particuliers.</li><li><b>Poids ouverts</b> : monétisation par services, matériel ou infrastructure.</li><li><b>Verrouillage</b> : coût de changement de fournisseur.</li></ul>",
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
  "lit": "couts",
  "look": {},
  "scene": "couts",
  "fig": ""
 },
 {
  "kicker": "54.3",
  "title": "Concentration",
  "sub": "économies d’échelle",
  "body": "<ul class=\"rules\"><li>Les puces, le cloud et les modèles de pointe sont concentrés.</li><li>Les poids ouverts et les petits modèles spécialisés relâchent la contrainte.</li><li>Question de politique de concurrence.</li></ul>",
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
  "lit": "concentration",
  "look": {},
  "scene": "concentration",
  "fig": ""
 },
 {
  "kicker": "54.4",
  "title": "Productivité et emploi",
  "sub": "retard des gains",
  "body": "<p class='lede'>Les gains de productivité d’une technologie générale se mesurent avec retard.</p><p>Voir le chapitre 35 pour le raisonnement en élasticité et le chapitre 37 pour le cas de l’ingénierie logicielle.</p>",
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
  "lit": "prod",
  "look": {},
  "scene": "prod",
  "fig": ""
 }
];
export const PLATES = {
  couts: { text: "La chaîne de valeur va des puces et de l’énergie aux applications. L’entraînement d’un modèle de pointe coûte de l’ordre de dizaines à centaines de millions de dollars ; le prix par jeton à l’usage a fortement baissé en quelques années. Les investissements des grandes plateformes se comptent en centaines de milliards de dollars par an (ordre de grandeur).", facts: () => [["entraînement", "décuple tous les ans ou deux"], ["prix par jeton", "en forte baisse"]] },
  concentration: { text: "Deux forces s’opposent : des économies d’échelle qui concentrent calcul, données et talents chez quelques acteurs, et des modèles à poids ouverts et spécialisés qui abaissent la barrière d’entrée. L’équilibre n’est pas fixé et dépend de la régulation, du coût du calcul et des usages.", facts: () => [["tension", "concentration contre ouverture"], ["ouverture", "poids ouverts"]] },
  prod: { text: "Solow disait en 1987 qu’on voit des ordinateurs partout sauf dans les statistiques de productivité. Les gains d’une technologie générale arrivent après réorganisation des processus et formation, souvent avec des années de retard. Pour l’IA, les mesures sont encore partielles et contrastées (chapitre 35).", facts: () => [["Solow", "1987"], ["délai", "réorganisation nécessaire"]] }
};
