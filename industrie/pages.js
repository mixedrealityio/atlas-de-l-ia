// Chapitre 51 : Industrie et jumeaux numériques (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 51 · secteurs",
  "title": "Industrie et jumeaux numériques",
  "sub": "l’IA au service de la production",
  "body": "<p class='lede'>Dans l’usine, la valeur vient moins de modèles spectaculaires que de gains concrets : moins de pannes, moins de rebuts.</p>",
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
  "lit": "usine",
  "look": {},
  "scene": "usine",
  "fig": ""
 },
 {
  "kicker": "51.1",
  "title": "Maintenance et qualité",
  "sub": "prévoir et contrôler",
  "body": "<ul class=\"rules\"><li><b>Maintenance prédictive</b> : vibrations, températures, courants → prévision de panne.</li><li><b>Contrôle visuel</b> : détecter rayures, soudures, étiquettes.</li><li>Données de <b>défauts rares</b> : peu d’exemples, besoin de synthèse et de détection d’anomalies.</li></ul>",
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
  "lit": "usine",
  "look": {},
  "scene": "usine",
  "fig": ""
 },
 {
  "kicker": "51.2",
  "title": "Robots et cobots",
  "sub": "manipuler, collaborer",
  "body": "<ul class=\"rules\"><li><b>Cobots</b> : robots qui travaillent près des humains, à vitesse et force limitées.</li><li><b>Manipulation</b> : politiques par diffusion et modèles fondations (chapitre 12).</li><li>Sécurité fonctionnelle : normes ISO 13849 et ISO 10218.</li></ul>",
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
  "lit": "sim2real",
  "look": {},
  "scene": "sim2real",
  "fig": ""
 },
 {
  "kicker": "51.3",
  "title": "Jumeaux numériques",
  "sub": "simuler pour décider",
  "body": "<ul class=\"rules\"><li>Copie simulée alimentée par des <b>capteurs en temps réel</b>.</li><li>Tester un changement de ligne ou un plan de production <b>avant</b> de l’appliquer.</li><li>Limite : un jumeau n’est vrai que si son modèle et ses données le sont.</li></ul>",
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
  "lit": "sim2real",
  "look": {},
  "scene": "sim2real",
  "fig": ""
 }
];
export const PLATES = {
  usine: { text: "Les usages les plus rentables : prédire les pannes à partir de capteurs, contrôler la qualité par vision, optimiser la logistique, piloter des robots de plus en plus polyvalents. Un jumeau numérique est une copie simulée d’une machine ou d’une usine, alimentée en temps réel, pour tester et optimiser.", facts: () => [["rentable", "maintenance et qualité"], ["sécurité", "normes de machines"]] },
  sim2real: { text: "On entraîne souvent un robot en simulation, avec des variations aléatoires du monde, puis on transfère au réel. L’écart entre simulation et réalité (frottements, capteurs, objets déformables) est le point dur ; on le réduit avec des données réelles. Les modèles fondations de robotique (RT-2, π0) tentent de généraliser entre tâches.", facts: () => [["difficulté", "écart simulation-réel"], ["tendance", "modèles fondations de robotique"]] }
};
