export const PRACTICE = {
 "0": [
  {
   "q": "Qu’est-ce qui distingue un agent d’un simple échange avec un modèle ?",
   "choices": [
    "il est plus grand",
    "il agit via des outils, observe le résultat et poursuit un objectif",
    "il n’utilise pas de jetons",
    "il ne se trompe jamais"
   ],
   "answer": 1,
   "why": "<p>Un agent est un modèle dans une boucle d’action et d’observation, avec des outils et un objectif.</p>"
  }
 ],
 "3": [
  {
   "q": "Une étape réussit dans 90 % des cas. Environ quelle probabilité de réussir 10 étapes à la suite ?",
   "choices": [
    "90 %",
    "35 %",
    "9 %",
    "1 %"
   ],
   "answer": 1,
   "why": "<p>0,9¹⁰ ≈ 0,35.</p>"
  }
 ],
 "4": [
  {
   "q": "Pourquoi lance-t-on un agent plusieurs fois pour l’évaluer ?",
   "choices": [
    "pour chauffer le GPU",
    "parce que ses résultats varient d’un essai à l’autre",
    "parce que le contexte est trop court",
    "pour changer le tokenizer"
   ],
   "answer": 1,
   "why": "<p>Les agents sont stochastiques : on mesure un taux de réussite, pas un résultat unique.</p>"
  }
 ]
};
