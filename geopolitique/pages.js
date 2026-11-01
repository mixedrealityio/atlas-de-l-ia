// Chapitre 55 : Géopolitique, puces et ressources (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 55 · économie",
  "title": "Géopolitique, puces et ressources",
  "sub": "le calcul est devenu stratégique",
  "body": "<p class='lede'>Qui contrôle les puces, l’énergie et les données pèse sur l’IA : c’est une affaire d’État.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "55.1",
  "title": "La chaîne des puces",
  "sub": "des points de passage uniques",
  "body": "<ul class=\"rules\"><li><b>Lithographie EUV</b> : un seul fabricant (ASML).</li><li><b>Fabrication avancée</b> : très concentrée à Taïwan.</li><li><b>Mémoire HBM</b> : trois acteurs.</li></ul>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "55.2",
  "title": "Contrôles à l’exportation",
  "sub": "stratégies et réponses",
  "body": "<ul class=\"rules\"><li>Mesures américaines depuis <b>2022</b> ; mises à jour fréquentes.</li><li><b>Subventions</b> pour relocaliser la production.</li><li>Réponses : <b>puces locales</b> et <b>modèles efficaces</b>.</li></ul>",
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
  "lit": "controle",
  "look": {},
  "scene": "controle",
  "fig": ""
 },
 {
  "kicker": "55.3",
  "title": "Énergie, eau, territoires",
  "sub": "limites physiques",
  "body": "<ul class=\"rules\"><li><b>Électricité</b> : sites à mégawatts, délais de raccordement.</li><li><b>Refroidissement</b> et eau ; chaleur récupérable.</li><li>Voir le chapitre 18 pour les ordres de grandeur.</li></ul>",
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
  "lit": "ressources",
  "look": {},
  "scene": "ressources",
  "fig": ""
 },
 {
  "kicker": "55.4",
  "title": "Souveraineté numérique",
  "sub": "ce que veut dire « maîtriser »",
  "body": "<ul class=\"rules\"><li><b>Cloud souverain</b> : localisation, droit applicable, opérateurs.</li><li><b>Modèles nationaux</b> et poids ouverts : réduire la dépendance.</li><li>Souveraineté <b>complète</b> impossible : s’appuyer sur des partenariats et sur la sobriété.</li></ul>",
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
  "lit": "controle",
  "look": {},
  "scene": "controle",
  "fig": ""
 }
];
export const PLATES = {
  chaine: { text: "Les puces d’IA dépendent d’une chaîne mondiale très concentrée : conception surtout américaine, lithographie extrême ultraviolet fournie par un seul fabricant (ASML), fabrication avancée surtout à Taïwan, mémoire HBM produite par trois groupes. Cette concentration en fait un enjeu stratégique.", facts: () => [["EUV", "un seul fournisseur"], ["fabrication", "avancée très concentrée"]] },
  controle: { text: "Depuis octobre 2022, les États-Unis limitent l’exportation de puces avancées et d’outils de fabrication vers la Chine ; le CHIPS Act (2022) subventionne la production américaine. Les réponses : puces nationales, optimisation logicielle, modèles efficaces (l’apparition de DeepSeek-R1 en janvier 2025 a montré qu’on pouvait atteindre de bons résultats à moindre coût de calcul). Les règles changent souvent.", facts: () => [["2022", "premiers contrôles à l’exportation"], ["janvier 2025", "DeepSeek-R1"]] },
  ressources: { text: "Les centres de données exigent beaucoup d’électricité, de refroidissement et de temps de raccordement au réseau. Cela pèse sur leur localisation et sur le mix énergétique. Les réponses combinent efficacité du matériel, petits modèles et choix de sites.", facts: () => [["goulot", "électricité et raccordement"], ["réponse", "efficacité et sobriété"]] }
};
