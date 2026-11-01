// Chapitre 18 : Du GPU au centre de données (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 18 · avancé",
  "title": "Du GPU au centre de données",
  "sub": "quand un GPU ne suffit plus",
  "body": "\n    <p class=\"lede\">Un modèle de plusieurs centaines de milliards de paramètres ne tient pas dans un GPU, et mettrait des siècles à s’entraîner sur un seul. On en associe des milliers.</p>\n    <p>Mais deux GPU ne font pas simplement deux fois plus : ils doivent <b>échanger des données</b>, et ces échanges passent par des fils de vitesses très différentes. Tout l’art d’un cluster consiste à faire circuler peu de données sur les fils lents.</p>\n    <p>On appelle parfois <b>« clusters de dix mille cartes »</b> (万卡集群, en chinois) ces grappes à très grande échelle, où le réseau et les pannes deviennent le problème principal.</p>",
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
  "lit": "grappe",
  "look": {},
  "scene": "grappe",
  "fig": ""
 },
 {
  "kicker": "18.1",
  "title": "Le nœud de huit GPU",
  "sub": "NVLink, le réseau interne",
  "body": "\n    <p class=\"lede\">Un <b>nœud</b> est un serveur qui réunit typiquement <b>huit GPU</b>.</p>\n    <p>Ils sont reliés par <b>NVLink</b> et des commutateurs NVSwitch, qui donnent à chaque GPU environ <b>900 Go/s</b> vers les autres (génération H100). C’est presque la vitesse de leur propre mémoire : les huit GPU se comportent comme un grand GPU.</p>\n    <p>Des machines récentes étendent ce domaine : une armoire de 72 GPU reliés par NVLink forme un seul « super-nœud », refroidi par liquide.</p>",
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
  "lit": "grappe",
  "look": {},
  "scene": "grappe",
  "fig": ""
 },
 {
  "kicker": "18.2",
  "title": "Relier les nœuds",
  "sub": "InfiniBand, Ethernet, topologies",
  "body": "\n    <p class=\"lede\">Entre les nœuds, le réseau offre de l’ordre de <b>400 Gbit/s par port</b> (environ 50 Go/s), soit dix-huit fois moins qu’au sein d’un nœud.</p>\n    <p>Les technologies courantes sont <b>InfiniBand</b> et les variantes d’<b>Ethernet</b> conçues pour l’IA. La topologie la plus courante est l’<b>arbre épais</b> (<i>fat-tree</i>), où deux nœuds quelconques disposent de la même bande passante ; des options moins chères existent, mais peuvent se congestionner.</p>\n    <p>À grande échelle, le réseau est souvent la limite : quand il sature, les GPU attendent et les calculs perdent en efficacité.</p>",
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
  "lit": "grappe",
  "look": {},
  "scene": "grappe",
  "fig": ""
 },
 {
  "kicker": "18.3",
  "title": "Placer les parallélismes",
  "sub": "le plus bavard au plus près",
  "body": "\n    <p class=\"lede\">Les quatre découpages du chapitre 6 n’ont pas les mêmes besoins en communication.</p>\n    <ul class=\"rules\">\n      <li><b>Tenseurs</b> : échanges à chaque couche, donc dans un nœud, sur NVLink.</li>\n      <li><b>Experts</b> : chaque jeton va à son expert, dans un nœud ou des nœuds proches.</li>\n      <li><b>Pipeline</b> : seules les activations d’une frontière circulent, entre nœuds voisins.</li>\n      <li><b>Données</b> : on moyenne les gradients en fin d’étape, sur tout le cluster.</li>\n    </ul>\n    <p><b>MFU</b> : part du calcul théorique réellement utilisée, souvent 30 à 50 %.</p>",
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
  "lit": "para",
  "look": {},
  "scene": "para",
  "fig": ""
 },
 {
  "kicker": "18.4",
  "title": "Énergie, chaleur, pannes",
  "sub": "le côté physique",
  "body": "\n    <p class=\"lede\">Concevoir un cluster, c’est aussi gérer des mégawatts.</p>\n    <ul class=\"rules\">\n      <li><b>Puissance</b> : un GPU 700 W, un serveur ≈ 10 kW, une armoire dense plus de 100 kW. Un cluster de dix mille GPU demande de l’ordre de dix mégawatts.</li>\n      <li><b>Refroidissement</b> : au-delà d’une trentaine de kilowatts par armoire, l’air ne suffit plus ; on passe au <b>refroidissement liquide</b>.</li>\n      <li><b>Pannes</b> : plus on a de composants, plus il y en a qui cassent. On sauvegarde régulièrement l’état de l’entraînement (points de contrôle) et on reprend après la panne.</li>\n      <li><b>Coût</b> : l’énergie et le temps de GPU font partie du prix de chaque jeton.</li>\n    </ul>",
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
  "lit": "watts",
  "look": {},
  "scene": "watts",
  "fig": ""
 },
 {
  "kicker": "18.5",
  "title": "Énergie et sobriété",
  "sub": "ce que consomme l’IA",
  "body": "\n    <p class=\"lede\">L’IA consomme de l’électricité à deux moments : l’<b>entraînement</b> (une fois, très intense) et l’<b>inférence</b> (chaque requête, pendant des années).</p>\n    <ul class=\"rules\">\n      <li>GPT-3 : de l’ordre de <b>1 à 2 GWh</b> d’entraînement selon les estimations publiées (estimation, pas mesure).</li>\n      <li>Sur la vie d’un modèle très utilisé, l’<b>inférence</b> dépasse souvent l’entraînement.</li>\n    </ul>\n    <p><b>Sobriété</b> : le plus petit modèle qui suffit, quantification, cache, routage des requêtes faciles vers de petits modèles, mesure des kWh.</p>",
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
  "lit": "energie",
  "look": {},
  "scene": "energie",
  "fig": ""
 }
];
export const PLATES = {
  grappe: { text: "Un nœud réunit huit GPU reliés entre eux par NVLink, très rapide. Les nœuds sont reliés par un réseau (InfiniBand ou Ethernet) environ dix à vingt fois plus lent. Pour entraîner, les GPU échangent sans cesse leurs gradients ; la topologie décide de ce qui est possible.", facts: () => [["NVLink (H100)", "900 Go/s par GPU"], ["InfiniBand NDR", "400 Gbit/s ≈ 50 Go/s par port"], ["rapport", "≈ 18 ×"]] },
  para: { text: "Le découpage des matrices (parallélisme de tenseurs) échange beaucoup de données à chaque couche : on le garde dans un nœud, sur NVLink. Le pipeline échange peu, entre étages ; les copies de données n’échangent qu’à la fin d’une étape : elles peuvent s’étendre sur tout le réseau.", facts: () => [["règle", "le plus bavard au plus près"], ["tenseurs", "NVLink"], ["données", "réseau entre nœuds"]] },
  watts: { text: "Un GPU de centre de données consomme environ 700 W, un serveur de huit GPU une dizaine de kilowatts, une armoire de 72 GPU à refroidissement liquide plus de 100 kW, et un cluster de dix mille GPU de l’ordre de dix mégawatts avec refroidissement et réseau.", facts: () => [["GPU", "≈ 0,7 kW"], ["serveur 8 GPU", "≈ 10 kW"], ["cluster de 10 000", "≈ 10 MW ou plus"]] },
  pannes: { text: "Avec des dizaines de milliers de composants, une panne arrive en heures, parfois en minutes. On sauvegarde régulièrement l’état complet (points de contrôle) et on repart du dernier après avoir isolé le matériel défaillant.", facts: () => [["fréquence", "une panne toutes les quelques heures à grande échelle"], ["remède", "points de contrôle fréquents"]] },
  energie: { text: "Presque toute l’électricité devient de la chaleur qu’il faut évacuer. L’indicateur PUE (énergie totale / énergie des machines) vaut environ 1,1 à 1,5 selon les sites. Ordres de grandeur seulement : les chiffres varient selon le matériel et la charge.", facts: () => [["PUE", "≈ 1,1 à 1,5"], ["entraînement GPT-3", "ordre de 1 à 2 GWh"], ["inférence", "souvent plus que l’entraînement sur la vie du modèle"]] }
};
