export const PRACTICE = {
 "1": [
  {
   "q": "Qu’est-ce qui coûte cher dans un modèle comme Llama 2 70B ?",
   "choices": [
    "obtenir les paramètres par l’entraînement",
    "écrire le code qui le fait tourner",
    "le stocker sur un disque",
    "le télécharger"
   ],
   "answer": 0,
   "why": "<p>Le code tient en quelques centaines de lignes ; les paramètres demandent des milliers de GPU pendant des jours.</p>"
  }
 ],
 "3": [
  {
   "q": "Pourquoi un modèle de base invente-t-il parfois un numéro ISBN ?",
   "choices": [
    "il imite la forme d’un document sans distinguer mémoire et invention",
    "il cherche sur internet",
    "il a un bug de calcul",
    "il copie un livre précis"
   ],
   "answer": 0,
   "why": "<p>Il génère ce qui a l’allure d’un vrai numéro.</p>"
  }
 ],
 "5": [
  {
   "q": "Que change surtout l’affinage par rapport au pré-entraînement ?",
   "choices": [
    "la forme : le modèle devient un assistant",
    "la quantité de savoir",
    "la taille du fichier",
    "l’architecture"
   ],
   "answer": 0,
   "why": "<p>Le savoir vient du pré-entraînement ; l’affinage apprend à répondre.</p>"
  }
 ],
 "8": [
  {
   "q": "Qu’est-ce qui manquait aux modèles de 2023 selon Karpathy ?",
   "choices": [
    "un système 2 : réfléchir plus longtemps aux questions difficiles",
    "un système 1",
    "des paramètres",
    "un tokeniseur"
   ],
   "answer": 0,
   "why": "<p>Ils faisaient le même calcul pour chaque jeton.</p>"
  }
 ],
 "11": [
  {
   "q": "Dans l’analogie du système d’exploitation, que représente la fenêtre de contexte ?",
   "choices": [
    "la mémoire vive",
    "le disque",
    "le processeur",
    "l’écran"
   ],
   "answer": 0,
   "why": "<p>Limitée et rapide, elle contient ce sur quoi le modèle travaille.</p>"
  }
 ]
};
