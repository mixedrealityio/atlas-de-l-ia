// Chapitre 44 : MLOps et LLMOps (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 44 · production",
  "title": "MLOps et LLMOps",
  "sub": "un modèle n’est pas un livrable, c’est un service",
  "body": "<p class='lede'>Un modèle qui marche dans un carnet ne suffit pas : il faut le livrer, le surveiller, le mettre à jour et pouvoir revenir en arrière.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "44.1",
  "title": "Tout versionner",
  "sub": "reproductibilité",
  "body": "<ul class=\"rules\"><li>Code, <b>données</b>, <b>modèle</b>, <b>prompts</b>, configuration.</li><li>Un <b>registre de modèles</b> avec statut (essai, validé, retiré).</li><li>Environnements reproductibles (conteneurs).</li></ul>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "44.2",
  "title": "Tester et déployer",
  "sub": "CI/CD pour l’IA",
  "body": "<ul class=\"rules\"><li><b>Évaluations automatiques</b> à chaque changement (chapitre 31).</li><li><b>Canary</b> : exposer d’abord une petite part du trafic.</li><li><b>Test A/B</b> : comparer deux versions sur des utilisateurs réels.</li></ul>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "44.3",
  "title": "Observer",
  "sub": "qualité, coût, dérive",
  "body": "<ul class=\"rules\"><li>Tracer chaque requête et chaque appel d’outil.</li><li>Suivre le <b>coût</b> et la <b>latence</b>.</li><li>Détecter la <b>dérive</b> : les données de production s’éloignent de celles d’entraînement.</li></ul>",
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
  "lit": "obs",
  "look": {},
  "scene": "obs",
  "fig": ""
 },
 {
  "kicker": "44.4",
  "title": "Garde-fous et humain",
  "sub": "contrôle en production",
  "body": "<ul class=\"rules\"><li>Garde-fous d’entrée et de sortie (chapitre 22).</li><li><b>Humain dans la boucle</b> pour les décisions à enjeu.</li><li>Plan de <b>repli</b> : modèle précédent, règle simple, passage à un humain.</li></ul>",
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
  "lit": "obs",
  "look": {},
  "scene": "obs",
  "fig": ""
 }
];
export const PLATES = {
  chaine: { text: "Le MLOps applique au modèle les pratiques du logiciel : tout versionner (code, données, modèle, prompts), tester par des évaluations, publier par étapes (canary, tests A/B), observer en continu (latence, coût, qualité, dérive) et boucler vers l’amélioration.", facts: () => [["canary", "d’abord 1 à 5 % du trafic"], ["clé", "évaluations automatiques"]] },
  obs: { text: "Un système à base de LLM se surveille par traces (chaque appel et outil), coût par requête, latence, qualité (retours, évaluations échantillonnées), dérive des entrées et incidents de sécurité. Des outils comme MLflow ou des plateformes d’observabilité spécialisées aident.", facts: () => [["prompts", "versionnés comme du code"], ["humain", "dans la boucle pour les cas à enjeu"]] }
};
