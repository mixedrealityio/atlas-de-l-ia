export const PRACTICE = {
 "2": [
  {
   "q": "Dans la matrice d’attention d’un modèle de langage causal, un jeton peut regarder…",
   "choices": [
    "tous les jetons, passés et futurs",
    "seulement les jetons passés et lui-même",
    "seulement le jeton suivant",
    "seulement le premier jeton"
   ],
   "answer": 1,
   "why": "<p>Le masque causal met à zéro le poids des jetons futurs.</p>"
  }
 ],
 "1": [
  {
   "q": "Dans l’attention, les poids appliqués aux valeurs sont obtenus…",
   "choices": [
    "en additionnant les clés",
    "par un softmax appliqué aux scores Q·K",
    "en prenant le maximum des valeurs",
    "au hasard"
   ],
   "answer": 1,
   "why": "<p>Les scores Q·K/√d passent par un softmax : des poids positifs de somme 1, qui pondèrent les valeurs.</p>"
  }
 ],
 "5": [
  {
   "q": "Combien de paramètres, environ, pour N = 32 blocs et d = 4 096 (hors plongements) ?",
   "choices": [
    "≈ 640 millions",
    "≈ 6,4 milliards",
    "≈ 64 milliards",
    "≈ 640 milliards"
   ],
   "answer": 1,
   "why": "<p>12 × 32 × 4 096² ≈ 12 × 32 × 1,68 × 10⁷ ≈ 6,4 × 10⁹.</p>"
  }
 ]
};
