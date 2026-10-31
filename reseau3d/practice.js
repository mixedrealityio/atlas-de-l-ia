export const PRACTICE = {
 "1": [
  {
   "q": "Combien de paramètres a un réseau 4 → 6 → 3 (poids et biais) ?",
   "choices": [
    "24",
    "42",
    "51",
    "72"
   ],
   "answer": 2,
   "why": "<p>Poids : 4×6 + 6×3 = 42 ; biais : 6 + 3 = 9 ; total 51.</p>"
  }
 ],
 "2": [
  {
   "q": "Quand on avance dans un réseau convolutif, en général…",
   "choices": [
    "la taille des cartes augmente et leur nombre baisse",
    "la taille des cartes diminue et leur nombre augmente",
    "tout reste identique",
    "les cartes disparaissent"
   ],
   "answer": 1,
   "why": "<p>La mise en commun réduit la taille, les couches suivantes ajoutent des filtres.</p>"
  }
 ],
 "3": [
  {
   "q": "Pour 2 000 jetons, 4 096 dimensions et 32 couches, combien de valeurs d’activation, environ ?",
   "choices": [
    "≈ 26 millions",
    "≈ 260 millions",
    "≈ 2,6 milliards",
    "≈ 26 milliards"
   ],
   "answer": 1,
   "why": "<p>2 000 × 4 096 × 32 ≈ 2,6 × 10⁸.</p>"
  }
 ]
};
