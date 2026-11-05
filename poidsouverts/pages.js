// Chapitre 78 : Exploiter des poids ouverts (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 78 · tous niveaux",
  "title": "Exploiter des poids ouverts",
  "sub": "tout ce qu’on peut faire d’un modèle qu’on possède",
  "body": "\n    <p class=\"lede\">Un modèle à <b>poids ouverts</b>, comme Qwen 3.8 27B, se télécharge en entier : on a le même objet que ses créateurs, sauf les données et le code d’entraînement.</p>\n    <p>Concrètement : des fichiers <i>safetensors</i> (les matrices de poids, en 16 bits), un <i>config.json</i> (64 couches, tailles, types de couches) et le tokeniseur. Avec eux, on peut :</p>\n    <ul class=\"rules\">\n      <li>l’<b>utiliser</b> sans le changer, ou le <b>convertir</b> ;</li>\n      <li>l’<b>adapter</b> avec de petits ajouts (LoRA) ou le <b>réentraîner</b> ;</li>\n      <li>le <b>modifier par calcul</b>, sans entraînement ;</li>\n      <li>le <b>transformer</b> en un autre modèle.</li>\n    </ul>\n    <p>Avant tout : lire la <b>licence</b> du dépôt (la plupart des Qwen sont sous Apache 2.0, qui permet l’usage commercial et la redistribution des versions modifiées).</p>",
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
  "lit": "carte",
  "look": {},
  "scene": "carte",
  "fig": ""
 },
 {
  "kicker": "78.1",
  "title": "Sans toucher aux poids",
  "sub": "utiliser, convertir",
  "body": "\n    <p class=\"lede\">Beaucoup de besoins se règlent sans entraîner quoi que ce soit.</p>\n    <ul class=\"rules\">\n      <li><b>Le prompt système</b> et des exemples dans la requête : le moyen le plus rapide de changer le ton ou la tâche.</li>\n      <li><b>Le RAG</b> (chapitre 20) : donner au modèle vos documents au moment de la question. Préférable à l’affinage pour ajouter des <i>connaissances</i>.</li>\n      <li><b>Les outils</b> (chapitre 9) et la <b>sortie structurée</b> : une grammaire ou un schéma JSON force le format de la réponse.</li>\n      <li><b>Les réglages</b> d’échantillonnage (chapitre 4) et du serveur (chapitre 76).</li>\n      <li><b>Quantifier, convertir</b> : vers MLX (Mac), GGUF (llama.cpp), AWQ ou GPTQ (GPU). On peut faire sa propre quantification dynamique, en mesurant sur des exemples (calibration) quelles parties sont sensibles.</li>\n    </ul>\n    <p>Règle utile : le RAG pour <b>savoir</b>, l’affinage pour <b>savoir-faire</b> (un style, un format, une tâche).</p>",
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
  "lit": "carte",
  "look": {},
  "scene": "carte",
  "fig": ""
 },
 {
  "kicker": "78.2",
  "title": "L’affinage complet",
  "sub": "tout réentraîner",
  "body": "\n    <p class=\"lede\">On reprend l’entraînement sur ses propres données, en modifiant <b>tous</b> les poids.</p>\n    <p><b>Code couleur</b> : blanc = poids <b>gelés</b> (inchangés), rouge = poids <b>modifiés</b>, bleu = poids <b>ajoutés</b>, gris = retiré ou externe. La pile représente les 64 couches, par paquets de 4.</p>\n    <p>Le plus puissant, mais le plus coûteux : environ <b>16 octets par poids</b> (poids, gradients, état de l’optimiseur), soit ~430 Go pour 27 milliards, plus les activations. Il faut plusieurs GPU de 80 Go et des outils de répartition (FSDP, DeepSpeed).</p>\n    <p>Risque principal : l’<b>oubli catastrophique</b>. Entraîné trop fort sur une seule tâche, le modèle perd des capacités générales. On mélange donc ses données avec des données générales et on garde un taux d’apprentissage faible.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "full",
  "look": {},
  "scene": "full",
  "fig": ""
 },
 {
  "kicker": "78.3",
  "title": "Geler une partie",
  "sub": "n’entraîner que le haut du modèle",
  "body": "\n    <p class=\"lede\">Compromis simple : on <b>gèle</b> les couches basses (le « socle » : syntaxe, connaissances générales) et on n’entraîne que les couches hautes et la tête.</p>\n    <p>Moins de mémoire (pas de gradients ni d’optimiseur pour les couches gelées), moins de risque d’oubli. Moins d’effet aussi : c’est surtout utile quand la tâche ressemble déjà à ce que le modèle sait faire. Aujourd’hui, LoRA a largement remplacé cette méthode.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "freeze",
  "look": {},
  "scene": "freeze",
  "fig": ""
 },
 {
  "kicker": "78.4",
  "title": "LoRA",
  "sub": "adapter avec de petites matrices",
  "body": "\n    <p class=\"lede\"><b>LoRA</b> (<i>low-rank adaptation</i>) gèle le modèle et ajoute à côté de chaque grande matrice choisie deux petites matrices A et B.</p>\n    <div class=\"eq\">W′ = W + B·A</div>\n    <p>Si W fait 5 000 × 5 000, A et B font 5 000 × <i>r</i> avec un <b>rang</b> <i>r</i> de 8 à 64 : on entraîne moins de 1 % des nombres. Le résultat est un <b>adaptateur</b> de quelques centaines de Mo, qu’on peut :</p>\n    <ul class=\"rules\">\n      <li>charger à part, en changer selon la tâche, en servir plusieurs avec la même base ;</li>\n      <li>ou <b>fusionner</b> dans les poids (W′ calculé une fois), puis requantifier.</li>\n    </ul>\n    <p>Variantes : DoRA, rsLoRA, et des méthodes encore plus légères (adaptation par préfixe, IA³).</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "lora",
  "look": {},
  "scene": "lora",
  "fig": ""
 },
 {
  "kicker": "78.5",
  "title": "QLoRA",
  "sub": "affiner un 27B sur une seule machine",
  "body": "\n    <p class=\"lede\"><b>QLoRA</b> = la base gelée en <b>4 bits</b> + des adaptateurs LoRA en 16 bits.</p>\n    <p>Pour un 27B : ~15 à 20 Go de base, plus les adaptateurs, leurs gradients et les activations. Cela tient sur un GPU de 24 à 48 Go, ou sur un Mac à grande mémoire unifiée avec <b>mlx-lm</b> (son module LoRA travaille directement sur un modèle MLX quantifié, plus lentement qu’un GPU).</p>\n    <p>Pour un modèle hybride comme celui-ci (couches GDN), vérifier que la bibliothèque d’entraînement gère ce type de couche : il faut des noyaux de calcul dédiés et une version récente.</p>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "qlora",
  "look": {},
  "scene": "qlora",
  "fig": ""
 },
 {
  "kicker": "78.6",
  "title": "Quelles données, quel objectif",
  "sub": "ce qu’on apprend au modèle",
  "body": "\n    <table class=\"data\">\n      <tr><th>méthode</th><th>données</th><th>pour</th></tr>\n      <tr><td>pré-entraînement continu</td><td>texte brut du domaine</td><td>un vocabulaire, un domaine (droit, médecine)</td></tr>\n      <tr><td>affinage supervisé (SFT)</td><td>paires question → bonne réponse</td><td>un format, un style, une tâche</td></tr>\n      <tr><td>DPO, ORPO, KTO</td><td>paires meilleure / moins bonne</td><td>préférences, ton, sécurité</td></tr>\n      <tr><td>RL (PPO, GRPO)</td><td>une récompense ou un vérificateur</td><td>raisonnement, code, maths, agents</td></tr>\n    </table>\n    <p>Ordre classique : SFT, puis préférences ou renforcement. Quelques centaines d’exemples bien choisis suffisent souvent pour un style ; il en faut bien plus pour une compétence nouvelle. Pour un modèle à raisonnement, garder ou désactiver la phase de réflexion dans les exemples selon l’usage visé.</p>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "pref",
  "look": {},
  "scene": "pref",
  "fig": ""
 },
 {
  "kicker": "78.7",
  "title": "La distillation",
  "sub": "apprendre d’un maître",
  "body": "\n    <p class=\"lede\">L’élève apprend à reproduire les <b>probabilités</b> du maître sur chaque token, un signal bien plus riche qu’une seule bonne réponse.</p>\n    <ul class=\"rules\">\n      <li><b>Vers le bas</b> : le 27B sert de maître à un modèle de 1 à 8 milliards, plus rapide, pour une tâche précise.</li>\n      <li><b>Vers le haut</b> : le 27B apprend des réponses (ou des raisonnements) d’un modèle plus grand. Vérifier la licence : certains fournisseurs interdisent d’entraîner un modèle sur leurs sorties.</li>\n      <li><b>Un brouillon</b> : on peut entraîner une petite tête ou un petit modèle de devinette (comme la tête MTP du chapitre 76) pour accélérer le décodage spéculatif.</li>\n    </ul>",
  "cam": {
   "target": [
    240,
    1.8,
    0
   ],
   "az": 6,
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
  "kicker": "78.8",
  "title": "Fusionner des modèles",
  "sub": "additionner, sans entraîner",
  "body": "\n    <p class=\"lede\">Deux versions affinées du <b>même modèle de base</b> peuvent être fusionnées par simple calcul sur leurs poids.</p>\n    <ul class=\"rules\">\n      <li><b>Moyenne</b> ou <b>SLERP</b> : interpoler entre deux modèles.</li>\n      <li><b>Arithmétique de tâches</b> : (affiné − base) est un « vecteur de tâche » qu’on peut ajouter, soustraire, doser.</li>\n      <li><b>TIES</b>, <b>DARE</b> : ne garder que les changements importants et résoudre les conflits de signe.</li>\n    </ul>\n    <p>L’outil courant est <b>mergekit</b> ; quelques minutes sur un ordinateur ordinaire. Résultats imprévisibles : toujours évaluer.</p>",
  "cam": {
   "target": [
    280,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "merge",
  "look": {},
  "scene": "merge",
  "fig": ""
 },
 {
  "kicker": "78.9",
  "title": "Modifier sans entraîner",
  "sub": "éditer, piloter, retirer",
  "body": "\n    <p class=\"lede\">Les poids sont des nombres : on peut les changer par calcul direct, à partir de ce que l’interprétabilité (chapitre 30) a appris.</p>\n    <ul class=\"rules\">\n      <li><b>Éditer un fait</b> (ROME, MEMIT) : modifier quelques poids des MLP du milieu pour changer une association précise.</li>\n      <li><b>Piloter</b> : ajouter un vecteur de direction au flux pendant l’inférence (style, ton) ; aucun poids touché (figure suivante).</li>\n      <li><b>Retirer une direction</b> (« ablitération ») : projeter les poids pour supprimer une direction, souvent celle du refus. Cela affaiblit les garde-fous : celui qui publie le modèle modifié en porte la responsabilité.</li>\n      <li><b>Analyser</b> : autoencodeurs parcimonieux, sondes, <i>logit lens</i>, pour comprendre avant de modifier.</li>\n    </ul>",
  "cam": {
   "target": [
    320,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "edit",
  "look": {},
  "scene": "edit",
  "fig": ""
 },
 {
  "kicker": "78.10",
  "title": "Piloter par une direction",
  "sub": "un vecteur ajouté au flux",
  "body": "\n    <p class=\"lede\">On fait passer des exemples « formels » et « familiers », on prend la différence moyenne de leurs activations à une couche : c’est la <b>direction</b> du ton.</p>\n    <p>À l’inférence, on ajoute cette direction (multipliée par une force) au flux à la même profondeur. Le modèle répond plus formellement, sans aucun entraînement. La même technique sert en recherche pour tester ce qu’une direction représente.</p>",
  "cam": {
   "target": [
    360,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "steer",
  "look": {},
  "scene": "steer",
  "fig": ""
 },
 {
  "kicker": "78.11",
  "title": "Transformer le modèle",
  "sub": "élaguer, nouvelle tête, nouveaux sens",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Élaguer</b> (figure) : retirer des couches peu utiles, des neurones ou, dans un MoE (chapitre 77), des experts rarement choisis ; puis réparer par un court entraînement.</li>\n      <li><b>Nouvelle tête</b> : classifieur, modèle de récompense, modèle d’embeddings.</li>\n      <li><b>Nouveaux sens</b> : brancher un encodeur d’images ou de son.</li>\n      <li><b>Nouveau vocabulaire</b> : ajouter des tokens.</li>\n      <li><b>Contexte plus long</b> : étendre l’encodage des positions des couches d’attention (méthodes de type YaRN), puis entraîner sur de longs textes.</li>\n    </ul>",
  "cam": {
   "target": [
    440,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "prune",
  "look": {},
  "scene": "prune",
  "fig": ""
 },
 {
  "kicker": "78.12",
  "title": "Changer la tête",
  "sub": "classer, noter, chercher",
  "body": "\n    <p class=\"lede\">Le corps du modèle produit, pour chaque texte, un vecteur riche. La tête décide de ce qu’on en fait.</p>\n    <p>En remplaçant la tête de sortie par une petite couche qui donne une <b>classe</b>, une <b>note</b> ou un <b>vecteur</b>, on obtient un classifieur, un modèle de récompense (utile pour le renforcement de la page 78.6) ou un modèle d’embeddings pour le RAG. On entraîne la nouvelle tête, et souvent le corps avec LoRA.</p>",
  "cam": {
   "target": [
    480,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "head",
  "look": {},
  "scene": "head",
  "fig": ""
 },
 {
  "kicker": "78.13",
  "title": "Ajouter des sens",
  "sub": "un modèle de texte qui voit",
  "body": "\n    <p class=\"lede\">Un encodeur d’images transforme une image en vecteurs ; un petit <b>projecteur</b> les traduit dans l’espace des embeddings du modèle.</p>\n    <ol class=\"rules\">\n      <li>On entraîne le projecteur seul, sur des paires image → légende.</li>\n      <li>On affine l’ensemble (souvent avec LoRA) sur des questions sur des images.</li>\n    </ol>\n    <p>Même principe pour le son. Si une version multimodale officielle existe, mieux vaut partir d’elle.</p>",
  "cam": {
   "target": [
    520,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "vision",
  "look": {},
  "scene": "vision",
  "fig": ""
 },
 {
  "kicker": "78.14",
  "title": "Étendre le vocabulaire",
  "sub": "de nouveaux tokens",
  "body": "\n    <p class=\"lede\">Ajouter des tokens au tokeniseur (balises d’un outil, mots d’une langue rare) impose d’ajouter autant de lignes aux <b>embeddings</b> et à la <b>tête de sortie</b>.</p>\n    <p>Les nouvelles lignes sont initialisées (par exemple par la moyenne des tokens qui composaient le mot) puis entraînées. Avec ~250 000 tokens, le vocabulaire de Qwen couvre déjà beaucoup de langues : c’est rarement nécessaire.</p>",
  "cam": {
   "target": [
    560,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "vocab",
  "look": {},
  "scene": "vocab",
  "fig": ""
 },
 {
  "kicker": "78.15",
  "title": "Le coût et les outils",
  "sub": "mémoire, bibliothèques",
  "body": "\n    <table class=\"data\">\n      <tr><th>outil</th><th>pour</th></tr>\n      <tr><td>transformers, PEFT, TRL</td><td>la base : charger, LoRA, SFT, DPO, GRPO</td></tr>\n      <tr><td>Unsloth, Axolotl, LLaMA-Factory</td><td>affinage prêt à l’emploi, économe en mémoire</td></tr>\n      <tr><td>torchtune, DeepSpeed, FSDP</td><td>gros entraînements sur plusieurs GPU</td></tr>\n      <tr><td>mlx-lm</td><td>LoRA et conversion sur Mac</td></tr>\n      <tr><td>mergekit</td><td>fusion de modèles</td></tr>\n      <tr><td>llama.cpp</td><td>conversion GGUF, quantification</td></tr>\n      <tr><td>lm-evaluation-harness</td><td>mesurer avant / après</td></tr>\n    </table>",
  "cam": {
   "target": [
    600,
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
  "kicker": "78.16",
  "title": "Évaluer, publier, choisir",
  "sub": "la boucle complète",
  "body": "\n    <p class=\"lede\">Toute modification se juge à la mesure : bancs d’essai généraux (pour détecter l’oubli), tests de votre tâche, et comparaison à l’original (divergence KL, accord sur le mot suivant, comme au chapitre 76).</p>\n    <table class=\"data\">\n      <tr><th>besoin</th><th>méthode</th></tr>\n      <tr><td>connaître mes documents</td><td>RAG, pas d’entraînement</td></tr>\n      <tr><td>un style, un format</td><td>QLoRA + SFT, quelques centaines d’exemples</td></tr>\n      <tr><td>mieux raisonner sur un domaine vérifiable</td><td>LoRA + GRPO</td></tr>\n      <tr><td>combiner deux versions</td><td>fusion</td></tr>\n      <tr><td>plus petit, plus rapide</td><td>distillation, élagage, quantification</td></tr>\n      <tr><td>classer, noter, chercher</td><td>nouvelle tête</td></tr>\n    </table>\n    <p>Pour publier : fusionner ou fournir l’adaptateur, requantifier (MLX, GGUF), décrire les données et les changements, respecter la licence d’origine.</p>",
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
  "lit": "carte",
  "look": {},
  "scene": "carte",
  "fig": ""
 }
];
export const PLATES = {
  carte: { text: "Avoir les poids, c’est avoir le modèle entier : on peut l’utiliser sans rien changer, le convertir, lui ajouter de petits adaptateurs, le réentraîner en partie ou en totalité, le modifier par calcul direct sur les poids, ou en faire un autre modèle (plus petit, multimodal, classifieur). Le coût en matériel croît de gauche à droite, sauf pour les modifications sans entraînement, qui sont bon marché.", facts: () => [["fichiers", "safetensors + config + tokeniseur"], ["licence", "à vérifier sur le dépôt"], ["le plus courant", "LoRA / QLoRA"]] },
  full: { text: "Tous les poids sont réentraînés (rouge) : c’est le plus puissant, et le plus cher. Il faut stocker, pour chaque poids, le poids lui-même, son gradient et l’état de l’optimiseur (Adam en garde deux) : environ 16 octets par poids en précision mixte.", facts: () => [["mémoire", "~16 octets par poids"], ["27B", "~430 Go + activations"], ["risque", "oubli catastrophique"]] },
  freeze: { text: "On gèle les premières couches (blanc) et on n’entraîne que les dernières (rouge) et éventuellement la tête : moins de mémoire, moins de risque d’abîmer les connaissances générales, mais moins d’effet.", facts: () => [["gelées", "couches basses"], ["entraînées", "couches hautes"], ["coût", "proportionnel à la part entraînée"]] },
  lora: { text: "LoRA gèle tous les poids d’origine et ajoute, à côté de certaines matrices, deux petites matrices (bleu) dont le produit corrige la grande. Seules ces petites matrices s’entraînent : quelques dizaines à quelques centaines de millions de nombres au lieu de 27 milliards.", facts: () => [["entraînés", "< 1 % des poids"], ["fichier", "adaptateur de quelques centaines de Mo"], ["après", "on le garde à part ou on le fusionne"]] },
  qlora: { text: "QLoRA charge la base gelée en 4 bits (≈ 15 à 20 Go pour 27B) et entraîne des adaptateurs LoRA en 16 bits par-dessus. C’est ce qui rend l’affinage d’un 27B possible sur un seul GPU de 24 à 48 Go, ou sur un Mac à grande mémoire unifiée (plus lentement).", facts: () => [["base", "4 bits, gelée"], ["adaptateurs", "16 bits, entraînés"], ["matériel", "un GPU 24–48 Go ou un Mac"]] },
  pref: { text: "Après l’affinage supervisé, on peut apprendre au modèle à préférer certaines réponses : DPO, ORPO ou KTO à partir de paires « meilleure / moins bonne », ou du renforcement (PPO, GRPO) avec une récompense : un modèle de récompense, ou un vérificateur automatique (le code passe les tests, le calcul est juste). Ces méthodes s’utilisent en affinage complet ou avec LoRA.", facts: () => [["DPO", "paires de réponses, sans récompense"], ["GRPO", "plusieurs réponses notées, on renforce les meilleures"], ["vérifiable", "maths, code, formats"]] },
  distill: { text: "Un modèle élève apprend à reproduire les probabilités (ou les réponses, y compris le raisonnement) d’un modèle maître plus grand. Le 27B peut être l’élève d’un modèle plus gros, ou le maître d’un modèle plus petit qui ira encore plus vite.", facts: () => [["signal", "les probabilités du maître"], ["usage", "un petit modèle presque aussi bon"], ["attention", "licence des sorties du maître"]] },
  merge: { text: "Deux versions affinées du même modèle de base peuvent être fusionnées par calcul sur les poids : moyenne, interpolation sphérique (SLERP), ou méthodes qui ne gardent que les changements importants (TIES, DARE, arithmétique de tâches). Quelques minutes de calcul, aucun GPU d’entraînement.", facts: () => [["condition", "même modèle de base"], ["méthodes", "moyenne, SLERP, TIES, DARE"], ["outil", "mergekit"]] },
  edit: { text: "Des méthodes comme ROME ou MEMIT repèrent dans les MLP du milieu du modèle où est stocké un fait (« la capitale de X est Y ») et modifient quelques poids par un calcul direct pour le changer. Rapide, mais fragile : les effets de bord sont fréquents.", facts: () => [["où", "MLP des couches du milieu"], ["méthodes", "ROME, MEMIT"], ["limite", "effets de bord, faits liés"]] },
  steer: { text: "On repère une direction dans les activations (par exemple « ton formel ») en comparant des exemples, puis on l’ajoute au flux à une certaine profondeur pendant l’inférence. Aucun poids n’est modifié ; le réglage s’allume ou s’éteint à volonté.", facts: () => [["poids modifiés", "aucun"], ["réglage", "force de la direction"], ["usage", "ton, style, recherche"]] },
  abl: { text: "Variante permanente : on projette les poids pour qu’ils ne puissent plus écrire une direction donnée, par exemple celle qui déclenche les refus. Technique connue, mais qui retire aussi des garde-fous : la responsabilité de l’usage revient à celui qui publie le modèle modifié.", facts: () => [["poids", "projetés, pas réentraînés"], ["effet", "une direction supprimée"], ["risque", "garde-fous affaiblis"]] },
  prune: { text: "On retire les couches les moins utiles (repérées en mesurant combien elles changent le flux), des neurones, ou des experts peu utilisés dans un MoE, puis on réentraîne un peu (souvent avec de la distillation) pour réparer. Le modèle devient plus petit et plus rapide.", facts: () => [["retirer", "couches, neurones, experts"], ["réparer", "court réentraînement"], ["gain", "taille et vitesse"]] },
  head: { text: "On remplace la tête de sortie (qui prédit le token suivant) par une autre : une classe (classifieur), une note (modèle de récompense), ou un vecteur (modèle d’embeddings pour la recherche). Le corps du modèle est gelé ou affiné avec LoRA.", facts: () => [["classifieur", "spam, sentiment, catégorie"], ["récompense", "noter des réponses"], ["embeddings", "recherche, RAG"]] },
  vision: { text: "Pour qu’un modèle de texte voie, on lui branche un encodeur d’images et un petit projecteur (bleu) qui traduit l’image en vecteurs du même espace que les embeddings. On entraîne d’abord le projecteur seul, puis l’ensemble avec LoRA (méthode de type LLaVA).", facts: () => [["ajouté", "encodeur + projecteur"], ["étape 1", "projecteur seul"], ["étape 2", "ensemble, souvent LoRA"]] },
  vocab: { text: "Pour une langue, un jargon ou des balises spéciales, on ajoute des tokens au tokeniseur : il faut alors ajouter des lignes aux embeddings et à la tête (bleu), puis les entraîner.", facts: () => [["ajouté", "lignes d’embeddings et de tête"], ["usage", "langue, jargon, balises d’outils"], ["coût", "court entraînement"]] },
  cout: { text: "Ordres de grandeur pour 27 milliards de poids. Inférence en 4 bits : ~20 Go. QLoRA : la base en 4 bits plus les adaptateurs, leurs gradients et les activations, ~25 à 35 Go. LoRA sur une base en 16 bits : ~54 Go de poids plus le reste. Affinage complet : ~16 octets par poids, soit ~430 Go avant les activations, donc plusieurs GPU de 80 Go.", facts: () => [["QLoRA", "un GPU 24–48 Go"], ["LoRA 16 bits", "un GPU 80 Go"], ["complet", "plusieurs GPU 80 Go"]] }
};
