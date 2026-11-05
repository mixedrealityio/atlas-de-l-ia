export const SPECS = [
 {
  "key": "deuxvoies",
  "title": "Deux architectures",
  "sub": "cascade ou bout en bout",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Cascade",
    "s": "VAD → STT → LLM → TTS",
    "pal": "blue"
   },
   {
    "n": "Avantages",
    "s": "modulaire, RAG et outils faciles",
    "pal": "blue"
   },
   {
    "n": "Limite",
    "s": "latence, intonation perdue"
   },
   {
    "n": "Bout en bout",
    "s": "audio → modèle → audio",
    "pal": "red"
   },
   {
    "n": "Avantages",
    "s": "≈ 200 ms, ton, rires, chevauchements",
    "pal": "red"
   },
   {
    "n": "Limite",
    "s": "RAG et outils plus difficiles"
   }
  ],
  "x0": 0
 },
 {
  "key": "mimi",
  "title": "Mimi, un codec neuronal",
  "sub": "Kyutai, 2024",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Audio 24 kHz",
    "s": "24 000 valeurs par seconde"
   },
   {
    "n": "Encodeur",
    "s": "convolutions puis transformeur",
    "pal": "blue"
   },
   {
    "n": "12,5 trames/s",
    "s": "une trame toutes les 80 ms",
    "pal": "blue"
   },
   {
    "n": "Niveau sémantique",
    "s": "VQ distillé de WavLM (gelé)",
    "pal": "red"
   },
   {
    "n": "7 niveaux acoustiques",
    "s": "quantification résiduelle (RVQ)",
    "pal": "red"
   },
   {
    "n": "Décodeur",
    "s": "transformeur puis convolutions",
    "pal": "blue"
   }
  ],
  "x0": 40
 },
 {
  "key": "moshi",
  "title": "Moshi, un dialogue en duplex",
  "sub": "écouter et parler en même temps",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Flux de l’utilisateur",
    "s": "jetons Mimi entrants",
    "pal": "blue"
   },
   {
    "n": "Flux de Moshi",
    "s": "jetons Mimi sortants",
    "pal": "red"
   },
   {
    "n": "Monologue intérieur",
    "s": "texte de ce que Moshi dit",
    "pal": "red"
   },
   {
    "n": "Helium 7B",
    "s": "modèle de langage de base",
    "pal": "blue"
   },
   {
    "n": "Chaque 80 ms",
    "s": "écoute et parle à la fois"
   },
   {
    "n": "Latence",
    "s": "≈ 200 ms en pratique",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "naturel",
  "title": "Ce qui rend une voix naturelle",
  "sub": "six ingrédients",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Latence",
    "s": "< 1 s jusqu’au premier son",
    "pal": "red"
   },
   {
    "n": "Tours de parole",
    "s": "savoir quand l’autre a fini",
    "pal": "red"
   },
   {
    "n": "Interruption",
    "s": "se taire quand on parle",
    "pal": "red"
   },
   {
    "n": "Prosodie",
    "s": "intonation, rythme, pauses",
    "pal": "blue"
   },
   {
    "n": "Style oral",
    "s": "phrases courtes, pas de listes",
    "pal": "blue"
   },
   {
    "n": "Écoute",
    "s": "« d’accord », « je vois »"
   }
  ],
  "x0": 120
 },
 {
  "key": "latence",
  "title": "Le budget de latence",
  "sub": "de la fin de parole au premier son, en ms",
  "kind": "mem",
  "unit": "ms",
  "scale": 0.0011,
  "limit": 800,
  "limitLabel": "≈ 800 ms : encore naturel",
  "configs": [
   {
    "n": "Cascade naïve",
    "segs": [
     [
      "Silence fixe",
      800,
      "dark"
     ],
     [
      "STT complet",
      400,
      "blue"
     ],
     [
      "Recherche",
      150,
      "red"
     ],
     [
      "LLM : réponse entière",
      1200,
      "blue"
     ],
     [
      "TTS : fichier entier",
      500,
      "paper"
     ]
    ]
   },
   {
    "n": "Cascade réglée",
    "segs": [
     [
      "Fin de tour sémantique",
      250,
      "dark"
     ],
     [
      "STT en flux",
      100,
      "blue"
     ],
     [
      "Recherche",
      80,
      "red"
     ],
     [
      "LLM : 1er jeton",
      250,
      "blue"
     ],
     [
      "TTS : 1er son",
      120,
      "paper"
     ]
    ]
   },
   {
    "n": "Bout en bout (Moshi)",
    "segs": [
     [
      "Modèle audio",
      200,
      "red"
     ]
    ]
   }
  ],
  "info": "ordres de grandeur, sur un GPU local",
  "x0": 160
 },
 {
  "key": "stt",
  "title": "Reconnaissance hors ligne",
  "sub": "les principaux modèles",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Whisper large-v3-turbo",
    "s": "multilingue, très robuste",
    "pal": "blue"
   },
   {
    "n": "faster-whisper",
    "s": "CTranslate2, int8, GPU ou CPU",
    "pal": "blue"
   },
   {
    "n": "whisper.cpp",
    "s": "CPU, Mac, petites machines"
   },
   {
    "n": "Parakeet TDT 0.6B v3",
    "s": "NVIDIA, 25 langues dont français",
    "pal": "blue"
   },
   {
    "n": "Kyutai STT",
    "s": "en flux, français et anglais",
    "pal": "red"
   },
   {
    "n": "Vosk",
    "s": "très léger, Raspberry Pi"
   }
  ],
  "x0": 200
 },
 {
  "key": "tts",
  "title": "Synthèse hors ligne",
  "sub": "du plus léger au plus expressif",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Piper",
    "s": "CPU, temps réel, voix françaises"
   },
   {
    "n": "Kokoro 82M",
    "s": "petit, rapide, une voix française",
    "pal": "blue"
   },
   {
    "n": "Kyutai TTS",
    "s": "en flux, français et anglais",
    "pal": "blue"
   },
   {
    "n": "Chatterbox multilingue",
    "s": "23 langues, réglage d’émotion",
    "pal": "red"
   },
   {
    "n": "XTTS-v2, F5-TTS",
    "s": "clonage de voix, licences non commerciales",
    "pal": "red"
   },
   {
    "n": "Orpheus, CSM, Dia",
    "s": "très naturels, surtout en anglais"
   }
  ],
  "x0": 240
 },
 {
  "key": "cadres",
  "title": "Assembler sans tout écrire",
  "sub": "cadres et briques ouvertes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Silero VAD",
    "s": "détection de voix",
    "pal": "blue"
   },
   {
    "n": "Smart Turn, turn-detector",
    "s": "fin de tour sémantique",
    "pal": "blue"
   },
   {
    "n": "Pipecat",
    "s": "chaîne vocale en Python",
    "pal": "red"
   },
   {
    "n": "LiveKit Agents",
    "s": "temps réel, WebRTC",
    "pal": "red"
   },
   {
    "n": "Unmute (Kyutai)",
    "s": "STT + LLM au choix + TTS",
    "pal": "red"
   },
   {
    "n": "Home Assistant, Open WebUI",
    "s": "voix intégrée"
   }
  ],
  "x0": 280
 },
 {
  "key": "ragvocal",
  "title": "Le RAG vocal pas à pas",
  "sub": "où placer chaque réglage",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Transcription",
    "s": "vocabulaire du corpus en indice",
    "pal": "blue"
   },
   {
    "n": "Réécriture",
    "s": "« et lui ? » → question complète",
    "pal": "blue"
   },
   {
    "n": "Recherche hybride",
    "s": "mots-clés + vecteurs, k = 3",
    "pal": "red"
   },
   {
    "n": "Prompt oral",
    "s": "court, sans listes, source dite",
    "pal": "red"
   },
   {
    "n": "LLM en flux",
    "s": "phrase par phrase",
    "pal": "blue"
   },
   {
    "n": "Synthèse",
    "s": "normaliser chiffres et sigles",
    "pal": "blue"
   }
  ],
  "x0": 320
 }
];
