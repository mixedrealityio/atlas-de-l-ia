export const PRACTICE = {
 "1": [
  {
   "q": "Un modèle trop simple pour les données souffre surtout de…",
   "choices": [
    "variance élevée",
    "biais élevé",
    "bruit nul",
    "fuite de données"
   ],
   "answer": 1,
   "why": "<p>Il se trompe de façon systématique : c’est le biais.</p>"
  }
 ],
 "2": [
  {
   "q": "Pourquoi ne règle-t-on pas ses hyperparamètres sur le jeu de test ?",
   "choices": [
    "pour gagner du temps",
    "le score de test serait faussé : le modèle serait choisi pour lui",
    "le jeu de test est trop petit",
    "ce n’est pas interdit"
   ],
   "answer": 1,
   "why": "<p>Le test sert à juger une seule fois, sans y avoir « triché ».</p>"
  }
 ],
 "4": [
  {
   "q": "Que décrit la double descente ?",
   "choices": [
    "l’erreur qui remonte après le pic puis redescend avec plus de paramètres",
    "la descente de deux optimiseurs",
    "deux couches de neurones",
    "la perte de deux jeux"
   ],
   "answer": 0,
   "why": "<p>Au-delà du seuil d’interpolation, l’erreur de test baisse à nouveau.</p>"
  }
 ]
};
