export const PRACTICE = {
 "1": [
  {
   "q": "Qu’apporte la contrainte du VAE par rapport à un autoencodeur simple ?",
   "choices": [
    "un espace latent continu où l’on peut tirer et interpoler",
    "une image plus grande",
    "moins de paramètres",
    "un gradient plus petit"
   ],
   "answer": 0,
   "why": "<p>L’espace latent est bien rangé : un point tiré au hasard se décode en donnée plausible.</p>"
  }
 ],
 "2": [
  {
   "q": "Quel est le principe d’un GAN ?",
   "choices": [
    "deux réseaux s’entraînent l’un contre l’autre",
    "un seul réseau très profond",
    "un réseau sans poids",
    "deux ordinateurs en réseau"
   ],
   "answer": 0,
   "why": "<p>Un générateur fabrique, un discriminateur juge : l’un progresse contre l’autre.</p>"
  }
 ],
 "3": [
  {
   "q": "Pour générer une image par diffusion, on part de…",
   "choices": [
    "une image réelle",
    "du bruit pur",
    "un texte brut",
    "un maillage 3D"
   ],
   "answer": 1,
   "why": "<p>On débruite pas à pas, guidé par le texte.</p>"
  }
 ]
};
