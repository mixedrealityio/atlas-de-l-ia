// Chapitre 43 : Compresser un modèle (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 43 · optimisation",
  "title": "Compresser un modèle",
  "sub": "plus petit, plus rapide, plus léger",
  "body": "<p class='lede'>Un modèle de pointe ne tient pas sur un téléphone. Quatre leviers : <b>quantifier</b>, <b>élaguer</b>, <b>distiller</b>, choisir un <b>petit modèle</b> bien entraîné.</p>",
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
  "lit": "ptq",
  "look": {},
  "scene": "ptq",
  "fig": ""
 },
 {
  "kicker": "43.1",
  "title": "Quantification : PTQ et QAT",
  "sub": "chapitre 16 et le simulateur",
  "body": "<ul class=\"rules\"><li><b>PTQ</b> : on quantifie un modèle déjà entraîné (GPTQ, AWQ : on protège les poids les plus influents).</li><li><b>QAT</b> : le modèle s’entraîne en sachant qu’il sera quantifié.</li><li>Le <b>simulateur</b> (chapitre 38) montre l’effet sur la mémoire et le débit.</li></ul>",
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
  "lit": "ptq",
  "look": {},
  "scene": "ptq",
  "fig": ""
 },
 {
  "kicker": "43.2",
  "title": "Distillation",
  "sub": "enseigner à un petit modèle",
  "body": "<p class='lede'>Un grand modèle (<i>maître</i>) fournit réponses et probabilités ; un petit (<i>élève</i>) apprend à l’imiter.</p><p>C’est ainsi que naissent beaucoup de petits modèles performants : DistilBERT, TinyLlama, ou des versions « mini » de grands modèles.</p>",
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
  "lit": "distill",
  "look": {},
  "scene": "distill",
  "fig": ""
 },
 {
  "kicker": "43.3",
  "title": "Élagage",
  "sub": "enlever le superflu",
  "body": "<ul class=\"rules\"><li><b>Non structuré</b> : poids mis à zéro (gain surtout théorique).</li><li><b>Structuré</b> : retirer des têtes, des couches, des neurones (gain réel).</li><li><b>2:4</b> : deux zéros sur quatre, accéléré par certains GPU.</li></ul>",
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
  "lit": "distill",
  "look": {},
  "scene": "distill",
  "fig": ""
 },
 {
  "kicker": "43.4",
  "title": "IA embarquée",
  "sub": "mobile, edge, hors ligne",
  "body": "<p class='lede'>Des modèles compacts tournent aujourd’hui sur téléphone et ordinateur portable (Core ML, LiteRT, ONNX Runtime, ExecuTorch, MLC-LLM, llama.cpp).</p><p>Le compromis : qualité moindre, mais données locales, hors ligne, pas de coût par requête.</p>",
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
  "lit": "edge",
  "look": {},
  "scene": "edge",
  "fig": ""
 }
];
export const PLATES = {
  ptq: { text: "La quantification réduit la précision des poids. La PTQ la fait après l’entraînement avec un petit jeu de calibration (GPTQ, AWQ, SmoothQuant) ; la QAT intègre la quantification à l’entraînement, plus coûteuse mais plus fidèle à très faible précision. Toujours vérifier la qualité sur ses propres tâches.", facts: () => [["INT8", "perte souvent faible"], ["INT4", "perte modérée"], ["2-3 bits", "perte notable"]] },
  distill: { text: "La distillation (Hinton, 2015) entraîne un petit modèle à imiter un grand : DistilBERT (2019) est environ 40 % plus petit et 60 % plus rapide pour environ 97 % de la performance annoncée. L’élagage supprime des poids ou des structures peu utiles ; une parcimonie structurée 2:4 est accélérée par certains GPU.", facts: () => [["distillation", "Hinton, 2015"], ["DistilBERT", "≈ −40 % de taille"]] },
  edge: { text: "Faire tourner un modèle sur un téléphone ou un capteur demande un modèle compact (de moins d’un à quelques milliards de paramètres), un format et un moteur adaptés, et le plus souvent un accélérateur NPU. Avantages : confidentialité, hors ligne, latence. L’apprentissage fédéré permet d’améliorer le modèle sans centraliser les données.", facts: () => [["avantage", "données locales, hors ligne"], ["limite", "mémoire et batterie"]] }
};
