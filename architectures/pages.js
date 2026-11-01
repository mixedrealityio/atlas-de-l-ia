// Chapitre 27 : Au-delà du transformeur (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 27 · avancé",
  "title": "Au-delà du transformeur",
  "sub": "des idées qui complètent ou concurrencent l’attention",
  "body": "\n    <p class=\"lede\">Le transformeur domine, mais il a des défauts : coût quadratique, mémoire de cache, calcul massif. D’autres architectures traitent mieux certains problèmes.</p>\n    <p>Ce chapitre rappelle d’où l’on vient (les réseaux récurrents), pourquoi le transformeur l’a emporté, et ce que proposent ses challengers : mélanges d’experts, modèles à état, réseaux de graphes, calcul neuromorphique.</p>",
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
  "lit": "rnn",
  "look": {},
  "scene": "rnn",
  "fig": ""
 },
 {
  "kicker": "27.1",
  "title": "Les réseaux récurrents",
  "sub": "lire un mot après l’autre",
  "body": "\n    <p class=\"lede\">Avant 2017, on traitait le texte par des <b>réseaux récurrents</b> (RNN).</p>\n    <p>Le réseau lit les mots un à un et met à jour un <b>état caché</b> <i>h</i> : le résumé de tout ce qu’il a lu. Pour apprendre, on déroule le réseau dans le temps et on rétropropage.</p>\n    <p>Deux défauts : tout doit tenir dans un seul vecteur <i>h</i>, et le calcul est <b>séquentiel</b> : on ne peut pas traiter les mots en parallèle, donc on exploite mal les GPU. De plus, le gradient s’évanouit ou explose sur de longues séquences.</p>",
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
  "lit": "rnn",
  "look": {},
  "scene": "rnn",
  "fig": ""
 },
 {
  "kicker": "27.2",
  "title": "LSTM et GRU",
  "sub": "des portes pour retenir",
  "body": "\n    <p class=\"lede\">Le <b>LSTM</b> (<i>long short-term memory</i>) ajoute à l’état une <b>mémoire de cellule</b> et trois portes apprises.</p>\n    <ul class=\"rules\">\n      <li>la porte d’<b>oubli</b> décide ce qu’on efface de la mémoire ;</li>\n      <li>la porte d’<b>entrée</b> décide ce qu’on y écrit ;</li>\n      <li>la porte de <b>sortie</b> décide ce qu’on en montre.</li>\n    </ul>\n    <p>Le <b>GRU</b> en est une version plus simple. Ces modèles ont dominé la traduction, la parole et la prévision de séries pendant des années. Ils retiennent mieux que les RNN simples, mais restent séquentiels et limités sur de longs textes.</p>",
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
  "lit": "lstm",
  "look": {},
  "scene": "lstm",
  "fig": ""
 },
 {
  "kicker": "27.3",
  "title": "Pourquoi le transformeur a gagné",
  "sub": "parallélisme et échelle",
  "body": "\n    <p class=\"lede\">Le transformeur traite <b>tous les jetons en parallèle</b> à l’entraînement, ce qui exploite à plein les GPU et permet d’entraîner sur d’énormes corpus.</p>\n    <p>Son défaut est le <b>coût de l’attention</b>, quadratique en longueur : doubler le contexte quadruple ce coût. On l’atténue par des astuces de calcul (FlashAttention), des attentions locales ou creuses, et le cache KV (chapitre 3).</p>\n    <p>D’où la recherche d’architectures qui gardent la qualité de l’attention au coût d’un calcul linéaire.</p>",
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
  "lit": "cout",
  "look": {},
  "scene": "cout",
  "fig": ""
 },
 {
  "kicker": "27.4",
  "title": "Mélange d’experts",
  "sub": "beaucoup de paramètres, peu d’activés",
  "body": "\n    <p class=\"lede\">Dans un <b>mélange d’experts</b> (MoE), un routeur envoie chaque jeton vers quelques experts parmi plusieurs.</p>\n    <p>Le modèle gagne en <b>capacité</b> (beaucoup de paramètres au total) sans payer en calcul (peu sont actifs). Mixtral 8×7B, par exemple, a environ 47 milliards de paramètres dont environ 13 milliards actifs par jeton ; certains modèles récents ont plusieurs centaines de milliards au total pour quelques dizaines actifs.</p>\n    <p>Mais <b>toute la mémoire</b> doit être disponible, et le routage doit être équilibré pour que tous les experts servent.</p>",
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
  "lit": "moe",
  "look": {},
  "scene": "moe",
  "fig": ""
 },
 {
  "kicker": "27.5",
  "title": "Modèles à état et hybrides",
  "sub": "Mamba",
  "body": "\n    <p class=\"lede\">Les <b>modèles à espace d’état</b> reviennent à un état de taille fixe, mais avec une mise à jour <b>sélective</b> : ce que le modèle retient dépend de l’entrée.</p>\n    <p>Mamba (2023) et ses dérivés ont un coût linéaire en longueur et une mémoire constante à l’inférence, très utile pour de très longs contextes. Leur point faible est le rappel exact d’un détail précis lu longtemps avant.</p>\n    <p>Une voie prometteuse : les <b>hybrides</b> qui alternent quelques couches d’attention avec des couches à état.</p>",
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
  "lit": "ssm",
  "look": {},
  "scene": "ssm",
  "fig": ""
 },
 {
  "kicker": "27.6",
  "title": "Graphes et calcul neuromorphique",
  "sub": "d’autres structures",
  "body": "\n    <p class=\"lede\">Les <b>réseaux de graphes</b> (GNN) traitent des données reliées : molécules, routes, réseaux sociaux. Ils sont utilisés en chimie, en prévision de trafic et en recommandation.</p>\n    <p>Le calcul <b>neuromorphique</b> s’inspire du cerveau : des neurones qui émettent des impulsions, un calcul piloté par les événements et une consommation très faible. Des puces existent (Loihi d’Intel par exemple) mais restent expérimentales.</p>\n    <p>Aucune de ces voies n’a, à ce jour, remplacé le transformeur ; elles le complètent.</p>",
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
  "lit": "gnn",
  "look": {},
  "scene": "gnn",
  "fig": ""
 }
];
export const PLATES = {
  rnn: { text: "Un réseau récurrent lit les mots un par un et conserve un état unique h, mis à jour à chaque mot. Il doit tout résumer dans h : l’information des mots anciens s’efface, et on ne peut pas calculer plusieurs positions en parallèle.", facts: () => [["état", "un vecteur de taille fixe"], ["défaut", "séquentiel, mémoire courte"]] },
  lstm: { text: "Le LSTM (1997) ajoute une mémoire de cellule et trois portes apprises qui décident quoi oublier, quoi écrire et quoi lire. Cela réduit le problème du gradient qui s’évanouit et permet de retenir plus loin, sans jamais égaler l’attention sur de longs textes.", facts: () => [["inventeurs", "Hochreiter et Schmidhuber, 1997"], ["variante", "GRU : deux portes, plus simple"]] },
  cout: { text: "L’attention compare chaque jeton à tous les autres : son coût croît comme le carré de la longueur. Les modèles récurrents ou à état ont un coût proportionnel à la longueur, mais retiennent moins bien. Tout l’enjeu est d’obtenir la qualité de l’attention au coût du linéaire.", facts: () => [["attention", "coût ∝ n²"], ["modèle à état", "coût ∝ n"], ["astuce", "FlashAttention : même calcul, moins de mémoire"]] },
  moe: { text: "Dans un mélange d’experts, le MLP d’un bloc est remplacé par plusieurs experts et un routeur. Chaque jeton n’en traverse que deux ou quelques-uns : le modèle a beaucoup de paramètres au total mais peu d’actifs par jeton, donc un coût de calcul réduit.", facts: () => [["exemple", "Mixtral 8×7B : ≈ 47 Md au total, ≈ 13 Md actifs"], ["coût", "toute la mémoire reste nécessaire"]] },
  ssm: { text: "Les modèles à espace d’état (comme Mamba, 2023) gardent un état de taille fixe mis à jour de façon sélective selon l’entrée, avec un coût linéaire en longueur et un calcul parallélisable à l’entraînement. Des modèles hybrides les mélangent avec des couches d’attention.", facts: () => [["avantage", "contextes très longs, peu de mémoire"], ["limite", "rappel exact moins fiable"]] },
  gnn: { text: "Un réseau de graphes traite des données faites de nœuds et de liens (molécules, réseaux sociaux, routes). À chaque tour, chaque nœud reçoit des messages de ses voisins, les agrège et met à jour son état.", facts: () => [["usages", "molécules, routes, recommandations"], ["principe", "passage de messages"]] }
};
