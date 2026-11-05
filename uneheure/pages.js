// Chapitre 79 : Les modèles de langage en une heure (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 79 · synthèse",
  "title": "Les modèles de langage en une heure",
  "sub": "d’après Andrej Karpathy, novembre 2023",
  "body": "\n    <p class=\"lede\">En novembre 2023, Andrej Karpathy (cofondateur d’OpenAI, ancien directeur de l’IA de Tesla) a donné une conférence d’une heure, « Intro to Large Language Models », devenue une référence pour débuter.</p>\n    <p>Ce chapitre en suit le plan, en trois parties : <b>ce qu’est un modèle</b> et comment on l’obtient, <b>où il va</b> (outils, raisonnement, auto-amélioration, système d’exploitation), et <b>ce qui peut mal tourner</b> (sécurité). Chaque page renvoie aux chapitres de l’atlas qui détaillent le sujet. Les chiffres sont ceux de la conférence : des ordres de grandeur de 2023.</p>",
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
  "lit": "fichiers",
  "look": {},
  "scene": "fichiers",
  "fig": ""
 },
 {
  "kicker": "79.1",
  "title": "Deux fichiers",
  "sub": "des paramètres et un peu de code",
  "body": "\n    <p class=\"lede\">Un modèle de langage, c’est d’abord <b>deux fichiers</b> sur un disque.</p><ul class=\"rules\"><li><b>Les paramètres</b> : pour Llama 2 70B, 70 milliards de nombres sur 2 octets, soit <b>140 Go</b> (chapitre 57).</li><li><b>Le code</b> qui les fait tourner : environ <b>500 lignes de C</b>, sans dépendance.</li><li>Aucune connexion nécessaire : on donne un texte, le modèle prédit le <b>mot suivant</b>, l’ajoute, et recommence (chapitre 3).</li></ul><p>Faire tourner le modèle est facile. <b>Obtenir les paramètres</b> est la partie coûteuse.</p>",
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
  "lit": "fichiers",
  "look": {},
  "scene": "fichiers",
  "fig": ""
 },
 {
  "kicker": "79.2",
  "title": "Compresser internet",
  "sub": "le pré-entraînement",
  "body": "<ul class=\"rules\"><li><b>Environ 10 To</b> de texte récupéré sur le web.</li><li><b>6 000 GPU</b> pendant une douzaine de jours, environ <b>2 millions de dollars</b> (chapitre 18).</li><li>Résultat : 140 Go de paramètres, une compression d’environ <b>100 fois</b>, <b>avec perte</b>.</li></ul><p>Pour bien prédire le mot suivant d’une biographie, il faut savoir des choses sur la personne : la prédiction <b>oblige</b> à apprendre le monde. Le modèle ne garde pas les textes mais leurs régularités (chapitre 57). Les modèles de pointe coûtent des dizaines à des centaines de fois plus.</p>",
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
  "lit": "compresser",
  "look": {},
  "scene": "compresser",
  "fig": ""
 },
 {
  "kicker": "79.3",
  "title": "Le modèle rêve des documents",
  "sub": "ce que fait un modèle de base",
  "body": "\n    <p class=\"lede\">Un modèle de base ne répond pas : il <b>continue des documents</b>.</p><ul class=\"rules\"><li>Lancé seul, il « rêve » des pages web : du code, une fiche produit, un article d’encyclopédie.</li><li>La <b>forme</b> est juste ; certains <b>détails</b> (un numéro ISBN, un prix) sont fabriqués parce qu’ils ont la bonne allure.</li><li>Mémoire ou invention ? On ne le sait pas d’avance : c’est l’<b>hallucination</b> (chapitre 31).</li></ul>",
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
  "lit": "reve",
  "look": {},
  "scene": "reve",
  "fig": ""
 },
 {
  "kicker": "79.4",
  "title": "Comment ça marche ?",
  "sub": "on sait l’entraîner, pas l’expliquer",
  "body": "<ul class=\"rules\"><li>L’architecture (le transformeur) est connue dans le détail (chapitre 2).</li><li>On sait <b>ajuster</b> les milliards de paramètres pour mieux prédire (chapitre 6) et <b>mesurer</b> que cela marche.</li><li>On ne sait pas <b>comment ils collaborent</b> pour y parvenir (chapitre 58).</li><li>Le savoir est <b>étrange</b> : le modèle connaît la mère de Tom Cruise, mais pas toujours le fils de cette mère (malédiction de l’inversion, page 58.8).</li></ul><p>Conclusion de Karpathy : traiter les modèles comme des <b>artefacts en grande partie inscrutables</b> et développer des <b>évaluations</b> à la hauteur (chapitre 31).</p>",
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
  "lit": "fichiers",
  "look": {},
  "scene": "fichiers",
  "fig": ""
 },
 {
  "kicker": "79.5",
  "title": "Du document à l’assistant",
  "sub": "pré-entraînement, affinage, comparaisons",
  "body": "<ul class=\"rules\"><li><b>Pré-entraînement</b> : beaucoup de texte, de qualité moyenne ; une fois par an environ, très cher. Il apporte le <b>savoir</b>.</li><li><b>Affinage</b> : environ <b>100 000 conversations</b> écrites par des annotateurs qui suivent des consignes détaillées. Il apporte la <b>forme</b> d’un assistant (chapitre 6).</li><li><b>Comparaisons</b> : il est plus facile de juger deux réponses que d’en écrire une ; ces choix servent à un renforcement (RLHF, chapitre 7).</li><li><b>En boucle</b> : repérer les mauvaises réponses, les réécrire, réaffiner.</li></ul><p>Les annotateurs sont de plus en plus aidés par des modèles.</p>",
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
  "lit": "assistant",
  "look": {},
  "scene": "assistant",
  "fig": ""
 },
 {
  "kicker": "79.6",
  "title": "Classements, fermés et ouverts",
  "sub": "qui est devant ?",
  "body": "<ul class=\"rules\"><li>Une <b>arène</b> fait voter des humains entre deux réponses anonymes et calcule un score de type Elo (chapitre 31).</li><li>En 2023, les modèles <b>fermés</b> (GPT, Claude) menaient ; les modèles à <b>poids ouverts</b> (Llama) suivaient.</li><li>Depuis, l’écart s’est resserré (chapitres 76 à 78 pour un modèle ouvert vu de l’intérieur).</li></ul>",
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
  "lit": "assistant",
  "look": {},
  "scene": "assistant",
  "fig": ""
 },
 {
  "kicker": "79.7",
  "title": "Échelle, outils, modalités",
  "sub": "les capacités qui s’ajoutent",
  "body": "<ul class=\"rules\"><li><b>Lois d’échelle</b> : la qualité de prédiction est une fonction régulière des paramètres et des données ; on peut acheter du progrès avec du calcul (chapitre 29).</li><li><b>Outils</b> : pour une question chiffrée, le modèle cherche sur le web, calcule, écrit du Python pour tracer un graphique, comme le ferait une personne (chapitre 10).</li><li><b>Modalités</b> : voir une image (une esquisse de site devient du code), écouter et parler (chapitre 8).</li></ul>",
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
  "lit": "outils",
  "look": {},
  "scene": "outils",
  "fig": ""
 },
 {
  "kicker": "79.8",
  "title": "Système 1 et système 2",
  "sub": "penser vite, penser lentement",
  "body": "\n    <p class=\"lede\">Daniel Kahneman distingue un <b>système 1</b> rapide et instinctif (2 + 2) et un <b>système 2</b> lent et délibéré (17 × 24).</p><ul class=\"rules\"><li>En 2023, un modèle n’avait que le système 1 : le <b>même calcul pour chaque jeton</b>, qu’il s’agisse d’une banalité ou d’un problème difficile.</li><li>Le souhait : pouvoir dire « prends 30 minutes » et obtenir une réponse plus juste, en explorant un <b>arbre de pistes</b>.</li><li>Depuis 2024, les <b>modèles de raisonnement</b> réalisent en partie ce souhait : ils écrivent une longue réflexion avant de répondre (chapitre 29).</li></ul>",
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
  "lit": "systemes",
  "look": {},
  "scene": "systemes",
  "fig": ""
 },
 {
  "kicker": "79.9",
  "title": "S’améliorer seul",
  "sub": "la leçon d’AlphaGo",
  "body": "<ul class=\"rules\"><li><b>Étape 1</b> : AlphaGo imite des parties d’experts ; cela plafonne au niveau humain.</li><li><b>Étape 2</b> : il joue contre lui-même ; la victoire se vérifie automatiquement, il dépasse les meilleurs joueurs.</li><li>Les modèles de langage en sont à l’étape 1 : ils <b>imitent</b> des annotateurs.</li></ul><p>Question ouverte : quel <b>critère de réussite automatique</b> pour le langage en général ? Dans les domaines <b>vérifiables</b> (mathématiques, code), l’apprentissage par renforcement sur des réponses vérifiables a depuis donné des résultats nets (chapitres 7 et 29).</p>",
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
  "lit": "alphago",
  "look": {},
  "scene": "alphago",
  "fig": ""
 },
 {
  "kicker": "79.10",
  "title": "Personnaliser",
  "sub": "des assistants spécialisés",
  "body": "<ul class=\"rules\"><li><b>Instructions personnalisées</b> : une consigne permanente.</li><li><b>Fichiers</b> : le modèle y cherche des passages et les cite (RAG, chapitre 20).</li><li><b>Affinage</b> sur ses propres données (chapitre 6).</li></ul><p>En 2023, OpenAI lance une boutique d’assistants personnalisés (les « GPTs »). L’idée générale : un modèle commun, des spécialisations à la carte.</p>",
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
  "lit": "os",
  "look": {},
  "scene": "os",
  "fig": ""
 },
 {
  "kicker": "79.11",
  "title": "Le LLM, noyau d’un système d’exploitation",
  "sub": "l’analogie centrale",
  "body": "\n    <p class=\"lede\">Pour Karpathy, le modèle est le <b>noyau d’un nouveau système d’exploitation</b>.</p><ul class=\"rules\"><li><b>Mémoire vive</b> : la fenêtre de contexte, limitée et précieuse (chapitre 3).</li><li><b>Disque</b> : fichiers, recherche.</li><li><b>Périphériques</b> : navigateur, Python, images, voix (chapitres 9 et 10).</li><li><b>Écosystème</b> : fermé et ouvert, comme macOS et Linux.</li></ul>",
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
  "lit": "os",
  "look": {},
  "scene": "os",
  "fig": ""
 },
 {
  "kicker": "79.12",
  "title": "Trois familles d’attaques",
  "sub": "un nouveau terrain de sécurité",
  "body": "<ul class=\"rules\"><li><b>Jailbreak</b> : obtenir ce que le modèle refuse, par une mise en scène (« joue le rôle de… »), un codage (autre langue, autre alphabet), ou des suffixes et des images bruitées <b>calculés par optimisation</b> qui se transfèrent d’un modèle à l’autre (chapitre 22).</li><li><b>Injection de consignes</b> : des instructions cachées dans une page web, une image ou un document partagé, que le modèle lit et exécute, jusqu’à faire fuir des données (chapitres 10 et 22).</li><li><b>Empoisonnement</b> : quelques exemples piégés dans les données d’entraînement suffisent à attacher un comportement caché à une phrase déclencheuse (chapitre 45).</li></ul><p>Comme en sécurité informatique classique, c’est un jeu d’attaque et de défense <b>permanent</b> : chaque parade appelle une nouvelle attaque.</p>",
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
  "lit": "attaques",
  "look": {},
  "scene": "attaques",
  "fig": ""
 },
 {
  "kicker": "79.13",
  "title": "Ce qui a changé depuis",
  "sub": "relire la conférence en 2026",
  "body": "<ul class=\"rules\"><li><b>Système 2</b> : les modèles de raisonnement (2024) l’ont rendu concret.</li><li><b>Auto-amélioration</b> : le renforcement sur réponses vérifiables a fait progresser maths et code.</li><li><b>Noyau d’OS</b> : les agents qui lisent, écrivent et agissent sont devenus courants.</li><li><b>Ouverts</b> : l’écart avec les modèles fermés s’est réduit.</li><li><b>Sécurité</b> : l’injection de consignes reste un problème non résolu.</li></ul><p>Le cadre de 2023 tient bien ; ce sont surtout les ordres de grandeur (coûts, tailles, contextes) qui ont changé.</p>",
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
  "lit": "systemes",
  "look": {},
  "scene": "systemes",
  "fig": ""
 }
];
export const PLATES = {
  fichiers: { text: "Un modèle comme Llama 2 70B tient en deux fichiers : les paramètres (70 milliards de nombres sur 2 octets, soit 140 Go) et quelques centaines de lignes de code qui les font tourner. Sur un ordinateur assez puissant, sans connexion, on lui donne un texte et il prédit le mot suivant, puis recommence. Le code est simple ; toute la difficulté est d’obtenir les paramètres.", facts: () => [["paramètres", "140 Go"], ["code", "≈ 500 lignes"]] },
  compresser: { text: "Ordres de grandeur donnés pour Llama 2 70B : environ 10 To de texte, 6 000 GPU pendant une douzaine de jours, environ 2 millions de dollars. Le résultat ressemble à un fichier zip du web, mais avec perte : le modèle garde une forme compressée des régularités, pas les textes. Les modèles de pointe coûtent des dizaines à des centaines de fois plus.", facts: () => [["image", "un zip d’internet, avec perte"], ["objectif", "mot suivant"]] },
  reve: { text: "Un modèle de base, non affiné, imite les documents du web : il « rêve » des pages Java, des fiches produits ou des articles d’encyclopédie. La forme est juste ; certains détails, comme un numéro ISBN, sont inventés parce qu’ils ont la bonne allure. On ne sait pas d’avance quelle partie vient de la mémoire et quelle partie est fabriquée : c’est l’hallucination.", facts: () => [["forme", "toujours plausible"], ["contenu", "mémorisé ou fabriqué"]] },
  assistant: { text: "Le pré-entraînement donne le savoir ; l’affinage donne la forme. On remplace le web par environ 100 000 conversations de haute qualité écrites par des annotateurs selon des consignes précises ; le modèle apprend à répondre en assistant. Une troisième étape utilise des comparaisons, plus faciles à produire que des réponses (RLHF). L’affinage, bon marché, se refait souvent.", facts: () => [["pré-entraînement", "quantité"], ["affinage", "qualité"]] },
  outils: { text: "La qualité suit une fonction prévisible du nombre de paramètres et de la quantité de données : on achète du progrès avec plus de calcul. En parallèle, le modèle apprend à utiliser des outils (recherche, calculatrice, Python, générateur d’images) comme le ferait une personne, et à traiter images et sons.", facts: () => [["échelle", "progrès prévisible"], ["outils", "le modèle délègue"]] },
  systemes: { text: "Karpathy reprend la distinction de Daniel Kahneman : un système 1 rapide et instinctif, un système 2 lent et réfléchi. Les modèles de 2023 n’avaient que le premier : le même calcul par jeton, sans possibilité de réfléchir plus longtemps à une question difficile. Les modèles de raisonnement apparus en 2024 réalisent en partie ce souhait.", facts: () => [["2023", "système 1 seulement"], ["depuis", "modèles de raisonnement"]] },
  alphago: { text: "AlphaGo a d’abord imité des parties humaines, ce qui plafonne au niveau humain, puis s’est amélioré en jouant contre lui-même, parce que la victoire se vérifie automatiquement. Les modèles de langage en sont à l’étape 1 : ils imitent des annotateurs. La question ouverte : quel critère automatique de réussite pour le langage ? Des réponses partielles existent dans les domaines vérifiables (mathématiques, code).", facts: () => [["étape 1", "imitation"], ["étape 2", "récompense vérifiable"]] },
  os: { text: "Plutôt qu’un chatbot, Karpathy décrit le modèle comme le noyau d’un nouveau système d’exploitation : il coordonne des ressources. La fenêtre de contexte joue le rôle de la mémoire vive, les fichiers et la recherche celui du disque, les outils celui des périphériques. Comme pour les systèmes d’exploitation, des offres fermées coexistent avec un écosystème ouvert (modèles comme Llama).", facts: () => [["contexte", "mémoire vive"], ["outils", "périphériques"]] },
  attaques: { text: "Trois familles : le jailbreak (obtenir ce que le modèle refuse, par une mise en scène, un codage, ou des suffixes et des images bruitées calculés par optimisation), l’injection de consignes (des instructions cachées dans une page, une image ou un document que le modèle lit), et l’empoisonnement des données (une phrase déclencheuse qui active un comportement caché appris pendant l’entraînement).", facts: () => [["jailbreak", "contourner"], ["injection", "détourner"], ["empoisonnement", "implanter"]] }
};
