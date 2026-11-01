// Chapitre 62 : IA et calcul quantique (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 62 · quantique",
  "title": "IA et calcul quantique",
  "sub": "mythe ou réalité ?",
  "body": "\n    <p class=\"lede\">« IA quantique » : l’expression revient souvent dans les annonces. Que peut réellement apporter un ordinateur quantique à l’IA, et quand ?</p>\n    <p>Ce chapitre explique le qubit sans équations, retrace les étapes clés, trie les promesses et fait le point sur l’état des machines.</p>",
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
  "lit": "frise",
  "look": {},
  "scene": "frise",
  "fig": ""
 },
 {
  "kicker": "62.1",
  "title": "Du bit au qubit",
  "sub": "trois idées et un ennemi",
  "body": "<ul class=\"rules\"><li><b>Superposition</b> : un qubit combine 0 et 1 ; à la mesure, on n’obtient qu’un seul résultat.</li><li><b>Intrication</b> : des qubits dont les états sont liés, quelle que soit la distance.</li><li><b>Interférence</b> : l’algorithme fait s’annuler les mauvaises réponses et se renforcer les bonnes.</li><li><b>Décohérence</b> : l’environnement efface l’information ; il faut isoler, refroidir et <b>corriger les erreurs</b>.</li></ul><p>Idée fausse : il ne « teste pas toutes les solutions à la fois » ; il n’accélère que des problèmes structurés.</p>",
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
  "lit": "qubit",
  "look": {},
  "scene": "qubit",
  "fig": ""
 },
 {
  "kicker": "62.2",
  "title": "Quelques étapes",
  "sub": "des idées aux puces",
  "body": "<ul class=\"rules\"><li><b>1982</b> : Feynman propose de simuler la nature avec des systèmes quantiques.</li><li><b>1994</b> : Shor, factorisation rapide (menace à long terme pour RSA) ; <b>1996</b> : Grover, recherche accélérée.</li><li><b>2009</b> : HHL, systèmes linéaires, souvent cité pour l’apprentissage.</li><li><b>2019</b> : Google, Sycamore, première « suprématie » annoncée (contestée en partie par des simulations classiques).</li><li><b>2024</b> : Willow, une erreur logique qui baisse quand le code correcteur grandit.</li></ul>",
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
  "lit": "frise",
  "look": {},
  "scene": "frise",
  "fig": ""
 },
 {
  "kicker": "62.3",
  "title": "Ce que l’IA pourrait y gagner",
  "sub": "trier les promesses",
  "body": "<ul class=\"rules\"><li><b>Crédible</b> : simuler molécules et matériaux.</li><li><b>Incertain</b> : optimisation ; gains face aux algorithmes classiques non établis.</li><li><b>Fragile</b> : accélérer l’apprentissage ; charger les données coûte cher, et des gains ont été <b>déquantifiés</b>.</li><li><b>Déjà réel</b> : l’IA au service du quantique (calibrer, décoder les erreurs, concevoir des circuits).</li></ul>",
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
  "lit": "promesses",
  "look": {},
  "scene": "promesses",
  "fig": ""
 },
 {
  "kicker": "62.4",
  "title": "Mythe ou réalité ?",
  "sub": "l’état des machines",
  "body": "<ul class=\"rules\"><li>Jusqu’à environ <b>un millier de qubits physiques</b>, bruités ; les qubits logiques n’en sont qu’aux premières démonstrations.</li><li>Avantages démontrés sur des tâches <b>conçues pour</b>, sans usage pratique.</li><li><b>Aucun</b> gain établi pour entraîner ou faire tourner un modèle de langage.</li><li>Machines tolérantes aux pannes visées vers les <b>années 2030</b>.</li></ul><p>Bon réflexe face à une annonce : combien de <b>qubits logiques</b> ? Comparé à quel <b>algorithme classique</b> ? Sur quelle <b>tâche utile</b> ?</p>",
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
  "lit": "realite",
  "look": {},
  "scene": "realite",
  "fig": ""
 }
];
export const PLATES = {
  qubit: { text: "Un qubit peut être dans une superposition de 0 et de 1 ; plusieurs qubits peuvent être intriqués. Un algorithme quantique s’arrange pour que les chemins menant aux mauvaises réponses s’annulent et que ceux menant aux bonnes se renforcent. Le problème est le bruit : les qubits perdent leur état très vite, d’où la correction d’erreurs, qui regroupe beaucoup de qubits physiques pour former un qubit logique fiable.", facts: () => [["superposition", "pas « tous les calculs à la fois »"], ["qubit logique", "des centaines à milliers de qubits physiques selon les schémas"]] },
  frise: { text: "Richard Feynman propose en 1982 d’utiliser des systèmes quantiques pour simuler la physique quantique. Peter Shor montre en 1994 qu’un ordinateur quantique factoriserait de grands nombres efficacement ; Lov Grover accélère la recherche dans une liste (1996). L’algorithme HHL (2009) résout certains systèmes linéaires. En 2019, Google annonce avec Sycamore une tâche hors de portée des supercalculateurs de l’époque ; en 2024, sa puce Willow montre une erreur logique qui diminue quand on agrandit le code correcteur.", facts: () => [["Shor", "menace la cryptographie RSA, à très long terme"], ["Grover", "accélération quadratique seulement"]] },
  promesses: { text: "La simulation de molécules et de matériaux est l’application la plus solide : elle pourrait produire des données que l’IA exploiterait ensuite (chapitre 47). Pour l’apprentissage lui-même, les accélérations théoriques supposent souvent de charger rapidement de grandes données dans un état quantique, ce qu’on ne sait pas faire ; plusieurs accélérations annoncées ont été « déquantifiées » par des algorithmes classiques. À l’inverse, l’IA aide déjà le quantique : calibration des qubits, décodage des erreurs.", facts: () => [["déquantification", "Ewin Tang, 2018 : un algorithme classique aussi rapide"], ["IA → quantique", "décodeurs d’erreurs appris"]] },
  realite: { text: "Les machines actuelles comptent jusqu’à environ un millier de qubits physiques, encore trop bruités pour les grands algorithmes. Les avantages démontrés portent sur des tâches conçues pour cela, sans utilité pratique. Aucun gain concret pour l’entraînement ou l’inférence des modèles d’IA n’a été établi. Les constructeurs visent des machines tolérantes aux pannes vers la décennie 2030 ; méfiez-vous des annonces qui promettent une « IA quantique » imminente.", facts: () => [["IBM Condor", "1 121 qubits physiques (2023)"], ["à surveiller", "nombre de qubits logiques, pas de qubits physiques"]] }
};
