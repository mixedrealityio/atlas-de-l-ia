export const SPECS = [
 {
  "key": "familles",
  "title": "Trois familles d’intelligence",
  "sub": "une idée de 1920",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Abstraite",
    "s": "mots, nombres, symboles",
    "pal": "blue"
   },
   {
    "n": "Sociale",
    "s": "comprendre les gens",
    "pal": "blue"
   },
   {
    "n": "Mécanique",
    "s": "comprendre les choses",
    "pal": "red"
   },
   {
    "n": "Tests de QI",
    "s": "ont retenu la première"
   },
   {
    "n": "Aptitude spatiale",
    "s": "retourner un objet dans sa tête",
    "pal": "red"
   },
   {
    "n": "Constat",
    "s": "prédit les inventeurs, rarement testée",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "film",
  "title": "Un film, pas une photographie",
  "sub": "le modèle mental animé",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Interrupteur",
    "s": "passe le témoin",
    "pal": "blue"
   },
   {
    "n": "Fil",
    "s": "conduit le courant",
    "pal": "blue"
   },
   {
    "n": "Moteur",
    "s": "tourne",
    "pal": "blue"
   },
   {
    "n": "Courroie",
    "s": "entraîne",
    "pal": "red"
   },
   {
    "n": "Tambour",
    "s": "fait tourner le linge",
    "pal": "blue"
   },
   {
    "n": "Panne",
    "s": "un coureur a lâché le témoin",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "pieces",
  "title": "Voir les pièces, pas les noms",
  "sub": "contre la fixité fonctionnelle",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Un objet nommé",
    "s": "« bougie », « boîte »"
   },
   {
    "n": "Le nom fige l’usage",
    "s": "fixité fonctionnelle",
    "pal": "red"
   },
   {
    "n": "Décomposer",
    "s": "de quoi est-il fait ?",
    "pal": "blue"
   },
   {
    "n": "Parties sans noms",
    "s": "cire, ficelle, carton",
    "pal": "blue"
   },
   {
    "n": "Autres usages",
    "s": "que peut faire chaque partie ?",
    "pal": "blue"
   },
   {
    "n": "Solution",
    "s": "la boîte devient un support",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "chemin",
  "title": "Deviner ou suivre le chemin",
  "sub": "deux stratégies de diagnostic",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Symptomatique",
    "s": "rapprocher d’une panne déjà vue",
    "pal": "red"
   },
   {
    "n": "Rapide",
    "s": "marche si le cas est familier"
   },
   {
    "n": "Topographique",
    "s": "suivre le chemin du signal normal",
    "pal": "blue"
   },
   {
    "n": "Point d’arrêt",
    "s": "où le bon signal devient mauvais",
    "pal": "blue"
   },
   {
    "n": "Lent mais général",
    "s": "marche sur une machine jamais vue",
    "pal": "blue"
   },
   {
    "n": "Savoir tacite",
    "s": "on sait plus qu’on ne peut dire",
    "pal": "dark"
   }
  ],
  "x0": 120
 },
 {
  "key": "moitie",
  "title": "La méthode de la moitié",
  "sub": "chaque test coupe le problème en deux",
  "kind": "curve",
  "fn": "bisection",
  "x0": 160
 },
 {
  "key": "entrainer",
  "title": "S’entraîner",
  "sub": "trois principes concrets",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Dire la chaîne",
    "s": "décrire à voix haute comment cela marche",
    "pal": "blue"
   },
   {
    "n": "Repérer le trou",
    "s": "la première étape qu’on ne sait pas décrire",
    "pal": "red"
   },
   {
    "n": "Tester le milieu",
    "s": "méthode de la moitié",
    "pal": "blue"
   },
   {
    "n": "Ouvrir ce qu’on peut perdre",
    "s": "vieil appareil débranché",
    "pal": "blue"
   },
   {
    "n": "Photographier",
    "s": "chaque étape, chaque vis"
   },
   {
    "n": "Résultat",
    "s": "un modèle de plus dans la tête",
    "pal": "red"
   }
  ],
  "x0": 200
 },
 {
  "key": "ia",
  "title": "Ce que l’IA en fait",
  "sub": "cinq échos",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Modèles du monde",
    "s": "simuler avant d’agir (chapitre 13)",
    "pal": "blue"
   },
   {
    "n": "Diagnostic de pannes",
    "s": "suivre la chaîne, bissection",
    "pal": "blue"
   },
   {
    "n": "LLM : symptomatique",
    "s": "forts sur les cas déjà vus",
    "pal": "red"
   },
   {
    "n": "Interprétabilité",
    "s": "tracer le chemin dans le réseau",
    "pal": "blue"
   },
   {
    "n": "Atrophie",
    "s": "ne plus ouvrir, c’est perdre le modèle",
    "pal": "red"
   },
   {
    "n": "Robots",
    "s": "le savoir tacite des mains",
    "pal": "red"
   }
  ],
  "x0": 240
 },
 {
  "key": "rag",
  "title": "Dépanner une chaîne d’IA",
  "sub": "l’exemple d’un assistant avec documents",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Question",
    "s": "la réponse est fausse",
    "pal": "red"
   },
   {
    "n": "Découpage",
    "s": "les documents sont-ils bien coupés ?"
   },
   {
    "n": "Recherche",
    "s": "le bon passage est-il retrouvé ?",
    "pal": "blue"
   },
   {
    "n": "Contexte",
    "s": "le passage est-il dans le prompt ?",
    "pal": "blue"
   },
   {
    "n": "Génération",
    "s": "le modèle l’utilise-t-il ?"
   },
   {
    "n": "Test du milieu",
    "s": "d’abord : la recherche ramène-t-elle le bon passage ?",
    "pal": "red"
   }
  ],
  "x0": 280
 }
];
