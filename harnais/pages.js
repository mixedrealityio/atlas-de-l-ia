// Chapitre 9 : Les harnais et les outils (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 9 · tous niveaux",
  "title": "Les harnais et les outils",
  "sub": "le modèle n’est pas tout le système",
  "body": "\n    <p class=\"lede\">Un modèle de langage, c’est une fonction : du texte entre, du texte sort. Il ne lit pas vos fichiers, n’ouvre pas de page web et ne se souvient de rien d’une conversation à l’autre.</p>\n    <p>Tout ce qui donne l’impression d’un <b>assistant qui agit</b> vient du <b>harnais</b> (<i>harness</i>) : le logiciel qui l’entoure. Il construit ce que le modèle lit, expose des outils, exécute ses demandes, applique des règles, garde une mémoire.</p>\n    <p>Deux produits utilisant le même modèle peuvent se comporter très différemment, selon leur harnais.</p>",
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
  "lit": "seul",
  "look": {},
  "scene": "seul",
  "fig": ""
 },
 {
  "kicker": "9.1",
  "title": "Appeler des outils",
  "sub": "le modèle propose, le harnais dispose",
  "body": "\n    <p class=\"lede\">Un <b>outil</b> est une fonction que le harnais sait exécuter : lire un fichier, chercher sur le web, lancer du code, interroger une base.</p>\n    <p>On décrit chaque outil au modèle (nom, rôle, paramètres). Quand il en a besoin, il écrit un <b>appel structuré</b> plutôt qu’une réponse. Le harnais l’exécute et ajoute le <b>résultat</b> au contexte ; le modèle repart de là.</p>\n    <p>Des standards comme <b>MCP</b> (<i>Model Context Protocol</i>) définissent comment des outils sont décrits et branchés à un harnais, de sorte qu’un même outil serve plusieurs applications.</p>",
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
  "lit": "outil",
  "look": {},
  "scene": "outil",
  "fig": ""
 },
 {
  "kicker": "9.2",
  "title": "Le contexte",
  "sub": "ce que le modèle voit à chaque tour",
  "body": "\n    <p class=\"lede\">Le modèle n’a aucune mémoire propre : à chaque tour, il lit <b>tout le contexte</b> d’un coup.</p>\n    <p>Le harnais décide quoi y mettre, dans quel ordre, et quoi retirer quand c’est plein : résumer l’historique, supprimer de vieux résultats d’outils, garder les instructions. C’est un travail d’ingénierie à part entière.</p>\n    <ul class=\"rules\">\n      <li>Chaque jeton lu <b>coûte</b> du temps et de l’argent ; un contexte long ralentit.</li>\n      <li>Un <b>cache de préfixe</b> rend peu coûteuse la partie qui ne change pas d’un tour à l’autre.</li>\n      <li>Un modèle exploite moins bien l’information noyée au milieu d’un contexte très long.</li>\n    </ul>",
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
  "lit": "contexte",
  "look": {},
  "scene": "contexte",
  "fig": ""
 },
 {
  "kicker": "9.3",
  "title": "Mémoire et recherche",
  "sub": "RAG, notes, fichiers",
  "body": "\n    <p class=\"lede\">Un modèle ne peut pas tout contenir. On lui donne un moyen de <b>chercher</b>.</p>\n    <p>Avec la <b>recherche augmentée</b> (RAG), on découpe les documents en passages, on calcule leurs plongements (chapitre 1), et à chaque question on retrouve les plus proches pour les ajouter au contexte. La qualité du découpage et de la recherche décide de la qualité de la réponse.</p>\n    <p>La <b>mémoire</b> d’un assistant est le plus souvent un fichier de notes que le harnais relit au début de chaque session, et que le modèle peut compléter.</p>",
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
  "lit": "rag",
  "look": {},
  "scene": "rag",
  "fig": ""
 },
 {
  "kicker": "9.4",
  "title": "Permissions et sécurité",
  "sub": "donner des mains à un modèle",
  "body": "\n    <p class=\"lede\">Dès qu’un modèle peut agir, ses erreurs ont des conséquences. La sécurité se règle <b>dans le harnais</b>, pas dans le modèle.</p>\n    <ul class=\"rules\">\n      <li><b>Permissions</b> : quels outils, quels dossiers, quelles commandes sont autorisés, et lesquels demandent une confirmation.</li>\n      <li><b>Bac à sable</b> : exécuter le code dans un environnement isolé.</li>\n      <li><b>Injection de consignes</b> : un texte lu pendant la tâche (page web, courriel, fichier) peut contenir des ordres qui ressemblent à ceux de l’utilisateur. Il faut traiter tout contenu extérieur comme une donnée, pas comme une instruction.</li>\n      <li><b>Journalisation</b> : garder la trace de chaque action pour pouvoir revenir en arrière.</li>\n    </ul>",
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
  "lit": "seul",
  "look": {},
  "scene": "seul",
  "fig": ""
 }
];
export const PLATES = {
  seul: { text: "Le modèle est une fonction : il reçoit du texte et renvoie du texte. Le harnais est tout le code autour : il construit le contexte, expose des outils, exécute leurs appels, applique des règles et des permissions, garde la mémoire.", facts: () => [["modèle", "poids + calcul"], ["harnais", "logiciel autour du modèle"]] },
  outil: { text: "Un modèle n’exécute rien lui-même. Il écrit un appel structuré (par exemple lire_fichier avec un chemin). Le harnais vérifie, exécute, et renvoie le résultat sous forme de texte, que le modèle lit avant de continuer.", facts: () => [["format", "JSON décrit par un schéma"], ["standard", "protocoles comme MCP"]] },
  contexte: { text: "À chaque tour, le harnais assemble tout ce que le modèle va lire : instructions, descriptions d’outils, mémoire, historique, résultats d’outils, puis la demande. Le total est limité par la fenêtre de contexte, et chaque jeton se paie.", facts: () => [["limite", "fenêtre de contexte"], ["coût", "∝ jetons lus et écrits"], ["cache", "préfixe réutilisable"]] },
  rag: { text: "Plutôt que de tout mémoriser, le système cherche les passages pertinents dans une base (documents, code, web) et les place dans le contexte. La réponse peut citer ses sources et se mettre à jour sans réentraîner le modèle.", facts: () => [["découpage", "documents en passages"], ["recherche", "similarité de plongements"], ["limite", "si la recherche échoue, la réponse aussi"]] }
};
