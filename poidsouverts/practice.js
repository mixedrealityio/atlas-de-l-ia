export const PRACTICE = {
 "1": [
  {
   "q": "Vous voulez que le modèle connaisse vos documents internes, mis à jour chaque semaine. Que choisir ?",
   "choices": [
    "un affinage complet chaque semaine",
    "le RAG",
    "l’ablitération",
    "élaguer le modèle"
   ],
   "answer": 1,
   "why": "<p>Le RAG apporte les connaissances au moment de la question ; l’affinage sert plutôt au savoir-faire.</p>"
  }
 ],
 "4": [
  {
   "q": "Que contient un adaptateur LoRA ?",
   "choices": [
    "une copie complète du modèle",
    "deux petites matrices par matrice adaptée",
    "un nouveau tokeniseur",
    "les données d’entraînement"
   ],
   "answer": 1,
   "why": "<p>W′ = W + B·A : seules A et B sont entraînées et stockées.</p>"
  }
 ],
 "5": [
  {
   "q": "Pourquoi QLoRA permet-il d’affiner un 27B sur un seul GPU de 24 à 48 Go ?",
   "choices": [
    "la base gelée est chargée en 4 bits",
    "il n’entraîne rien",
    "il supprime la moitié des couches",
    "il n’utilise pas de gradients"
   ],
   "answer": 0,
   "why": "<p>~15 à 20 Go de base en 4 bits, plus de petits adaptateurs en 16 bits.</p>"
  }
 ],
 "8": [
  {
   "q": "Quelle condition faut-il pour fusionner deux modèles ?",
   "choices": [
    "qu’ils aient la même licence uniquement",
    "qu’ils viennent du même modèle de base",
    "qu’ils soient en 4 bits",
    "aucune"
   ],
   "answer": 1,
   "why": "<p>Les poids doivent correspondre un à un : même architecture, même point de départ.</p>"
  }
 ]
};
