export const PRACTICE = {
 "2": [
  {
   "q": "Combien d’experts travaillent pour un token, dans une couche ?",
   "choices": [
    "les 256",
    "8, plus l’expert partagé",
    "un seul",
    "aucun, seul le routeur calcule"
   ],
   "answer": 1,
   "why": "<p>Le routeur garde les 8 meilleurs scores ; l’expert partagé travaille toujours.</p>"
  }
 ],
 "3": [
  {
   "q": "Pourquoi le MoE génère-t-il plus vite que le 27B dense ?",
   "choices": [
    "il a moins de poids en mémoire",
    "il lit ~3 Md de poids par token au lieu de 27",
    "il n’a pas de tête de sortie",
    "il ignore le contexte"
   ],
   "answer": 1,
   "why": "<p>La génération est limitée par la lecture de la mémoire : lire moins, c’est aller plus vite.</p>"
  }
 ],
 "4": [
  {
   "q": "Pourquoi garder le routeur en 16 bits ?",
   "choices": [
    "il est énorme",
    "une petite erreur change les experts choisis, donc toute la couche",
    "il n’est jamais utilisé",
    "pour le cache KV"
   ],
   "answer": 1,
   "why": "<p>Il est minuscule, le garder précis ne coûte presque rien.</p>"
  }
 ]
};
