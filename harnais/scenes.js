export const SPECS = [
 {
  "key": "seul",
  "title": "Le modèle et son harnais",
  "sub": "le modèle seul ne fait que du texte",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.7,
  "y": 1.4,
  "stages": [
   {
    "n": "Utilisateur",
    "s": "une demande"
   },
   {
    "n": "Harnais",
    "s": "prompts, outils, règles",
    "pal": "blue"
   },
   {
    "n": "Modèle",
    "s": "texte → texte",
    "pal": "red"
   },
   {
    "n": "Actions",
    "s": "fichiers, web, code"
   }
  ],
  "x0": 0
 },
 {
  "key": "outil",
  "title": "Un appel d’outil",
  "sub": "le modèle demande, le harnais exécute",
  "kind": "pipeline",
  "per": 2,
  "bw": 3.2,
  "gap": 0.9,
  "y": 1.4,
  "loop": "résultat renvoyé au modèle",
  "stages": [
   {
    "n": "Le modèle écrit un appel",
    "s": "nom + arguments (JSON)",
    "pal": "blue"
   },
   {
    "n": "Le harnais l’exécute",
    "s": "avec vérifications",
    "pal": "red"
   },
   {
    "n": "Le résultat est du texte",
    "s": "ajouté au contexte"
   },
   {
    "n": "Le modèle continue",
    "s": "réponse ou nouvel appel",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "contexte",
  "title": "Le contenu du contexte",
  "sub": "tout ce que le modèle lit à chaque tour",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Instructions",
    "s": "rôle, règles",
    "pal": "blue"
   },
   {
    "n": "Outils",
    "s": "descriptions"
   },
   {
    "n": "Mémoire",
    "s": "notes, préférences"
   },
   {
    "n": "Historique",
    "s": "échanges passés"
   },
   {
    "n": "Résultats d’outils",
    "s": "sorties"
   },
   {
    "n": "Demande",
    "s": "la question",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "rag",
  "title": "Chercher avant de répondre",
  "sub": "la recherche augmentée (RAG)",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Question"
   },
   {
    "n": "Recherche",
    "s": "plongements, mots-clés",
    "pal": "blue"
   },
   {
    "n": "Passages",
    "s": "les plus proches"
   },
   {
    "n": "Contexte",
    "s": "question + passages"
   },
   {
    "n": "Réponse",
    "s": "avec sources",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
