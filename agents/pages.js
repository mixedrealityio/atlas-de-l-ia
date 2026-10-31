// Chapitre 10 : Les agents (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 10 · tous niveaux",
  "title": "Les agents",
  "sub": "un modèle qui agit pour atteindre un objectif",
  "body": "\n    <p class=\"lede\">Un <b>agent</b> est un modèle de langage placé dans une <b>boucle</b>, avec des <b>outils</b> et un <b>objectif</b>.</p>\n    <p>Une question appelle une réponse. Un objectif (« corrige ce bogue », « prépare ce rapport ») appelle une <b>suite d’actions</b> : lire, chercher, essayer, vérifier, corriger. L’agent choisit chaque action d’après ce qu’il a vu, jusqu’à ce que l’objectif soit atteint ou que l’on renonce.</p>\n    <p>Ce qui le distingue d’un simple échange : il agit sur le monde et voit le résultat de ses actions.</p>",
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
  "lit": "react",
  "look": {},
  "scene": "react",
  "fig": ""
 },
 {
  "kicker": "10.1",
  "title": "Penser, agir, observer",
  "sub": "la boucle ReAct",
  "body": "\n    <p class=\"lede\">Le schéma de base, appelé <b>ReAct</b> (raisonner puis agir), tient en quatre temps.</p>\n    <ul class=\"rules\">\n      <li><b>Penser</b> : le modèle écrit où il en est et ce qu’il va tenter.</li>\n      <li><b>Agir</b> : il appelle un outil (chapitre 9).</li>\n      <li><b>Observer</b> : le harnais lui renvoie le résultat.</li>\n      <li><b>Décider</b> : objectif atteint ? Sinon, un nouveau tour.</li>\n    </ul>\n    <p>Les modèles dits « de raisonnement » écrivent une longue réflexion avant d’agir ou de répondre : le calcul supplémentaire à l’inférence remplace en partie la taille du modèle.</p>",
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
  "lit": "react",
  "look": {},
  "scene": "react",
  "fig": ""
 },
 {
  "kicker": "10.2",
  "title": "Planifier et décomposer",
  "sub": "un plan écrit",
  "body": "\n    <p class=\"lede\">Sur une tâche longue, un agent qui improvise à chaque tour se perd. Un <b>plan</b> écrit lui donne un fil.</p>\n    <p>L’agent décompose l’objectif en étapes, les exécute dans l’ordre, <b>vérifie</b> chacune, et révise le plan quand la réalité le contredit. Garder le plan dans un fichier le protège de l’oubli quand le contexte est résumé.</p>\n    <p>Plus l’objectif est vague, plus la décomposition est utile, et plus un humain doit valider le plan avant l’exécution.</p>",
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
  "lit": "plan",
  "look": {},
  "scene": "plan",
  "fig": ""
 },
 {
  "kicker": "10.3",
  "title": "Plusieurs agents",
  "sub": "orchestrer, déléguer, fusionner",
  "body": "\n    <p class=\"lede\">Un seul contexte finit par déborder. On peut <b>déléguer</b> à des sous-agents.</p>\n    <p>Un <b>orchestrateur</b> découpe la tâche et confie chaque morceau à un sous-agent, qui travaille dans son propre contexte et ne renvoie que son résultat. Cela garde les contextes courts et permet le travail en parallèle.</p>\n    <p>Le prix : plus de jetons dépensés, plus de coordination, et le risque que des sous-agents se contredisent. Plusieurs agents ne valent le coup que quand les sous-tâches sont <b>réellement indépendantes</b>.</p>",
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
  "lit": "multi",
  "look": {},
  "scene": "multi",
  "fig": ""
 },
 {
  "kicker": "10.4",
  "title": "Pourquoi les agents échouent",
  "sub": "la loi de la chaîne",
  "body": "\n    <p class=\"lede\">Si chaque étape réussit avec la probabilité <i>p</i>, une chaîne de <i>n</i> étapes réussit avec <i>p</i><sup><i>n</i></sup>.</p>\n    <div class=\"eq\">20 étapes à 95 % : 0,95<sup>20</sup> ≈ 0,36</div>\n    <p>L’erreur d’une étape contamine les suivantes. Remèdes : des étapes plus courtes, une <b>vérification après chaque étape</b>, la possibilité de <b>revenir en arrière</b>, l’aveu d’incertitude plutôt que le bluff.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "10.5",
  "title": "Évaluer un agent",
  "sub": "mesurer plus que la réponse finale",
  "body": "\n    <p class=\"lede\">Évaluer un agent, c’est évaluer une <b>trajectoire</b>, pas seulement un résultat.</p>\n    <ul class=\"rules\">\n      <li><b>Réussite de la tâche</b>, mesurée par un test automatique quand c’est possible.</li>\n      <li><b>Coût</b> : jetons, appels d’outils, temps, argent.</li>\n      <li><b>Efficacité</b> : nombre de tours, détours, appels inutiles.</li>\n      <li><b>Sûreté</b> : actions dangereuses tentées, respect des permissions.</li>\n      <li><b>Reproductibilité</b> : un agent réussit rarement deux fois de la même manière ; il faut des dizaines d’essais.</li>\n    </ul>",
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
  "lit": "react",
  "look": {},
  "scene": "react",
  "fig": ""
 }
];
export const PLATES = {
  react: { text: "Un agent répète : réfléchir à la situation, choisir une action (appeler un outil), observer le résultat, décider s’il a atteint son objectif. Chaque tour ajoute au contexte ce qu’il a fait et ce qu’il a vu.", facts: () => [["entrée", "un objectif"], ["sortie", "un résultat, ou un échec"], ["arrêt", "objectif atteint ou budget épuisé"]] },
  plan: { text: "Un agent efficace commence souvent par décomposer l’objectif en étapes, les exécute et vérifie, quitte à revoir le plan. Écrire le plan dans un fichier le garde disponible même quand le contexte est résumé.", facts: () => [["plan explicite", "limite les détours"], ["replanification", "si une étape échoue"]] },
  multi: { text: "Un orchestrateur répartit la tâche entre des sous-agents qui travaillent chacun dans leur propre contexte, puis assemble leurs résultats. Chaque sous-agent ne voit que ce dont il a besoin, ce qui garde son contexte petit.", facts: () => [["avantage", "contextes courts, travail parallèle"], ["coût", "plus de jetons, plus de coordination"]] },
  chaine: { text: "Si chaque étape réussit avec la probabilité p, une chaîne de n étapes réussit avec p à la puissance n. Même à 95 % par étape, une tâche de 20 étapes réussit moins d’une fois sur trois : la fiabilité des agents se joue sur la longueur des chaînes.", facts: () => [["20 étapes à 95 %", "≈ 36 %"], ["20 étapes à 99 %", "≈ 82 %"], ["remède", "vérifier et corriger à chaque étape"]] }
};
