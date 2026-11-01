// Chapitre 63 : Transports et mobilité (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 63 · transports",
  "title": "Transports et mobilité",
  "sub": "conduire, livrer, réguler",
  "body": "\n    <p class=\"lede\">La voiture autonome est la vitrine de l’IA dans les transports ; une grande partie des gains réels se joue pourtant dans la logistique et la régulation du trafic.</p>\n    <p>Ce chapitre décrit la chaîne de conduite, les niveaux d’automatisation, les grandes approches et les usages hors de la voiture.</p>",
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
  "kicker": "63.1",
  "title": "La chaîne de conduite",
  "sub": "de la caméra au volant",
  "body": "<ul class=\"rules\"><li><b>Capteurs</b> : caméras (couleurs, panneaux), radar (vitesse, pluie), LiDAR (distances précises en 3D).</li><li><b>Perception</b> : détecter voitures, piétons, marquages (chapitre 8).</li><li><b>Prédiction</b> : estimer plusieurs futurs possibles pour chaque usager.</li><li><b>Planification et commande</b> : choisir une trajectoire sûre, puis la suivre.</li></ul><p>Chaque étape peut échouer : une erreur de perception se propage jusqu’au freinage. D’où la redondance des capteurs et des calculateurs.</p>",
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
  "kicker": "63.2",
  "title": "Les niveaux d’automatisation",
  "sub": "qui conduit ?",
  "body": "<ul class=\"rules\"><li><b>Niveaux 0 à 2</b> : vous conduisez ; les aides vous assistent.</li><li><b>Niveau 3</b> : le système conduit dans des conditions précises et peut vous rendre la main.</li><li><b>Niveau 4</b> : sans conducteur, dans une zone définie.</li><li><b>Niveau 5</b> : partout, toujours ; pas encore atteint.</li></ul><p>Piège : prendre un niveau 2 pour un véhicule autonome (<b>biais d’automatisation</b>).</p>",
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
  "lit": "niveaux",
  "look": {},
  "scene": "niveaux",
  "fig": ""
 },
 {
  "kicker": "63.3",
  "title": "Deux philosophies",
  "sub": "et la longue traîne",
  "body": "<ul class=\"rules\"><li><b>Modulaire</b> : des modules spécialisés et vérifiables, souvent avec cartes détaillées et LiDAR.</li><li><b>Bout en bout</b> : un grand réseau apprend à conduire à partir de vidéos ; plus simple à faire grandir, plus dur à expliquer.</li><li><b>Longue traîne</b> : des millions de situations rares ; un système doit être bon <b>partout</b>, pas en moyenne.</li><li><b>Simulation</b> : rejouer et varier les cas difficiles (chapitre 13).</li></ul><p>Mesurer la sûreté exige des distances énormes : comparer aux humains demande des centaines de millions de kilomètres.</p>",
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
  "lit": "approches",
  "look": {},
  "scene": "approches",
  "fig": ""
 },
 {
  "kicker": "63.4",
  "title": "Logistique et villes",
  "sub": "les gains discrets",
  "body": "<ul class=\"rules\"><li><b>Tournées et flottes</b> : moins de kilomètres, de carburant et de retards.</li><li><b>Trafic</b> : feux qui s’adaptent, prévision des bouchons, information voyageurs.</li><li><b>Maintenance prédictive</b> des trains, avions, poids lourds (chapitre 51).</li><li><b>Robotaxis</b> : en service dans quelques villes, avec téléassistance à distance.</li></ul><p>Questions ouvertes : la <b>responsabilité</b> en cas d’accident (constructeur, opérateur ?), l’<b>emploi</b> des chauffeurs, et l’<b>effet rebond</b> : une voiture plus pratique peut augmenter le trafic (chapitre 35).</p>",
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
  "lit": "logistique",
  "look": {},
  "scene": "logistique",
  "fig": ""
 }
];
export const PLATES = {
  chaine: { text: "Un véhicule autonome perçoit son environnement avec caméras, radars et souvent LiDAR, détecte et suit les objets, prédit leurs trajectoires, planifie la sienne puis commande le véhicule, plusieurs dizaines de fois par seconde. La prédiction du comportement des autres usagers (piétons, cyclistes) est l’étape la plus difficile.", facts: () => [["fréquence", "des dizaines de décisions par seconde"], ["LiDAR", "télémètre laser en 3D"]] },
  niveaux: { text: "L’échelle de la SAE distingue six niveaux. Aux niveaux 0 à 2, le conducteur conduit et surveille, même si le véhicule tient sa voie et sa distance. Au niveau 3, le système conduit dans certaines conditions et demande de reprendre la main. Au niveau 4, il n’y a plus de conducteur, mais seulement dans une zone et des conditions définies (robotaxis). Le niveau 5, partout et toujours, n’existe pas encore.", facts: () => [["robotaxis", "niveau 4, zones délimitées"], ["niveau 5", "pas encore atteint"]] },
  approches: { text: "Certaines entreprises assemblent des modules spécialisés, avec cartes détaillées et LiDAR ; d’autres entraînent de grands réseaux de bout en bout sur des vidéos de conduite, avec des caméras seules. Dans tous les cas, la difficulté est la longue traîne : des situations rares (travaux, objets inattendus, gestes d’un agent de circulation) que les données couvrent mal. La simulation et les modèles du monde (chapitre 13) servent à les multiplier.", facts: () => [["longue traîne", "chapitre 26 : généraliser"], ["simulation", "chapitre 13 : modèles du monde"]] },
  logistique: { text: "L’IA optimise déjà des tournées de livraison, des horaires, la régulation des feux et la maintenance des trains et des avions. Des robotaxis sans conducteur circulent commercialement dans quelques villes des États-Unis et de Chine. Restent des questions juridiques (qui est responsable en cas d’accident ?), sociales (emplois de chauffeurs) et d’urbanisme (plus de trafic si la voiture devient plus pratique, chapitre 35).", facts: () => [["villes", "Phoenix, San Francisco, Wuhan…"], ["effet rebond", "chapitre 35"]] }
};
