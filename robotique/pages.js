// Chapitre 12 : L’IA et la robotique (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 12 · tous niveaux",
  "title": "L’IA et la robotique",
  "sub": "donner un corps à un modèle",
  "body": "\n    <p class=\"lede\">Un robot doit percevoir un monde bruité, décider, et agir sur lui, sans pouvoir annuler ses erreurs. C’est bien plus dur que de produire du texte.</p>\n    <p>Les robots industriels classiques exécutent des mouvements programmés dans un environnement contrôlé. L’IA leur apporte la capacité de gérer des situations <b>non prévues</b> : un objet déplacé, un éclairage différent, une consigne en langage naturel.</p>\n    <p>Ce chapitre suit la boucle du robot, l’apprentissage par imitation et renforcement, le passage de la simulation au réel, et les modèles qui relient la vision, le langage et l’action.</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "12.1",
  "title": "Percevoir, planifier, commander",
  "sub": "l’approche classique",
  "body": "\n    <p class=\"lede\">La robotique classique découpe le problème en blocs.</p>\n    <ul class=\"rules\">\n      <li><b>Perception</b> : caméras, capteurs de profondeur, de force ; reconnaître et localiser les objets.</li>\n      <li><b>Planification</b> : trouver un chemin sans collision jusqu’à la cible.</li>\n      <li><b>Cinématique inverse</b> : convertir une position voulue de la pince en angles d’articulations.</li>\n      <li><b>Commande</b> : un contrôleur (souvent un PID) suit la trajectoire en corrigeant à plus de 100 Hz.</li>\n    </ul>\n    <p>Cette approche est fiable et explicable, mais chaque bloc demande des modèles précis du robot et du monde.</p>",
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
  "lit": "bras",
  "look": {},
  "scene": "bras",
  "fig": ""
 },
 {
  "kicker": "12.2",
  "title": "Apprendre à agir",
  "sub": "imitation et renforcement",
  "body": "\n    <p class=\"lede\">Plutôt que d’écrire les mouvements, on peut les <b>apprendre</b>.</p>\n    <ul class=\"rules\">\n      <li><b>Imitation</b> (<i>behavior cloning</i>) : un opérateur guide le robot (télé-opération) ; un réseau apprend à reproduire ses gestes à partir des images. Simple et efficace, mais il dérive quand il sort de ce qu’il a vu.</li>\n      <li><b>Renforcement</b> (chapitre 7) : le robot essaie, reçoit une récompense (tâche réussie) et améliore sa politique. Puissant, mais nécessite énormément d’essais.</li>\n    </ul>\n    <p>Les deux se combinent : imiter pour démarrer, puis renforcer pour dépasser les démonstrations.</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "12.3",
  "title": "De la simulation au monde réel",
  "sub": "s’entraîner virtuellement",
  "body": "\n    <p class=\"lede\">Un robot réel est lent, cher et fragile. Un simulateur peut faire tourner des <b>milliers de robots virtuels</b> en parallèle, bien plus vite que le temps réel.</p>\n    <p>Problème : la simulation n’est qu’une approximation (frottements, déformations, bruit des capteurs). Une politique parfaite en simulation peut échouer sur le vrai robot. La <b>randomisation de domaine</b> varie la simulation (masses, frottements, couleurs, retards) pour que la politique apprenne à tolérer ces écarts.</p>\n    <p>Le dernier tronçon se règle avec quelques données réelles.</p>",
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
  "lit": "sim",
  "look": {},
  "scene": "sim",
  "fig": ""
 },
 {
  "kicker": "12.4",
  "title": "Vision, langage, action",
  "sub": "les modèles VLA",
  "body": "\n    <p class=\"lede\">L’idée récente : partir d’un modèle <b>vision-langage</b> préentraîné sur d’immenses corpus, et lui apprendre aussi à <b>produire des actions</b>.</p>\n    <p>Le modèle reçoit les images de la caméra et une consigne (« mets la tasse dans l’évier ») et sort des commandes de mouvement : soit des <b>jetons d’action</b> traités comme du texte, soit une sortie continue produite par un modèle génératif.</p>\n    <p>Des exemples publics existent (RT-2, OpenVLA, π0). L’intérêt : le robot hérite de connaissances générales (reconnaître un objet jamais vu, comprendre une consigne inédite). La difficulté : les <b>données de robots</b> sont rares et chères comparées au texte.</p>",
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
  "lit": "vla",
  "look": {},
  "scene": "vla",
  "fig": ""
 },
 {
  "kicker": "12.5",
  "title": "Données, sécurité, limites",
  "sub": "ce qui reste difficile",
  "body": "\n    <p class=\"lede\">Un robot agit dans le monde physique : une erreur de prédiction devient un geste.</p>\n    <ul class=\"rules\">\n      <li><b>Données</b> : collectées par des humains, une démonstration à la fois ; la diversité des situations manque.</li>\n      <li><b>Cas rares</b> : un objet glissant, un humain qui passe : le modèle doit rester sûr hors de sa zone de confort.</li>\n      <li><b>Sécurité</b> : limites de force et de vitesse, arrêts d’urgence, zones interdites, qu’aucun modèle ne doit pouvoir contourner.</li>\n      <li><b>Latence</b> : un gros modèle qui réfléchit lentement ne peut pas commander seul un mouvement rapide ; on le combine à une commande rapide.</li>\n    </ul>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 }
];
export const PLATES = {
  boucle: { text: "Un robot répète en boucle : percevoir (caméras, capteurs), comprendre la scène, planifier un mouvement, l’exécuter, puis percevoir à nouveau le résultat. La boucle de commande bas niveau tourne à plus de 100 fois par seconde.", facts: () => [["perception", "caméras, profondeur, force"], ["commande", "100 à 1000 Hz"], ["décision", "1 à 10 Hz"]] },
  bras: { text: "La caméra localise l’objet. Un calcul de cinématique inverse trouve les angles des articulations pour amener la pince dessus ; un contrôleur les suit. L’ensemble paraît simple et exige perception, géométrie et contrôle.", facts: () => [["entrée", "position de l’objet"], ["sortie", "angles θ₁ et θ₂"], ["méthode", "cinématique inverse"]] },
  vla: { text: "Un modèle vision-langage-action reçoit les images de caméra et une consigne en langage, et produit directement des commandes de mouvement, sous forme de jetons d’actions ou par un modèle génératif. Il hérite des connaissances d’un modèle vision-langage préentraîné.", facts: () => [["entrée", "images + texte"], ["sortie", "actions"], ["entraînement", "démonstrations de robots"]] },
  sim: { text: "On entraîne la politique dans un simulateur, où les essais sont gratuits et parallèles. Pour qu’elle tienne dans le monde réel, on randomise la simulation (masses, frottements, lumières) afin que le réel soit un cas parmi d’autres. Un écart subsiste, qu’on réduit avec des données réelles.", facts: () => [["avantage", "des milliers de robots virtuels"], ["limite", "la simulation n’est pas la réalité"]] }
};
