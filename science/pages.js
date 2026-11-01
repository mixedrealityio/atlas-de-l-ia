// Chapitre 47 : L’IA pour la science (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 47 · secteurs",
  "title": "L’IA pour la science",
  "sub": "un outil de découverte",
  "body": "<p class='lede'>Après le langage et l’image, l’IA entre dans les laboratoires : elle prédit, simule, démontre et suggère.</p>",
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
  "lit": "sciences",
  "look": {},
  "scene": "sciences",
  "fig": ""
 },
 {
  "kicker": "47.1",
  "title": "Simuler et prévoir",
  "sub": "physique et météo",
  "body": "<ul class=\"rules\"><li><b>Réseaux informés par la physique</b> (PINN, Raissi 2019) : le réseau respecte une équation.</li><li><b>Opérateurs neuronaux</b> (Fourier Neural Operator, 2020) : apprennent une famille de solutions.</li><li><b>GraphCast</b> (2023) : prévision météo à 10 jours en moins d’une minute sur un seul accélérateur.</li></ul>",
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
  "lit": "sciences",
  "look": {},
  "scene": "sciences",
  "fig": ""
 },
 {
  "kicker": "47.2",
  "title": "Mathématiques et matériaux",
  "sub": "démontrer, découvrir",
  "body": "<ul class=\"rules\"><li><b>AlphaProof</b> et <b>AlphaGeometry</b> : niveau médaille d’argent aux Olympiades 2024, avec preuve vérifiée par Lean (chapitre 24).</li><li><b>Matériaux</b> : millions de structures candidates proposées (GNoME, 2023), à valider par l’expérience.</li></ul>",
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
  "lit": "sciences",
  "look": {},
  "scene": "sciences",
  "fig": ""
 },
 {
  "kicker": "47.3",
  "title": "Laboratoires autonomes",
  "sub": "boucler hypothèse et expérience",
  "body": "<ul class=\"rules\"><li>Des robots exécutent des expériences choisies par un modèle ; des « scientifiques IA » (AI Scientist, 2024) rédigent des articles.</li><li>Limites : erreurs plausibles, pas de compréhension des enjeux, besoin de vérification humaine.</li></ul>",
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
  "lit": "sciences",
  "look": {},
  "scene": "sciences",
  "fig": ""
 },
 {
  "kicker": "47.4",
  "title": "Modèles spécialisés",
  "sub": "code, voix, biologie, robots",
  "body": "<p class='lede'>Un même schéma se répète : pré-entraîner sur un domaine, puis affiner, puis évaluer avec les bancs d’essai du domaine.</p><ul class=\"rules\"><li><b>Reproductibilité</b> : publier code, données et protocole.</li><li><b>Vérifier</b> : une prédiction d’IA est une hypothèse, pas un résultat.</li></ul>",
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
  "lit": "spec",
  "look": {},
  "scene": "spec",
  "fig": ""
 }
];
export const PLATES = {
  sciences: { text: "L’IA remplace des simulations coûteuses par des substituts appris (réseaux informés par la physique, opérateurs neuronaux), prévoit la météo (GraphCast, DeepMind, 2023, compétitif avec les modèles numériques sur de nombreux indicateurs), aide à démontrer (AlphaProof et AlphaGeometry, niveau médaille d’argent aux Olympiades de mathématiques 2024), et pilote des expériences.", facts: () => [["GraphCast", "prévision à 10 jours en moins d’une minute"], ["AlphaProof", "IMO 2024, argent"]] },
  spec: { text: "Au-delà du langage général, des modèles sont entraînés sur un domaine : code, séquences biologiques, parole (Whisper, 680 000 heures d’audio), robotique (RT-2, π0), météo. La recette est la même : un grand pré-entraînement de domaine puis un affinage, évalués par des bancs d’essai propres à chaque domaine.", facts: () => [["recette", "pré-entraîner puis affiner"], ["évaluation", "bancs d’essai du domaine"]] }
};
