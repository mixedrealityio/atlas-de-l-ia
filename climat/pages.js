// Chapitre 65 : Climat et environnement (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 65 · climat",
  "title": "Climat et environnement",
  "sub": "un outil et une charge",
  "body": "\n    <p class=\"lede\">L’IA aide à prévoir le temps, surveiller la planète et économiser l’énergie ; elle consomme aussi de l’électricité, de l’eau et des métaux.</p>\n    <p>Ce chapitre fait les deux comptes : ce que l’IA apporte à l’environnement, et ce qu’elle lui coûte.</p>",
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
  "lit": "prevoir",
  "look": {},
  "scene": "prevoir",
  "fig": ""
 },
 {
  "kicker": "65.1",
  "title": "Prévoir et observer",
  "sub": "la planète en données",
  "body": "<ul class=\"rules\"><li><b>Météo</b> : des modèles appris rivalisent avec les modèles physiques à dix jours, pour une fraction du calcul.</li><li><b>Climat</b> : des émulateurs accélèrent les simulations pour explorer plus de scénarios.</li><li><b>Extrêmes</b> : prévision des crues, propagation des incendies, trajectoires de cyclones.</li><li><b>Satellites</b> : déforestation, fuites de méthane, glaciers.</li><li><b>Biodiversité</b> : reconnaître espèces et chants dans des millions d’images et d’enregistrements.</li></ul><p>Les modèles physiques restent indispensables : les modèles appris s’entraînent sur leurs résultats et peuvent mal extrapoler à un climat jamais vu.</p>",
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
  "lit": "prevoir",
  "look": {},
  "scene": "prevoir",
  "fig": ""
 },
 {
  "kicker": "65.2",
  "title": "Réduire les émissions",
  "sub": "optimiser les systèmes",
  "body": "<ul class=\"rules\"><li><b>Électricité</b> : prévoir solaire, éolien et demande pour équilibrer le réseau.</li><li><b>Bâtiments</b> : piloter chauffage et climatisation.</li><li><b>Industrie et matériaux</b> : procédés plus efficaces, recherche de batteries et catalyseurs (chapitre 47).</li><li><b>Transports</b> : itinéraires, recharge, logistique (chapitre 63).</li></ul><p>Attention à l’<b>effet rebond</b> : un service moins cher et plus pratique peut être tellement plus utilisé que la consommation totale augmente (chapitre 35).</p>",
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
  "lit": "reduire",
  "look": {},
  "scene": "reduire",
  "fig": ""
 },
 {
  "kicker": "65.3",
  "title": "L’empreinte de l’IA",
  "sub": "ce que coûte une réponse",
  "body": "<ul class=\"rules\"><li><b>Entraînement</b> : coût élevé, mais ponctuel.</li><li><b>Inférence</b> : coût faible par requête, mais multiplié par des milliards ; il domine souvent sur la durée de vie.</li><li><b>Électricité</b> : les centres de données représentaient environ <b>1,5 %</b> de la consommation mondiale en 2024 (AIE), en forte croissance.</li><li><b>Eau</b> et <b>matériel</b> : refroidissement, métaux, puces (chapitre 55).</li></ul><p>Les chiffres par requête circulent beaucoup mais varient selon le modèle, le matériel et le mix électrique : méfiez-vous des comparaisons sans source.</p>",
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
  "lit": "empreinte",
  "look": {},
  "scene": "empreinte",
  "fig": ""
 },
 {
  "kicker": "65.4",
  "title": "Une IA sobre",
  "sub": "cinq gestes",
  "body": "<ul class=\"rules\"><li>Prendre le <b>plus petit modèle</b> qui fait le travail, et le <b>quantifier</b> (chapitre 43).</li><li>Faire tourner les calculs là et quand l’électricité est <b>bas carbone</b>.</li><li><b>Réutiliser</b> et affiner plutôt que réentraîner.</li><li>Éviter les usages <b>gadgets</b> : un moteur de recherche ou une règle simple suffisent parfois.</li><li>Exiger des fournisseurs des <b>chiffres publiés</b> d’énergie et d’émissions.</li></ul>",
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
  "lit": "sobre",
  "look": {},
  "scene": "sobre",
  "fig": ""
 }
];
export const PLATES = {
  prevoir: { text: "Des modèles appris prévoient la météo à dix jours avec une qualité comparable aux meilleurs modèles physiques, en une fraction du calcul (chapitre 47). L’IA accélère aussi les simulations climatiques, aide à prévoir crues et incendies, et analyse les images satellites pour repérer déforestation et fuites de méthane. En écologie, elle identifie automatiquement espèces et chants dans des millions d’enregistrements.", facts: () => [["GraphCast", "DeepMind, 2023"], ["méthane", "repérage de grandes fuites par satellite"]] },
  reduire: { text: "Prévoir la production solaire et éolienne aide à intégrer plus de renouvelables dans le réseau. Le pilotage du chauffage et de la climatisation, l’optimisation de procédés industriels et la recherche de matériaux (batteries, catalyseurs) réduisent les émissions. Mais les gains d’efficacité peuvent être compensés par une hausse des usages : c’est l’effet rebond (paradoxe de Jevons, chapitre 35).", facts: () => [["réseaux", "prévoir pour équilibrer"], ["Jevons", "chapitre 35"]] },
  empreinte: { text: "L’entraînement d’un grand modèle consomme beaucoup d’électricité, mais c’est l’inférence, répétée des milliards de fois, qui domine souvent sur la durée de vie. Selon l’Agence internationale de l’énergie, les centres de données ont consommé environ 1,5 % de l’électricité mondiale en 2024, une part qui augmente avec l’IA. S’y ajoutent l’eau de refroidissement et l’impact de la fabrication des puces (chapitres 18 et 55).", facts: () => [["AIE, 2025", "≈ 415 TWh pour les centres de données en 2024"], ["localement", "fortes tensions sur certains réseaux"]] },
  sobre: { text: "Pour réduire l’empreinte : choisir le plus petit modèle qui fait le travail, le quantifier, le faire tourner là et quand l’électricité est peu carbonée, réutiliser des modèles existants plutôt que d’en entraîner de nouveaux, et se demander si l’IA est vraiment nécessaire. La transparence des fournisseurs sur l’énergie et les émissions reste limitée.", facts: () => [["règle", "le plus petit modèle suffisant"], ["chapitre 18", "énergie et sobriété des centres de données"]] }
};
