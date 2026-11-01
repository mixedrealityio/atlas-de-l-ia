// Chapitre 49 : IA et éducation (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 49 · secteurs",
  "title": "IA et éducation",
  "sub": "un levier, un risque",
  "body": "<p class='lede'>L’IA peut offrir à chaque élève un tuteur patient, ou lui permettre de ne plus rien apprendre.</p>",
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
  "lit": "tuteur",
  "look": {},
  "scene": "tuteur",
  "fig": ""
 },
 {
  "kicker": "49.1",
  "title": "Le tuteur IA",
  "sub": "personnaliser sans substituer",
  "body": "<ul class=\"rules\"><li>Adapter <b>niveau</b> et <b>rythme</b>.</li><li><b>Indices</b> avant solutions ; explications à la demande.</li><li>L’<b>enseignant</b> reste le pilote, l’IA un outil.</li></ul>",
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
  "lit": "tuteur",
  "look": {},
  "scene": "tuteur",
  "fig": ""
 },
 {
  "kicker": "49.2",
  "title": "Évaluer autrement",
  "sub": "oral, processus, projet",
  "body": "<ul class=\"rules\"><li>Évaluer <b>sans l’outil</b> une partie des compétences.</li><li>Valoriser le <b>processus</b> : brouillons, justifications.</li><li>Ne pas se fier aux <b>détecteurs</b> de texte généré.</li></ul>",
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
  "lit": "eval",
  "look": {},
  "scene": "eval",
  "fig": ""
 },
 {
  "kicker": "49.3",
  "title": "Littératie et inégalités",
  "sub": "savoir s’en servir",
  "body": "<ul class=\"rules\"><li>Apprendre à <b>vérifier</b>, à <b>citer</b>, à repérer les erreurs.</li><li><b>Inégalités</b> : accès aux outils, aux appareils, accompagnement.</li><li>Garder les <b>compétences de base</b> (chapitre 36) : lire, écrire, calculer sans aide.</li></ul>",
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
  "lit": "eval",
  "look": {},
  "scene": "eval",
  "fig": ""
 }
];
export const PLATES = {
  tuteur: { text: "Un assistant conçu comme tuteur donne des indices, pose des questions, vérifie la compréhension et adapte le rythme, au lieu de livrer la réponse. Les études (chapitre 36) suggèrent qu’un assistant sans garde-fou peut nuire à l’apprentissage, alors qu’un assistant guidé limite le risque.", facts: () => [["principe", "guider, pas répondre"], ["acteur clé", "l’enseignant"]] },
  eval: { text: "Les devoirs faits à la maison se délèguent facilement. Les écoles mêlent évaluations surveillées (oral, papier), évaluation du processus (brouillons, justification) et projets avec l’outil. Les détecteurs de texte généré sont peu fiables et ne doivent pas servir de preuve. Le règlement européen demande une « maîtrise de l’IA » aux organisations qui l’emploient.", facts: () => [["détecteurs", "peu fiables"], ["objectif", "apprendre à utiliser l’IA avec esprit critique"]] }
};
