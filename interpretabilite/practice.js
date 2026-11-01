export const PRACTICE = {
 "1": [
  {
   "q": "Que mesure une méthode post-hoc comme SHAP ?",
   "choices": [
    "l’effet de chaque variable d’entrée sur la sortie",
    "le nombre de couches",
    "la vitesse du GPU",
    "le vocabulaire"
   ],
   "answer": 0,
   "why": "<p>Elle répartit la prédiction entre variables : elle décrit le comportement sans ouvrir le mécanisme.</p>"
  }
 ],
 "2": [
  {
   "q": "Pourquoi fait-on des ablations en interprétabilité mécaniste ?",
   "choices": [
    "pour valider qu’un composant est bien utilisé pour une fonction",
    "pour réduire la taille du fichier",
    "pour accélérer l’entraînement",
    "pour changer de langue"
   ],
   "answer": 0,
   "why": "<p>Couper un composant et observer le changement de sortie teste son rôle causal.</p>"
  }
 ],
 "3": [
  {
   "q": "Qu’est-ce que la superposition ?",
   "choices": [
    "un réseau stocke plus de concepts que de neurones en les mêlant",
    "deux GPU superposés",
    "deux modèles fusionnés",
    "une couche dupliquée"
   ],
   "answer": 0,
   "why": "<p>Les concepts sont représentés par des directions, pas par des neurones individuels.</p>"
  }
 ]
};
