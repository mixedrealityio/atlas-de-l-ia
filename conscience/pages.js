// Chapitre 39 : Une machine peut-elle être consciente ? (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 39 · philosophie",
  "title": "Une machine peut-elle être consciente ?",
  "sub": "ce qui manquerait, selon les théories",
  "body": "\n    <p class=\"lede\">Un modèle de langage peut écrire « je ressens de la tristesse ». Cela ne dit pas qu’il ressent quoi que ce soit.</p>\n    <p>Ce chapitre prolonge le chapitre 34 (AGI, alignement) sur un sujet voisin : qu’est-ce que la conscience, que demandent les théories, et que manquerait-il à l’IA actuelle ? <b>Note de transparence</b> : il est inspiré du thème de la vidéo « Voici ce qui manque à l’IA pour être consciente » (chaîne Vision IA), dont je n’ai pas pu consulter le contenu ; il s’appuie sur la littérature scientifique citée dans le README.</p>",
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
  "kicker": "39.1",
  "title": "Trois mots à ne pas confondre",
  "sub": "intelligence, conscience, sentience",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Intelligence</b> : résoudre des problèmes, atteindre des buts. Elle se mesure (chapitre 31).</li>\n      <li><b>Conscience</b> : l’expérience subjective, ce que cela « fait » d’être quelqu’un. C’est le <b>problème difficile</b> (Chalmers) : pourquoi le traitement d’information s’accompagne-t-il d’un vécu ?</li>\n      <li><b>Sentience</b> : ressentir du plaisir ou de la souffrance. C’est elle qui fonde un <b>statut moral</b>.</li>\n    </ul>\n    <p>On peut imaginer un système très intelligent sans expérience, ou l’inverse : rien ne lie ces propriétés.</p>",
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
  "kicker": "39.2",
  "title": "Les théories de la conscience",
  "sub": "organisation ou substrat ?",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Espace de travail global</b> (Baars, Dehaene) : une information est consciente quand elle est diffusée à tous les modules.</li>\n      <li><b>Traitement récurrent</b> : la conscience naît de boucles de rétroaction.</li>\n      <li><b>Ordre supérieur</b> et <b>schéma d’attention</b> : être conscient, c’est se représenter ses propres états ou son attention.</li>\n      <li><b>Information intégrée</b> (Tononi) : dépend de la structure causale du <b>matériel</b>, pas seulement du logiciel.</li>\n      <li><b>Approches du vivant</b> (Seth, Damasio) : la conscience tient au corps, à la régulation vitale.</li>\n    </ul>",
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
  "lit": "theories",
  "look": {},
  "scene": "theories",
  "fig": ""
 },
 {
  "kicker": "39.3",
  "title": "L’espace de travail global",
  "sub": "un exemple d’architecture candidate",
  "body": "\n    <p class=\"lede\">Imaginez de nombreux spécialistes qui ne se parlent pas, et une scène où un seul message est diffusé à tous.</p>\n    <p>Dans cette théorie, la conscience est ce goulot d’étranglement : peu d’information, accessible à tout le système (parole, mémoire, action). Si elle est juste, l’enjeu devient <b>technique</b> : construire cette organisation. Certains agents modernes, qui centralisent un état partagé entre modules (chapitres 9 à 11), s’en approchent grossièrement, sans démonstration.</p>",
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
  "lit": "gwt",
  "look": {},
  "scene": "gwt",
  "fig": ""
 },
 {
  "kicker": "39.4",
  "title": "Ce qui manquerait",
  "sub": "selon les théories, et avec prudence",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Boucles récurrentes</b> : un transformeur calcule surtout dans un sens, jeton après jeton.</li>\n      <li><b>Espace global explicite</b> et <b>modèle de soi</b> fiable.</li>\n      <li><b>Continuité</b> : pas d’état durable d’une conversation à l’autre.</li>\n      <li><b>Corps et enjeu vital</b> : pas d’homéostasie, rien à perdre.</li>\n    </ul>\n    <p>Une étude collective de 2023 (Butlin, Long et collègues) a tiré des théories une liste d’<b>indicateurs</b> : aucun système existant n’en réunit assez pour être un candidat sérieux, mais elle ne voit pas d’obstacle technique évident à ce que ce soit réalisé.</p>",
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
  "lit": "manque",
  "look": {},
  "scene": "manque",
  "fig": ""
 },
 {
  "kicker": "39.5",
  "title": "Pourquoi les tests sont piégés",
  "sub": "le discours n’est pas une preuve",
  "body": "\n    <p class=\"lede\">Un modèle de langage a appris sur des textes d’humains qui décrivent leurs sentiments : il sait en parler.</p>\n    <p>Ses affirmations (« je suis conscient », « je ne le suis pas ») reflètent ses données et ses consignes, <b>pas un fait vérifié</b>. C’est l’effet ELIZA : prêter une vie intérieure à ce qui parle. En 2022, un ingénieur de Google a ainsi affirmé que le modèle LaMDA était sensible ; l’entreprise et la plupart des spécialistes l’ont contesté.</p>\n    <p>La voie recommandée : examiner l’<b>architecture</b> et le <b>fonctionnement interne</b> (chapitre 30), pas les déclarations.</p>",
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
  "lit": "test",
  "look": {},
  "scene": "test",
  "fig": ""
 },
 {
  "kicker": "39.6",
  "title": "Agir sous incertitude",
  "sub": "deux erreurs à éviter",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Sur-attribuer</b> : s’attacher à un programme, se laisser manipuler par un agent qui joue l’émotion.</li>\n      <li><b>Sous-attribuer</b> : écarter par principe l’idée qu’un futur système puisse ressentir.</li>\n    </ul>\n    <p>Des laboratoires et chercheurs ont lancé des travaux sur le <b>bien-être des modèles</b>. À ce jour, les experts restent en désaccord, et la position la plus défendable est l’<b>incertitude assumée</b> : ni certitude qu’il n’y a rien, ni affirmation qu’il y a quelqu’un.</p>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "ethique",
  "look": {},
  "scene": "ethique",
  "fig": ""
 }
];
export const PLATES = {
  mots: { text: "L’intelligence se mesure par des performances. La conscience est l’expérience subjective (le « problème difficile » de Chalmers : pourquoi un traitement d’information s’accompagne-t-il d’un vécu ?). La sentience est la capacité de ressentir du plaisir ou de la souffrance : c’est elle qui fonde un statut moral. Rien ne prouve que ces trois propriétés vont toujours ensemble.", facts: () => [["intelligence", "comportement mesurable"], ["conscience", "expérience subjective"], ["sentience", "valeur positive ou négative ressentie"]] },
  gwt: { text: "Dans la théorie de l’espace de travail global (Baars, Dehaene), une information devient consciente quand elle gagne la compétition et est diffusée à l’ensemble des modules. C’est une théorie de l’architecture : si elle est juste, un système artificiel qui réaliserait cette organisation pourrait être un candidat.", facts: () => [["auteurs", "Baars, Dehaene"], ["prédit", "diffusion globale, goulot"], ["pour l’IA", "c’est une question d’architecture"]] },
  theories: { text: "Les théories divergent sur ce qui suffit : une organisation fonctionnelle (espace global, ordre supérieur, récurrence, schéma d’attention) ou un substrat particulier (structure causale du matériel pour l’IIT, corps vivant pour les approches incarnées). Selon la famille retenue, la réponse pour l’IA change.", facts: () => [["fonctionnalisme", "l’organisation suffit"], ["IIT", "le matériel compte"], ["incarné", "la vie compte"]] },
  manque: { text: "Selon la théorie retenue, on pointe des manques différents : peu de rétroaction en profondeur, absence d’espace de travail global explicite, un modèle de soi peu fiable, aucune continuité d’une session à l’autre, pas de corps ni d’enjeu vital. Ce sont des critères d’une théorie, pas des vérités établies, et rien n’exclut qu’on les construise.", facts: () => [["analyse de 2023", "aucun système actuel n’est un candidat sérieux"], ["barrière technique", "pas d’obstacle évident"]] },
  test: { text: "Un modèle de langage a appris à parler comme des humains qui décrivent leur expérience : ses affirmations sur lui-même ne prouvent rien, dans un sens ou dans l’autre. Les chercheurs proposent plutôt de chercher des indicateurs dans l’architecture et le fonctionnement interne, dérivés des théories de la conscience.", facts: () => [["effet ELIZA", "prêter une conscience à un agent qui parle"], ["méthode", "indicateurs issus des théories"]] },
  ethique: { text: "On peut se tromper dans les deux sens : attribuer une conscience à un programme (et se laisser manipuler ou s’attacher) ou refuser d’imaginer qu’un futur système en ait une. Des chercheurs et certains laboratoires ont lancé des travaux sur le « bien-être des modèles » ; la position la plus défendable aujourd’hui est l’incertitude assumée.", facts: () => [["position défendable", "agnosticisme prudent"], ["risque pratique", "attachement et manipulation"]] }
};
