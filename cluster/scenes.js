export const SPECS = [
 {
  "key": "grappe",
  "title": "Une grappe de GPU",
  "sub": "quatre nœuds de huit GPU",
  "kind": "cluster",
  "nodes": 4,
  "gpus": 8,
  "x0": 0
 },
 {
  "key": "para",
  "title": "Placer le parallélisme",
  "sub": "chaque type de découpage à sa place",
  "kind": "pipeline",
  "per": 2,
  "bw": 3.4,
  "gap": 0.9,
  "y": 1.4,
  "stages": [
   {
    "n": "Tenseurs",
    "s": "dans un nœud : NVLink",
    "pal": "red"
   },
   {
    "n": "Experts",
    "s": "souvent dans un nœud",
    "pal": "red"
   },
   {
    "n": "Pipeline",
    "s": "entre nœuds voisins",
    "pal": "blue"
   },
   {
    "n": "Données",
    "s": "sur tout le cluster",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "watts",
  "title": "L’échelle de la puissance",
  "sub": "du GPU à la salle",
  "kind": "logbars",
  "unit": "kW",
  "axis": "échelle logarithmique, ordres de grandeur",
  "items": [
   {
    "n": "GPU H100",
    "v": 0.7,
    "pal": "blue"
   },
   {
    "n": "Serveur 8 GPU",
    "v": 10,
    "pal": "blue"
   },
   {
    "n": "Armoire de 72 GPU",
    "v": 120,
    "pal": "red"
   },
   {
    "n": "10 000 GPU",
    "v": 14000,
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "pannes",
  "title": "Tenir en cas de panne",
  "sub": "sauvegarder pour reprendre",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "dernier point de contrôle",
  "stages": [
   {
    "n": "Entraîner",
    "s": "des milliers de GPU",
    "pal": "blue"
   },
   {
    "n": "Point de contrôle",
    "s": "sauvegarde régulière",
    "pal": "red"
   },
   {
    "n": "Panne",
    "s": "un GPU, un câble…"
   },
   {
    "n": "Détecter",
    "s": "et isoler le matériel"
   },
   {
    "n": "Redémarrer",
    "s": "depuis le point de contrôle",
    "pal": "blue"
   }
  ],
  "x0": 120
 },
 {
  "key": "energie",
  "title": "Où va l’énergie",
  "sub": "du réseau électrique au calcul",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Réseau électrique",
    "s": "contrat, mégawatts"
   },
   {
    "n": "Alimentation",
    "s": "conversion, pertes",
    "pal": "blue"
   },
   {
    "n": "Puces",
    "s": "calcul",
    "pal": "red"
   },
   {
    "n": "Chaleur",
    "s": "presque tout",
    "pal": "red"
   },
   {
    "n": "Refroidissement",
    "s": "air ou liquide",
    "pal": "blue"
   },
   {
    "n": "Indicateur",
    "s": "PUE, kWh par requête"
   }
  ],
  "x0": 160
 }
];
