// Chapitre 23 : Un agent conversationnel pour un robot (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 23 · avancé",
  "title": "Un agent conversationnel pour un robot",
  "sub": "rassembler les briques de l’atlas",
  "body": "\n    <p class=\"lede\">Un robot qui dialogue réunit presque tout cet atlas : un modèle de langage (chapitres 1 à 4), un entraînement local (6), de la perception (8), des outils et une boucle (9 à 11), un corps (12).</p>\n    <p>Ce chapitre décrit comment les assembler en un <b>agent local</b>, qui tourne sur la machine du robot, avec une <b>mémoire</b>, un <b>raisonnement</b>, un état <b>affectif simulé</b> et un peu de <b>créativité</b>, et comment l’<b>entraîner</b>.</p>",
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
  "lit": "archi",
  "look": {},
  "scene": "archi",
  "fig": ""
 },
 {
  "kicker": "23.1",
  "title": "Entendre et voir",
  "sub": "la perception multimodale",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Parole</b> : détection de la voix, reconnaissance en flux, identification de qui parle ; un modèle de reconnaissance de la famille Whisper tourne en local.</li>\n      <li><b>Vision</b> : un modèle vision-langage (chapitre 8) décrit la scène et répond aux questions sur l’image : « qu’est-ce qui est sur la table ? »</li>\n      <li><b>Sons et capteurs</b> : bruit de porte, chute, distance aux obstacles ; transformés en événements textuels que le modèle comprend.</li>\n      <li><b>Fusion</b> : tout est converti en un court « rapport de situation » mis dans le contexte à chaque tour.</li>\n    </ul>",
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
  "lit": "archi",
  "look": {},
  "scene": "archi",
  "fig": ""
 },
 {
  "kicker": "23.2",
  "title": "Se souvenir",
  "sub": "une mémoire construite autour du modèle",
  "body": "\n    <p class=\"lede\">Le modèle n’a pas de mémoire propre : on la construit en quatre morceaux.</p>\n    <ul class=\"rules\">\n      <li><b>Court terme</b> : le contexte de la conversation.</li>\n      <li><b>Épisodique</b> : un journal des échanges résumés, retrouvés par recherche (chapitre 20).</li>\n      <li><b>Sémantique</b> : faits stables et préférences (« Léa n’aime pas le bruit »).</li>\n      <li><b>Procédurale</b> : les compétences que le robot sait déclencher.</li>\n    </ul>\n    <p>Il faut aussi <b>oublier</b> : résumer, supprimer, et laisser la personne effacer ce qu’on a retenu d’elle.</p>",
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
  "lit": "memoire",
  "look": {},
  "scene": "memoire",
  "fig": ""
 },
 {
  "kicker": "23.3",
  "title": "Raisonner et agir",
  "sub": "le modèle décide, le robot exécute sous contrôle",
  "body": "\n    <p class=\"lede\">Le modèle de langage sert de <b>planificateur</b> : il lit la situation et la mémoire, et choisit une action parmi celles que le robot sait faire.</p>\n    <p>Les actions passent par des <b>appels d’outils</b> (chapitre 9) : avancer de deux mètres, saisir un objet, dire une phrase. Une <b>couche de sécurité indépendante du modèle</b> vérifie chaque ordre (vitesse, zone, force) avant de l’envoyer aux moteurs.</p>\n    <p>Deux vitesses : la <b>réflexion lente</b> du modèle (secondes) et les <b>réflexes rapides</b> du robot (équilibre, évitement, arrêt d’urgence), qui ne l’attendent pas.</p>",
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
  "lit": "archi",
  "look": {},
  "scene": "archi",
  "fig": ""
 },
 {
  "kicker": "23.4",
  "title": "Des émotions simulées",
  "sub": "un état qui règle l’expression",
  "body": "\n    <p class=\"lede\">Un robot qui répond toujours du même ton paraît mécanique. On lui donne un <b>état affectif</b> : un point sur deux axes, valence et activation.</p>\n    <p>Des événements le déplacent (un compliment, un bruit fort, une longue absence) et il revient doucement vers le calme. Cet état est donné au modèle (« tu es plutôt détendu et content ») et règle la voix, le rythme et les gestes.</p>\n    <p><b>Mise en garde</b> : c’est une simulation de comportement, pas un ressenti. Elle doit rester <b>honnête</b> : le robot ne prétend pas souffrir, et n’exploite pas l’attachement de la personne.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 2,
   "el": 4,
   "dist": 26,
   "auto": true
  },
  "lit": "affect",
  "look": {},
  "scene": "affect",
  "fig": ""
 },
 {
  "kicker": "23.5",
  "title": "La créativité",
  "sub": "diversité plus tri",
  "body": "\n    <p class=\"lede\">Un modèle « créatif » se fabrique à deux niveaux.</p>\n    <ul class=\"rules\">\n      <li><b>Diversité</b> : température et top-p plus élevés (chapitre 4), plusieurs tirages, consignes d’exploration.</li>\n      <li><b>Tri</b> : des critères explicites (original, adapté à l’enfant, faisable avec ce que le robot a sous la main), un modèle critique, ou la personne.</li>\n    </ul>\n    <p>Un robot qui invente une histoire, un jeu ou une danse produit dix versions, en retient une, et demande « ça te plaît ? ». L’avis reçu devient une préférence en mémoire.</p>",
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
  "lit": "creatif",
  "look": {},
  "scene": "creatif",
  "fig": ""
 },
 {
  "kicker": "23.6",
  "title": "L’entraîner",
  "sub": "ce qu’on entraîne, ce qu’on construit",
  "body": "\n    <p class=\"lede\">On entraîne ce qui se prête à l’entraînement : le <b>style</b>, le <b>format</b> des appels d’outils, la <b>prudence</b>.</p>\n    <ol class=\"rules\">\n      <li>Partir d’un modèle ouvert de 7 à 14 milliards de paramètres.</li>\n      <li>Rassembler des exemples : dialogues dans le ton voulu, appels d’outils justes, refus appropriés.</li>\n      <li>Affiner avec LoRA ou QLoRA (chapitre 6), puis régler le ton par préférences.</li>\n      <li>Évaluer sur des scénarios réalistes, <b>dont la sécurité</b> (chapitre 22).</li>\n      <li>Quantifier et mesurer la latence sur le module du robot.</li>\n    </ol>\n    <p>La mémoire et l’état affectif ne s’entraînent pas : ce sont des composants logiciels.</p>",
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
  "lit": "entrainement",
  "look": {},
  "scene": "entrainement",
  "fig": ""
 },
 {
  "kicker": "23.7",
  "title": "Le faire tourner sur le robot",
  "sub": "mémoire, latence, secours",
  "body": "\n    <p class=\"lede\">Un module embarqué de 16 Go doit contenir <b>tout</b> : langage, vision, parole, cache.</p>\n    <p>Ordres de grandeur : modèle de langage de 8 milliards en 4 bits ≈ 5 Go, petit modèle de vision ≈ 2 Go, parole ≈ 1,5 Go, cache ≈ 1 Go, système et marge ≈ 3 Go. Le but est un <b>premier son en moins d’une seconde</b> (chapitre 20).</p>\n    <p>Prévoir un <b>mode dégradé</b> : si le gros modèle est trop lent ou plante, le robot répond avec un petit modèle ou des phrases préparées, et ses réflexes de sécurité continuent de fonctionner.</p>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 4,
   "el": 4,
   "dist": 26,
   "auto": true
  },
  "lit": "embarque",
  "look": {},
  "scene": "embarque",
  "fig": ""
 }
];
export const PLATES = {
  archi: { text: "Un agent pour robot enchaîne perception, mémoire, raisonnement par un modèle de langage, un état affectif qui règle la manière de s’exprimer, puis l’expression et les actions, sous une couche de sécurité. Les capteurs ferment la boucle.", facts: () => [["entrée", "voix, images, capteurs"], ["sortie", "parole, gestes, actions"], ["garde-fou", "couche de sécurité indépendante"]] },
  memoire: { text: "Un modèle ne se souvient de rien d’une conversation à l’autre. On construit donc la mémoire autour de lui : le contexte pour l’instant, un journal consultable pour les épisodes, une base de faits et de préférences, et une bibliothèque de compétences que le robot sait exécuter.", facts: () => [["où ça vit", "hors des poids du modèle"], ["accès", "recherche, comme un RAG"], ["données personnelles", "consentement et effacement"]] },
  affect: { text: "Un modèle simple d’émotion place l’état du robot sur deux axes : la valence (agréable ou non) et l’activation (calme ou excité). Les événements déplacent ce point, qui règle ensuite le ton, le rythme de la voix et les gestes. C’est un réglage de comportement, pas un ressenti.", facts: () => [["axes", "valence × activation"], ["effet", "ton, rythme, gestes"], ["nature", "simulation, pas ressenti"]] },
  creatif: { text: "La créativité d’un système vient d’une boucle : produire beaucoup d’idées variées (température plus haute), les critiquer avec des critères explicites, combiner les meilleures, choisir. Le tri compte autant que la variété.", facts: () => [["variété", "température, top-p, plusieurs tirages"], ["tri", "critères, juge, humain"]] },
  entrainement: { text: "On part d’un modèle ouvert, on l’affine avec LoRA sur des dialogues et des appels d’outils, on règle le ton par préférences, on évalue sur des scénarios (dont la sécurité), on quantifie et on déploie. La mémoire et les émotions ne s’entraînent pas dans les poids : elles s’ingénient autour.", facts: () => [["entraîné", "style, format, appels d’outils"], ["pas entraîné", "mémoire, état affectif"], ["matériel", "une carte de 24 Go suffit avec QLoRA"]] },
  embarque: { text: "Un robot ne peut pas compter sur le cloud pour chaque mot. Sur un module embarqué de 16 Go, on fait tenir un modèle de langage de 8 milliards en 4 bits, un petit modèle de vision, la reconnaissance et la synthèse vocales, un cache et de la marge.", facts: () => [["total ici", "≈ 12,6 Go sur 16"], ["latence visée", "premier son en moins d’une seconde"]] }
};
