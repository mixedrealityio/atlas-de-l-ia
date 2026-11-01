export const SPECS = [
 {
  "key": "sim",
  "title": "Le simulateur",
  "sub": "modifiez les réglages dans la page de gauche",
  "kind": "llmsim",
  "x0": 0
 },
 {
  "key": "serving",
  "title": "Servir à l’échelle",
  "sub": "ce que font vLLM et ses semblables",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "File de requêtes",
    "s": "arrivées au fil de l’eau"
   },
   {
    "n": "Lot continu",
    "s": "ajouter et retirer des requêtes à chaque pas",
    "pal": "blue"
   },
   {
    "n": "Cache paginé",
    "s": "KV découpé en blocs (PagedAttention)",
    "pal": "blue"
   },
   {
    "n": "Préfixe partagé",
    "s": "réutiliser un prompt commun",
    "pal": "blue"
   },
   {
    "n": "Décodage spéculatif",
    "s": "un petit modèle propose, le grand valide",
    "pal": "red"
   },
   {
    "n": "Résultat",
    "s": "plus de débit pour le même GPU"
   }
  ],
  "x0": 40
 }
];
