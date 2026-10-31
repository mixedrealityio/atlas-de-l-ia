export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi les poids d’un noyau de convolution sont-ils partagés sur toute l’image ?",
   "choices": [
    "pour économiser des paramètres et reconnaître un motif où qu’il soit",
    "pour que l’image reste en noir et blanc",
    "pour supprimer le bruit",
    "parce que l’image est carrée"
   ],
   "answer": 0,
   "why": "<p>Le même détecteur est appliqué à chaque position : peu de paramètres, et un motif est reconnu quelle que soit sa place.</p>"
  }
 ],
 "3": [
  {
   "q": "Un transformeur de vision reçoit une image de 224 × 224 pixels découpée en patchs de 16 × 16. Combien de jetons ?",
   "choices": [
    "14",
    "49",
    "196",
    "784"
   ],
   "answer": 2,
   "why": "<p>224 / 16 = 14 patchs par côté ; 14 × 14 = 196.</p>"
  }
 ],
 "6": [
  {
   "q": "Dans un modèle de diffusion, pour générer une image on…",
   "choices": [
    "part d’une image réelle et on la copie",
    "part de bruit pur et on enlève le bruit étape par étape",
    "agrandit une petite image",
    "tire les pixels au hasard une seule fois"
   ],
   "answer": 1,
   "why": "<p>Le réseau a appris à retirer un peu de bruit ; répété, cela fait émerger une image.</p>"
  }
 ]
};
