export const PRACTICE = {
 "1": [
  {
   "q": "Une température de 0 revient à…",
   "choices": [
    "tirer au hasard parmi tous les mots",
    "toujours choisir le mot le plus probable",
    "ignorer le contexte",
    "doubler la longueur de la réponse"
   ],
   "answer": 1,
   "why": "<p>À T → 0, la distribution se concentre sur le mot dont le score est maximal : c’est le décodage glouton.</p>"
  },
  {
   "q": "Quel réglage aplatit la distribution de probabilités ?",
   "choices": [
    "baisser la température",
    "monter la température",
    "baisser top-p",
    "monter la pénalité de répétition"
   ],
   "answer": 1,
   "why": "<p>Diviser les scores par un T plus grand les rapproche les uns des autres : les mots improbables gagnent des chances.</p>"
  }
 ],
 "2": [
  {
   "q": "Un modèle est très sûr de lui : un mot a 95 % de probabilité. Avec top-p = 0,9, combien de mots reste-t-il ?",
   "choices": [
    "1",
    "9",
    "tout le vocabulaire",
    "aucun"
   ],
   "answer": 0,
   "why": "<p>Le mot le plus probable seul atteint 95 % ≥ 90 % : l’ensemble minimal n’a qu’un mot. Top-p s’adapte, contrairement à top-k.</p>"
  }
 ],
 "5": [
  {
   "q": "Pourquoi une pénalité de répétition trop forte pose-t-elle problème ?",
   "choices": [
    "elle ralentit le GPU",
    "elle empêche de répéter des mots nécessaires (noms propres, code)",
    "elle fait grandir le contexte",
    "elle désactive la température"
   ],
   "answer": 1,
   "why": "<p>Elle abaisse le score de tout mot déjà écrit, y compris ceux qu’il faut précisément reprendre.</p>"
  }
 ]
};
