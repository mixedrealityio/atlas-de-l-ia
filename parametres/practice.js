export const PRACTICE = {
 "1": [
  {
   "q": "Combien pèse environ un modèle de 14 milliards de paramètres quantifié à 4,9 bits par poids ?",
   "choices": [
    "≈ 4,3 Go",
    "≈ 8,6 Go",
    "≈ 14 Go",
    "≈ 28 Go"
   ],
   "answer": 1,
   "why": "<p>14 × 4,9 ÷ 8 ≈ 8,6 Go.</p>"
  }
 ],
 "2": [
  {
   "q": "Avec 128 Ko de cache par jeton, combien de mémoire pour 64 000 jetons ?",
   "choices": [
    "≈ 1 Go",
    "≈ 4 Go",
    "≈ 8 Go",
    "≈ 16 Go"
   ],
   "answer": 2,
   "why": "<p>64 000 × 128 Ko ≈ 8,2 Go (soit 8 Go environ).</p>"
  }
 ],
 "3": [
  {
   "q": "Pourquoi déconseille-t-on gpu_memory_utilization = 1,0 ?",
   "choices": [
    "le modèle devient plus lent",
    "il ne reste aucune marge de mémoire",
    "il désactive le cache",
    "il change la température"
   ],
   "answer": 1,
   "why": "<p>Sans marge, un pic d’utilisation fait planter le serveur.</p>"
  }
 ]
};
