export const PRACTICE = {
 "1": [
  {
   "q": "Quelle représentation est la plus utilisée dans les jeux vidéo ?",
   "choices": [
    "le maillage de triangles",
    "le champ de radiance NeRF",
    "les voxels",
    "le nuage de points"
   ],
   "answer": 0,
   "why": "<p>Les cartes graphiques sont optimisées pour dessiner des triangles texturés.</p>"
  }
 ],
 "2": [
  {
   "q": "Que renvoie le réseau NeRF pour un point de l’espace vu sous une direction ?",
   "choices": [
    "un maillage",
    "une densité et une couleur",
    "une photo entière",
    "un identifiant d’objet"
   ],
   "answer": 1,
   "why": "<p>On cumule ensuite ces valeurs le long du rayon pour obtenir la couleur du pixel.</p>"
  }
 ],
 "3": [
  {
   "q": "Quel est le principal avantage du gaussian splatting sur NeRF ?",
   "choices": [
    "il produit directement un maillage propre",
    "il se rend beaucoup plus vite",
    "il n’a pas besoin de photos",
    "il n’a aucun paramètre"
   ],
   "answer": 1,
   "why": "<p>Projeter des gaussiennes explicites est bien plus rapide que de questionner un réseau le long de chaque rayon.</p>"
  }
 ]
};
