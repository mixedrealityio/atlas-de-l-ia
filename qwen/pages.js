// Chapitre 76 : Qwen 3.8 27B (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 76 · un modèle réel",
  "title": "Qwen 3.8 27B",
  "sub": "le modèle qui tourne sur mon MacBook",
  "body": "\n    <p class=\"lede\">Un modèle de 27 milliards de poids, compressé à ~20 Go, qui répond en local sur un MacBook. Ce chapitre l’ouvre pièce par pièce.</p>\n    <p>Une requête suit toujours le même chemin : <b>tokenisation</b> → <b>embeddings</b> → <b>64 couches</b> → <b>tête de sortie</b> → <b>échantillonnage</b>. Un token sort, il est ajouté au texte, et tout recommence pour le suivant. À côté, une <b>tête MTP</b> devine 3 mots d’avance pour aller plus vite.</p>\n    <p><b>Code couleur de la figure</b> : blanc = <b>4 bits</b>, bleu = <b>8 bits</b>, rouge = <b>16 bits</b> ; gris = ce qui n’est pas un poids (texte, calcul).</p>\n    <p>La version installée s’appelle <i>Qwen3.8-27B-MTPLX-Optimized-Speed</i> : ses parties n’ont pas toutes le même nombre de bits. C’est la <b>quantification dynamique</b> (pages 76.6 à 76.8).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 5,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "flux",
  "look": {},
  "scene": "flux",
  "fig": ""
 },
 {
  "kicker": "76.1",
  "title": "Tokenisation et embeddings",
  "sub": "du texte aux vecteurs",
  "body": "\n    <p class=\"lede\">Le modèle ne lit pas des lettres : il lit des <b>numéros de tokens</b>.</p>\n    <p>Le <b>tokeniseur</b> découpe la requête en morceaux (un mot, un bout de mot, une ponctuation) et remplace chacun (un <i>token</i>, ou jeton) par son numéro dans un vocabulaire d’environ <b>250 000 tokens</b>. Il n’a pas de poids : c’est un dictionnaire.</p>\n    <p>La table des <b>embeddings</b> a une ligne de nombres par token du vocabulaire. Chaque numéro y est remplacé par sa ligne : un <b>vecteur</b> que les couches vont transformer (chapitre 1).</p>\n    <p>Cette table est en <b>8 bits</b> : c’est un goulot. Une erreur ici abîme le sens du mot avant même d’entrer dans le modèle, et elle se retrouve dans toutes les couches.</p>",
  "cam": {
   "target": [
    -8.4,
    3.2,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 30,
   "auto": false
  },
  "lit": "flux",
  "look": {},
  "scene": "flux",
  "fig": ""
 },
 {
  "kicker": "76.2",
  "title": "Les 64 couches",
  "sub": "mélanger, puis réfléchir",
  "body": "\n    <p class=\"lede\">Chaque couche fait deux choses, toujours dans le même ordre.</p>\n    <ul class=\"rules\">\n      <li><b>Le mélange</b> (à gauche) : chaque mot récupère de l’information sur les mots qui le précèdent.</li>\n      <li><b>La réflexion</b> (à droite), le <b>MLP</b> : chaque mot est transformé seul, par deux grandes multiplications. C’est là qu’est l’essentiel des 27 milliards de poids, d’où des blocs plus larges.</li>\n    </ul>\n    <p>Entre les deux, de fines <b>normalisations</b> (en rouge) remettent les nombres à la bonne échelle. Le résultat de chaque couche s’ajoute à son entrée (connexion résiduelle) et passe à la couche suivante : le vecteur s’enrichit 64 fois.</p>",
  "cam": {
   "target": [
    -1.4,
    6.0,
    0
   ],
   "az": 6,
   "el": 6,
   "dist": 36,
   "auto": false
  },
  "lit": "flux",
  "look": {},
  "scene": "flux",
  "fig": ""
 },
 {
  "kicker": "76.3",
  "title": "Deux façons de mélanger",
  "sub": "GDN (48 couches) et attention complète (16)",
  "body": "\n    <p class=\"lede\">Trois couches sur quatre résument, une sur quatre regarde tout.</p>\n    <ul class=\"rules\">\n      <li><b>Gated DeltaNet</b> (GDN, 48 couches) : une <b>attention linéaire</b>. Au lieu de relire tous les mots précédents, la couche tient un <b>résumé compact</b> qu’elle met à jour à chaque mot. Coût constant, mémoire constante, même avec un très long texte.</li>\n      <li><b>Attention complète</b> (16 couches, une sur quatre : 4, 8, …, 64, les blocs plus larges) : chaque mot regarde <b>précisément chaque mot précédent</b> (chapitre 2). Plus cher, mais rien ne se perd.</li>\n    </ul>\n    <p>Le mélange des deux donne la vitesse du résumé et la précision de l’attention. Conséquence pratique : seules les 16 couches d’attention ont un <b>cache KV</b> qui grandit avec le texte (page 76.10).</p>",
  "cam": {
   "target": [
    -2.8,
    8.2,
    0
   ],
   "az": 16,
   "el": 8,
   "dist": 24,
   "auto": false
  },
  "lit": "flux",
  "look": {},
  "scene": "flux",
  "fig": ""
 },
 {
  "kicker": "76.4",
  "title": "Tête de sortie et échantillonnage",
  "sub": "un score pour chaque token possible",
  "body": "\n    <p class=\"lede\">Après la 64<sup>e</sup> couche, le vecteur du dernier mot est converti en un score pour chacun des ~250 000 tokens.</p>\n    <p>C’est la <b>tête de sortie</b>, en <b>8 bits</b> : c’est elle qui décide du mot final, une petite erreur peut faire passer un autre token devant.</p>\n    <p>Les scores deviennent des <b>probabilités</b> (softmax), puis l’<b>échantillonnage</b> tire un token : souvent le plus probable, parfois un autre selon la température (chapitre 4). Le token choisi est ajouté au texte et repart en entrée : la réponse se construit un token à la fois.</p>",
  "cam": {
   "target": [
    8.2,
    7.0,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 28,
   "auto": false
  },
  "lit": "flux",
  "look": {},
  "scene": "flux",
  "fig": ""
 },
 {
  "kicker": "76.5",
  "title": "La tête MTP",
  "sub": "deviner 3 mots d’avance",
  "body": "\n    <p class=\"lede\">Produire un token oblige à relire ~20 Go de poids. La tête <b>MTP</b> (<i>multi-token prediction</i>) en profite pour <b>deviner les 3 mots suivants</b>.</p>\n    <p>Au passage suivant, le modèle vérifie les 3 propositions en une seule fois. Celles qui correspondent à ce qu’il aurait choisi sont <b>acceptées</b> (~85 % le sont) ; à la première erreur, on jette la suite et on reprend normalement. La réponse est la même, elle arrive plus vite : c’est du <b>décodage spéculatif</b>, sans petit modèle séparé.</p>\n    <p>Toute la tête MTP est gardée en <b>16 bits</b> : si elle devine mal, on perd l’accélération.</p>",
  "cam": {
   "target": [
    7.0,
    3.0,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": false
  },
  "lit": "flux",
  "look": {},
  "scene": "flux",
  "fig": ""
 },
 {
  "kicker": "76.6",
  "title": "La quantification dynamique",
  "sub": "compresser où ça ne coûte rien",
  "body": "\n    <p class=\"lede\">Quantifier, c’est ranger chaque poids sur moins de bits. Ici, pas partout pareil.</p>\n    <p>Les poids sont traités par <b>groupes de 32</b>. Chaque groupe garde une <b>échelle</b> précise, et chaque poids n’est plus qu’un niveau parmi 16 (<b>4 bits</b>) ou 256 (<b>8 bits</b>). La figure arrondit un groupe.</p>\n    <p>Le principe : <b>compresser fort là où les erreurs se moyennent</b> (les grandes multiplications des MLP et du mélange, où des milliers de petites erreurs se compensent), et <b>épargner les points où elles s’accumulent ou décident du mot final</b>.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "quant",
  "look": {},
  "scene": "quant",
  "fig": ""
 },
 {
  "kicker": "76.7",
  "title": "Qui reçoit combien de bits",
  "sub": "4, 8 ou 16 selon la partie",
  "body": "\n    <table class=\"data\">\n      <tr><th>bits</th><th>parties</th></tr>\n      <tr><td>4</td><td>~90 % des poids : MLP des couches 1 à 56, la plupart des parties mélange</td></tr>\n      <tr><td>8</td><td>74 groupes « goulots » : embeddings, tête de sortie, les 48 projections de sortie GDN, MLP des couches 57 à 64</td></tr>\n      <tr><td>16</td><td>les parties fragiles : noyaux de convolution et état récurrent des GDN, toutes les normalisations, toute la tête MTP</td></tr>\n    </table>\n    <p>Pourquoi les 8 dernières couches en 8 bits ? Elles sont juste avant la décision : leurs erreurs n’ont plus de couche après elles pour être corrigées. Les normalisations et l’état récurrent sont minuscules mais réutilisés à chaque mot : une erreur s’y <b>accumule</b>. Les garder précis ne coûte presque rien en Go.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 5,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "flux",
  "look": {},
  "scene": "flux",
  "fig": ""
 },
 {
  "kicker": "76.8",
  "title": "Le bilan",
  "sub": "~20 Go au lieu de ~54",
  "body": "\n    <table class=\"data\">\n      <tr><th>version</th><th>taille</th><th>écart à l’original</th></tr>\n      <tr><td>original 16 bits</td><td>~54 Go</td><td>référence</td></tr>\n      <tr><td>dynamique (le Mac)</td><td>~20 Go</td><td>KL 0,022 · 96 % même mot suivant</td></tr>\n      <tr><td>4 bits partout</td><td>~15 Go</td><td>KL ~0,037</td></tr>\n    </table>\n    <p>La <b>divergence KL</b> mesure à quel point les probabilités du modèle compressé s’éloignent de celles de l’original (0 = identiques). Pour 5 Go de plus que le « tout 4 bits », la version dynamique réduit cet écart de 40 % environ et choisit le même mot suivant que l’original 96 fois sur 100.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "quant",
  "look": {},
  "scene": "quant",
  "fig": ""
 },
 {
  "kicker": "76.9",
  "title": "La commande du serveur",
  "sub": "mtplx serve, ligne par ligne",
  "body": "\n    <p class=\"lede\">Sur le Mac, le modèle est servi par <b>mtplx</b> (un moteur pour puces Apple qui exploite la tête MTP), lancé par cette commande :</p>\n    <p><code style=\"font-size:12px;word-break:break-all\">MTPLX_SESSION_BANK_MAX_BYTES=3G MTPLX_SESSION_BANK_PER_SESSION_BYTES=2G /opt/homebrew/bin/mtplx serve --port 8081 --reasoning off --model Youssofal/Qwen3.8-27B-MTPLX-Optimized-Speed --paged-kv-quantization q8 --context-window 65536 --memory-limit 28G --prefill-chunk-tokens 1024 --ngram-prewarm off</code></p>\n    <table class=\"data\">\n      <tr><th>réglage</th><th>rôle</th></tr>\n      <tr><td>--port 8081</td><td>l’adresse locale où les applications envoient leurs requêtes</td></tr>\n      <tr><td>--model …</td><td>la version à quantification dynamique, depuis Hugging Face</td></tr>\n      <tr><td>--reasoning off</td><td>pas de phase de « réflexion » écrite avant la réponse : réponses directes, plus rapides</td></tr>\n    </table>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "mac",
  "look": {},
  "scene": "mac",
  "fig": ""
 },
 {
  "kicker": "76.10",
  "title": "Mémoire, contexte et cache",
  "sub": "28 Go, 64 k tokens, cache en 8 bits",
  "body": "\n    <table class=\"data\">\n      <tr><th>réglage</th><th>rôle</th></tr>\n      <tr><td>--memory-limit 28G</td><td>plafond de mémoire du serveur : ~20 Go de poids, le reste pour le cache et les calculs ; le Mac garde la suite pour lui</td></tr>\n      <tr><td>--context-window 65536</td><td>64 k tokens au plus : requête, historique et réponse compris</td></tr>\n      <tr><td>--paged-kv-quantization q8</td><td>cache KV rangé en <b>pages</b> (blocs alloués au fur et à mesure) et stocké en <b>8 bits</b> : moitié moins de mémoire qu’en 16 bits</td></tr>\n      <tr><td>SESSION_BANK_MAX_BYTES=3G<br>PER_SESSION_BYTES=2G</td><td>la <b>banque de sessions</b> garde l’état de conversations récentes (3 Go en tout, 2 Go par conversation) : quand on y revient, le début n’est pas recalculé</td></tr>\n    </table>\n    <p>Grâce aux couches GDN, seules 16 couches sur 64 ont un cache qui grandit : c’est ce qui rend 64 k tokens tenables dans 28 Go.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "mac",
  "look": {},
  "scene": "mac",
  "fig": ""
 },
 {
  "kicker": "76.11",
  "title": "Préremplissage et n-grammes",
  "sub": "lire la requête par tranches",
  "body": "\n    <p class=\"lede\">Avant de répondre, le modèle lit toute la requête : c’est le <b>préremplissage</b>.</p>\n    <ul class=\"rules\">\n      <li><b>--prefill-chunk-tokens 1024</b> : la requête est lue par <b>tranches de 1 024 tokens</b>. Une requête de 64 k tokens fait 64 tranches, traitées l’une après l’autre : le pic de mémoire reste petit et la limite de 28 Go est tenue.</li>\n      <li><b>--ngram-prewarm off</b> : mtplx peut aussi deviner des mots en recopiant des suites déjà vues dans le texte (n-grammes) et préparer cette table au démarrage. Ce préchauffage est coupé : démarrage plus léger, et c’est la tête MTP qui fait les devinettes.</li>\n    </ul>\n    <p>En résumé : un modèle compressé intelligemment, un serveur réglé pour tenir dans 28 Go, et deux accélérations, le GDN pour les longs textes et la tête MTP pour la génération.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "mac",
  "look": {},
  "scene": "mac",
  "fig": ""
 }
];
export const PLATES = {
  flux: { text: "La figure suit un token : la requête est découpée par le tokeniseur, chaque numéro devient un vecteur (embeddings), traverse les 64 couches (à gauche la partie « mélange », à droite la partie « réflexion », le MLP), arrive à la tête de sortie qui donne un score à chaque token possible, puis l’échantillonnage en choisit un. La tête MTP devine en même temps les 3 mots suivants. Les couleurs indiquent le nombre de bits de chaque partie. Survolez un bloc pour son nom.", facts: () => [["couches", "64 (48 GDN + 16 attention)"], ["poids", "27 milliards"], ["taille sur le Mac", "~20 Go"]] },
  quant: { text: "À gauche : un groupe de 32 poids. Leurs valeurs d’origine sont arrondies au plus proche de 16 niveaux (4 bits), et le groupe garde une seule échelle précise qui dit combien vaut un niveau. À droite : la taille du modèle en 16 bits (~54 Go), en quantification dynamique (~20 Go, celui du Mac) et en 4 bits partout (~15 Go). La divergence KL mesure l’écart avec l’original : plus elle est petite, plus le modèle répond comme lui.", facts: () => [["groupe", "32 poids + 1 échelle"], ["dynamique", "KL 0,022, 96 % même mot"], ["4 bits partout", "KL ~0,037"]] },
  mac: { text: "À gauche : les 28 Go que le serveur s’autorise (--memory-limit), occupés par les poids (~20 Go), la banque de sessions (3 Go au plus) et le reste pour le cache de la conversation et les calculs. Au milieu : la fenêtre de contexte de 65 536 tokens, soit 64 tranches de 1 024, lues une par une au préremplissage. À droite : seules les 16 couches d’attention ont un cache qui s’allonge, rangé en pages de 8 bits ; les 48 couches GDN gardent un état de taille fixe.", facts: () => [["mémoire", "28 Go au plus"], ["contexte", "65 536 tokens"], ["cache KV", "paginé, 8 bits"]] }
};
