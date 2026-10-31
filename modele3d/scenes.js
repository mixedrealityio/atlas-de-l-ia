export const SPECS = [
 {
  "key": "reps",
  "title": "Les représentations 3D",
  "sub": "cinq façons de décrire un objet",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Nuage de points",
    "s": "des points dans l’espace"
   },
   {
    "n": "Voxels",
    "s": "des cubes, comme des pixels 3D"
   },
   {
    "n": "Maillage",
    "s": "sommets + triangles",
    "pal": "blue"
   },
   {
    "n": "Champ de distance (SDF)",
    "s": "une fonction : dedans / dehors",
    "pal": "red"
   },
   {
    "n": "Radiance (NeRF)",
    "s": "densité + couleur partout",
    "pal": "red"
   },
   {
    "n": "Gaussiennes",
    "s": "des taches 3D qui se projettent",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "nerf",
  "title": "Le principe de NeRF",
  "sub": "un réseau qui prédit densité et couleur",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.65,
  "y": 1.4,
  "loop": "ajuster le réseau",
  "stages": [
   {
    "n": "Photos",
    "s": "plusieurs angles"
   },
   {
    "n": "Un rayon par pixel",
    "s": "depuis la caméra"
   },
   {
    "n": "Échantillons",
    "s": "points sur le rayon",
    "pal": "blue"
   },
   {
    "n": "Réseau",
    "s": "(x, y, z, vue) → densité, couleur",
    "pal": "red"
   },
   {
    "n": "Rendu volumique",
    "s": "cumule le long du rayon"
   },
   {
    "n": "Comparer",
    "s": "à la vraie photo",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "gauss",
  "title": "Les gaussiennes 3D",
  "sub": "un nuage qui s’ajuste aux photos",
  "kind": "cloud",
  "x0": 80
 },
 {
  "key": "gen3d",
  "title": "Générer un objet",
  "sub": "d’un texte ou d’une image au maillage texturé",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.65,
  "y": 1.4,
  "stages": [
   {
    "n": "Texte ou image",
    "s": "la demande"
   },
   {
    "n": "Diffusion de forme",
    "s": "dans un espace latent",
    "pal": "blue"
   },
   {
    "n": "Surface",
    "s": "marching cubes",
    "pal": "red"
   },
   {
    "n": "Maillage",
    "s": "sans texture"
   },
   {
    "n": "Textures",
    "s": "vues multiples, puis fusion",
    "pal": "blue"
   },
   {
    "n": "Objet 3D",
    "s": "matériaux prêts à l’emploi",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
