// Chapitre 11 : Le loop engineering (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 11 · avancé",
  "title": "Le loop engineering",
  "sub": "l’ingénierie de la boucle",
  "body": "\n    <p class=\"lede\">Dans un système à base d’agents, le modèle est une pièce. L’autre pièce, qui décide souvent de la réussite, est la <b>boucle</b> qui l’entoure.</p>\n    <p>Concevoir cette boucle revient à répondre à cinq questions : <b>que voit le modèle</b> à chaque tour, <b>comment vérifie-t-on</b> son travail, <b>quand s’arrête-t-on</b>, <b>que garde-t-on</b> d’un tour à l’autre, et <b>comment mesure-t-on</b> ce qui se passe.</p>\n    <p>On appelle cela le <i>loop engineering</i> : le même modèle peut échouer dans une mauvaise boucle et réussir dans une bonne.</p>",
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
  "lit": "gv",
  "look": {},
  "scene": "gv",
  "fig": ""
 },
 {
  "kicker": "11.1",
  "title": "Générer, vérifier, corriger",
  "sub": "le vérificateur décide de tout",
  "body": "\n    <p class=\"lede\">Un modèle se juge mal lui-même : il trouve ses propres erreurs moins bien qu’un test.</p>\n    <p>La boucle la plus solide <b>sépare la génération de la vérification</b>, et vérifie par quelque chose d’indépendant du modèle : des <b>tests</b> qui passent ou non, un compilateur, des règles de format, une exécution réelle. Le message d’erreur est ensuite ajouté au contexte, ce qui permet de corriger.</p>\n    <p>Quand aucun test automatique n’existe, on peut utiliser un autre modèle comme <b>juge</b>, mais il a ses propres biais : il aime les réponses longues, ou celles du même modèle que lui.</p>",
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
  "lit": "gv",
  "look": {},
  "scene": "gv",
  "fig": ""
 },
 {
  "kicker": "11.2",
  "title": "Plusieurs essais et pass@k",
  "sub": "échanger du calcul contre de la fiabilité",
  "body": "\n    <p class=\"lede\">Quand un modèle ne réussit qu’une fois sur sept, on peut l’essayer plusieurs fois et garder le bon résultat.</p>\n    <div class=\"eq\">pass@<i>k</i> = 1 − (1 − <i>p</i>)<sup><i>k</i></sup></div>\n    <p>Avec <i>p</i> = 0,15 : un essai donne 15 %, dix essais environ 80 %. Cela suppose des essais <b>indépendants</b> et un moyen de <b>reconnaître le bon</b> : c’est le rôle du vérificateur. Sans lui, on parle de vote majoritaire ou de classement par un juge, bien moins fiables.</p>\n    <p>C’est exactement ce que le renforcement à récompense vérifiable (chapitre 7) exploite pendant l’entraînement.</p>",
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
  "lit": "passk",
  "look": {},
  "scene": "passk",
  "fig": ""
 },
 {
  "kicker": "11.3",
  "title": "Borner la boucle",
  "sub": "tours, coût, durée, progrès",
  "body": "\n    <p class=\"lede\">Une boucle sans limite finira, un jour, par tourner à vide.</p>\n    <ul class=\"rules\">\n      <li><b>Nombre de tours</b> maximal, quoi qu’il arrive.</li>\n      <li><b>Budget</b> en jetons ou en argent, vérifié à chaque tour.</li>\n      <li><b>Délai</b> maximal pour la tâche entière.</li>\n      <li><b>Détection de l’absence de progrès</b> : la même erreur trois fois, le même fichier modifié en boucle, un test qui échoue toujours de la même façon. On change alors de stratégie ou on s’arrête et on demande de l’aide.</li>\n    </ul>\n    <p>Un bon arrêt est un résultat : « je n’y arrive pas, voici ce que j’ai essayé » vaut mieux qu’une réponse inventée.</p>",
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
  "lit": "budget",
  "look": {},
  "scene": "budget",
  "fig": ""
 },
 {
  "kicker": "11.4",
  "title": "Tenir sur la durée",
  "sub": "contexte, notes, sous-agents",
  "body": "\n    <p class=\"lede\">Plus une tâche dure, plus le contexte s’encombre : anciens résultats d’outils, essais abandonnés, détails oubliés.</p>\n    <ul class=\"rules\">\n      <li><b>Compacter</b> : résumer l’historique en gardant décisions, état et prochaines étapes.</li>\n      <li><b>Écrire des notes</b> dans des fichiers (plan, journal, liste de tâches) : une mémoire que la compaction ne détruit pas.</li>\n      <li><b>Isoler</b> des sous-tâches dans des sous-agents au contexte propre.</li>\n      <li><b>Retirer</b> des résultats d’outils volumineux une fois exploités.</li>\n    </ul>\n    <p>Attention : un résumé peut perdre une contrainte importante. Les notes qui comptent doivent être écrites, pas seulement résumées.</p>",
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
  "lit": "memoire",
  "look": {},
  "scene": "memoire",
  "fig": ""
 },
 {
  "kicker": "11.5",
  "title": "Observer et mesurer",
  "sub": "traces, évaluations, régressions",
  "body": "\n    <p class=\"lede\">On ne peut pas améliorer une boucle qu’on ne voit pas.</p>\n    <ul class=\"rules\">\n      <li><b>Traces</b> : chaque tour (contexte, réponse, outils, résultat, coût) est conservé et consultable.</li>\n      <li><b>Suite d’évaluations</b> : des tâches de référence rejouées à chaque changement de modèle, de consigne ou d’outil, pour détecter une régression.</li>\n      <li><b>Mesures utiles</b> : taux de réussite sur plusieurs essais, coût moyen, durée, nombre de tours.</li>\n      <li><b>Pièges</b> : un agent qui triche aux tests (il modifie le test au lieu du code), une boucle sans fin, une évaluation qui a fuité dans les consignes.</li>\n    </ul>",
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
  "lit": "obs",
  "look": {},
  "scene": "obs",
  "fig": ""
 }
];
export const PLATES = {
  gv: { text: "Le modèle produit une solution, un vérificateur la teste (tests, règles, juge), le diagnostic dit ce qui ne va pas, et le modèle corrige. La qualité de la boucle est plafonnée par la qualité du vérificateur.", facts: () => [["vérificateur", "tests, types, règles, juge"], ["diagnostic", "message d’erreur lisible"], ["arrêt", "validé ou budget épuisé"]] },
  passk: { text: "Si chaque essai réussit avec la probabilité p, au moins un réussit sur k avec 1 − (1 − p)^k. Avec un vérificateur fiable, multiplier les essais transforme un modèle moyen en système fiable ; sans vérificateur, on ne sait pas lequel choisir.", facts: () => [["p = 0,15, k = 10", "≈ 80 %"], ["condition", "essais indépendants et vérifiables"]] },
  budget: { text: "Toute boucle doit être bornée : nombre de tours, coût, durée, et détection de l’absence de progrès (même erreur trois fois de suite). Une boucle sans limite peut consommer un budget entier sur une erreur triviale.", facts: () => [["plafond", "obligatoire"], ["alerte", "même erreur répétée"]] },
  memoire: { text: "Une longue tâche dépasse la fenêtre de contexte. On résume l’historique, on enregistre l’état dans des fichiers (plan, décisions, ce qui reste), et on repart d’un contexte propre qui relit ces notes. Les sous-agents isolent aussi des contextes entiers.", facts: () => [["compaction", "résumé de l’historique"], ["fichiers", "mémoire durable"], ["risque", "un résumé qui perd un détail clé"]] },
  obs: { text: "On garde la trace de chaque tour (entrées, sorties, outils, coûts). On rejoue une suite de tâches de référence à chaque changement de modèle ou de consigne pour détecter les régressions, et on surveille coûts et échecs en production.", facts: () => [["évaluations", "suite fixe, rejouée à chaque changement"], ["mesures", "réussite, coût, durée"]] }
};
