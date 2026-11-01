export const SPECS = [
 {
  "key": "ingest",
  "title": "L’ingestion",
  "sub": "de documents à un index",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Documents",
    "s": "PDF, pages, tickets"
   },
   {
    "n": "Extraction",
    "s": "texte propre, tableaux"
   },
   {
    "n": "Découpage",
    "s": "passages cohérents",
    "pal": "blue"
   },
   {
    "n": "Plongements",
    "s": "un vecteur par passage",
    "pal": "blue"
   },
   {
    "n": "Métadonnées",
    "s": "source, date, droits"
   },
   {
    "n": "Index",
    "s": "vecteurs + mots-clés",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "requete",
  "title": "La recherche et la réponse",
  "sub": "chercher large, reclasser, répondre avec sources",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "reformuler",
  "stages": [
   {
    "n": "Question",
    "s": "de l’utilisateur"
   },
   {
    "n": "Réécriture",
    "s": "plus précise",
    "pal": "blue"
   },
   {
    "n": "Recherche hybride",
    "s": "sens + mots-clés",
    "pal": "blue"
   },
   {
    "n": "Reclassement",
    "s": "garder les meilleurs",
    "pal": "red"
   },
   {
    "n": "Contexte",
    "s": "passages + consigne"
   },
   {
    "n": "Réponse",
    "s": "avec citations",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "espace",
  "title": "Chercher par le sens",
  "sub": "les passages proches de la question",
  "kind": "scatter",
  "by": 2.4,
  "points": [
   {
    "n": "question",
    "x": -0.4,
    "y": 0.2,
    "c": "red"
   },
   {
    "n": "passage A",
    "x": -1.6,
    "y": 0.9,
    "c": "blue"
   },
   {
    "n": "passage B",
    "x": 0.9,
    "y": 1.1,
    "c": "blue"
   },
   {
    "n": "passage C",
    "x": 0.3,
    "y": -0.9,
    "c": "blue"
   },
   {
    "n": "hors sujet 1",
    "x": 3.4,
    "y": 1.4
   },
   {
    "n": "hors sujet 2",
    "x": 3.0,
    "y": -1.5
   },
   {
    "n": "hors sujet 3",
    "x": -3.6,
    "y": -1.3
   }
  ],
  "arrows": [
   [
    "question",
    "passage A",
    ""
   ],
   [
    "question",
    "passage B",
    ""
   ],
   [
    "question",
    "passage C",
    ""
   ]
  ],
  "walk": [
   "question",
   "passage A",
   "passage B",
   "passage C"
  ],
  "info": "les k passages les plus proches sont renvoyés",
  "x0": 80
 },
 {
  "key": "agentique",
  "title": "Le RAG en boucle",
  "sub": "chercher, lire, juger, recommencer",
  "kind": "cycle",
  "unit": "temps",
  "speed": 0.5,
  "nodes": [
   {
    "n": "Planifier",
    "pal": "blue"
   },
   {
    "n": "Chercher",
    "pal": "blue"
   },
   {
    "n": "Lire"
   },
   {
    "n": "Juger : suffisant ?",
    "pal": "red"
   },
   {
    "n": "Répondre"
   }
  ],
  "center": "boucle jusqu’à preuve",
  "x0": 120
 },
 {
  "key": "wiki",
  "title": "Le wiki tenu par un LLM",
  "sub": "compiler la connaissance une fois, la relire ensuite",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "loop": "mise à jour",
  "stages": [
   {
    "n": "Sources brutes",
    "s": "notes, articles, rapports"
   },
   {
    "n": "LLM rédacteur",
    "s": "résume, relie, classe",
    "pal": "blue"
   },
   {
    "n": "Wiki",
    "s": "pages, index, liens",
    "pal": "red"
   },
   {
    "n": "Questions",
    "s": "lisent le wiki"
   },
   {
    "n": "Contrôle",
    "s": "contradictions, pages périmées",
    "pal": "blue"
   }
  ],
  "x0": 160
 },
 {
  "key": "voix",
  "title": "Le budget de latence d’un RAG vocal",
  "sub": "de la fin de parole au premier son",
  "kind": "mem",
  "unit": "ms",
  "scale": 0.0042,
  "limit": 800,
  "limitLabel": "budget d’environ 800 ms",
  "configs": [
   {
    "n": "Séquentiel",
    "segs": [
     [
      "Fin de parole",
      50,
      "dark"
     ],
     [
      "Reconnaissance",
      150,
      "blue"
     ],
     [
      "Recherche",
      100,
      "red"
     ],
     [
      "LLM : 1er jeton",
      400,
      "blue"
     ],
     [
      "Synthèse : 1er son",
      150,
      "paper"
     ]
    ]
   },
   {
    "n": "Recherche en parallèle",
    "segs": [
     [
      "Fin de parole",
      50,
      "dark"
     ],
     [
      "Reconnaissance",
      150,
      "blue"
     ],
     [
      "LLM : 1er jeton",
      400,
      "blue"
     ],
     [
      "Synthèse : 1er son",
      150,
      "paper"
     ]
    ]
   }
  ],
  "info": "ordres de grandeur d’un assistant vocal en flux",
  "x0": 200
 },
 {
  "key": "prod",
  "title": "Ce qui industrialise un RAG",
  "sub": "cinq chantiers permanents",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Évaluation",
    "s": "jeu de référence rejoué",
    "pal": "red"
   },
   {
    "n": "Droits d’accès",
    "s": "filtrer avant de répondre",
    "pal": "red"
   },
   {
    "n": "Fraîcheur",
    "s": "réindexer ce qui change",
    "pal": "blue"
   },
   {
    "n": "Observabilité",
    "s": "traces, métriques, alertes",
    "pal": "blue"
   },
   {
    "n": "Coûts",
    "s": "cache, modèles adaptés"
   },
   {
    "n": "Sécurité",
    "s": "documents non fiables",
    "pal": "red"
   }
  ],
  "x0": 240
 },
 {
  "key": "ragplus",
  "title": "RAG avancé et mémoire",
  "sub": "retrouver mieux, se souvenir",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Recherche hybride",
    "s": "mots-clés BM25 + vecteurs",
    "pal": "blue"
   },
   {
    "n": "Reclassement",
    "s": "un modèle réordonne",
    "pal": "blue"
   },
   {
    "n": "HyDE",
    "s": "chercher avec un document imaginé",
    "pal": "blue"
   },
   {
    "n": "GraphRAG",
    "s": "graphe d’entités et résumés",
    "pal": "red"
   },
   {
    "n": "Contexte très long",
    "s": "1 M de jetons, coûteux"
   },
   {
    "n": "Mémoire d’agent",
    "s": "épisodique, sémantique, procédurale",
    "pal": "red"
   }
  ],
  "x0": 280
 }
];
