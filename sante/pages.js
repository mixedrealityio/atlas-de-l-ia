// Chapitre 46 : IA et santé (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 46 · secteurs",
  "title": "IA et santé",
  "sub": "prometteuse, strictement encadrée",
  "body": "<p class='lede'>La santé est l’un des champs où l’IA apporte le plus et où l’erreur est la plus grave.</p>",
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
  "kicker": "46.1",
  "title": "Imagerie et diagnostic",
  "sub": "le plus mature",
  "body": "<ul class=\"rules\"><li>Aide à la lecture d’images : détection de lésions, tri des examens urgents.</li><li>Performances comparables à des experts sur des tâches précises, <b>mais</b> sensibles au matériel et à la population.</li><li>L’IA est une <b>seconde lecture</b>, pas un remplaçant.</li></ul>",
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
  "kicker": "46.2",
  "title": "Protéines, molécules, essais",
  "sub": "accélérer la recherche",
  "body": "<ul class=\"rules\"><li><b>AlphaFold</b> : prédiction de structure de protéines ; Nobel de chimie 2024 (Hassabis, Jumper, avec Baker).</li><li><b>Conception de molécules</b> : proposer des candidats, tester ensuite en laboratoire.</li><li><b>Essais cliniques</b> : recrutement, surveillance, analyse.</li></ul>",
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
  "kicker": "46.3",
  "title": "Valider et réguler",
  "sub": "de la démo à la pratique",
  "body": "<ul class=\"rules\"><li><b>Validation externe</b> sur d’autres sites.</li><li><b>Marquage CE</b> (dispositifs médicaux) et exigences du règlement sur l’IA (haut risque).</li><li><b>Biais</b> : un modèle entraîné sur une population peut échouer sur une autre (chapitre 32).</li></ul>",
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
  "lit": "valid",
  "look": {},
  "scene": "valid",
  "fig": ""
 },
 {
  "kicker": "46.4",
  "title": "Données et confiance",
  "sub": "RGPD, explicabilité clinique",
  "body": "<ul class=\"rules\"><li>Données de santé : <b>régime strict</b> (RGPD, hébergement agréé en France).</li><li><b>Explicabilité</b> utile au clinicien, sans fausse précision.</li><li><b>Responsabilité</b> : définir qui répond d’une erreur.</li></ul>",
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
  "lit": "valid",
  "look": {},
  "scene": "valid",
  "fig": ""
 }
];
export const PLATES = {
  usages: { text: "L’IA aide à lire des images (rétinopathie diabétique, mammographie, lames d’anatomopathologie), à rédiger les comptes rendus, à prédire la structure des protéines (AlphaFold, prix Nobel de chimie 2024 pour Hassabis et Jumper, avec Baker), à concevoir des molécules et à organiser des essais cliniques.", facts: () => [["AlphaFold", "Nobel de chimie 2024"], ["imagerie", "usage le plus mature"]] },
  valid: { text: "Un bon score en laboratoire ne suffit pas : il faut une validation sur d’autres populations et d’autres équipements, des études prospectives, puis un marquage ou une autorisation (marquage CE, FDA aux États-Unis) et une surveillance après mise sur le marché. Le clinicien garde la responsabilité de la décision.", facts: () => [["risque", "biais de représentation"], ["exigence", "validation externe"]] }
};
