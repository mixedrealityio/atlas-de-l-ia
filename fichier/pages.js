// Chapitre 57 : Ce que contient un fichier de modèle (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 57 · fichier",
  "title": "Ce que contient un fichier de modèle",
  "sub": "des nombres, rien d’autre",
  "body": "\n    <p class=\"lede\">Un modèle de 8 milliards de paramètres, c’est un fichier de 5 à 16 Go de <b>nombres</b>. Pas de texte, pas de base de données.</p>\n    <p>Comment des téraoctets de texte deviennent-ils quelques gigaoctets ? Et que perd-on en les rendant plus petits ? C’est le sujet de ce chapitre.</p>",
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
  "lit": "fichier",
  "look": {},
  "scene": "fichier",
  "fig": ""
 },
 {
  "kicker": "57.1",
  "title": "Trois choses dans le fichier",
  "sub": "poids, configuration, vocabulaire",
  "body": "<ul class=\"rules\"><li><b>Poids</b> : l’essentiel, des tenseurs de nombres (chapitre 6).</li><li><b>Configuration</b> : nombre de couches, de têtes, dimension, taille du vocabulaire.</li><li><b>Vocabulaire</b> (tokenizer) : jetons et règles de découpe (chapitre 1).</li></ul><p>Formats : <b>safetensors</b> (en-tête puis tenseurs, sans exécution de code), <b>GGUF</b> (tout en un, quantifié), <b>ONNX</b>. Les anciens fichiers <b>pickle</b> de PyTorch peuvent exécuter du code à l’ouverture : méfiance avec les fichiers de source inconnue.</p>",
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
  "lit": "fichier",
  "look": {},
  "scene": "fichier",
  "fig": ""
 },
 {
  "kicker": "57.2",
  "title": "Les tenseurs",
  "sub": "des matrices rangées par nom",
  "body": "\n    <p class=\"lede\">Chaque tenseur a un nom, une forme et un type : par exemple, la matrice de plongements fait <i>vocabulaire × dimension</i>.</p><ul class=\"rules\"><li><b>Par couche</b> : matrices de requêtes, clés, valeurs, sortie de l’attention (chapitre 2), trois matrices du MLP, des vecteurs de normalisation.</li><li><b>À la fin</b> : la tête de sortie qui note chaque jeton du vocabulaire.</li></ul><p>Ordre de grandeur : un transformeur classique compte environ <b>12 × couches × dimension²</b> paramètres, plus la matrice de plongements.</p>",
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
  "lit": "fichier",
  "look": {},
  "scene": "fichier",
  "fig": ""
 },
 {
  "kicker": "57.3",
  "title": "La taille du fichier",
  "sub": "paramètres × bits ÷ 8",
  "body": "\n    <div class=\"eq\">taille ≈ paramètres × bits ÷ 8</div>\n    <p>8 milliards de paramètres : 16 Go en 16 bits, <b>8,5 Go</b> en Q8, <b>4,9 Go</b> en Q4. Pour 70 milliards : 140 Go, 75 Go, 42 Go.</p><p>C’est aussi la mémoire à lire pour chaque jeton généré (chapitre 38) : plus le fichier est petit, plus la génération est rapide.</p>",
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
  "lit": "taille",
  "look": {},
  "scene": "taille",
  "fig": ""
 },
 {
  "kicker": "57.4",
  "title": "Tout internet dans quelques Go ?",
  "sub": "non : ce n’est pas une copie",
  "body": "\n    <p class=\"lede\">Le modèle ne stocke pas les pages du web : il a <b>appris des régularités</b>.</p><ul class=\"rules\"><li>Corpus de plusieurs dizaines de To contre ≈ 5 Go : rapport ≈ 10 000 pour 1, bien au-delà d’une compression sans perte du texte (3 à 8 fois).</li><li><b>Capacité</b> : environ 2 bits d’information par paramètre (mesures de 2024) : un modèle de 8 milliards stocke au plus de l’ordre de 2 Go de faits.</li><li>Conséquence : il connaît bien ce qui est <b>très répété</b> et <b>invente</b> le rare (chapitre 31). Des passages très répétés peuvent être restitués presque mot pour mot.</li></ul>",
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
  "lit": "ratio",
  "look": {},
  "scene": "ratio",
  "fig": ""
 },
 {
  "kicker": "57.5",
  "title": "Prédire, c’est compresser",
  "sub": "l’idée de Shannon",
  "body": "\n    <p class=\"lede\">Un bon prédicteur de texte est un bon compresseur : plus on prédit bien le prochain jeton, moins il faut de bits pour le coder.</p>\n    <p>On peut même utiliser un LLM avec un codage arithmétique comme compresseur de texte, et il bat les outils classiques (Delétang et collègues, 2023). L’entraînement revient à <b>compresser le corpus avec perte</b> : on garde ce qui aide à prédire, on oublie le reste.</p>\n    <p><b>Date de coupure</b> : le fichier ne contient que ce qui était dans le corpus jusqu’à une date ; il ne se met pas à jour tout seul (outils et RAG, chapitre 20).</p>",
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
  "lit": "ratio",
  "look": {},
  "scene": "ratio",
  "fig": ""
 },
 {
  "kicker": "57.6",
  "title": "La quantification, concrètement",
  "sub": "blocs, échelles, entiers",
  "body": "\n    <p class=\"lede\">Chaque poids est un nombre à virgule flottante. On le remplace par un <b>petit entier</b> et une échelle commune au bloc.</p><ul class=\"rules\"><li>Un bloc de 32 poids → une échelle et 32 entiers de 4 bits : ≈ 4,5 bits par poids.</li><li>Le <b>bruit d’arrondi</b> est petit et réparti ; un réseau tolère bien un tel bruit car il est très redondant.</li><li>Les méthodes récentes <b>protègent</b> les poids sensibles (AWQ), minimisent l’erreur couche par couche (GPTQ) ou entraînent en sachant qu’on quantifiera (QAT).</li></ul>",
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
  "lit": "bloc",
  "look": {},
  "scene": "bloc",
  "fig": ""
 },
 {
  "kicker": "57.7",
  "title": "Jusqu’où comprimer",
  "sub": "et les autres compressions",
  "body": "\n    <p class=\"lede\">Au-delà de 4 bits, chaque bit retiré coûte de plus en plus de qualité ; les grands modèles résistent mieux.</p><ul class=\"rules\"><li><b>Élagage</b> : supprimer des poids ou des structures ; <b>distillation</b> : un petit modèle imite un grand (chapitre 43).</li><li><b>Compression du fichier</b> (zip) : gain faible sur des poids, qui ressemblent à du bruit.</li><li>Toujours <b>mesurer</b> sur vos tâches, puis tester la vitesse avec le simulateur (chapitre 38).</li></ul>",
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
  "lit": "qualite",
  "look": {},
  "scene": "qualite",
  "fig": ""
 }
];
export const PLATES = {
  fichier: { text: "Un fichier de modèle contient quasi uniquement des nombres rangés en tenseurs (des tableaux), plus une description : un en-tête qui liste les tenseurs, la configuration de l’architecture, le vocabulaire du tokenizer. Les formats courants : safetensors (en-tête JSON puis tenseurs bruts), GGUF (un seul fichier avec tout, utilisé par llama.cpp), ONNX, et les anciens fichiers PyTorch (pickle).", facts: () => [["safetensors", "tenseurs + en-tête JSON"], ["GGUF", "un seul fichier, quantifié"], ["pickle", "peut exécuter du code : à éviter"]] },
  taille: { text: "Le fichier pèse à peu près : nombre de paramètres × bits par paramètre ÷ 8. Pour 8 milliards de paramètres : 16 Go en 16 bits, environ 8,5 Go en Q8, 4,9 Go en Q4, 3,4 Go en Q2. Un modèle de 70 milliards : environ 140 Go en FP16 et 42 Go en Q4.", facts: () => [["8 Md en FP16", "2 octets × 8 Md = 16 Go"], ["8 Md en Q4", "≈ 4,9 Go"], ["70 Md en Q4", "≈ 42 Go"]] },
  ratio: { text: "Un corpus d’entraînement moderne compte plusieurs dizaines de téraoctets de texte ; un modèle de 8 milliards en Q4 pèse environ 5 Go : un rapport voisin de 10 000 pour 1, très au-delà de ce qu’un compresseur sans perte obtient sur du texte (de l’ordre de 3 à 8). Le modèle ne contient donc pas les documents : il garde des régularités. Des mesures de capacité (Allen-Zhu et Li, 2024) trouvent environ 2 bits d’information par paramètre.", facts: () => [["rapport", "≈ 10 000 pour 1"], ["capacité", "≈ 2 bits par paramètre"], ["conséquence", "il connaît le fréquent, invente le rare"]] },
  bloc: { text: "On découpe les poids en blocs (par exemple de 32), on garde pour chaque bloc une échelle, et on remplace chaque poids par un petit entier (4 bits donnent 16 niveaux). À la lecture, entier × échelle redonne une valeur proche de l’originale. Les variantes plus fines (K-quants, AWQ, GPTQ) protègent les poids les plus influents ou gardent certaines couches en plus haute précision.", facts: () => [["Q4_0", "4 bits + échelle par bloc de 32 : 4,5 bits"], ["K-quants", "super-blocs, mixte"], ["AWQ, GPTQ", "protègent les poids sensibles"]] },
  qualite: { text: "La qualité est presque intacte jusqu’à environ 5-6 bits, se dégrade modérément vers 4 bits, puis nettement sous 3 bits ; les grands modèles résistent mieux que les petits. Courbes illustratives : mesurez sur vos tâches.", facts: () => [["≥ 6 bits", "quasi sans perte"], ["≈ 4 bits", "perte faible à modérée"], ["≤ 3 bits", "perte notable"]] }
};
