export const PRACTICE = {
 "1": [
  {
   "q": "Que permet de faire une loi d’échelle ?",
   "choices": [
    "prévoir la perte d’un gros entraînement à partir de petits essais",
    "supprimer le bruit des données",
    "éviter le GPU",
    "écrire un tokenizer"
   ],
   "answer": 0,
   "why": "<p>La régularité de la loi de puissance autorise l’extrapolation.</p>"
  }
 ],
 "2": [
  {
   "q": "Pourquoi entraîne-t-on souvent un petit modèle bien au-delà de l’optimum de Chinchilla ?",
   "choices": [
    "par erreur",
    "pour qu’il coûte moins cher à servir ensuite",
    "parce que les données sont gratuites",
    "pour réduire le vocabulaire"
   ],
   "answer": 1,
   "why": "<p>Le coût d’inférence cumulé domine : un modèle plus petit et plus entraîné est plus économique.</p>"
  }
 ],
 "4": [
  {
   "q": "Pourquoi une chaîne de pensée améliore-t-elle les réponses ?",
   "choices": [
    "elle ajoute du calcul sous forme de jetons intermédiaires",
    "elle réduit la taille du modèle",
    "elle supprime l’attention",
    "elle change le vocabulaire"
   ],
   "answer": 0,
   "why": "<p>Chaque jeton produit est une étape de calcul supplémentaire.</p>"
  }
 ]
};
