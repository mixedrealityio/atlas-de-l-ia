// Chapitre 52 : Secteur public et gouvernance algorithmique (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 52 · secteurs",
  "title": "Secteur public et gouvernance algorithmique",
  "sub": "l’IA qui décide pour tous",
  "body": "<p class='lede'>Quand un algorithme décide d’une aide, d’un contrôle ou d’une peine, l’exigence de transparence et de recours est maximale.</p>",
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
  "lit": "dangers",
  "look": {},
  "scene": "dangers",
  "fig": ""
 },
 {
  "kicker": "52.1",
  "title": "Usages",
  "sub": "administration et services",
  "body": "<ul class=\"rules\"><li><b>Administration</b> : tri de courriers, aide à l’accueil, détection de fraude.</li><li><b>Villes</b> : mobilité, énergie, jumeaux urbains.</li><li><b>Justice</b> : recherche de jurisprudence ; les <b>prévisions de décisions</b> sont très controversées.</li></ul>",
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
  "lit": "cadre",
  "look": {},
  "scene": "cadre",
  "fig": ""
 },
 {
  "kicker": "52.2",
  "title": "Ce qui peut mal tourner",
  "sub": "exemples",
  "body": "<ul class=\"rules\"><li><b>COMPAS</b> : désaccords sur l’équité (chapitre 32).</li><li><b>Affaire néerlandaise des allocations</b> : profilage automatisé, familles injustement accusées de fraude.</li><li>Cause commune : <b>opacité</b>, absence de recours, confiance excessive.</li></ul>",
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
  "lit": "dangers",
  "look": {},
  "scene": "dangers",
  "fig": ""
 },
 {
  "kicker": "52.3",
  "title": "Garde-fous",
  "sub": "transparence, impact, recours",
  "body": "<ul class=\"rules\"><li><b>Registres</b> publics d’algorithmes.</li><li><b>Analyse d’impact</b> sur les droits fondamentaux avant déploiement.</li><li><b>Droit à l’explication</b> et <b>recours humain</b> effectif.</li></ul>",
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
  "lit": "cadre",
  "look": {},
  "scene": "cadre",
  "fig": ""
 }
];
export const PLATES = {
  dangers: { text: "Des outils d’aide à la décision ont causé des torts : le logiciel américain COMPAS (évaluation du risque de récidive) a été critiqué pour des taux d’erreurs différents selon les groupes (ProPublica, 2016), et l’affaire néerlandaise des allocations familiales a conduit à la démission du gouvernement en 2021. Leçons : audit, transparence, recours humain.", facts: () => [["COMPAS", "critique de l’équité (2016)"], ["Pays-Bas", "démission du gouvernement, 2021"]] },
  cadre: { text: "Les administrations publient des registres d’algorithmes, réalisent des analyses d’impact, doivent expliquer les décisions automatisées et prévoir un recours humain. Le règlement européen classe plusieurs usages publics (accès aux services essentiels, justice, migrations) parmi les systèmes à haut risque.", facts: () => [["registres", "Amsterdam, Helsinki"], ["exigence", "explication et recours"]] }
};
