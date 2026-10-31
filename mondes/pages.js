// Chapitre 13 : Les modèles du monde (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 13 · avancé",
  "title": "Les modèles du monde",
  "sub": "prédire ce qui va arriver",
  "body": "\n    <p class=\"lede\">Un modèle de langage prédit le <b>mot</b> suivant. Un <b>modèle du monde</b> prédit <b>l’état suivant du monde</b> : ce qui se passera si l’on agit de telle ou telle façon.</p>\n    <p>Un humain qui tend la main vers un verre anticipe sans y penser ce qui arrivera s’il le lâche. Donner cette capacité à une IA permet d’<b>essayer des actions dans sa tête</b> avant de les tenter pour de bon, ce qui est précieux dès que les essais réels coûtent cher ou sont dangereux : un robot, une voiture, un jeu complexe.</p>",
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
  "lit": "latent",
  "look": {},
  "scene": "latent",
  "fig": ""
 },
 {
  "kicker": "13.1",
  "title": "L’idée",
  "sub": "un état, une action, un état suivant",
  "body": "\n    <p class=\"lede\">Le cœur d’un modèle du monde est une fonction : <b>état suivant = f(état, action)</b>.</p>\n    <p>Elle est apprise sur des données d’interaction : on observe, on agit, on observe le résultat, et on ajuste la fonction pour que ses prédictions collent à la réalité.</p>\n    <p>Comme on ne veut pas prédire chaque pixel, on encode d’abord l’observation dans un <b>état latent</b>, bien plus petit, qui garde ce qui compte pour décider. C’est la méthode de modèles comme <b>Dreamer</b>, qui apprennent à jouer en s’entraînant surtout dans leur imagination.</p>",
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
  "lit": "latent",
  "look": {},
  "scene": "latent",
  "fig": ""
 },
 {
  "kicker": "13.2",
  "title": "Planifier dans l’imagination",
  "sub": "essayer des futurs dans la tête",
  "body": "\n    <p class=\"lede\">Avec un modèle du monde, on peut <b>chercher</b> plutôt que réagir.</p>\n    <p>L’agent déroule plusieurs suites d’actions dans le modèle, estime ce que chacune rapporte, et exécute la meilleure ; à chaque pas, il recommence avec l’observation réelle (c’est le principe de la commande prédictive). Dans <b>MuZero</b> (2019), un modèle appris sert de base à une recherche arborescente et a permis de jouer au Go, aux échecs et aux jeux vidéo sans connaître les règles à l’avance.</p>\n    <p>Le prix : un modèle imparfait donne des plans imparfaits, et l’erreur grandit avec la longueur de l’horizon.</p>",
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
  "lit": "imagine",
  "look": {},
  "scene": "imagine",
  "fig": ""
 },
 {
  "kicker": "13.3",
  "title": "Prédire l’abstrait",
  "sub": "JEPA",
  "body": "\n    <p class=\"lede\">Prédire chaque pixel de la suite d’une vidéo est à la fois énorme et vain : mille détails n’ont aucune importance et sont imprévisibles.</p>\n    <p>L’approche <b>JEPA</b> (<i>joint embedding predictive architecture</i>) propose de prédire non pas l’image mais sa <b>représentation</b> : le modèle devine l’abstraction de ce qui est caché ou à venir, et laisse tomber les détails imprévisibles. Les modèles de la famille V-JEPA suivent cette idée sur des vidéos.</p>\n    <p>C’est un pari sur la manière de construire des modèles du monde qui comprennent la physique du quotidien. Les résultats existent, mais la question reste ouverte.</p>",
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
  "lit": "jepa",
  "look": {},
  "scene": "jepa",
  "fig": ""
 },
 {
  "kicker": "13.4",
  "title": "Générer des mondes",
  "sub": "vidéo, jeux, simulations",
  "body": "\n    <p class=\"lede\">Une autre voie génère directement <b>l’image suivante</b>, y compris en réponse à des actions.</p>\n    <p>Des modèles de génération vidéo produisent des scènes plausibles sur plusieurs secondes ; d’autres créent des <b>environnements jouables</b> à partir d’images : le joueur appuie sur une touche, le modèle imagine la scène qui en résulte.</p>\n    <p>Cela suggère qu’ils ont appris quelque chose de la dynamique du monde. Mais ils trichent parfois avec la physique : objets qui apparaissent ou changent de forme, mouvements impossibles, oubli de ce qui sort de l’écran.</p>",
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
  "lit": "video",
  "look": {},
  "scene": "video",
  "fig": ""
 },
 {
  "kicker": "13.5",
  "title": "Limites et questions ouvertes",
  "sub": "ce qu’un modèle du monde ne sait pas encore faire",
  "body": "\n    <p class=\"lede\">Prédire un instant est facile ; prédire longtemps l’est beaucoup moins.</p>\n    <ul class=\"rules\">\n      <li><b>Dérive</b> : à chaque pas, une petite erreur s’ajoute ; au bout de dizaines de pas, la prédiction n’est plus fiable.</li>\n      <li><b>Évaluation</b> : comment mesurer qu’un modèle a « compris » la physique, plutôt qu’imité des vidéos ?</li>\n      <li><b>Causalité</b> : savoir ce qui arrive ensemble n’est pas savoir ce que provoque une action.</li>\n      <li><b>Coût</b> : entraîner sur de la vidéo demande bien plus de calcul que sur du texte.</li>\n    </ul>\n    <p>Pour les robots (chapitre 12), un bon modèle du monde est l’une des pistes les plus étudiées pour réduire le nombre d’essais réels.</p>",
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
  "lit": "latent",
  "look": {},
  "scene": "latent",
  "fig": ""
 }
];
export const PLATES = {
  latent: { text: "Un modèle du monde apprend une fonction qui prédit l’état suivant à partir de l’état courant et d’une action. Il travaille souvent sur un résumé compact (état latent) plutôt que sur les pixels, et s’entraîne en comparant ses prédictions à ce qui arrive vraiment.", facts: () => [["entrée", "état + action"], ["sortie", "état suivant"], ["entraînement", "erreur de prédiction"]] },
  imagine: { text: "Avec un modèle du monde, l’agent peut simuler dans sa tête plusieurs suites d’actions (points bleus), évaluer où elles mènent, puis exécuter la meilleure sans avoir pris les mauvaises dans la réalité.", facts: () => [["planification", "recherche dans le modèle"], ["avantage", "peu d’essais réels"], ["risque", "un modèle faux, un plan faux"]] },
  jepa: { text: "Plutôt que de prédire chaque pixel de la suite d’une vidéo, impossible à deviner dans les détails, JEPA prédit une représentation abstraite de la partie manquante. Le modèle apprend ce qui est prévisible (le mouvement d’un objet) et ignore ce qui ne l’est pas (la position d’une feuille).", facts: () => [["JEPA", "joint embedding predictive architecture"], ["pari", "prédire l’abstrait plutôt que le détail"]] },
  video: { text: "Des modèles génèrent la suite d’une scène à partir d’images et d’actions : une vidéo, ou même un environnement jouable. Ils produisent un monde plausible, mais pas toujours cohérent à long terme : objets qui apparaissent, physique approximative.", facts: () => [["entrée", "image + action"], ["sortie", "image suivante"], ["limite", "cohérence à long terme"]] }
};
