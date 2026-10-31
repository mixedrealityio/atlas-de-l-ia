// Chapitre 24 : Les limites de l’IA et l’IA hybride (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 24 · avancé",
  "title": "Les limites de l’IA et l’IA hybride",
  "sub": "ce que les modèles ne savent pas faire",
  "body": "\n    <p class=\"lede\">Les modèles de langage impressionnent, mais ils ont des limites précises. Les connaître permet d’éviter des erreurs coûteuses et de repérer les pistes de recherche.</p>\n    <p>Ce chapitre en dresse la liste, puis se concentre sur la plus profonde : la <b>compréhension du monde physique</b>. Il montre ce que coûte de la compenser par la <b>force brute</b> (Genie), comment on pourrait <b>calculer moins</b>, et ce que l’on peut attendre de systèmes <b>hybrides</b> utilisant des cellules vivantes, jusqu’aux robots quadrupèdes.</p>",
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
  "lit": "limites",
  "look": {},
  "scene": "limites",
  "fig": ""
 },
 {
  "kicker": "24.1",
  "title": "Ce que les LLM ne font pas bien",
  "sub": "six limites",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Calcul exact</b> : ils prédisent des chiffres plausibles ; avec un outil de calcul, le problème disparaît.</li>\n      <li><b>Faits</b> : ils peuvent inventer avec aplomb (hallucination) ; la recherche et les sources aident (chapitre 20).</li>\n      <li><b>Causalité</b> : ils savent ce qui va avec quoi, pas toujours ce qui provoque quoi.</li>\n      <li><b>Planification longue</b> : les erreurs s’accumulent (chapitre 10).</li>\n      <li><b>Mémoire</b> : aucune en propre ; il faut la construire autour (chapitre 23).</li>\n      <li><b>Corps</b> : ils n’ont jamais poussé un objet : leur physique vient de textes.</li>\n    </ul>",
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
  "lit": "limites",
  "look": {},
  "scene": "limites",
  "fig": ""
 },
 {
  "kicker": "24.2",
  "title": "Le monde physique",
  "sub": "la limite la plus profonde",
  "body": "\n    <p class=\"lede\">Un enfant de deux ans sait qu’un objet lâché tombe, qu’un verre peut se renverser, qu’une porte s’ouvre dans un sens. Il l’a appris en <b>agissant</b>.</p>\n    <p>Un modèle de langage a lu des millions de descriptions de la physique, mais ne l’a pas éprouvée : il se trompe sur les contacts, les frottements, la stabilité, les quantités, les trajectoires. Le texte ne contient presque pas ce savoir implicite, trop évident pour être écrit.</p>\n    <p>Les modèles du monde (chapitre 13) et la robotique (chapitre 12) tentent de combler ce vide, mais ils achètent cette compréhension au prix fort.</p>",
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
  "lit": "limites",
  "look": {},
  "scene": "limites",
  "fig": ""
 },
 {
  "kicker": "24.3",
  "title": "La force brute : le cas de Genie",
  "sub": "apprendre la physique en regardant des vidéos",
  "body": "\n    <p class=\"lede\">Des modèles comme <b>Genie</b> (DeepMind) génèrent des mondes interactifs : on donne une image ou un texte, on appuie sur des touches, le modèle produit l’image suivante.</p>\n    <p>Pour Genie 3, annoncé en 2025, on parle d’une résolution de 720p, de 24 images par seconde, et d’une cohérence qui tient quelques minutes. Chaque image doit tenir compte de toute la trajectoire précédente, qui grandit : le calcul est considérable, et le déploiement se fait en centre de données.</p>\n    <p>Le modèle semble « comprendre » l’eau et la lumière, mais cette compréhension est <b>statistique</b>, apprise par des quantités énormes de vidéos, et elle se dégrade avec le temps.</p>",
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
  "lit": "genie",
  "look": {},
  "scene": "genie",
  "fig": ""
 },
 {
  "kicker": "24.4",
  "title": "Calculer moins",
  "sub": "d’autres façons de comprendre le monde",
  "body": "\n    <p class=\"lede\">Prédire chaque pixel est ruineux. D’autres approches cherchent à mettre davantage de <b>structure</b> dans le modèle.</p>\n    <ul class=\"rules\">\n      <li><b>Prédire l’abstrait</b> (JEPA) : ne pas deviner les détails imprévisibles.</li>\n      <li><b>Simulateur + correction apprise</b> : la physique connue est calculée, seul l’écart est appris.</li>\n      <li><b>Modèles creux</b> : n’activer qu’une partie des paramètres à chaque pas.</li>\n      <li><b>Capteurs événementiels</b> : ne traiter que ce qui bouge.</li>\n      <li><b>Apprendre en agissant</b>, dans un corps ou un simulateur, plutôt que par des millions d’heures de vidéo.</li>\n    </ul>\n    <p>Ces pistes sont étudiées ; aucune n’a, à ce jour, détrôné l’échelle.</p>",
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
  "lit": "approches",
  "look": {},
  "scene": "approches",
  "fig": ""
 },
 {
  "kicker": "24.5",
  "title": "Le cerveau comme repère",
  "sub": "20 watts",
  "body": "\n    <p class=\"lede\">Un cerveau humain, d’environ 86 milliards de neurones, consomme de l’ordre de <b>20 W</b>, et apprend avec peu d’exemples.</p>\n    <p>Un GPU de centre de données consomme 700 W, un serveur de huit GPU environ 10 kW, et un cluster d’entraînement des mégawatts. La comparaison est approximative (le cerveau ne fait pas la même chose), mais l’écart de plusieurs ordres de grandeur explique l’intérêt pour les approches inspirées du vivant.</p>\n    <p>Les puces <b>neuromorphiques</b> imitent ses impulsions électriques, et le <b>biocalcul</b> va plus loin : il utilise de vraies cellules.</p>",
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
  "lit": "energie",
  "look": {},
  "scene": "energie",
  "fig": ""
 },
 {
  "kicker": "24.6",
  "title": "Cellules vivantes et IA hybride",
  "sub": "de DishBrain à MetaBOC",
  "body": "\n    <p class=\"lede\">Des neurones cultivés sur des électrodes peuvent être stimulés et lus. En 2022, <b>DishBrain</b> (Cortical Labs) a montré qu’environ 800 000 cellules apprenaient à jouer à Pong en quelques minutes.</p>\n    <p><b>FinalSpark</b> (Suisse) loue l’accès à des organoïdes d’environ 10 000 neurones. En Chine, <b>MetaBOC</b> (Tianjin, SUSTech, 2024) a relié un organoïde à une puce pour piloter un robot.</p>\n    <p><b>Précautions</b> : vie courte (≈ 100 jours), échelle minuscule, gains d’énergie annoncés (jusqu’à un million de fois) seulement <b>estimés</b>, questions éthiques.</p>",
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
  "lit": "culture",
  "look": {},
  "scene": "culture",
  "fig": ""
 },
 {
  "kicker": "24.7",
  "title": "Robots quadrupèdes et usages de défense",
  "sub": "ce qui existe, ce qui reste difficile",
  "body": "\n    <p class=\"lede\">Les robots quadrupèdes, souvent surnommés « chiens », marchent sur des terrains variés. Leurs usages civils : inspection de sites, logistique, secours en décombres ; leurs usages de défense : reconnaissance, transport, détection d’engins.</p>\n    <ul class=\"rules\">\n      <li><b>Ce qu’ils font bien</b> : marcher, garder l’équilibre, cartographier avec LiDAR et caméras.</li>\n      <li><b>Ce qui reste dur</b> : comprendre une scène imprévue, fonctionner sans communication, durer plus que quelques heures de batterie, résister à la boue, à l’eau, aux chocs.</li>\n      <li><b>Un système hybride biologique</b> n’est pas envisageable sur le terrain : il exige un support de vie en laboratoire.</li>\n    </ul>\n    <p><b>Cadre éthique et juridique</b> : l’emploi de systèmes autonomes en situation de combat est vivement débattu, notamment à l’ONU. Le droit humanitaire (distinction, proportionnalité) exige un jugement humain ; beaucoup demandent un <b>contrôle humain significatif</b> et certains fabricants refusent d’armer leurs robots. Cet atlas ne décrit pas leur armement.</p>",
  "cam": {
   "target": [
    240,
    1.8,
    0
   ],
   "az": 12,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "chien",
  "look": {},
  "scene": "chien",
  "fig": ""
 }
];
export const PLATES = {
  limites: { text: "Un modèle de langage prédit du texte plausible. Il calcule mal sans outil, peut inventer des faits, confond corrélation et cause, perd le fil des longues chaînes d’actions, n’a pas de mémoire propre, et n’a jamais touché ni déplacé un objet.", facts: () => [["remèdes partiels", "outils, recherche, boucles, vérificateurs"], ["pas résolu", "le monde physique"]] },
  genie: { text: "Des modèles comme Genie génèrent des mondes interactifs image par image, en tenant compte de tout ce qui s’est passé avant. À 24 images par seconde en 720p, la cohérence ne tient que quelques minutes et le calcul est considérable : le modèle apprend la physique en regardant des vidéos, à grand frais.", facts: () => [["Genie 3", "720p, 24 images/s, cohérence de quelques minutes"], ["coût", "croît avec l’historique"], ["déploiement", "centre de données"]] },
  approches: { text: "Plutôt que de prédire chaque pixel, on peut prédire des représentations abstraites, combiner un simulateur physique et un modèle qui apprend ses écarts, n’activer qu’une fraction du modèle, ne traiter que ce qui change dans l’image, et apprendre par l’interaction. Aucune n’a encore remplacé la force brute.", facts: () => [["idée commune", "mettre de la connaissance dans la structure"], ["état", "recherche"]] },
  energie: { text: "Un cerveau humain, environ 86 milliards de neurones, consomme de l’ordre de 20 W. Un GPU de centre de données en consomme 700, un serveur de huit GPU une dizaine de milliers, un cluster de dix mille GPU plusieurs mégawatts. La comparaison est approximative (les tâches diffèrent) mais l’écart est énorme.", facts: () => [["cerveau", "≈ 20 W"], ["GPU H100", "≈ 700 W"], ["cluster de 10 000 GPU", "≈ 10 MW ou plus"]] },
  culture: { text: "Des neurones cultivés sont posés sur un réseau d’électrodes. On stimule certaines électrodes (entrée) et on lit l’activité des autres (sortie). Des équipes ont montré qu’ils pouvaient s’adapter : environ 800 000 cellules ont appris à jouer à Pong en quelques minutes dans l’expérience DishBrain.", facts: () => [["DishBrain (2022)", "≈ 800 000 cellules, Pong"], ["organoïdes FinalSpark", "≈ 10 000 neurones chacun ; durée de vie ≈ 100 jours"], ["énergie annoncée", "très inférieure : estimations, non démontrée"]] },
  hybride: { text: "Dans un système hybride, des cellules cultivées sont reliées par électrodes à une puce, qui convertit leurs signaux en commandes pour un robot, et les signaux des capteurs en stimulations. En 2024, une équipe chinoise (système MetaBOC) a présenté un organoïde cérébral sur puce pilotant un robot pour éviter des obstacles et saisir un objet.", facts: () => [["MetaBOC", "Tianjin Univ. et SUSTech, 2024"], ["limites", "maturité, nutriments, durée de vie"], ["échelle", "loin d’un GPU"]] },
  chien: { text: "Un robot quadrupède marche en alternant ses pattes en diagonale. Il combine caméras et LiDAR (voir), centrale inertielle (sentir l’équilibre), capteurs de force dans les pieds (sentir le sol) et des politiques de marche apprises en simulation puis ajustées sur le robot.", facts: () => [["marche", "trot : pattes en diagonale"], ["capteurs", "caméras, LiDAR, IMU, force"], ["autonomie", "quelques heures de batterie"]] }
};
