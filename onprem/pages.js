// Chapitre 21 : Une infrastructure IA sur site (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 21 · avancé",
  "title": "Une infrastructure IA sur site",
  "sub": "posséder ses modèles et ses données",
  "body": "\n    <p class=\"lede\">Faire tourner ses modèles <b>chez soi</b> répond à trois besoins : garder des <b>données confidentielles</b> chez soi, maîtriser la <b>latence</b> et les <b>coûts</b> quand l’usage est constant, et ne pas dépendre d’un fournisseur.</p>\n    <p>Le prix : on devient responsable du matériel, des mises à jour, de la sécurité et de la disponibilité. Une machine qui fait tourner un modèle n’est pas un <b>service</b> ; ce chapitre décrit les neuf étapes pour passer de l’un à l’autre.</p>",
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
  "lit": "etapes",
  "look": {},
  "scene": "etapes",
  "fig": ""
 },
 {
  "kicker": "21.1",
  "title": "Cadrer le besoin",
  "sub": "avant d’acheter quoi que ce soit",
  "body": "\n    <p class=\"lede\">Les questions qui décident de tout le reste :</p>\n    <ul class=\"rules\">\n      <li><b>Qui</b> utilise, combien en même temps (pointe, pas moyenne) ?</li>\n      <li><b>Quoi</b> : chat, RAG, code, voix, images ? quelle taille de modèle, quelle longueur de contexte ?</li>\n      <li><b>Quel niveau de qualité</b> : un modèle plus petit suffit-il ? On le vérifie avec un jeu d’essais réels.</li>\n      <li><b>Quelles données</b> : lesquelles ne doivent jamais sortir ? quelles obligations (conservation, journalisation, droit d’accès) ?</li>\n      <li><b>Quelle disponibilité</b> : acceptable d’être indisponible une nuit ? un week-end ?</li>\n    </ul>",
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
  "lit": "etapes",
  "look": {},
  "scene": "etapes",
  "fig": ""
 },
 {
  "kicker": "21.2",
  "title": "Dimensionner",
  "sub": "mémoire d’abord, puis débit",
  "body": "\n    <p class=\"lede\">La contrainte de départ est la <b>mémoire des GPU</b> (chapitre 16) : poids + cache KV de tous les utilisateurs + marge.</p>\n    <p>Pour un modèle de 70 milliards en 4 bits (≈ 43 Go) et 20 utilisateurs à 8 000 jetons (≈ 50 Go de cache), il faut près de 100 Go : deux GPU de 80 Go. Ensuite le <b>débit</b> : jetons par seconde et par utilisateur attendus, sachant que la vitesse de décodage est bornée par la bande passante mémoire (chapitre 17).</p>\n    <p>Prévoir une <b>redondance</b> (un GPU ou un nœud de plus) pour tenir une panne ou une maintenance sans coupure.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 4,
   "el": 4,
   "dist": 26,
   "auto": true
  },
  "lit": "dimension",
  "look": {},
  "scene": "dimension",
  "fig": ""
 },
 {
  "kicker": "21.3",
  "title": "Construire la plateforme",
  "sub": "matériel, réseau, logiciels",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Matériel</b> : serveurs GPU, alimentation et refroidissement dimensionnés pour la puissance (chapitre 18), prise de courant et climatisation de la salle.</li>\n      <li><b>Réseau</b> : réseau rapide entre nœuds si plusieurs serveurs servent un même modèle ; réseau séparé pour l’administration.</li>\n      <li><b>Stockage</b> : un dépôt de poids de modèles (plusieurs dizaines à centaines de Go chacun), les index de RAG, les journaux.</li>\n      <li><b>Logiciels</b> : pilotes GPU, conteneurs, un orchestrateur (souvent Kubernetes avec le plugin GPU), un moteur d’inférence (vLLM pour la production, Ollama pour les essais), une passerelle API.</li>\n      <li><b>Registre de modèles</b> : versions, licences, empreintes de fichiers.</li>\n    </ul>",
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
  "lit": "plateforme",
  "look": {},
  "scene": "plateforme",
  "fig": ""
 },
 {
  "kicker": "21.4",
  "title": "Sécuriser et gouverner",
  "sub": "la partie qui se négocie avec la direction",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Accès</b> : authentification forte, droits par équipe, clés par application, quotas.</li>\n      <li><b>Cloisonnement</b> : réseau dédié, pas d’accès sortant non contrôlé depuis les moteurs.</li>\n      <li><b>Journaux</b> : qui a demandé quoi, quand, avec quel modèle ; conservés selon la politique de l’organisation.</li>\n      <li><b>Données</b> : durée de conservation des conversations, anonymisation, droit à l’effacement.</li>\n      <li><b>Modèles</b> : vérifier la licence de chaque modèle et la provenance des fichiers.</li>\n      <li><b>Cadre légal</b> : protection des données personnelles et obligations propres au secteur ; à valider avec le juriste.</li>\n    </ul>",
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
  "lit": "etapes",
  "look": {},
  "scene": "etapes",
  "fig": ""
 },
 {
  "kicker": "21.5",
  "title": "Exploiter",
  "sub": "surveiller, mettre à jour, ajuster",
  "body": "\n    <p class=\"lede\">Un service d’IA se surveille par des mesures spécifiques.</p>\n    <ul class=\"rules\">\n      <li><b>Utilisateur</b> : temps avant le premier jeton, jetons par seconde, taux d’erreurs.</li>\n      <li><b>Moteur</b> : longueur de la file, occupation du cache KV, taille des lots.</li>\n      <li><b>GPU</b> : utilisation, mémoire, température, erreurs matérielles.</li>\n    </ul>\n    <p>On fixe des <b>objectifs de service</b> (par exemple le temps du premier jeton), on teste un nouveau modèle sur le jeu d’essais avant de basculer, et on garde un retour arrière. On suit aussi la <b>capacité</b> : quand la file s’allonge aux heures de pointe, on ajoute des GPU avant que les utilisateurs ne s’en plaignent.</p>",
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
  "lit": "plateforme",
  "look": {},
  "scene": "plateforme",
  "fig": ""
 },
 {
  "kicker": "21.6",
  "title": "Sur site ou cloud",
  "sub": "un calcul, pas une idéologie",
  "body": "\n    <p class=\"lede\">Le choix dépend du <b>taux d’occupation</b> des GPU.</p>\n    <p>Un GPU occupé en permanence revient moins cher sur site au bout de quelques années ; un GPU utilisé quelques heures par semaine revient moins cher à louer. Le calcul doit inclure l’énergie, le local, le personnel, le renouvellement du matériel (les GPU vieillissent vite) et le coût du risque.</p>\n    <p>Une voie courante : <b>hybride</b>. Sur site, les données et les usages stables ; dans le cloud, les pointes, les essais de nouveaux modèles et l’entraînement ponctuel.</p>",
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
  "lit": "rentabilite",
  "look": {},
  "scene": "rentabilite",
  "fig": ""
 }
];
export const PLATES = {
  etapes: { text: "Une infrastructure d’IA sur site se construit dans cet ordre : cadrer les usages, dimensionner, acquérir et installer, relier au réseau et au stockage, bâtir la plateforme, exposer le service, sécuriser, observer, puis exploiter dans la durée.", facts: () => [["délai typique", "des mois : le matériel est souvent l’attente"], ["erreur courante", "acheter avant de cadrer"]] },
  dimension: { text: "Un modèle de 70 milliards de paramètres en 4 bits pèse environ 43 Go. Vingt utilisateurs avec 8 000 jetons de contexte chacun ajoutent environ 50 Go de cache KV. Avec une marge, le besoin approche 100 Go : deux GPU de 80 Go, en prévoyant de la redondance en plus.", facts: () => [["cache par jeton", "≈ 320 Ko"], ["20 × 8 000 jetons", "≈ 50 Go"], ["redondance", "un GPU ou un nœud de plus (N+1)"]] },
  plateforme: { text: "Les applications ne parlent jamais directement aux GPU : une passerelle gère authentification, quotas et journaux ; un routeur choisit le modèle ; des moteurs d’inférence servent les requêtes ; un orchestrateur place les charges sur les GPU.", facts: () => [["passerelle", "un point d’entrée unique"], ["moteur", "par lots continus"], ["orchestrateur", "plugin GPU, files d’attente"]] },
  rentabilite: { text: "Le cloud n’a pas de coût d’entrée mais un coût mensuel élevé ; le matériel sur site demande un investissement puis des frais d’exploitation modestes. Selon l’usage, les courbes se croisent après quelques années. Chiffres d’exemple, à remplacer par les vôtres.", facts: () => [["point d’équilibre ici", "≈ 30 mois"], ["inconnues", "taux d’occupation, personnel, énergie"]] }
};
