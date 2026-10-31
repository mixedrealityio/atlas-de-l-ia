export const PRACTICE = {
 "2": [
  {
   "q": "Pourquoi le décodage d’un LLM à une requête est-il limité par la mémoire ?",
   "choices": [
    "il fait trop de calculs",
    "il lit tous les poids pour très peu d’opérations par octet",
    "le GPU manque de cœurs",
    "l’image est trop grande"
   ],
   "answer": 1,
   "why": "<p>Intensité arithmétique d’environ 1 opération par octet, très en dessous du seuil de calcul.</p>"
  }
 ],
 "4": [
  {
   "q": "Un modèle pèse 28 Go et la bande passante est 1 To/s. Borne de vitesse à une requête ?",
   "choices": [
    "≈ 3,6 jetons/s",
    "≈ 36 jetons/s",
    "≈ 360 jetons/s",
    "≈ 3 600 jetons/s"
   ],
   "answer": 1,
   "why": "<p>1 000 Go/s ÷ 28 Go ≈ 36 jetons/s.</p>"
  }
 ],
 "3": [
  {
   "q": "Passer de 16 à 8 bits par poids, à qualité acceptable, fait en gros…",
   "choices": [
    "doubler la mémoire",
    "diviser par deux la mémoire et la lecture",
    "ne rien changer",
    "multiplier par 4 la précision"
   ],
   "answer": 1,
   "why": "<p>Moitié moins d’octets à stocker et à lire.</p>"
  }
 ]
};
