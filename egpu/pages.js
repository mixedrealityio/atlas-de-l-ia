// Chapitre 19 : GPU externes et matériel local (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 19 · pratique",
  "title": "GPU externes et matériel local",
  "sub": "faire tourner un modèle ouvert chez soi",
  "body": "\n    <p class=\"lede\">Faire tourner un modèle ouvert chez soi demande une chose avant tout : de la <b>mémoire vive de carte graphique</b> (VRAM).</p>\n    <p>Un portable n’en a presque pas ; un <b>GPU externe</b> (eGPU) lui en ajoute : une carte de bureau dans un boîtier, reliée par un câble Thunderbolt ou OCuLink. Il devient populaire en Chine, où les mini-PC avec port OCuLink sont répandus.</p>\n    <p>Ce chapitre répond à trois questions : le <b>câble</b> ralentit-il le modèle ? <b>quel modèle</b> tient dans quelle carte ? et que se passe-t-il quand il <b>déborde</b> ?</p>",
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
  "lit": "liens",
  "look": {},
  "scene": "liens",
  "fig": ""
 },
 {
  "kicker": "19.1",
  "title": "Brancher un GPU",
  "sub": "boîtier, alimentation, câble",
  "body": "\n    <p class=\"lede\">Un eGPU, ce sont trois choses : une <b>carte</b>, un <b>boîtier avec alimentation</b>, un <b>câble</b>.</p>\n    <ul class=\"rules\">\n      <li><b>Thunderbolt 3, 4</b> : un seul câble, avec charge et données ; le débit total est de 40 Gbit/s, dont seule une partie sert au PCIe.</li>\n      <li><b>OCuLink</b> : une liaison PCIe directe, sans la couche Thunderbolt ; elle offre près de deux fois plus de débit utile, mais nécessite un port sur la machine et un câble court et blindé.</li>\n      <li>La <b>carte</b> décide de la mémoire et de la vitesse : 16 à 24 Go sont le minimum confortable pour des modèles de 8 à 32 milliards en 4 bits.</li>\n    </ul>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "19.2",
  "title": "Le câble ralentit-il le modèle ?",
  "sub": "peu, tant que tout tient en VRAM",
  "body": "\n    <p class=\"lede\">Le lien sert à <b>charger les poids</b> au début, puis à faire passer le texte entrant et sortant.</p>\n    <p>Charger 20 Go à 3,5 Go/s prend environ 6 secondes ; à 7,9 Go/s, 2,5 secondes. Ensuite, <b>tout le calcul se fait dans la carte</b>, à la vitesse de sa mémoire (autour de 1 To/s). Des mesures de blogs rapportent une perte de quelques pour cent avec OCuLink et plus nette avec Thunderbolt : sources isolées, à vérifier sur votre machine.</p>\n    <p>En affinage, les échanges avec l’ordinateur sont plus fréquents : le lien pèse davantage.</p>",
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
  "lit": "liens",
  "look": {},
  "scene": "liens",
  "fig": ""
 },
 {
  "kicker": "19.3",
  "title": "Quel modèle sur quelle carte",
  "sub": "poids + cache + marge",
  "body": "\n    <p class=\"lede\">Règle : <b>poids + cache KV + marge ≤ mémoire de la carte</b>.</p>\n    <p>Poids = paramètres × bits ÷ 8 (chapitre 16). Pour une carte de 24 Go : un modèle de 8 milliards en 4 bits (≈ 5 Go) laisse beaucoup de place au cache ; un de 32 milliards (≈ 20 Go) la limite à 2 ou 3 Go, soit un contexte court ; un de 70 milliards (≈ 43 Go) exige deux cartes.</p>\n    <p>Choisissez le plus gros modèle qui tienne avec le contexte voulu : un petit modèle bien quantifié vaut mieux qu’un grand modèle qui déborde.</p>",
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
 },
 {
  "kicker": "19.4",
  "title": "Quand ça déborde",
  "sub": "la RAM, le bus, la chute de vitesse",
  "body": "\n    <p class=\"lede\">Si le modèle ne tient pas dans la carte, certains moteurs placent quelques couches en RAM.</p>\n    <p>Chaque jeton doit alors lire ces couches par le bus PCIe (≈ 32 Go/s pour un ×16) et la RAM (≈ 90 Go/s), bien plus lents que la mémoire du GPU (≈ 1 000 Go/s). <b>Une seule couche qui déborde</b> impose son rythme à toute la génération.</p>\n    <p>Mieux vaut d’abord réduire la quantification, raccourcir le contexte ou quantifier le cache KV. Le déport sur la RAM reste un dernier recours : il permet d’exécuter un modèle, pas de l’exécuter vite.</p>",
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
  "lit": "debord",
  "look": {},
  "scene": "debord",
  "fig": ""
 },
 {
  "kicker": "19.5",
  "title": "Pièges et alternatives",
  "sub": "alimentation, Mac, cloud",
  "body": "\n    <p class=\"lede\">Avant d’acheter, quelques vérifications.</p>\n    <ul class=\"rules\">\n      <li><b>Compatibilité</b> : un Mac à puce Apple <b>n’accepte pas</b> de GPU externe. Sa force est la <b>mémoire unifiée</b> : jusqu’à plusieurs centaines de Go, avec une bande passante de 400 à 800 Go/s, ce qui convient bien à de gros modèles quantifiés, mais pas aux outils CUDA.</li>\n      <li><b>Alimentation</b> : une carte de bureau demande 300 à 450 W et une alimentation à la hauteur ; prévoyez aussi le refroidissement.</li>\n      <li><b>Câble</b> : court et blindé, sinon pertes de débit ou déconnexions.</li>\n      <li><b>Logiciel</b> : pilotes et bibliothèques (CUDA sur NVIDIA, ROCm sur AMD) ; la même carte n’offre pas la même facilité d’un système à l’autre.</li>\n      <li><b>Alternative</b> : louer des heures de GPU dans le cloud pour les besoins ponctuels, plutôt que d’acheter du matériel peu utilisé.</li>\n    </ul>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 }
];
export const PLATES = {
  liens: { text: "Le lien entre l’ordinateur et le GPU externe (Thunderbolt, OCuLink) est bien plus lent que la mémoire du GPU. Peu importe tant que tout le modèle est dans la mémoire du GPU : le lien ne sert qu’à charger les poids et à échanger quelques jetons.", facts: () => [["Thunderbolt 4", "40 Gbit/s, dont une part en PCIe (≈ 3 à 4 Go/s utiles)"], ["OCuLink ×4", "PCIe 4.0 ×4 ≈ 7,9 Go/s théoriques"], ["VRAM", "≈ 1 000 Go/s"]] },
  chaine: { text: "Un GPU externe est une vraie carte graphique de bureau dans un boîtier avec son alimentation, relié à l’ordinateur par un câble. On gagne la mémoire et la puissance de calcul d’une carte de bureau sans changer d’ordinateur.", facts: () => [["boîtier", "alimentation 300 à 750 W"], ["câble", "court et blindé (OCuLink)"]] },
  choix: { text: "En 4 bits, un modèle de 8 milliards tient dans moins de 5 Go, un de 14 milliards dans moins de 9, un de 32 milliards dans environ 20 Go : tout juste sur une carte de 24 Go, avec peu de place pour le cache. Un modèle de 70 milliards (43 Go) déborde.", facts: () => [["formule", "poids + cache KV + marge ≤ mémoire"], ["marge", "1 à 2 Go"]] },
  debord: { text: "Quand le modèle ne tient pas, des couches restent en RAM et sont lues à chaque jeton par le bus PCIe, de dix à trente fois plus lent que la mémoire du GPU. La vitesse s’effondre dès que quelques couches débordent.", facts: () => [["effet", "vitesse divisée par plusieurs fois"], ["remèdes", "quantifier, réduire le contexte, plus de VRAM"]] }
};
