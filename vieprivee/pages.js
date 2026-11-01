// Chapitre 66 : Vie privée et surveillance (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 66 · vie privée",
  "title": "Vie privée et surveillance",
  "sub": "ce que l’IA sait de nous",
  "body": "\n    <p class=\"lede\">L’IA ne se contente pas de stocker des données : elle en <b>déduit</b> de nouvelles, et rend la surveillance automatique et massive.</p>\n    <p>Ce chapitre décrit le profilage, la reconnaissance faciale, les fuites propres aux modèles, et le cadre légal.</p>",
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
  "lit": "traces",
  "look": {},
  "scene": "traces",
  "fig": ""
 },
 {
  "kicker": "66.1",
  "title": "Des traces aux déductions",
  "sub": "le profilage",
  "body": "<ul class=\"rules\"><li>Des <b>traces anodines</b> (likes, trajets, horaires) suffisent à prédire des traits sensibles.</li><li>Ces <b>inférences</b> concernent ce que vous n’avez jamais dit, et parfois ce que vous ignorez.</li><li>Elles nourrissent publicité ciblée, tarification, recrutement, crédit (chapitre 50).</li><li>Shoshana Zuboff parle de <b>capitalisme de surveillance</b> : vendre des prédictions de comportement.</li></ul><p>Protéger la vie privée ne consiste donc pas seulement à cacher des données, mais à limiter ce qu’on peut en <b>déduire</b>.</p>",
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
  "lit": "traces",
  "look": {},
  "scene": "traces",
  "fig": ""
 },
 {
  "kicker": "66.2",
  "title": "La reconnaissance faciale",
  "sub": "de 1 contre 1 à 1 contre tous",
  "body": "<ul class=\"rules\"><li><b>Vérification</b> (1 contre 1) : déverrouiller un téléphone, passer une frontière avec son passeport.</li><li><b>Identification</b> (1 contre N) : retrouver quelqu’un dans une base ou une foule.</li><li>Avec des millions de visages, même 0,1 % d’erreur donne des <b>milliers de fausses alertes</b>.</li><li>Des études (« Gender Shades », 2018) ont montré des erreurs bien plus fréquentes pour les femmes à la peau foncée.</li></ul>",
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
  "lit": "visage",
  "look": {},
  "scene": "visage",
  "fig": ""
 },
 {
  "kicker": "66.3",
  "title": "Les modèles eux-mêmes",
  "sub": "fuites et protections",
  "body": "<ul class=\"rules\"><li><b>Mémorisation</b> : un modèle peut restituer mot pour mot des données d’entraînement rares.</li><li><b>Inférence d’appartenance</b> : deviner si une personne faisait partie des données.</li><li><b>Ce que vous confiez</b> : lire les conditions de conservation et d’entraînement de votre assistant.</li><li><b>Protections</b> : confidentialité différentielle, apprentissage fédéré, anonymisation sérieuse, <b>modèle local</b>.</li></ul><p>Pour des documents sensibles, un modèle qui tourne sur votre propre machine ou serveur (chapitres 19, 21 et 38) est l’option la plus sûre.</p>",
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
  "lit": "modeles",
  "look": {},
  "scene": "modeles",
  "fig": ""
 },
 {
  "kicker": "66.4",
  "title": "Le cadre",
  "sub": "des droits à faire valoir",
  "body": "<ul class=\"rules\"><li><b>RGPD</b> : accès, rectification, effacement, opposition ; minimisation des données.</li><li><b>Décision automatisée</b> : droit à une intervention humaine et à une explication.</li><li><b>AI Act</b> : notation sociale interdite ; identification biométrique à distance très encadrée.</li><li><b>Ailleurs</b> : vidéosurveillance massive en Chine ; pas de loi fédérale générale aux États-Unis.</li></ul><p>Un droit s’exerce : plaintes, contrôles de la CNIL, actions collectives.</p>",
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
  "lit": "droit",
  "look": {},
  "scene": "droit",
  "fig": ""
 }
];
export const PLATES = {
  traces: { text: "Chaque usage numérique laisse des traces. L’apprentissage automatique en déduit des informations jamais déclarées : orientation, santé, opinions, situation financière. Ces profils alimentent la publicité ciblée et un marché de courtiers en données. La sociologue Shoshana Zuboff appelle « capitalisme de surveillance » ce modèle économique fondé sur la prédiction des comportements.", facts: () => [["inférence", "la donnée sensible peut être déduite"], ["Zuboff", "« L’âge du capitalisme de surveillance », 2019"]] },
  visage: { text: "Un réseau convertit chaque visage en vecteur (un plongement, comme au chapitre 1) ; deux vecteurs proches désignent probablement la même personne. Vérifier son téléphone (1 contre 1) diffère beaucoup d’identifier quelqu’un dans une foule (1 contre des millions), où même un faible taux d’erreur produit beaucoup de faux positifs. Des études ont montré des taux d’erreur plus élevés pour les femmes à la peau foncée (chapitre 32).", facts: () => [["1 contre 1", "déverrouiller un téléphone"], ["1 contre N", "chercher dans une foule"]] },
  modeles: { text: "Un grand modèle peut mémoriser et restituer des passages de ses données, y compris personnelles. Des attaques devinent si une personne figurait dans l’entraînement. Ce qu’on confie à un assistant (documents, conversations) peut être conservé. Protections : la confidentialité différentielle ajoute un bruit calibré, l’apprentissage fédéré garde les données sur les appareils, et un modèle local évite tout envoi.", facts: () => [["fédéré", "claviers de téléphone"], ["local", "chapitres 19 et 38"]] },
  droit: { text: "En Europe, le RGPD impose une base légale, la minimisation des données et des droits (accès, effacement, opposition), ainsi qu’un droit de ne pas être soumis à une décision entièrement automatisée aux effets importants. Le règlement sur l’IA interdit la notation sociale et encadre strictement l’identification biométrique à distance dans l’espace public. La société Clearview AI, qui a aspiré des milliards de photos, a été sanctionnée par plusieurs autorités européennes, dont la CNIL en 2022.", facts: () => [["CNIL, 2022", "20 millions d’euros contre Clearview AI"], ["chapitre 33", "droit et gouvernance"]] }
};
