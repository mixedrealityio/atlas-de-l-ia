export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi découpe-t-on les documents en passages avant de les indexer ?",
   "choices": [
    "pour réduire la taille du disque",
    "pour retrouver des unités précises et tenir dans le contexte du modèle",
    "pour supprimer les doublons",
    "pour chiffrer les données"
   ],
   "answer": 1,
   "why": "<p>Un passage ciblé est plus facile à retrouver et laisse de la place dans le contexte.</p>"
  }
 ],
 "2": [
  {
   "q": "Pourquoi combiner recherche vectorielle et par mots-clés ?",
   "choices": [
    "pour économiser de la mémoire",
    "parce que chacune rate des cas que l’autre trouve (références exactes, sens)",
    "pour éviter le reclassement",
    "parce que le vectoriel est interdit"
   ],
   "answer": 1,
   "why": "<p>Les vecteurs captent le sens, les mots-clés captent les termes exacts : elles se complètent.</p>"
  }
 ],
 "3": [
  {
   "q": "Quel est le rôle d’un jeu de référence ?",
   "choices": [
    "entraîner le modèle",
    "rejouer des questions connues pour détecter une régression",
    "remplacer l’index",
    "chiffrer les réponses"
   ],
   "answer": 1,
   "why": "<p>Il permet de mesurer l’effet de chaque changement sur des cas connus.</p>"
  }
 ],
 "6": [
  {
   "q": "Où faut-il appliquer les droits d’accès dans un RAG d’entreprise ?",
   "choices": [
    "après la génération de la réponse",
    "au moment de la recherche, avant de donner les passages au modèle",
    "uniquement à l’ingestion",
    "nulle part"
   ],
   "answer": 1,
   "why": "<p>Un passage interdit ne doit jamais atteindre le contexte du modèle.</p>"
  }
 ]
};
