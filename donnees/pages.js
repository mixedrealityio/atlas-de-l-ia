// Chapitre 41 : Les données (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 41 · fondations",
  "title": "Les données",
  "sub": "l’autre moitié du modèle",
  "body": "<p class='lede'>Un meilleur jeu de données bat souvent un meilleur algorithme : c’est l’idée de l’<b>IA centrée sur les données</b>.</p>",
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
  "lit": "cycle",
  "look": {},
  "scene": "cycle",
  "fig": ""
 },
 {
  "kicker": "41.1",
  "title": "Collecter et nettoyer",
  "sub": "droits, doublons, fuite",
  "body": "<ul class=\"rules\"><li><b>Droits</b> : licence, consentement, RGPD (chapitre 33).</li><li><b>Doublons et quasi-doublons</b> : ils gonflent les scores et favorisent la mémorisation.</li><li><b>Fuite</b> : une information du futur ou du test dans l’entraînement (chapitre 26).</li></ul>",
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
  "lit": "cycle",
  "look": {},
  "scene": "cycle",
  "fig": ""
 },
 {
  "kicker": "41.2",
  "title": "Annoter",
  "sub": "des étiquettes fiables",
  "body": "<p class='lede'>Une étiquette est un jugement humain, donc imparfait.</p><ul class=\"rules\"><li>Écrire des <b>consignes</b> précises avec des exemples.</li><li>Mesurer l’<b>accord entre annotateurs</b> ; chercher les désaccords.</li><li>Documenter : <b>fiches de données</b> (<i>datasheets</i>) et <b>fiches de modèle</b> (<i>model cards</i>).</li></ul>",
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
  "lit": "cycle",
  "look": {},
  "scene": "cycle",
  "fig": ""
 },
 {
  "kicker": "41.3",
  "title": "Versionner",
  "sub": "reproduire un résultat",
  "body": "<ul class=\"rules\"><li>Versionner les <b>données</b> comme le code (DVC, LakeFS).</li><li>Garder l’<b>origine</b> de chaque lot (<i>lineage</i>).</li><li>Figer le jeu de test et ne le modifier que de façon tracée.</li></ul>",
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
  "lit": "cycle",
  "look": {},
  "scene": "cycle",
  "fig": ""
 },
 {
  "kicker": "41.4",
  "title": "Données synthétiques",
  "sub": "utiles, avec précautions",
  "body": "<p class='lede'>Un modèle peut en fabriquer pour un autre.</p><p>C’est précieux pour les <b>cas rares</b> et les domaines <b>vérifiables</b> (code, maths). Mais boucler sur ses propres sorties dégrade le modèle : filtrer, vérifier, mélanger avec du réel.</p>",
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
  "lit": "synth",
  "look": {},
  "scene": "synth",
  "fig": ""
 }
];
export const PLATES = {
  cycle: { text: "La qualité des données prime souvent sur le modèle. Le cycle : collecter avec les droits, nettoyer (doublons, bruit, fuites), annoter avec des consignes précises, versionner, découper proprement, puis surveiller la dérive.", facts: () => [["priorité", "qualité avant quantité"], ["outils", "DVC, LakeFS"]] },
  synth: { text: "Des données générées par un modèle servent à compléter des cas rares ou à enseigner (par exemple les modèles Phi, entraînés sur des « manuels » synthétiques). Entraîner à répétition sur ses propres sorties peut dégrader le modèle (« effondrement », Shumailov et collègues, 2024) : on filtre, on vérifie et on mélange avec des données réelles.", facts: () => [["avantage", "cas rares, vérifiables"], ["risque", "effondrement du modèle"]] }
};
