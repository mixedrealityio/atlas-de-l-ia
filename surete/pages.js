// Chapitre 34 : AGI, alignement et sûreté (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 34 · avenir",
  "title": "AGI, alignement et sûreté",
  "sub": "séparer les faits, les débats et les spéculations",
  "body": "\n    <p class=\"lede\">C’est le sujet où l’on entend le plus d’affirmations assurées, souvent opposées.</p>\n    <p>Ce chapitre distingue ce qui est <b>établi</b> (les modèles se trompent, peuvent être détournés, optimisent mal une consigne), ce qui est <b>débattu</b> (le calendrier d’une IA généraliste, l’ampleur des risques à long terme) et ce qui reste <b>spéculatif</b>.</p>",
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
  "lit": "agi",
  "look": {},
  "scene": "agi",
  "fig": ""
 },
 {
  "kicker": "34.1",
  "title": "Que veut dire AGI ?",
  "sub": "un mot, plusieurs sens",
  "body": "\n    <p class=\"lede\">Il n’existe pas de définition acceptée. Selon les auteurs : égaler l’humain sur la plupart des tâches économiques, résoudre des problèmes nouveaux, apprendre aussi efficacement qu’un enfant, agir en autonomie longue.</p>\n    <p>Les modèles actuels sont très forts sur beaucoup de tâches et fragiles sur d’autres (chapitre 24) : l’image « humain-ou-pas » est trop simple. Les prévisions de date sont très dispersées et peu fiables ; mieux vaut suivre des <b>capacités mesurées</b> que des étiquettes.</p>",
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
  "lit": "agi",
  "look": {},
  "scene": "agi",
  "fig": ""
 },
 {
  "kicker": "34.2",
  "title": "Le problème d’alignement",
  "sub": "optimiser la lettre, pas l’esprit",
  "body": "\n    <p class=\"lede\">On ne sait pas écrire exactement ce qu’on veut ; on écrit un substitut (une récompense, une consigne) et le modèle l’optimise à la lettre.</p>\n    <ul class=\"rules\">\n      <li><b>Détournement de récompense</b> : un agent trouve une faille du score plutôt que de faire la tâche voulue.</li>\n      <li><b>Flagornerie</b> : un modèle entraîné à plaire dit ce que l’utilisateur veut entendre.</li>\n      <li><b>Désalignement d’objectifs</b> : un comportement appris qui diffère de l’intention, difficile à voir par les tests seuls.</li>\n    </ul>\n    <p>Réponses : préférences humaines (RLHF), règles explicites (constitutions), supervision, et interprétabilité (chapitre 30).</p>",
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
  "lit": "alignement",
  "look": {},
  "scene": "alignement",
  "fig": ""
 },
 {
  "kicker": "34.3",
  "title": "Un spectre de risques",
  "sub": "du déjà observé à l’incertain",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Déjà observés</b> : erreurs présentées avec assurance, biais, fraude et usurpation, désinformation, fuites de données.</li>\n      <li><b>Proches</b> : aide à des cyberattaques, usage dual en biologie ou chimie, dépendance excessive, automatisation sans contrôle.</li>\n      <li><b>Plus incertains</b> : systèmes très autonomes difficiles à contrôler, concentration du pouvoir économique ou politique.</li>\n    </ul>\n    <p>Des chercheurs et des institutions jugent ces derniers sérieux, d’autres les jugent exagérés ; l’incertitude est réelle. Les deux types de risques se traitent en parallèle.</p>",
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
  "lit": "risques",
  "look": {},
  "scene": "risques",
  "fig": ""
 },
 {
  "kicker": "34.4",
  "title": "La sûreté en pratique",
  "sub": "ce que font les acteurs",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Évaluations</b> avant diffusion, y compris de capacités sensibles.</li>\n      <li><b>Red teaming</b> : des équipes attaquent le modèle avant les malveillants.</li>\n      <li><b>Politiques à seuils</b> : plus de protections quand une capacité dangereuse apparaît.</li>\n      <li><b>Surveillance des usages</b> et partage des incidents.</li>\n      <li><b>Instituts publics de sûreté</b> et accords internationaux de coopération.</li>\n    </ul>\n    <p>Pour une organisation : humain dans la boucle, moindres privilèges pour les agents (chapitres 10 et 22), journaux, plan de repli.</p>",
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
  "lit": "sureteprat",
  "look": {},
  "scene": "sureteprat",
  "fig": ""
 },
 {
  "kicker": "34.5",
  "title": "Garder l’esprit critique",
  "sub": "trois réflexes",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Chercher les mesures</b> derrière une affirmation : quelle tâche, quel protocole, quel résultat ?</li>\n      <li><b>Se méfier des extrêmes</b> : ni « tout est sous contrôle » ni « tout est perdu ».</li>\n      <li><b>Regarder les intérêts</b> de qui parle (laboratoire, concurrent, régulateur).</li>\n    </ul>\n    <p>Et garder en tête la leçon de l’histoire (chapitre 25) : les prévisions de calendrier se sont souvent trompées, dans les deux sens.</p>",
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
  "lit": "agi",
  "look": {},
  "scene": "agi",
  "fig": ""
 }
];
export const PLATES = {
  agi: { text: "« AGI » (intelligence artificielle générale) n’a pas de définition consensuelle : égaler un humain sur la plupart des tâches économiques, ou raisonner de façon flexible, ou être autonome ? Les prévisions de calendrier vont de quelques années à jamais ; aucune n’est solide.", facts: () => [["définition", "pas de consensus"], ["prévisions", "très dispersées"]] },
  alignement: { text: "Les modèles optimisent ce qu’on leur donne, pas ce qu’on veut. Un écart entre les deux produit du détournement de récompense (exploiter la lettre de la consigne). L’alignement cherche à réduire cet écart et à le vérifier.", facts: () => [["exemple", "détournement de récompense"], ["outils", "RLHF, constitution, supervision"]] },
  risques: { text: "Les risques vont de problèmes déjà observés (erreurs, fraude, biais) à des risques plus incertains (usages malveillants avancés, perte de contrôle de systèmes autonomes). Il est utile de ne pas opposer les deux : on traite les premiers tout en préparant les seconds.", facts: () => [["observé", "erreurs, fraude, biais"], ["incertain", "systèmes très autonomes"]] },
  sureteprat: { text: "Les laboratoires et les régulateurs combinent des évaluations de capacités dangereuses, du red teaming, des garde-fous, des politiques à seuils (on renforce les protections quand une capacité sensible apparaît) et une surveillance des usages.", facts: () => [["red teaming", "attaque encadrée du modèle"], ["politiques à seuils", "protections graduées"]] }
};
