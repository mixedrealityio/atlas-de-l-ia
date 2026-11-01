export const SPECS = [
 {
  "key": "ae",
  "title": "L’autoencodeur",
  "sub": "compresser puis reconstruire",
  "kind": "net",
  "layers": [
   8,
   5,
   2,
   5,
   8
  ],
  "names": [
   "Entrée",
   "Encodeur",
   "Espace latent",
   "Décodeur",
   "Sortie"
  ],
  "params": "goulot de 2 valeurs : une description compacte",
  "x0": 0
 },
 {
  "key": "vae",
  "title": "L’autoencodeur variationnel",
  "sub": "un espace latent bien rangé",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Donnée",
    "s": "une image"
   },
   {
    "n": "Encodeur",
    "s": "prédit μ et σ",
    "pal": "blue"
   },
   {
    "n": "Tirage de z",
    "s": "dans une loi normale",
    "pal": "red"
   },
   {
    "n": "Décodeur",
    "s": "reconstruit",
    "pal": "blue"
   },
   {
    "n": "Perte",
    "s": "reconstruction + KL"
   },
   {
    "n": "Génération",
    "s": "tirer z, décoder",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "gan",
  "title": "Le duel des GAN",
  "sub": "un faussaire et un expert",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.45,
  "nodes": [
   {
    "n": "Générateur : fabrique",
    "pal": "red"
   },
   {
    "n": "Faux exemples"
   },
   {
    "n": "Discriminateur : juge",
    "pal": "blue"
   },
   {
    "n": "Retour : qui a gagné ?"
   }
  ],
  "center": "jeu à deux",
  "x0": 80
 },
 {
  "key": "diffusion2",
  "title": "La diffusion, pas à pas",
  "sub": "du bruit à l’image",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Bruit pur",
    "s": "t = T",
    "pal": "dark"
   },
   {
    "n": "Pas de débruitage",
    "s": "le réseau prédit le bruit",
    "pal": "blue"
   },
   {
    "n": "…× 20 à 50",
    "s": "guidé par le texte",
    "pal": "blue"
   },
   {
    "n": "Image",
    "s": "nette",
    "pal": "red"
   }
  ],
  "x0": 120
 },
 {
  "key": "auto",
  "title": "Autorégression ou diffusion",
  "sub": "deux manières de fabriquer",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Autorégressif",
    "s": "un jeton après l’autre",
    "pal": "blue"
   },
   {
    "n": "Texte, audio, images en jetons",
    "s": "même mécanique que le LLM"
   },
   {
    "n": "Séquentiel",
    "s": "lent, mais exact et contrôlable"
   },
   {
    "n": "Diffusion",
    "s": "toute l’image à la fois",
    "pal": "red"
   },
   {
    "n": "Étapes de raffinement",
    "s": "du bruit à la netteté"
   },
   {
    "n": "Parallèle",
    "s": "rapide, bon pour les images"
   }
  ],
  "x0": 160
 },
 {
  "key": "audiovisuel",
  "title": "Voix, musique, vidéo",
  "sub": "du texte au son et à l’image animée",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Texte ou son",
    "s": "la demande"
   },
   {
    "n": "Codec neuronal",
    "s": "son → jetons",
    "pal": "blue"
   },
   {
    "n": "Modèle génératif",
    "s": "jetons audio ou latents vidéo",
    "pal": "red"
   },
   {
    "n": "Décodeur",
    "s": "jetons → forme d’onde, images",
    "pal": "blue"
   },
   {
    "n": "Cohérence temporelle",
    "s": "le plus dur",
    "pal": "red"
   },
   {
    "n": "Sortie",
    "s": "voix, musique, vidéo"
   }
  ],
  "x0": 200
 }
];
