// Chapitre 31 : Évaluer et fiabiliser (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 31 · évaluer",
  "title": "Évaluer et fiabiliser",
  "sub": "un score n’est pas une garantie",
  "body": "\n    <p class=\"lede\">Choisir ou valider un modèle suppose de le mesurer. Or mesurer est difficile : les tests vieillissent, fuient, et ne représentent jamais votre usage.</p>\n    <p>Ce chapitre présente les grandes familles de tests, leurs pièges, et la seule évaluation qui compte vraiment : la vôtre.</p>",
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
  "lit": "satur",
  "look": {},
  "scene": "satur",
  "fig": ""
 },
 {
  "kicker": "31.1",
  "title": "Les benchmarks",
  "sub": "ce qu’ils mesurent",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Connaissances</b> : MMLU (questions de niveau universitaire), GPQA (sciences difficiles).</li>\n      <li><b>Raisonnement</b> : problèmes de mathématiques, ARC-AGI (puzzles visuels de généralisation).</li>\n      <li><b>Code</b> : SWE-bench (corriger de vrais tickets de dépôts), exercices de programmation.</li>\n      <li><b>Agents</b> : tâches longues en environnement (navigation, bureau, terminal).</li>\n    </ul>\n    <p>Un chiffre sans le protocole (nombre d’essais, aides, outils) ne se compare pas.</p>",
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
  "lit": "bench",
  "look": {},
  "scene": "bench",
  "fig": ""
 },
 {
  "kicker": "31.2",
  "title": "Saturation et contamination",
  "sub": "deux pièges",
  "body": "\n    <p class=\"lede\">Un test <b>sature</b> quand les meilleurs modèles s’approchent du maximum : il ne départage plus.</p>\n    <p>La <b>contamination</b> aggrave le problème : si les questions d’un test sont dans les données d’entraînement, le score mesure la mémoire. Un modèle peut aussi être <b>optimisé pour le test</b> sans être meilleur en général.</p>",
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
  "lit": "satur",
  "look": {},
  "scene": "satur",
  "fig": ""
 },
 {
  "kicker": "31.3",
  "title": "Contamination en détail",
  "sub": "comment s’en protéger",
  "body": "\n    <ul class=\"rules\">\n      <li>Préférer des tests <b>privés</b> ou <b>renouvelés</b> régulièrement.</li>\n      <li>Rechercher des <b>recoupements</b> entre le test et le corpus.</li>\n      <li>Comparer sur des variantes reformulées : si le score s’effondre, c’était de la mémoire.</li>\n    </ul>",
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
  "lit": "contam",
  "look": {},
  "scene": "contam",
  "fig": ""
 },
 {
  "kicker": "31.4",
  "title": "Arène et modèle-juge",
  "sub": "évaluer l’utilité perçue",
  "body": "\n    <p class=\"lede\">Pour les tâches ouvertes (rédiger, conseiller), il n’y a pas de bonne réponse unique.</p>\n    <p>Une <b>arène</b> montre deux réponses anonymes à des utilisateurs, qui votent ; on calcule un classement <b>Elo</b>. Un <b>modèle-juge</b> automatise le vote à bas coût, mais favorise les réponses longues et celles qui lui ressemblent : on contrôle l’ordre de présentation et la longueur.</p>",
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
  "lit": "juge",
  "look": {},
  "scene": "juge",
  "fig": ""
 },
 {
  "kicker": "31.5",
  "title": "Les hallucinations",
  "sub": "plausible n’est pas vrai",
  "body": "\n    <p class=\"lede\">Un modèle de langage prédit le texte vraisemblable ; il peut inventer un fait, une citation, une référence.</p>\n    <p>On les réduit en <b>ancrant</b> la réponse dans des sources (RAG), en demandant des <b>citations vérifiables</b>, en laissant le modèle <b>s’abstenir</b>, et en vérifiant automatiquement ce qui peut l’être (code exécuté, calcul refait). On ne les supprime pas : on les mesure et on organise la vérification.</p>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "halluc",
  "look": {},
  "scene": "halluc",
  "fig": ""
 },
 {
  "kicker": "31.6",
  "title": "Votre propre jeu d’évaluation",
  "sub": "le test qui compte",
  "body": "\n    <ul class=\"rules\">\n      <li>Rassembler 50 à 200 <b>cas réels</b> de votre usage, avec la réponse attendue ou une grille.</li>\n      <li>Le garder <b>privé</b> et le faire évoluer avec les échecs rencontrés.</li>\n      <li>À chaque changement de modèle, de prompt ou d’outil, <b>relancer</b> et comparer.</li>\n      <li>Mesurer aussi le <b>coût</b>, la <b>latence</b> et les <b>refus à tort</b>.</li>\n    </ul>\n    <p>C’est l’équivalent des tests unitaires pour l’IA.</p>",
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
  "lit": "bench",
  "look": {},
  "scene": "bench",
  "fig": ""
 }
];
export const PLATES = {
  satur: { text: "Chaque benchmark finit par être « résolu » : les scores approchent du plafond et ne distinguent plus les modèles. D’où le renouvellement permanent (MMLU, puis GPQA, ARC-AGI, SWE-bench, des examens plus durs). Courbes illustratives.", facts: () => [["saturation", "le score plafonne"], ["conséquence", "il faut des tests plus durs"]] },
  bench: { text: "Aucun test ne mesure « l’intelligence ». On en combine : connaissances à choix multiples, problèmes de raisonnement, résolution de tickets de code, tâches d’agents, préférences humaines, résistance aux attaques.", facts: () => [["limite", "chaque test mesure peu de choses"], ["conseil", "regarder plusieurs tests"]] },
  contam: { text: "Si les questions d’un test se retrouvent dans les données d’entraînement, le modèle peut les avoir apprises. Parades : tests privés, tests renouvelés régulièrement, détection de recoupements.", facts: () => [["problème", "score non fiable"], ["parade", "tests nouveaux ou privés"]] },
  juge: { text: "Une arène compare des paires de réponses et calcule un classement Elo. Un modèle peut aussi jouer le juge, à coût réduit, mais il préfère les réponses longues et celles qui ressemblent aux siennes. Il faut contrôler ces biais.", facts: () => [["Elo", "classement par duels"], ["biais", "longueur, position, style"]] },
  halluc: { text: "Un modèle produit du texte plausible, pas vérifié. On réduit les erreurs en lui fournissant les sources (chapitre 20), en exigeant des citations, en vérifiant automatiquement, en l’entraînant à dire qu’il ne sait pas, et en mesurant le taux d’erreur sur son propre usage.", facts: () => [["cause", "plausible ≠ vrai"], ["remède", "sources, citations, abstention"]] }
};
