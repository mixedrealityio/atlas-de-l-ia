export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi la phase de décodage est-elle limitée par la bande passante mémoire ?",
   "choices": [
    "elle calcule des matrices immenses",
    "chaque jeton oblige à relire tous les poids du modèle",
    "elle écrit beaucoup sur le disque",
    "elle utilise Internet"
   ],
   "answer": 1,
   "why": "<p>Un jeton par passe, mais toute la matrice de poids doit être lue à chaque passe : la mémoire, pas le calcul, limite.</p>"
  }
 ],
 "2": [
  {
   "q": "À quoi sert le cache KV ?",
   "choices": [
    "à stocker les réponses déjà données",
    "à ne pas recalculer les clés et valeurs des jetons précédents",
    "à accélérer l’entraînement",
    "à compresser le vocabulaire"
   ],
   "answer": 1,
   "why": "<p>Les K et V des jetons déjà traités sont réutilisés à chaque nouveau jeton.</p>"
  }
 ],
 "3": [
  {
   "q": "Un modèle de 7 milliards de paramètres en 4 bits (0,5 octet par paramètre) pèse environ…",
   "choices": [
    "3,5 Go",
    "7 Go",
    "14 Go",
    "28 Go"
   ],
   "answer": 0,
   "why": "<p>7 × 10⁹ × 0,5 octet = 3,5 Go (un peu plus en pratique avec les métadonnées).</p>"
  }
 ]
};
