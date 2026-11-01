// Chapitre 45 : Robustesse et attaques adverses (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 45 · sécurité",
  "title": "Robustesse et attaques adverses",
  "sub": "un modèle peut être trompé, empoisonné, détourné",
  "body": "<p class='lede'>Les modèles sont performants en moyenne, mais fragiles face à quelqu’un qui cherche la faille.</p><p>Ce chapitre décrit les familles d’attaques à haut niveau, pour mieux s’en protéger (chapitre 22 pour les garde-fous).</p>",
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
  "lit": "exemples",
  "look": {},
  "scene": "exemples",
  "fig": ""
 },
 {
  "kicker": "45.1",
  "title": "Exemples adverses",
  "sub": "la perturbation invisible",
  "body": "<p class='lede'>Un bruit imperceptible peut faire prendre un panneau stop pour un panneau de limitation.</p><p>Les défenses utiles : <b>entraînement adverse</b>, augmentation de données, détection ; les garanties certifiées existent mais pour de petites perturbations.</p>",
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
  "lit": "exemples",
  "look": {},
  "scene": "exemples",
  "fig": ""
 },
 {
  "kicker": "45.2",
  "title": "Empoisonnement et portes dérobées",
  "sub": "attaquer l’entraînement",
  "body": "<ul class=\"rules\"><li><b>Empoisonnement</b> : modifier des données pour dégrader ou orienter le modèle.</li><li><b>Porte dérobée</b> : comportement caché, déclenché par un motif.</li><li>Risque réel pour les modèles entraînés sur le web ouvert ou sur des dépôts tiers.</li></ul>",
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
  "lit": "poison",
  "look": {},
  "scene": "poison",
  "fig": ""
 },
 {
  "kicker": "45.3",
  "title": "Attaques sur les systèmes à LLM",
  "sub": "injection, jailbreak, extraction",
  "body": "<ul class=\"rules\"><li><b>Injection indirecte</b> : le texte d’un site ou d’un courriel contient des instructions.</li><li><b>Jailbreak</b> : contourner les règles du modèle.</li><li><b>Extraction</b> et <b>inférence d’appartenance</b> : copier le modèle ou déduire ses données.</li></ul>",
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
  "lit": "surface",
  "look": {},
  "scene": "surface",
  "fig": ""
 },
 {
  "kicker": "45.4",
  "title": "Se défendre",
  "sub": "défense en profondeur",
  "body": "<ul class=\"rules\"><li>Moindre privilège pour les agents et outils (chapitre 10).</li><li>Séparer <b>données</b> et <b>instructions</b> ; valider les sorties avant action.</li><li><b>Red teaming</b> régulier, y compris automatisé ; surveillance et journaux.</li></ul>",
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
  "lit": "surface",
  "look": {},
  "scene": "surface",
  "fig": ""
 }
];
export const PLATES = {
  exemples: { text: "Une perturbation minuscule, calculée à partir du gradient (Szegedy 2013, Goodfellow 2014), peut faire classer une image à tort avec une grande confiance. Les défenses (entraînement adverse, lissage aléatoire pour des garanties certifiées) sont partielles et coûteuses.", facts: () => [["découverte", "2013–2014"], ["défense", "entraînement adverse"]] },
  poison: { text: "Un attaquant qui peut influencer les données d’entraînement peut implanter un comportement caché déclenché par un motif précis (porte dérobée). Des études montrent qu’un petit nombre d’exemples peut suffire. Parades : contrôler la provenance, filtrer, auditer et tester le modèle.", facts: () => [["principe", "contrôler les données"], ["parade", "provenance et audit"]] },
  surface: { text: "Au-delà du modèle, les attaques visent la chaîne : instructions cachées dans un document (injection indirecte), contournement des règles (jailbreak, y compris par de longs exemples), copie du modèle, déduction des données d’entraînement, paquets ou outils compromis. La parade repose sur le moindre privilège et la défense en profondeur (chapitre 22).", facts: () => [["injection indirecte", "instructions dans un document"], ["parade clé", "moindre privilège"]] }
};
