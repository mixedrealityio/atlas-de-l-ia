export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi vaut-il mieux vérifier avec des tests qu’en demandant au modèle de se relire ?",
   "choices": [
    "les tests sont plus rapides à écrire",
    "un test est indépendant du modèle et ne se trompe pas comme lui",
    "un modèle ne sait pas relire",
    "les tests utilisent moins de jetons"
   ],
   "answer": 1,
   "why": "<p>Un vérificateur indépendant détecte des erreurs que le modèle, qui a fait la même hypothèse en écrivant, ne verrait pas.</p>"
  }
 ],
 "2": [
  {
   "q": "Chaque essai réussit avec p = 0,2. Environ quelle probabilité de réussir au moins une fois en 5 essais ?",
   "choices": [
    "20 %",
    "33 %",
    "67 %",
    "100 %"
   ],
   "answer": 2,
   "why": "<p>1 − 0,8⁵ = 1 − 0,328 ≈ 0,67.</p>"
  }
 ],
 "3": [
  {
   "q": "Un agent modifie le même fichier cinq fois de suite sans que le test passe. Que faire ?",
   "choices": [
    "continuer indéfiniment",
    "détecter l’absence de progrès, changer de stratégie ou s’arrêter",
    "augmenter la température à 2",
    "supprimer le test"
   ],
   "answer": 1,
   "why": "<p>Une bonne boucle repère l’absence de progrès et change de méthode ou demande de l’aide.</p>"
  }
 ]
};
