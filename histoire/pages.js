// Chapitre 25 : Soixante-dix ans d’IA (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 25 · culture",
  "title": "Soixante-dix ans d’IA",
  "sub": "comprendre le présent par ses cycles",
  "body": "\n    <p class=\"lede\">L’IA n’est pas née en 2022. Elle a connu des enthousiasmes, deux « hivers » et des renaissances.</p>\n    <p>Connaître cette histoire aide à juger les promesses d’aujourd’hui : on voit ce qui a été durable (apprendre à partir de données) et ce qui ne l’a pas été (les règles écrites à la main à grande échelle). La frise résume les dates repères ; les pages suivantes racontent les quatre grandes étapes.</p>",
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
  "lit": "frise",
  "look": {},
  "scene": "frise",
  "fig": ""
 },
 {
  "kicker": "25.1",
  "title": "Précurseurs et Dartmouth",
  "sub": "avant 1956, et l’été fondateur",
  "body": "\n    <p class=\"lede\">Avant l’ordinateur, la logique avait formalisé le raisonnement (Boole, Frege), et en 1936 Turing définit ce qu’une machine peut calculer.</p>\n    <p>En 1943, McCulloch et Pitts proposent un neurone formel. En 1950, Turing pose la question « les machines peuvent-elles penser ? » et propose un test. À l’été 1956, un atelier à Dartmouth réunit McCarthy, Minsky, Shannon et d’autres : le terme « intelligence artificielle » y est adopté.</p>\n    <p>En 1958, le <b>perceptron</b> de Rosenblatt montre une machine qui apprend à classer.</p>",
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
  "lit": "precurseurs",
  "look": {},
  "scene": "precurseurs",
  "fig": ""
 },
 {
  "kicker": "25.2",
  "title": "Les hivers",
  "sub": "1974–1980 et 1987–1993",
  "body": "\n    <p class=\"lede\">Deux fois, l’enthousiasme est retombé brutalement.</p>\n    <ul class=\"rules\">\n      <li><b>Premier hiver</b> (années 1970) : en 1969, Minsky et Papert montrent les limites d’un perceptron à une seule couche ; en 1973, le rapport Lighthill juge sévèrement les résultats au Royaume-Uni. Les financements baissent.</li>\n      <li><b>Second hiver</b> (fin des années 1980) : les <b>systèmes experts</b>, bases de règles écrites à la main, coûtent cher à maintenir et se révèlent fragiles ; le marché des machines spécialisées s’effondre.</li>\n    </ul>\n    <p>Pendant ces périodes, des chercheurs poursuivent : en 1986, la <b>rétropropagation</b> est popularisée et permet d’entraîner des réseaux à plusieurs couches.</p>",
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
  "lit": "hivers",
  "look": {},
  "scene": "hivers",
  "fig": ""
 },
 {
  "kicker": "25.3",
  "title": "La renaissance du deep learning",
  "sub": "2012",
  "body": "\n    <p class=\"lede\">En 2012, <b>AlexNet</b> gagne le concours ImageNet avec une erreur presque deux fois moindre que la méthode classique suivante.</p>\n    <p>Trois ingrédients se rencontrent : des <b>données</b> (ImageNet, 1,2 million d’images étiquetées), du <b>calcul</b> (des GPU, conçus pour le jeu vidéo, parfaits pour les produits de matrices), et des <b>algorithmes</b> (réseaux profonds, activation ReLU, dropout).</p>\n    <p>La vision, puis la parole, puis le langage basculent vers l’apprentissage profond. En 2016, AlphaGo bat un champion de Go en combinant réseaux profonds et recherche.</p>",
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
  "lit": "renaissance",
  "look": {},
  "scene": "renaissance",
  "fig": ""
 },
 {
  "kicker": "25.4",
  "title": "L’ère du langage",
  "sub": "du transformeur à l’assistant",
  "body": "\n    <p class=\"lede\">Le tournant décisif est l’article de 2017 sur le <b>transformeur</b> (chapitre 2).</p>\n    <p>En 2018, <b>BERT</b> (encodeur, qui comprend) et <b>GPT</b> (décodeur, qui prédit) montrent l’intérêt du pré-entraînement sur d’immenses textes. En 2020, GPT-3 et les lois d’échelle (chapitre 29) montrent que plus de calcul donne de meilleures capacités. En 2022, l’affinage par préférences humaines (chapitre 7) donne les assistants grand public.</p>\n    <p>Depuis 2024, les modèles de <b>raisonnement</b> et les <b>agents</b> (chapitres 10 et 29) ajoutent du calcul au moment de répondre.</p>",
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
  "lit": "langage",
  "look": {},
  "scene": "langage",
  "fig": ""
 },
 {
  "kicker": "25.5",
  "title": "Ce que l’histoire enseigne",
  "sub": "trois leçons",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Les cycles sont normaux</b> : un résultat spectaculaire est suivi d’une extrapolation excessive. Se méfier des dates promises.</li>\n      <li><b>Les méthodes générales gagnent</b> : Richard Sutton a résumé en 2019 cette « leçon amère » : à long terme, les méthodes qui exploitent le calcul et l’apprentissage l’emportent sur celles qui encodent le savoir humain à la main.</li>\n      <li><b>Les ressources déclenchent les idées</b> : le deep learning attendait des données et des GPU. Aujourd’hui, l’énergie, les données de qualité et la fiabilité sont les nouveaux verrous.</li>\n    </ul>",
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
  "lit": "frise",
  "look": {},
  "scene": "frise",
  "fig": ""
 }
];
export const PLATES = {
  frise: { text: "L’IA avance par vagues : des idées, un enthousiasme excessif, une déception, des financements coupés (les « hivers »), puis un renouveau quand le calcul, les données ou une idée nouvelle changent la donne. Les dates sont celles des travaux fondateurs les plus cités.", facts: () => [["hivers", "≈ 1974–1980 et ≈ 1987–1993"], ["déclic de 2012", "données + GPU + algorithmes"], ["déclic de 2017", "le transformeur"]] },
  precurseurs: { text: "Avant les ordinateurs, la logique avait formalisé le raisonnement ; Turing a défini ce qu’une machine peut calculer ; McCulloch et Pitts ont proposé un modèle mathématique de neurone ; Rosenblatt en a fait une machine qui apprend.", facts: () => [["1936", "machine universelle de Turing"], ["1943", "premier neurone formel"], ["1958", "perceptron"]] },
  hivers: { text: "Chaque hiver suit le même schéma : des promesses disproportionnées, des résultats en deçà, une coupe des financements, puis des années où des chercheurs persévèrent jusqu’à une idée ou une ressource nouvelle (réseaux multicouches, données, GPU).", facts: () => [["1er hiver", "limites du perceptron, rapport Lighthill"], ["2e hiver", "systèmes experts coûteux et fragiles"]] },
  renaissance: { text: "En 2012, AlexNet a gagné le concours ImageNet avec une avance nette sur les méthodes classiques. Elle réunissait de grandes quantités d’images étiquetées, le calcul parallèle de deux GPU et des algorithmes de réseaux profonds éprouvés. Tout le domaine a basculé.", facts: () => [["ImageNet", "≈ 1,2 million d’images d’entraînement"], ["AlexNet", "2 GPU, ≈ 60 millions de paramètres"], ["effet", "le deep learning devient la norme"]] },
  langage: { text: "Les réseaux récurrents ont mené au mécanisme d’attention, puis au transformeur (2017) qui supprime la récurrence. Le pré-entraînement sur d’immenses textes (2018), l’augmentation d’échelle (2020) et l’alignement par préférences ont donné les assistants de 2022.", facts: () => [["2017", "« Attention is all you need »"], ["2018", "BERT (encodeur), GPT (décodeur)"], ["2022", "assistants grand public"]] }
};
