// Chapitre 58 : Pourquoi personne ne sait ce qui se passe dans un modèle (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 58 · compréhension",
  "title": "Pourquoi personne ne sait ce qui se passe dans un modèle",
  "sub": "une phrase qu’il faut préciser",
  "body": "\n    <p class=\"lede\">« Personne ne sait comment fonctionne une IA » est exagéré et vrai à la fois.</p>\n    <p>Exagéré : on connaît chaque opération. Vrai : on ne sait en général <b>ni expliquer pourquoi</b> un modèle répond ce qu’il répond, <b>ni prévoir</b> tout ce qu’il saura faire. Ce chapitre distingue les deux et explique les causes.</p>",
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
  "lit": "savoir",
  "look": {},
  "scene": "savoir",
  "fig": ""
 },
 {
  "kicker": "58.1",
  "title": "Tout est visible",
  "sub": "et pourtant",
  "body": "<ul class=\"rules\"><li>L’<b>architecture</b> est publiée et décrite (chapitre 2).</li><li>Chaque <b>poids</b> se lit ; chaque <b>calcul</b> se rejoue à l’identique (à graine fixée).</li><li>Chaque <b>activation</b> interne se mesure pendant le calcul.</li></ul><p>Un modèle n’est donc pas une boîte fermée comme le cerveau : c’est un objet entièrement observable, mais dont les <b>nombres n’ont pas de signification lisible</b>.</p>",
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
  "lit": "savoir",
  "look": {},
  "scene": "savoir",
  "fig": ""
 },
 {
  "kicker": "58.2",
  "title": "Un programme que personne n’a écrit",
  "sub": "appris, pas conçu",
  "body": "\n    <p class=\"lede\">En programmation classique, un humain écrit des règles lisibles. Ici, l’entraînement <b>trouve</b> des milliards de nombres qui marchent.</p><ul class=\"rules\"><li>Aucun commentaire, aucune structure voulue, aucun nom de variable.</li><li>On sait <b>comment on l’a obtenu</b> (descente de gradient, chapitre 6), pas <b>ce qu’il calcule</b>.</li><li>Les mêmes performances peuvent venir de solutions internes très différentes.</li></ul>",
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
  "lit": "raisons",
  "look": {},
  "scene": "raisons",
  "fig": ""
 },
 {
  "kicker": "58.3",
  "title": "Un concept, plusieurs neurones",
  "sub": "représentation distribuée et superposition",
  "body": "\n    <p class=\"lede\">On voudrait qu’un neurone corresponde à une idée. Ce n’est presque jamais le cas.</p><ul class=\"rules\"><li><b>Distribué</b> : « la France » est une direction répartie sur beaucoup de neurones.</li><li><b>Superposition</b> : un neurone sert à plusieurs concepts sans rapport (chapitre 30).</li><li><b>Non-linéarités</b> : l’effet d’un composant dépend de tous les autres.</li></ul><p>Lire un neurone isolé informe donc très peu ; il faut chercher des <b>directions</b> et des <b>circuits</b>.</p>",
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
  "lit": "distribue",
  "look": {},
  "scene": "distribue",
  "fig": ""
 },
 {
  "kicker": "58.4",
  "title": "Le modèle ne sait pas mieux que nous",
  "sub": "ses explications sont du texte",
  "body": "\n    <p class=\"lede\">Si on lui demande pourquoi il a répondu ainsi, il produit une explication <b>plausible</b>.</p>\n    <p>Mais elle est générée comme n’importe quel autre texte, <b>sans accès fiable à son calcul interne</b>. Des études montrent que la chaîne de pensée (chapitre 29) peut ne pas mentionner un indice qui a pourtant décidé de la réponse. Une explication est un indice, <b>pas une preuve</b>.</p>",
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
  "lit": "fidele",
  "look": {},
  "scene": "fidele",
  "fig": ""
 },
 {
  "kicker": "58.5",
  "title": "Ce qu’on a compris",
  "sub": "des éclairages locaux",
  "body": "<ul class=\"rules\"><li><b>Têtes d’induction</b> (2022) : un circuit qui copie les motifs.</li><li><b>Petits modèles</b> : l’addition modulaire a été entièrement rétro-conçue.</li><li><b>Autoencodeurs parcimonieux</b> (2024) : des millions de caractéristiques lisibles dans de grands modèles.</li><li><b>Traçage de calculs</b> (2025) : par exemple, un modèle prépare la rime avant d’écrire le vers.</li></ul><p>Ces résultats sont <b>réels mais partiels</b> : des cas choisis, pas une compréhension générale.</p>",
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
  "lit": "compris",
  "look": {},
  "scene": "compris",
  "fig": ""
 },
 {
  "kicker": "58.6",
  "title": "Trois analogies",
  "sub": "une technologie avant sa science",
  "body": "<ul class=\"rules\"><li><b>Cerveau</b> : on voit les neurones, on ne déduit pas la pensée.</li><li><b>Machine à vapeur</b> : utilisée des décennies avant la thermodynamique.</li><li><b>Météo</b> : équations connues, comportement détaillé impossible à prévoir.</li></ul><p>Ici la situation est plus favorable : on peut <b>tout mesurer et tout modifier</b>, ce qui rend une science de ces systèmes possible. Elle est jeune.</p>",
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
  "lit": "analogie",
  "look": {},
  "scene": "analogie",
  "fig": ""
 },
 {
  "kicker": "58.7",
  "title": "Pourquoi cela compte",
  "sub": "sûreté, droit, confiance",
  "body": "<ul class=\"rules\"><li><b>Sûreté</b> : on ne peut pas garantir l’absence d’un comportement caché (chapitre 34).</li><li><b>Droit et audit</b> : expliquer une décision automatique (chapitres 32 et 33).</li><li><b>Débogage</b> : corriger un défaut sans comprendre sa cause est approximatif.</li></ul><p>Faute de compréhension, on <b>teste</b> (chapitre 31), on <b>attaque pour trouver les failles</b> (red teaming), on <b>surveille</b> en production et on <b>contient</b> par des garde-fous externes (chapitre 22).</p>",
  "cam": {
   "target": [
    240,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "enjeux",
  "look": {},
  "scene": "enjeux",
  "fig": ""
 },
 {
  "kicker": "58.8",
  "title": "Une base de connaissances étrange",
  "sub": "la malédiction de l’inversion",
  "body": "\n    <p class=\"lede\">Un modèle sait que la mère de Tom Cruise est Mary Lee Pfeiffer, mais souvent pas qui est son fils.</p><ul class=\"rules\"><li><b>Le constat</b> (Berglund et collègues, 2023) : apprendre « A est B » n’apprend pas « B est A ». GPT-4 : ≈ 79 % dans un sens, ≈ 33 % dans l’autre.</li><li><b>Cause probable</b> : le savoir, réparti dans les poids sans index, est rangé dans le sens où il a été lu.</li></ul><p>Avec les deux noms dans le contexte, il inverse sans peine. Parade : une recherche (chapitre 20).</p>",
  "cam": {
   "target": [
    280,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "inversion",
  "look": {},
  "scene": "inversion",
  "fig": ""
 },
 {
  "kicker": "58.9",
  "title": "Des artefacts à évaluer",
  "sub": "mesurer faute de comprendre",
  "body": "\n    <p class=\"lede\">Bilan : des milliards de paramètres répartis dans le réseau, une méthode connue pour les ajuster afin de mieux prédire, mais pas d’explication de la façon dont ils collaborent.</p><ul class=\"rules\"><li>On sait <b>mesurer</b> que l’entraînement marche (la perte baisse, les scores montent), pas <b>pourquoi</b>.</li><li>Le savoir est <b>étrange et imparfait</b> : présent dans un sens, absent dans l’autre, sensible à la formulation.</li><li>Il faut donc traiter un modèle comme un <b>artefact en grande partie inscrutable</b> et développer des <b>évaluations à la hauteur</b> : reformuler, inverser, combiner, attaquer, et recommencer à chaque version (chapitre 31).</li></ul>",
  "cam": {
   "target": [
    320,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "artefact",
  "look": {},
  "scene": "artefact",
  "fig": ""
 }
];
export const PLATES = {
  savoir: { text: "Un modèle n’est pas un mystère mécanique : on connaît son architecture, on peut lire chaque poids, rejouer chaque calcul à l’identique et mesurer chaque activation. Ce qui manque est la compréhension : expliquer en termes humains pourquoi il produit telle réponse, et prévoir tous ses comportements.", facts: () => [["observable", "tout : poids, calculs, activations"], ["manquant", "le « pourquoi » et la prévision"]] },
  raisons: { text: "Aucun humain n’a écrit le « programme » : l’entraînement a trouvé des milliards de nombres qui fonctionnent. Les concepts sont répartis sur de nombreux neurones, et un même neurone participe à plusieurs concepts (superposition). Les composants interagissent de façon non linéaire. Enfin il n’existe pas de spécification de ce que le modèle devrait calculer.", facts: () => [["cause centrale", "un programme appris, pas écrit"], ["effet", "pas de noms, pas de plan"]] },
  distribue: { text: "Dans un réseau, un concept comme « la France » n’est pas un neurone, mais une direction de l’espace des activations, répartie sur de nombreux neurones ; un même neurone contribue à plusieurs concepts sans lien. Lire un neurone isolé ne dit donc presque rien.", facts: () => [["distribuée", "un concept sur beaucoup de neurones"], ["superposition", "plusieurs concepts par neurone"]] },
  fidele: { text: "Demander au modèle de s’expliquer donne un texte plausible, pas forcément la vraie cause. Des études (Turpin et collègues, 2023 ; travaux plus récents sur les modèles de raisonnement) montrent que la chaîne de pensée écrite peut omettre le facteur réel qui a influencé la réponse.", facts: () => [["explication", "plausible ≠ fidèle"], ["usage", "indice, pas preuve"]] },
  compris: { text: "Des progrès réels existent : circuits comme les têtes d’induction, mécanismes appris de petits modèles (addition modulaire), extraction de millions de caractéristiques lisibles par des autoencodeurs parcimonieux, et traces de calculs internes dans des modèles de langage (par exemple une planification de la rime avant d’écrire le vers, rapportée en 2025). Ces résultats restent partiels et portent sur des cas choisis.", facts: () => [["acquis", "circuits, caractéristiques, traces"], ["limite", "cas choisis, couverture partielle"]] },
  analogie: { text: "Trois analogies : le cerveau (on observe les neurones sans en déduire la pensée), la machine à vapeur (construite et utilisée avant que la thermodynamique l’explique), la météo (équations connues, comportement complexe). Point commun : une technologie qui fonctionne avant d’être comprise. Différence : on peut tout mesurer dans un modèle, ce qui rend la science possible.", facts: () => [["leçon", "ingénierie d’abord, science ensuite"], ["avantage", "tout est mesurable"]] },
  enjeux: { text: "Ne pas comprendre limite ce qu’on peut garantir : absence de comportement caché, justification d’une décision, correction ciblée d’un défaut. On compense par des tests, du red teaming, de la surveillance en production, des garde-fous externes, et par la recherche en interprétabilité.", facts: () => [["limite", "pas de garantie formelle"], ["compensation", "tester, surveiller, contenir"]] },
  inversion: { text: "Un modèle qui a lu « A est le parent de B » répond bien à la question dans ce sens, mais échoue souvent dans l’autre. L’étude de Berglund et collègues (2023) l’a montré sur des faits inventés et sur des célébrités : GPT-4 trouvait la mère d’une célébrité dans environ 79 % des cas, mais l’enfant à partir de la mère dans environ 33 %. Le savoir appris par prédiction du mot suivant est rangé dans le sens où il a été lu.", facts: () => [["sens lu", "réponse fiable"], ["sens inverse", "souvent échoué"]] },
  artefact: { text: "Puisqu’on ne peut pas lire le savoir d’un modèle dans ses poids, on le traite comme un artefact en grande partie inscrutable et on mesure son comportement de l’extérieur : questions reformulées, inversées ou combinées, tests adverses, évaluations répétées à chaque version et sur ses propres tâches.", facts: () => [["posture", "artefact, pas programme"], ["outil", "évaluations sophistiquées"]] }
};
