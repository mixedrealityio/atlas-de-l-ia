export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi un réseau récurrent exploite-t-il mal les GPU ?",
   "choices": [
    "il calcule les positions l’une après l’autre",
    "il est trop petit",
    "il n’a pas de paramètres",
    "il utilise la vidéo"
   ],
   "answer": 0,
   "why": "<p>L’état de l’étape n dépend de l’étape n−1 : pas de parallélisme sur la séquence.</p>"
  }
 ],
 "3": [
  {
   "q": "Quel est le défaut principal de l’attention classique ?",
   "choices": [
    "son coût qui croît comme le carré de la longueur",
    "elle ne peut pas être entraînée",
    "elle ignore l’ordre",
    "elle n’utilise pas de matrices"
   ],
   "answer": 0,
   "why": "<p>Chaque jeton compare à tous les autres : n × n comparaisons.</p>"
  }
 ],
 "4": [
  {
   "q": "Dans un mélange d’experts, que reste-t-il nécessaire en mémoire ?",
   "choices": [
    "seulement les experts actifs",
    "tous les paramètres",
    "uniquement le routeur",
    "aucun poids"
   ],
   "answer": 1,
   "why": "<p>Les experts inactifs d’un jeton servent à d’autres : tout doit être en mémoire.</p>"
  }
 ],
 "7": [
  {
   "q": "Quel point commun entre RWKV, RetNet et xLSTM ?",
   "choices": [
    "un état de taille fixe et un coût linéaire",
    "une attention quadratique",
    "aucun paramètre",
    "un GAN"
   ],
   "answer": 0,
   "why": "<p>Elles cherchent à éviter le coût quadratique de l’attention.</p>"
  }
 ]
};
