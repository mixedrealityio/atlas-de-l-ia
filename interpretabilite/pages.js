// Chapitre 30 : Ouvrir la boîte noire (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 30 · comprendre",
  "title": "Ouvrir la boîte noire",
  "sub": "peut-on expliquer un modèle ?",
  "body": "\n    <p class=\"lede\">Un réseau de milliards de paramètres ne s’explique pas par lecture. L’<b>interprétabilité</b> cherche à comprendre pourquoi il répond ce qu’il répond.</p>\n    <p>Enjeux : confiance, détection d’erreurs et de biais, sûreté, exigences réglementaires d’explication. Deux approches : expliquer <b>de l’extérieur</b> (post-hoc), ou comprendre <b>de l’intérieur</b> (interprétabilité mécaniste).</p>",
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
  "lit": "posthoc",
  "look": {},
  "scene": "posthoc",
  "fig": ""
 },
 {
  "kicker": "30.1",
  "title": "Les explications post-hoc",
  "sub": "saliency, LIME, SHAP",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Saliency</b> : le gradient de la sortie par rapport à l’entrée montre quels pixels ou mots comptent.</li>\n      <li><b>LIME</b> : approcher le modèle, autour d’un exemple, par un modèle simple lisible.</li>\n      <li><b>SHAP</b> : répartir la prédiction entre les variables selon les valeurs de Shapley (théorie des jeux).</li>\n    </ul>\n    <p>Ces cartes sont utiles mais peuvent être instables, et rien ne garantit qu’elles reflètent le vrai mécanisme : elles montrent une corrélation.</p>",
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
  "lit": "posthoc",
  "look": {},
  "scene": "posthoc",
  "fig": ""
 },
 {
  "kicker": "30.2",
  "title": "Circuits et têtes d’induction",
  "sub": "l’interprétabilité mécaniste",
  "body": "\n    <p class=\"lede\">L’<b>interprétabilité mécaniste</b> traite un réseau comme un programme à rétro-concevoir.</p>\n    <p>Les chercheurs ont identifié des circuits : la <b>tête d’induction</b> (compléter un motif déjà vu), des circuits d’addition modulaire, d’indirection… On les valide par des expériences : <b>ablation</b> (couper un composant) et <b>patching</b> (remplacer ses activations par celles d’une autre exécution) pour voir si la sortie change.</p>\n    <p>Les succès concernent surtout de petits modèles ou des comportements précis.</p>",
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
  "lit": "circuit",
  "look": {},
  "scene": "circuit",
  "fig": ""
 },
 {
  "kicker": "30.3",
  "title": "Superposition et caractéristiques",
  "sub": "un neurone, plusieurs idées",
  "body": "\n    <p class=\"lede\">Un neurone isolé répond souvent à plusieurs concepts sans rapport : le réseau stocke plus de concepts que de neurones, en les superposant.</p>\n    <p>Les <b>autoencodeurs parcimonieux</b> (<i>sparse autoencoders</i>) apprennent à décomposer les activations en <b>caractéristiques</b> plus lisibles. Des travaux de 2024 en ont extrait des millions dans de grands modèles, et montré qu’amplifier l’une d’elles infléchit le comportement.</p>\n    <p>Reste à vérifier qu’elles couvrent tout ce que fait le modèle : la couverture est partielle.</p>",
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
  "lit": "sae",
  "look": {},
  "scene": "sae",
  "fig": ""
 },
 {
  "kicker": "30.4",
  "title": "Ce qu’on peut en attendre",
  "sub": "et ce qui reste ouvert",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Utile aujourd’hui</b> : déboguer un comportement précis, repérer des raccourcis appris, auditer un biais.</li>\n      <li><b>Prometteur</b> : détecter la tromperie ou des objectifs cachés, contrôler un comportement par intervention directe.</li>\n      <li><b>Ouvert</b> : passer à l’échelle des plus grands modèles, vérifier qu’une explication est fidèle, comprendre les raisonnements longs.</li>\n    </ul>\n    <p>Un modèle expliqué par une carte colorée n’est pas pour autant <b>compris</b>.</p>",
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
  "lit": "circuit",
  "look": {},
  "scene": "circuit",
  "fig": ""
 }
];
export const PLATES = {
  posthoc: { text: "Les méthodes post-hoc (saliency, LIME, SHAP) mesurent l’effet de modifications de l’entrée sur la sortie et en déduisent l’importance de chaque morceau. Elles décrivent le comportement, pas le mécanisme interne.", facts: () => [["LIME", "modèle local simple"], ["SHAP", "valeurs de Shapley"], ["limite", "corrélation, pas cause"]] },
  circuit: { text: "Les chercheurs en interprétabilité mécaniste cherchent des « circuits » : de petits groupes de composants qui réalisent une fonction. Exemple connu : la tête d’induction, qui repère qu’un motif « A B … A » a déjà eu lieu et prédit « B ».", facts: () => [["tête d’induction", "complète les motifs répétés"], ["méthode", "ablation, patching"]] },
  sae: { text: "Un neurone représente souvent plusieurs concepts (superposition). Un autoencodeur parcimonieux, entraîné sur les activations, en extrait des directions plus lisibles : « Golden Gate », « code incorrect »… On peut les amplifier pour changer le comportement.", facts: () => [["superposition", "plus de concepts que de neurones"], ["résultat", "millions de traits identifiés"], ["limite", "couverture partielle"]] }
};
