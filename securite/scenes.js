export const SPECS = [
 {
  "key": "couches",
  "title": "Défense en profondeur",
  "sub": "aucune couche ne suffit seule",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Entrée",
    "s": "requête + contexte"
   },
   {
    "n": "Filtre d’entrée",
    "s": "classifieur de risques",
    "pal": "red"
   },
   {
    "n": "Modèle",
    "s": "aligné, consignes claires",
    "pal": "blue"
   },
   {
    "n": "Filtre de sortie",
    "s": "contenu, fuites",
    "pal": "red"
   },
   {
    "n": "Outils",
    "s": "permissions minimales",
    "pal": "red"
   },
   {
    "n": "Journal",
    "s": "trace et alerte",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "canal",
  "title": "Le problème de fond : un seul canal",
  "sub": "instructions et données se mélangent",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Consignes du système",
    "s": "fiables",
    "pal": "blue"
   },
   {
    "n": "Demande de l’utilisateur",
    "s": "à vérifier"
   },
   {
    "n": "Documents, pages, courriels",
    "s": "non fiables",
    "pal": "red"
   },
   {
    "n": "Contexte unique",
    "s": "tout est du texte"
   },
   {
    "n": "Le modèle",
    "s": "ne distingue pas parfaitement",
    "pal": "red"
   },
   {
    "n": "Actions",
    "s": "si des outils sont branchés",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "redteam",
  "title": "La boucle de l’équipe rouge",
  "sub": "attaquer pour mieux défendre",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.5,
  "nodes": [
   {
    "n": "Attaquer (autorisé)",
    "pal": "red"
   },
   {
    "n": "Mesurer",
    "pal": "blue"
   },
   {
    "n": "Corriger"
   },
   {
    "n": "Retester",
    "pal": "blue"
   }
  ],
  "center": "en continu",
  "x0": 80
 }
];
