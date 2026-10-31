export const PRACTICE = {
 "0": [
  {
   "q": "Qu’appelle-t-on « gradient » dans l’entraînement ?",
   "choices": [
    "la longueur du texte lu",
    "pour chaque poids, la variation de l’erreur qu’il provoquerait en bougeant un peu",
    "le nombre de GPU utilisés",
    "la vitesse de génération"
   ],
   "answer": 1,
   "why": "<p>Le gradient indique comment l’erreur varie avec chaque poids ; l’optimiseur s’en sert pour corriger.</p>"
  }
 ],
 "3": [
  {
   "q": "Combien de mémoire, environ, pour entraîner complètement un modèle de 3 milliards de paramètres (16 octets par paramètre, hors activations) ?",
   "choices": [
    "6 Go",
    "12 Go",
    "48 Go",
    "480 Go"
   ],
   "answer": 2,
   "why": "<p>3 × 10⁹ × 16 octets = 48 Go.</p>"
  }
 ],
 "6": [
  {
   "q": "Dans LoRA avec une matrice W de 4 096 × 4 096 et un rang r = 16, combien de paramètres sont entraînés pour cette matrice ?",
   "choices": [
    "≈ 16,8 millions",
    "≈ 131 000",
    "≈ 65 000",
    "≈ 4 096"
   ],
   "answer": 1,
   "why": "<p>2 · d · r = 2 × 4 096 × 16 = 131 072, contre 16,8 millions pour la matrice entière.</p>"
  }
 ],
 "7": [
  {
   "q": "La perte de validation remonte alors que celle d’entraînement baisse encore. Il s’agit…",
   "choices": [
    "d’un taux trop faible",
    "d’un surapprentissage",
    "d’une quantification trop forte",
    "d’un bon signe"
   ],
   "answer": 1,
   "why": "<p>Le modèle apprend les exemples par cœur et généralise moins : il faut arrêter plus tôt.</p>"
  }
 ]
};
