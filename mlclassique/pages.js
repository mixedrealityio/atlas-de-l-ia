// Chapitre 40 : L’apprentissage automatique classique (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 40 · fondations",
  "title": "L’apprentissage automatique classique",
  "sub": "ce qui reste très utile",
  "body": "<p class='lede'>Avant 2012, l’apprentissage automatique voulait dire arbres, SVM et régressions. Ces méthodes sont toujours <b>la norme</b> pour beaucoup d’usages industriels.</p><p>Ce chapitre rappelle leur principe et quand les préférer.</p>",
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
  "lit": "outils",
  "look": {},
  "scene": "outils",
  "fig": ""
 },
 {
  "kicker": "40.1",
  "title": "Régressions et arbres",
  "sub": "lisibles et rapides",
  "body": "<ul class=\"rules\"><li><b>Régression linéaire</b> : une droite ; <b>logistique</b> : une probabilité de classe.</li><li><b>Arbre de décision</b> : une suite de questions, lisible, mais instable.</li><li><b>Forêt aléatoire</b> : des centaines d’arbres entraînés sur des échantillons différents, qui votent.</li></ul>",
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
  "lit": "outils",
  "look": {},
  "scene": "outils",
  "fig": ""
 },
 {
  "kicker": "40.2",
  "title": "Le boosting",
  "sub": "XGBoost, LightGBM",
  "body": "<p class='lede'>On ajoute des arbres un par un, chacun corrigeant les erreurs des précédents.</p><p>XGBoost (2016) et LightGBM (2017) ont gagné de nombreuses compétitions de données tabulaires et sont répandus en banque, assurance, marketing et industrie.</p>",
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
  "lit": "boost",
  "look": {},
  "scene": "boost",
  "fig": ""
 },
 {
  "kicker": "40.3",
  "title": "SVM, noyaux et sans étiquettes",
  "sub": "séparer et regrouper",
  "body": "<ul class=\"rules\"><li><b>SVM</b> : trouver la frontière à marge maximale ; l’<b>astuce du noyau</b> permet des frontières courbes.</li><li><b>k-moyennes</b> : regrouper sans étiquettes ; <b>ACP</b> : réduire les dimensions en gardant la variance.</li></ul>",
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
  "lit": "outils",
  "look": {},
  "scene": "outils",
  "fig": ""
 },
 {
  "kicker": "40.4",
  "title": "Lequel choisir ?",
  "sub": "règle pratique",
  "body": "<ul class=\"rules\"><li>Données en tableau : <b>commencer par le boosting</b> et un modèle linéaire de référence.</li><li>Images, son, texte : réseaux profonds.</li><li>Si l’on doit <b>expliquer</b> chaque décision : modèle linéaire ou arbre peu profond.</li></ul><p>Un réseau profond n’est pas toujours le meilleur choix : il coûte plus cher et se règle plus difficilement.</p>",
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
  "lit": "choix",
  "look": {},
  "scene": "choix",
  "fig": ""
 }
];
export const PLATES = {
  outils: { text: "Avant le deep learning, l’apprentissage reposait sur ces méthodes : modèles linéaires, arbres, forêts aléatoires (Breiman, 2001), boosting de gradient (Friedman, 2001, puis XGBoost et LightGBM), machines à vecteurs de support (Cortes et Vapnik, 1995), et pour l’exploration sans étiquettes les k-moyennes et l’analyse en composantes principales.", facts: () => [["tableaux de données", "boosting souvent en tête"], ["images, texte, son", "deep learning"]] },
  boost: { text: "Le boosting construit un modèle en ajoutant de petits arbres, chacun entraîné à corriger les erreurs des précédents. Avec une régularisation soignée, il donne des résultats excellents sur des données tabulaires, avec peu de calcul et des variables explicables.", facts: () => [["libraires", "XGBoost, LightGBM, CatBoost"], ["atout", "rapide, peu de réglages"]] },
  choix: { text: "Pour des données en tableau, les arbres boostés restent souvent aussi bons ou meilleurs que les réseaux profonds (comparaisons publiées, par exemple Grinsztajn et collègues, 2022). Pour les données non structurées, le deep learning domine. Dans tous les cas, on commence par un modèle simple de référence.", facts: () => [["règle", "simple d’abord"], ["tableaux", "boosting"], ["non structuré", "deep learning"]] }
};
