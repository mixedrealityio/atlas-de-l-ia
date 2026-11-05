export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi préférer une cascade pour un RAG vocal ?",
   "choices": [
    "on y insère facilement la recherche et un prompt texte",
    "elle est toujours plus rapide",
    "elle garde mieux l’intonation",
    "elle n’a pas besoin de LLM"
   ],
   "answer": 0,
   "why": "<p>Le texte intermédiaire est l’endroit naturel pour brancher le RAG.</p>"
  }
 ],
 "2": [
  {
   "q": "Combien de vecteurs par seconde produit l’encodeur de Mimi ?",
   "choices": [
    "12,5",
    "24 000",
    "1 000",
    "100"
   ],
   "answer": 0,
   "why": "<p>Une trame toutes les 80 ms, chacune quantifiée en 8 jetons.</p>"
  }
 ],
 "5": [
  {
   "q": "Quel maillon coûte le plus dans une cascade naïve ?",
   "choices": [
    "attendre la réponse entière du LLM avant de parler",
    "la détection de voix",
    "le chargement de l’index",
    "la carte son"
   ],
   "answer": 0,
   "why": "<p>Il faut parler dès le premier jeton et la première phrase.</p>"
  }
 ],
 "10": [
  {
   "q": "L’agent coupe souvent la parole. Que régler d’abord ?",
   "choices": [
    "allonger la fin de tour, ou utiliser un détecteur sémantique",
    "baisser la température",
    "changer de voix",
    "augmenter k"
   ],
   "answer": 0,
   "why": "<p>Les coupures viennent d’une fin de tour trop pressée.</p>"
  }
 ],
 "14": [
  {
   "q": "La question « et lui, il est né quand ? » donne de mauvais passages. Pourquoi ?",
   "choices": [
    "elle n’a pas été réécrite avec l’historique",
    "la voix est trop rapide",
    "le VAD est trop sensible",
    "le modèle est trop gros"
   ],
   "answer": 0,
   "why": "<p>Sans réécriture, la recherche ne sait pas qui est « lui ».</p>"
  }
 ]
};
