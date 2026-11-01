export const PRACTICE = {
 "2": [
  {
   "q": "Quantifier un modèle de 16 à environ 4,85 bits par poids le rend…",
   "choices": [
    "environ 3,3 fois plus petit et plus rapide à lire",
    "plus gros",
    "inchangé",
    "dix fois plus rapide"
   ],
   "answer": 0,
   "why": "<p>16 / 4,85 ≈ 3,3 : moins d’octets à stocker et à relire à chaque jeton.</p>"
  }
 ],
 "3": [
  {
   "q": "Qu’est-ce qui fait croître le cache KV ?",
   "choices": [
    "le contexte, la réponse et le nombre de requêtes",
    "uniquement la taille du vocabulaire",
    "la couleur du GPU",
    "le nombre de GPU"
   ],
   "answer": 0,
   "why": "<p>Il est proportionnel au nombre total de jetons gardés en mémoire.</p>"
  }
 ],
 "5": [
  {
   "q": "Que se passe-t-il quand le modèle ne tient pas en mémoire GPU ?",
   "choices": [
    "le débit chute car une partie est lue depuis la RAM, plus lente",
    "il va plus vite",
    "rien",
    "le modèle devient plus petit"
   ],
   "answer": 0,
   "why": "<p>La bande passante de la RAM est beaucoup plus basse que celle de la mémoire GPU.</p>"
  }
 ],
 "6": [
  {
   "q": "En génération à une seule requête, qu’est-ce qui limite le plus souvent la vitesse ?",
   "choices": [
    "la bande passante mémoire",
    "la fréquence de l’écran",
    "le nombre de jetons du prompt",
    "le tokenizer"
   ],
   "answer": 0,
   "why": "<p>Chaque jeton relit tous les poids actifs : octets lus ÷ bande passante.</p>"
  }
 ],
 "7": [
  {
   "q": "Pourquoi le préremplissage est-il plutôt limité par le calcul ?",
   "choices": [
    "tous les jetons du prompt sont traités ensemble",
    "il n’utilise pas le GPU",
    "il lit la RAM",
    "il est sans poids"
   ],
   "answer": 0,
   "why": "<p>Beaucoup de calcul pour une seule lecture des poids.</p>"
  }
 ]
};
