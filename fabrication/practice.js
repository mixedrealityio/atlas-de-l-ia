export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi supprime-t-on les doublons dans les données d’entraînement ?",
   "choices": [
    "pour gagner de la place sur le disque uniquement",
    "pour éviter que le modèle mémorise des textes et pour ne pas fausser l’évaluation",
    "pour augmenter la taille du vocabulaire",
    "parce que les doublons sont toujours faux"
   ],
   "answer": 1,
   "why": "<p>Un texte répété est appris presque mot pour mot, et peut aussi contaminer les bancs d’essai.</p>"
  }
 ],
 "2": [
  {
   "q": "Pour 10 milliards de paramètres et 2 000 milliards de jetons, le calcul d’entraînement vaut environ…",
   "choices": [
    "1,2 × 10²¹",
    "1,2 × 10²³",
    "1,2 × 10²⁵",
    "1,2 × 10²⁷"
   ],
   "answer": 1,
   "why": "<p>6 × 10¹⁰ × 2 × 10¹² = 1,2 × 10²³ opérations.</p>"
  }
 ],
 "3": [
  {
   "q": "Quelle étape apprend au modèle le format d’une conversation ?",
   "choices": [
    "la tokenisation",
    "le pré-entraînement seul",
    "l’affinage supervisé (SFT)",
    "la quantification"
   ],
   "answer": 2,
   "why": "<p>Le SFT présente des paires consigne-réponse : le modèle apprend à répondre plutôt qu’à continuer le texte.</p>"
  }
 ]
};
