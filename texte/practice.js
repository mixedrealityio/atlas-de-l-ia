export const PRACTICE = {
 "0": [
  {
   "q": "Un modèle de langage reçoit en entrée…",
   "choices": [
    "des mots tels quels",
    "des suites de numéros de jetons",
    "des images de texte",
    "des phrases entières"
   ],
   "answer": 1,
   "why": "<p>Le texte est converti en identifiants de jetons avant d’entrer dans le modèle.</p>"
  }
 ],
 "1": [
  {
   "q": "Que fait l’algorithme BPE à chaque étape ?",
   "choices": [
    "il supprime les mots rares",
    "il fusionne la paire de symboles la plus fréquente",
    "il traduit le texte",
    "il trie le vocabulaire par ordre alphabétique"
   ],
   "answer": 1,
   "why": "<p>Il crée un nouveau jeton à partir de la paire la plus fréquente dans le corpus, et recommence jusqu’à la taille de vocabulaire voulue.</p>"
  }
 ],
 "3": [
  {
   "q": "La matrice de plongement a 100 000 lignes et 4 096 colonnes. Combien de nombres contient-elle ?",
   "choices": [
    "≈ 4 millions",
    "≈ 41 millions",
    "≈ 410 millions",
    "≈ 4 milliards"
   ],
   "answer": 2,
   "why": "<p>100 000 × 4 096 ≈ 4,1 × 10⁸, soit environ 410 millions.</p>"
  }
 ]
};
