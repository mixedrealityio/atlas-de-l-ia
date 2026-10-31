export const PRACTICE = {
 "2": [
  {
   "q": "Combien de temps pour charger 24 Go à 3 Go/s ?",
   "choices": [
    "≈ 1 s",
    "≈ 8 s",
    "≈ 72 s",
    "≈ 8 min"
   ],
   "answer": 1,
   "why": "<p>24 ÷ 3 = 8 secondes.</p>"
  }
 ],
 "3": [
  {
   "q": "Un modèle de 32 milliards en 4,9 bits par poids tient-il dans 24 Go avec 4 Go de cache ?",
   "choices": [
    "oui, avec de la marge",
    "non : 19,6 + 4 dépasse presque la carte, il reste peu de marge",
    "oui, il n’y a que 5 Go de poids",
    "non, jamais"
   ],
   "answer": 1,
   "why": "<p>32 × 4,9 ÷ 8 ≈ 19,6 Go ; avec 4 Go de cache on atteint 23,6 Go sur 24, sans marge.</p>"
  }
 ],
 "4": [
  {
   "q": "Quelle est la conséquence d’un modèle qui déborde en RAM ?",
   "choices": [
    "rien de notable",
    "la vitesse chute, car chaque jeton lit des couches par un chemin bien plus lent",
    "la qualité augmente",
    "la mémoire du GPU double"
   ],
   "answer": 1,
   "why": "<p>Les couches en RAM sont lues à chaque jeton par le bus PCIe, dix à trente fois plus lent.</p>"
  }
 ]
};
