// Chapitre 5 : Les étapes de fabrication d’un modèle (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 5 · tous niveaux",
  "title": "Les étapes de fabrication d’un modèle",
  "sub": "une chaîne, pas un seul entraînement",
  "body": "\n    <p class=\"lede\">Un assistant comme ceux que vous utilisez n’est pas le résultat d’un seul entraînement, mais d’une <b>chaîne d’étapes</b>, chacune avec ses données, son objectif et son coût.</p>\n    <p>La figure en donne les neuf maillons. Le plus gros est le <b>pré-entraînement</b> : le modèle y lit des milliers de milliards de jetons et apprend à prédire le suivant. Tout le reste (affinage, préférences, évaluation) sert à orienter et à vérifier ce que cette étape a produit.</p>\n    <p>Un modèle <b>à poids ouverts</b> est le résultat final de cette chaîne, publié sous la forme de ses poids : ce qu’on peut ensuite réentraîner ou régler soi-même (chapitres 4 et 6).</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "5.1",
  "title": "Les données",
  "sub": "collecter, nettoyer, mélanger",
  "body": "\n    <p class=\"lede\">La qualité d’un modèle dépend d’abord de ses données, et on en retire beaucoup plus qu’on n’en garde.</p>\n    <ul class=\"rules\">\n      <li><b>Collecte</b> : pages web, livres, articles, code, conversations, données synthétiques produites par d’autres modèles.</li>\n      <li><b>Filtrage</b> : langue, qualité, contenus illicites ou toxiques, informations personnelles.</li>\n      <li><b>Déduplication</b> : un texte vu cent fois est mémorisé presque mot pour mot, et fausse l’évaluation.</li>\n      <li><b>Mélange</b> : les proportions de code, de maths, de texte, de chaque langue décident des compétences. On les règle par des essais à petite échelle.</li>\n    </ul>",
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
  "lit": "donnees",
  "look": {},
  "scene": "donnees",
  "fig": ""
 },
 {
  "kicker": "5.2",
  "title": "Le pré-entraînement",
  "sub": "prédire le jeton suivant, des milliers de milliards de fois",
  "body": "\n    <p class=\"lede\">Le modèle voit un texte, prédit chaque jeton à partir des précédents, et ajuste ses poids pour que la bonne réponse devienne plus probable.</p>\n    <div class=\"eq\">calcul ≈ 6 × <i>N</i> × <i>D</i> opérations</div>\n    <p>avec <i>N</i> paramètres et <i>D</i> jetons. Pour 8 milliards de paramètres et 15 000 milliards de jetons : environ 7 × 10²³ opérations, de l’ordre de 500 000 heures de GPU récents, soit trois semaines sur mille GPU. Ce chiffre est un ordre de grandeur.</p>\n    <p>Les <b>lois d’échelle</b> (figure) montrent que la perte baisse régulièrement avec le calcul. Le travail de 2022 sur « Chinchilla » conseillait environ 20 jetons par paramètre pour un budget donné ; les modèles récents s’entraînent bien plus longtemps, parce qu’un petit modèle très entraîné coûte moins cher à servir.</p>",
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
  "lit": "echelle",
  "look": {},
  "scene": "echelle",
  "fig": ""
 },
 {
  "kicker": "5.3",
  "title": "Après le pré-entraînement",
  "sub": "SFT, préférences, renforcement",
  "body": "\n    <p class=\"lede\">Un modèle de base ne répond pas à une question : il <b>continue un texte</b>. Trois étapes en font un assistant.</p>\n    <ul class=\"rules\">\n      <li><b>SFT</b> (affinage supervisé) : on l’entraîne sur des paires consigne-réponse écrites ou validées par des humains. Il apprend le format du dialogue.</li>\n      <li><b>Préférences</b> : on lui montre deux réponses, dont l’une est préférée. Avec RLHF ou DPO (chapitre 7), il apprend à produire le type de réponse préféré.</li>\n      <li><b>Renforcement sur tâches vérifiables</b> : maths, code, raisonnement ; la récompense vient d’un test automatique. C’est ce qui développe les modèles de « raisonnement ».</li>\n    </ul>",
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
  "lit": "post",
  "look": {},
  "scene": "post",
  "fig": ""
 },
 {
  "kicker": "5.4",
  "title": "Évaluer et déployer",
  "sub": "mesurer, sécuriser, servir",
  "body": "\n    <p class=\"lede\">Avant la mise en ligne, on mesure ce que le modèle sait faire, et ce qu’il ne devrait pas faire.</p>\n    <ul class=\"rules\">\n      <li><b>Bancs d’essai</b> (connaissances, maths, code, raisonnement) : utiles mais sujets à la <b>contamination</b> quand les questions ont fuité dans les données d’entraînement.</li>\n      <li><b>Évaluations humaines et par modèle-juge</b> : plus proches de l’usage, mais plus coûteuses et biaisées.</li>\n      <li><b>Tests d’attaque</b> (<i>red teaming</i>) : chercher les contournements et les contenus dangereux.</li>\n      <li><b>Déploiement</b> : quantification, choix du moteur d’inférence (chapitre 3), surveillance.</li>\n    </ul>\n    <p>« Poids ouverts » ne veut pas dire « logiciel libre » : la licence peut limiter l’usage, et les données d’entraînement ne sont généralement pas publiées.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 }
];
export const PLATES = {
  chaine: { text: "Un modèle d’assistant naît en neuf étapes. Les trois premières préparent le texte ; le pré-entraînement donne la connaissance (c’est de loin l’étape la plus coûteuse) ; l’affinage et les préférences en font un assistant ; l’évaluation et le déploiement le rendent utilisable.", facts: () => [["pré-entraînement", "≈ 95 % du calcul"], ["affinage", "quelques milliers d’exemples à quelques millions"], ["sortie", "des poids (un fichier)"]] },
  donnees: { text: "Les données brutes sont très bruitées. On extrait le texte, on filtre (langue, qualité, contenus indésirables), on retire les doublons exacts et quasi exacts, puis on règle le mélange des sources : code, mathématiques, textes encyclopédiques, conversations.", facts: () => [["corpus d’un modèle récent", "10 à 30 trillions de jetons"], ["déduplication", "évite la mémorisation"], ["qualité", "pèse plus que la quantité"]] },
  echelle: { text: "Quand on multiplie le calcul, la perte baisse selon une loi de puissance régulière, vers un plancher que l’on ne peut pas franchir avec ces données. Cette régularité permet de prévoir, sur de petits essais, ce que donnera un très gros entraînement.", facts: () => [["calcul total", "≈ 6 × paramètres × jetons"], ["échelle", "logarithmique en abscisse"]] },
  post: { text: "Le modèle de base ne sait que continuer un texte. L’affinage supervisé lui apprend le format d’une conversation ; l’optimisation des préférences l’oriente vers les réponses jugées meilleures ; l’apprentissage par renforcement sur des problèmes vérifiables développe le raisonnement.", facts: () => [["modèle de base", "pas de format de dialogue"], ["modèle « instruct »", "après SFT et préférences"]] }
};
