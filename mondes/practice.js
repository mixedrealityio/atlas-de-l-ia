export const PRACTICE = {
 "0": [
  {
   "q": "Quelle fonction apprend un modèle du monde ?",
   "choices": [
    "mot suivant = f(mots précédents)",
    "état suivant = f(état, action)",
    "classe = f(image)",
    "texte = f(bruit)"
   ],
   "answer": 1,
   "why": "<p>Il prédit comment l’état du monde évolue quand on agit.</p>"
  }
 ],
 "2": [
  {
   "q": "Dans JEPA, que prédit le modèle ?",
   "choices": [
    "chaque pixel de la suite",
    "une représentation abstraite de la partie manquante",
    "le mot suivant",
    "l’action à exécuter"
   ],
   "answer": 1,
   "why": "<p>Il prédit dans l’espace des représentations, ce qui évite de deviner des détails imprévisibles.</p>"
  }
 ],
 "4": [
  {
   "q": "Pourquoi les prédictions d’un modèle du monde se dégradent-elles sur un long horizon ?",
   "choices": [
    "le GPU chauffe",
    "les petites erreurs s’additionnent à chaque pas",
    "le vocabulaire est trop petit",
    "l’image est trop grande"
   ],
   "answer": 1,
   "why": "<p>Chaque pas part de la prédiction précédente, qui contient déjà une erreur.</p>"
  }
 ]
};
