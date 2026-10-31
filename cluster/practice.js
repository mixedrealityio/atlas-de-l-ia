export const PRACTICE = {
 "3": [
  {
   "q": "Pourquoi garde-t-on le parallélisme de tenseurs à l’intérieur d’un nœud ?",
   "choices": [
    "parce qu’il utilise peu de mémoire",
    "parce qu’il échange des données à chaque couche et a besoin du lien le plus rapide",
    "parce qu’il n’a pas besoin de GPU",
    "parce qu’il est plus facile à programmer"
   ],
   "answer": 1,
   "why": "<p>Les échanges fréquents exigent NVLink ; le réseau entre nœuds est trop lent.</p>"
  }
 ],
 "2": [
  {
   "q": "NVLink à 900 Go/s et InfiniBand à 50 Go/s : le rapport est d’environ…",
   "choices": [
    "2",
    "18",
    "180",
    "1 800"
   ],
   "answer": 1,
   "why": "<p>900 ÷ 50 = 18.</p>"
  }
 ],
 "4": [
  {
   "q": "Que sauvegarde-t-on avec un point de contrôle ?",
   "choices": [
    "uniquement la dernière réponse",
    "l’état complet de l’entraînement pour pouvoir reprendre après une panne",
    "le fichier du tokenizer",
    "la température"
   ],
   "answer": 1,
   "why": "<p>Poids, états de l’optimiseur et position dans les données.</p>"
  }
 ]
};
