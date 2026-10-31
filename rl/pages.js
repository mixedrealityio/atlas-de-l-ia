// Chapitre 7 : L’apprentissage par renforcement (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 7 · avancé",
  "title": "L’apprentissage par renforcement",
  "sub": "apprendre de ses essais",
  "body": "\n    <p class=\"lede\">Dans l’apprentissage supervisé, on montre au modèle la bonne réponse. Dans l’<b>apprentissage par renforcement</b> (RL), on ne lui donne qu’une <b>note</b> après coup, et il doit découvrir seul quoi faire.</p>\n    <p>Le cadre : un <b>agent</b> observe un <b>état</b>, choisit une <b>action</b> selon sa <b>politique</b>, l’<b>environnement</b> change et renvoie une <b>récompense</b>. Le but est de maximiser la somme des récompenses futures. C’est la méthode qui a appris à des programmes à jouer au Go et aux jeux vidéo, à des robots à marcher, et qui sert aujourd’hui à entraîner le raisonnement des modèles de langage.</p>",
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
  "lit": "agent",
  "look": {},
  "scene": "agent",
  "fig": ""
 },
 {
  "kicker": "7.1",
  "title": "Le cadre",
  "sub": "état, action, récompense, valeur",
  "body": "\n    <p class=\"lede\">Un monde en grille suffit à voir toutes les notions.</p>\n    <ul class=\"rules\">\n      <li>L’<b>état</b> est la case où se trouve l’agent ; l’<b>action</b> est un déplacement.</li>\n      <li>La <b>récompense</b> arrive rarement : +1 au but, −1 dans un piège.</li>\n      <li>Le <b>retour</b> est la somme des récompenses futures, pondérées par un <b>facteur d’actualisation</b> γ &lt; 1 : une récompense proche vaut plus qu’une lointaine.</li>\n      <li>La <b>valeur</b> d’un état est le retour moyen qu’on peut en espérer en suivant la politique.</li>\n      <li>Le dilemme : <b>explorer</b> des actions inconnues ou <b>exploiter</b> la meilleure connue.</li>\n    </ul>",
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
  "lit": "grille",
  "look": {},
  "scene": "grille",
  "fig": ""
 },
 {
  "kicker": "7.2",
  "title": "Apprendre une politique",
  "sub": "gradient de politique, PPO",
  "body": "\n    <p class=\"lede\">Le <b>gradient de politique</b> augmente la probabilité des actions qui ont mené à plus de récompense que d’habitude.</p>\n    <div class=\"eq\">∇<i>J</i> = E [ ∇ log π(<i>a</i> | <i>s</i>) × <i>A</i> ]</div>\n    <p>L’<b>avantage</b> <i>A</i> compare le retour obtenu à ce qu’on attendait en moyenne : positif, on renforce l’action ; négatif, on l’affaiblit. <b>PPO</b> (2017) limite chaque mise à jour : le rapport entre la nouvelle et l’ancienne politique est borné (typiquement entre 0,8 et 1,2), ce qui évite les pas trop grands.</p>\n    <p>PPO a longtemps été l’algorithme par défaut, pour les jeux comme pour le RLHF.</p>",
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
  "lit": "agent",
  "look": {},
  "scene": "agent",
  "fig": ""
 },
 {
  "kicker": "7.3",
  "title": "Le RL pour les modèles de langage",
  "sub": "RLHF, DPO, GRPO, RLVR",
  "body": "\n    <p class=\"lede\">Pour un modèle de langage, l’action est un jeton ; la récompense tombe à la fin de la réponse.</p>\n    <ul class=\"rules\">\n      <li><b>RLHF</b> : un <b>modèle de récompense</b> appris sur des comparaisons humaines, puis PPO avec un terme qui garde le modèle près de son point de départ.</li>\n      <li><b>DPO</b> : sans RL ; une perte sur des paires « préférée / rejetée » règle la politique.</li>\n      <li><b>GRPO</b> : on compare la note de chaque réponse à celle de son groupe ; pas de réseau de valeur.</li>\n      <li><b>RLVR</b> : récompense <b>vérifiable</b> (réponse juste, tests réussis), voie des modèles de raisonnement.</li>\n    </ul>",
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
  "lit": "rlhf",
  "look": {},
  "scene": "rlhf",
  "fig": ""
 },
 {
  "kicker": "7.4",
  "title": "Les pièges",
  "sub": "détournement, récompenses rares, instabilité",
  "body": "\n    <p class=\"lede\">Le RL optimise <b>exactement ce qu’on mesure</b>, y compris ses défauts.</p>\n    <ul class=\"rules\">\n      <li><b>Détournement de récompense</b> : la politique exploite une faille du juge (réponses longues, flatteuses, qui trompent le modèle de récompense).</li>\n      <li><b>Récompenses rares</b> : si la réussite est exceptionnelle, il n’y a presque rien à apprendre ; on commence par des tâches plus faciles.</li>\n      <li><b>Effondrement de l’entropie</b> : la politique devient trop déterministe et cesse d’explorer.</li>\n      <li><b>Instabilité et coût</b> : beaucoup de réponses à générer, des réglages fragiles.</li>\n    </ul>\n    <p>Protections : garde-fou KL, juges variés, évaluations à l’écart, arrêt anticipé.</p>",
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
  "lit": "hacking",
  "look": {},
  "scene": "hacking",
  "fig": ""
 }
];
export const PLATES = {
  agent: { text: "L’agent observe l’état, choisit une action selon sa politique ; l’environnement change d’état et renvoie une récompense. L’agent n’a pas de bonne réponse à imiter : il ajuste sa politique pour que la somme des récompenses futures grandisse.", facts: () => [["objectif", "maximiser la somme des récompenses"], ["politique", "π(action | état)"]] },
  grille: { text: "Au départ, l’agent essaie au hasard et tombe dans le piège. Avec la récompense (+1 au but, −1 dans le piège), il apprend quelles actions mènent au but et finit par suivre un chemin court.", facts: () => [["but", "+1"], ["piège", "−1"], ["facteur d’actualisation γ", "0,9 à 0,99"]] },
  rlhf: { text: "Pour un modèle de langage, l’agent est le modèle, l’action est un jeton, une réponse complète est un « épisode », et la récompense vient d’un juge : un modèle de récompense appris sur des préférences humaines, ou un test automatique (code, maths).", facts: () => [["RLHF", "récompense apprise des humains"], ["RLVR", "récompense vérifiable par un test"], ["KL", "limite la dérive"]] },
  hacking: { text: "La récompense est un indicateur de la qualité, pas la qualité. Optimisée trop fort, la politique exploite les failles du juge : la récompense monte pendant que la qualité réelle redescend. C’est le détournement de récompense (reward hacking).", facts: () => [["remèdes", "garde-fou KL, juges variés, arrêt précoce"], ["courbes", "illustratives"]] }
};
