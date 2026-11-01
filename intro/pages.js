// Chapitre 60 : Qu’est-ce que l’IA ? (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 60 · introduction",
  "title": "Qu’est-ce que l’IA ?",
  "sub": "les mots avant les machines",
  "body": "\n    <p class=\"lede\">« Intelligence artificielle » désigne à la fois un domaine de recherche, des produits et un imaginaire. Ce chapitre pose le vocabulaire utilisé dans tout l’atlas.</p>\n    <p>On y distingue les termes emboîtés (IA, apprentissage, apprentissage profond), les façons de classer les IA (étroite, générale, faible, forte), les deux grandes traditions (symbolique et connexionniste) et la carte des chapitres.</p>",
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
  "lit": "mots",
  "look": {},
  "scene": "mots",
  "fig": ""
 },
 {
  "kicker": "60.1",
  "title": "Des mots emboîtés",
  "sub": "du plus large au plus précis",
  "body": "<ul class=\"rules\"><li><b>IA</b> : faire réaliser par une machine des tâches jugées intelligentes.</li><li><b>Apprentissage automatique</b> : les règles sont <b>apprises</b> à partir d’exemples plutôt qu’écrites (chapitre 40).</li><li><b>Apprentissage profond</b> : des réseaux de neurones à <b>nombreuses couches</b> (chapitres 2 et 14).</li><li><b>IA générative</b> : produire du texte, des images, du son (chapitre 28) ; les <b>modèles de langage</b> en sont l’exemple phare.</li><li><b>Agent</b> : un modèle qui agit avec des outils (chapitre 10).</li></ul><p>La frontière bouge : dès qu’une tâche est maîtrisée, on cesse souvent de l’appeler IA.</p>",
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
  "lit": "mots",
  "look": {},
  "scene": "mots",
  "fig": ""
 },
 {
  "kicker": "60.2",
  "title": "Étroite, générale, forte",
  "sub": "deux classements souvent confondus",
  "body": "<ul class=\"rules\"><li><b>Par la portée</b> : étroite (une tâche), générale (toutes les tâches intellectuelles humaines), superintelligente (hypothétique).</li><li><b>Par la nature</b> (Searle, 1980) : l’IA <b>faible</b> simule l’intelligence, l’IA <b>forte</b> aurait vraiment un esprit.</li><li>Un système peut être très général <b>et</b> faible au sens de Searle : la polyvalence ne prouve pas la conscience.</li></ul><p>Les grands modèles actuels sont <b>polyvalents</b> mais inégaux : excellents sur des tâches proches de leurs données, fragiles ailleurs (chapitres 24 et 26). Les débats sur l’AGI sont au chapitre 34, ceux sur la conscience au chapitre 39.</p>",
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
  "lit": "portee",
  "look": {},
  "scene": "portee",
  "fig": ""
 },
 {
  "kicker": "60.3",
  "title": "Deux traditions",
  "sub": "symbolique et connexionniste",
  "body": "<ul class=\"rules\"><li><b>Symbolique</b> : des faits et des règles écrits par des humains ; raisonnement lisible, mais rigide face au bruit et coûteux à maintenir.</li><li><b>Connexionniste</b> : des millions ou milliards de poids appris ; robuste aux données imparfaites, mais <b>opaque</b> (chapitre 58).</li><li><b>Hybride</b> : un modèle de langage qui appelle un solveur, une base de règles ou un programme combine les deux (chapitres 9 et 24).</li></ul><p>L’histoire de l’IA (chapitre 25) est en partie celle de la rivalité entre ces deux traditions, chacune ayant connu son âge d’or et ses désillusions.</p>",
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
  "lit": "traditions",
  "look": {},
  "scene": "traditions",
  "fig": ""
 },
 {
  "kicker": "60.4",
  "title": "La carte de l’atlas",
  "sub": "lire dans l’ordre ou par thème",
  "body": "<ul class=\"rules\"><li><b>Mécanismes</b> : du texte aux nombres (1) jusqu’à la vision (8), puis histoire, généralisation, architectures, interprétabilité (25 à 30).</li><li><b>Construire</b> : harnais, agents, matériel, RAG, sécurité, outils (9 à 23, 38, 43 à 45, 61).</li><li><b>Secteurs</b> : santé, science, création, éducation, finance, industrie, transports, agriculture, climat.</li><li><b>Société</b> : biais, droit, travail, vie privée, armes, éthique, démocratie, critiques.</li><li><b>Horizons</b> : AGI, conscience, quantique, transhumanisme, cosmos, spiritualité, conclusion.</li></ul><p>Chaque page a une figure que l’on peut tourner et décomposer ; la plupart ont un exercice. Les chiffres sont des ordres de grandeur.</p>",
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
  "lit": "carte",
  "look": {},
  "scene": "carte",
  "fig": ""
 }
];
export const PLATES = {
  mots: { text: "Les termes s’emboîtent comme des poupées russes. L’intelligence artificielle est le domaine le plus large : faire réaliser à une machine des tâches qu’on juge intelligentes. L’apprentissage automatique en est une méthode : au lieu d’écrire les règles, on les fait apprendre à partir d’exemples. L’apprentissage profond utilise des réseaux de neurones à nombreuses couches. L’IA générative produit des contenus nouveaux ; les modèles de langage en sont la forme la plus connue, et les agents les mettent en action.", facts: () => [["IA ⊃ apprentissage ⊃ profond", "chaque terme est inclus dans le précédent"], ["chapitres", "1 à 8 et 40 pour le détail"]] },
  portee: { text: "On classe les IA par leur portée : étroite (une tâche), générale (toutes les tâches intellectuelles humaines, l’AGI du chapitre 34) ou superintelligente (au-delà de l’humain, hypothèse). Le philosophe John Searle a proposé en 1980 une autre distinction : l’IA faible simule un esprit, l’IA forte en aurait réellement un. Les deux classements sont souvent confondus. Les modèles actuels sont polyvalents sans être généraux au sens fort, et rien ne prouve qu’ils aient un esprit (chapitre 39).", facts: () => [["Searle, 1980", "IA faible / IA forte"], ["AGI", "chapitre 34"], ["conscience", "chapitre 39"]] },
  traditions: { text: "L’IA symbolique écrit des règles explicites : elle est lisible et vérifiable, mais rigide et chère à maintenir (systèmes experts des années 1980). L’IA connexionniste fait apprendre des poids à des réseaux de neurones : elle s’adapte à des données bruitées mais reste difficile à expliquer (chapitres 30 et 58). Depuis 2012, la seconde domine. Les approches neuro-symboliques cherchent à combiner raisonnement explicite et apprentissage.", facts: () => [["symbolique", "règles, logique, systèmes experts"], ["connexionniste", "réseaux, poids, données"]] },
  carte: { text: "L’atlas peut se lire dans l’ordre ou par thème. Les mécanismes (texte, attention, inférence, entraînement, vision) forment le cœur technique. Viennent ensuite la construction de systèmes (harnais, agents, RAG, matériel), les secteurs d’application, les questions de société (biais, droit, travail, vie privée, éthique) et les horizons plus spéculatifs. Les annexes donnent un glossaire et des parcours de lecture par profil.", facts: () => [["débutant", "60 → 25 → 1 → 2 → 5"], ["parcours", "annexes, chapitre 76"]] }
};
