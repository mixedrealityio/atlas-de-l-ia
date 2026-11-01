export const PRACTICE = {
 "3": [
  {
   "q": "Combien pèse à peu près un modèle de 8 milliards de paramètres en Q4 (≈ 4,9 bits) ?",
   "choices": [
    "environ 5 Go",
    "environ 50 Go",
    "environ 500 Mo",
    "environ 1 To"
   ],
   "answer": 0,
   "why": "<p>8 × 4,9 ÷ 8 ≈ 4,9 Go.</p>"
  }
 ],
 "4": [
  {
   "q": "Pourquoi un modèle de quelques Go ne contient-il pas « tout internet » ?",
   "choices": [
    "il garde des régularités apprises, pas les documents",
    "il les compresse sans perte",
    "il les stocke dans le cache",
    "il les télécharge à chaque requête"
   ],
   "answer": 0,
   "why": "<p>Le rapport de compression est trop grand pour être sans perte : c’est une compression avec perte.</p>"
  }
 ],
 "6": [
  {
   "q": "Que fait la quantification Q4 ?",
   "choices": [
    "remplace chaque poids par un entier de 4 bits et une échelle commune au bloc",
    "supprime des couches",
    "ajoute du bruit",
    "double la mémoire"
   ],
   "answer": 0,
   "why": "<p>Les valeurs sont arrondies en 16 niveaux par bloc.</p>"
  }
 ]
};
