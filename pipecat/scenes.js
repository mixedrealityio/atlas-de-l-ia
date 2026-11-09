export const SPECS = [
 {
  "key": "trames",
  "title": "Pipecat : une chaîne de trames",
  "sub": "tout est une trame qui circule",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Transport (entrée)",
    "s": "micro, WebRTC, téléphone"
   },
   {
    "n": "STT",
    "s": "audio → TranscriptionFrame",
    "pal": "blue"
   },
   {
    "n": "Agrégateur utilisateur",
    "s": "VAD, fin de tour, contexte",
    "pal": "red"
   },
   {
    "n": "LLM",
    "s": "contexte → TextFrame en flux",
    "pal": "blue"
   },
   {
    "n": "TTS",
    "s": "texte → audio en flux",
    "pal": "blue"
   },
   {
    "n": "Transport (sortie)",
    "s": "haut-parleur, puis contexte"
   }
  ],
  "x0": 0
 },
 {
  "key": "lkarchi",
  "title": "LiveKit : une salle et des agents",
  "sub": "l’agent est un participant",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Navigateur, appli, téléphone",
    "s": "participants humains"
   },
   {
    "n": "Serveur LiveKit",
    "s": "salle WebRTC (SFU)",
    "pal": "red"
   },
   {
    "n": "Serveur d’agents",
    "s": "attend les sessions",
    "pal": "blue"
   },
   {
    "n": "Session",
    "s": "un processus par conversation",
    "pal": "blue"
   },
   {
    "n": "AgentSession",
    "s": "STT, LLM, TTS, VAD, tours",
    "pal": "blue"
   },
   {
    "n": "Agent",
    "s": "consignes, outils, crochets",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "compare",
  "title": "Lequel choisir ?",
  "sub": "deux philosophies",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Pipecat",
    "s": "une bibliothèque, un processus",
    "pal": "blue"
   },
   {
    "n": "Transports au choix",
    "s": "local, WebRTC, WebSocket, téléphonie",
    "pal": "blue"
   },
   {
    "n": "Contrôle fin",
    "s": "chaque trame est accessible",
    "pal": "blue"
   },
   {
    "n": "LiveKit Agents",
    "s": "un cadre sur une infrastructure",
    "pal": "red"
   },
   {
    "n": "Salles WebRTC",
    "s": "plusieurs participants, SIP",
    "pal": "red"
   },
   {
    "n": "Exploitation",
    "s": "répartition, redémarrage, mesures",
    "pal": "red"
   }
  ],
  "x0": 80
 },
 {
  "key": "hors",
  "title": "Une pile entièrement locale",
  "sub": "sans clé d’API",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Silero VAD",
    "s": "voix, CPU",
    "pal": "blue"
   },
   {
    "n": "Smart Turn v3 / turn-detector",
    "s": "fin de tour, CPU",
    "pal": "blue"
   },
   {
    "n": "faster-whisper",
    "s": "STT, GPU",
    "pal": "blue"
   },
   {
    "n": "Ollama, llama.cpp, vLLM",
    "s": "LLM, API compatible OpenAI",
    "pal": "red"
   },
   {
    "n": "Piper, Kokoro",
    "s": "TTS local",
    "pal": "blue"
   },
   {
    "n": "Speaches",
    "s": "serveur STT + TTS compatible OpenAI"
   }
  ],
  "x0": 120
 },
 {
  "key": "tours",
  "title": "Fin de tour et interruptions",
  "sub": "les mêmes réglages, deux noms",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Détection de voix",
    "s": "Pipecat : VADParams · LiveKit : silero.VAD",
    "pal": "blue"
   },
   {
    "n": "Fin de tour",
    "s": "Smart Turn v3 · MultilingualModel",
    "pal": "red"
   },
   {
    "n": "Délai mini / maxi",
    "s": "stop_secs · endpointing",
    "pal": "red"
   },
   {
    "n": "Interruption",
    "s": "durée et mots minimum",
    "pal": "red"
   },
   {
    "n": "Fausse interruption",
    "s": "reprendre si ce n’était qu’un bruit"
   },
   {
    "n": "Génération anticipée",
    "s": "LLM lancé avant la fin sûre"
   }
  ],
  "x0": 160
 },
 {
  "key": "rag",
  "title": "Où brancher le RAG",
  "sub": "trois emplacements",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Pipecat : processeur",
    "s": "entre agrégateur et LLM",
    "pal": "blue"
   },
   {
    "n": "LiveKit : crochet",
    "s": "on_user_turn_completed",
    "pal": "blue"
   },
   {
    "n": "Les deux : outil",
    "s": "fonction « chercher »",
    "pal": "red"
   },
   {
    "n": "Injection",
    "s": "à chaque tour, rapide",
    "pal": "blue"
   },
   {
    "n": "Outil",
    "s": "le LLM décide, plus lent",
    "pal": "red"
   },
   {
    "n": "Dans tous les cas",
    "s": "passages courts, source dite"
   }
  ],
  "x0": 200
 }
];
