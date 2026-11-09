// Chapitre 81 : Pipecat et LiveKit Agents (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 81 · voix",
  "title": "Pipecat et LiveKit Agents",
  "sub": "ne pas réécrire la plomberie",
  "body": "\n    <p class=\"lede\">Un agent vocal, ce n’est pas seulement trois modèles : c’est du <b>son en flux</b>, des <b>tours de parole</b>, des <b>interruptions</b>, de l’<b>écho</b>. Deux cadres libres s’en chargent.</p><ul class=\"rules\"><li><b>Pipecat</b> (Daily, licence BSD) : une bibliothèque Python où l’agent est une chaîne de processeurs.</li><li><b>LiveKit Agents</b> (LiveKit, licence Apache 2.0) : un cadre Python ou Node.js adossé au serveur WebRTC LiveKit.</li></ul><p>Ce chapitre prolonge le chapitre 80. Exemples vérifiés sur <b>Pipecat 1.15</b> et <b>LiveKit Agents 1.8</b> (novembre 2026) ; ces API changent vite.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "trames",
  "look": {},
  "scene": "trames",
  "fig": ""
 },
 {
  "kicker": "81.1",
  "title": "Pipecat : des trames",
  "sub": "le modèle mental",
  "body": "<ul class=\"rules\"><li><b>Trames</b> : audio, transcription, texte, contexte, interruption, fin.</li><li><b>Processeurs</b> : chacun traite les trames qu’il comprend et transmet les autres.</li><li><b>Pipeline</b> : la liste ordonnée des processeurs ; <b>PipelineTask</b> l’exécute, <b>PipelineRunner</b> gère l’arrêt propre.</li><li><b>Interruption</b> : quand l’utilisateur parle, une trame d’interruption remonte et vide les files du LLM et du TTS.</li></ul><p>Écrire son propre processeur (filtre, RAG, journal) se fait en une vingtaine de lignes.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "trames",
  "look": {},
  "scene": "trames",
  "fig": ""
 },
 {
  "kicker": "81.2",
  "title": "Pipecat : un agent local",
  "sub": "micro, Whisper, Ollama, Piper",
  "body": "<pre style=\"font-size:11.5px;line-height:1.35;white-space:pre-wrap;overflow-wrap:anywhere;background:rgba(0,0,0,.04);padding:8px 10px;border-radius:6px;margin:8px 0\">ctx = LLMContext([{\"role\": \"system\", \"content\": PROMPT_ORAL}])\nvad = SileroVADAnalyzer(params=VADParams(stop_secs=0.2))\nagg = LLMContextAggregatorPair(ctx,\n    user_params=LLMUserAggregatorParams(vad_analyzer=vad))\nstt = WhisperSTTService(device=\"cuda\",\n    compute_type=\"int8_float16\",\n    settings=WhisperSTTService.Settings(\n        model=\"large-v3-turbo\", language=Language.FR,\n        hotwords=\"Kyutai, Mimi\"))\nllm = OLLamaLLMService(\n    settings=OLLamaLLMService.Settings(model=\"qwen3:8b\"))\ntts = PiperTTSService(\n    settings=PiperTTSService.Settings(voice=\"fr_FR-siwis-medium\"))\nio = LocalAudioTransport(LocalAudioTransportParams(\n    audio_in_enabled=True, audio_out_enabled=True))\npipeline = Pipeline([io.input(), stt, agg.user(), rag,\n    llm, tts, io.output(), agg.assistant()])\ntask = PipelineTask(pipeline,\n    params=PipelineParams(enable_metrics=True))\nawait PipelineRunner().run(task)</pre><p>Imports omis. Dans un navigateur : <b>SmallWebRTCTransport</b>, sans serveur.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "hors",
  "look": {},
  "scene": "hors",
  "fig": ""
 },
 {
  "kicker": "81.3",
  "title": "Pipecat : régler les tours",
  "sub": "dans l’agrégateur utilisateur",
  "body": "<ul class=\"rules\"><li><b>VAD</b> : <code>VADParams(confidence=0.7, start_secs=0.2, stop_secs=0.2, min_volume=0.6)</code> ; <code>stop_secs</code> court, car la fin de tour est confiée au modèle.</li><li><b>Fin de tour</b> : par défaut, <b>Smart Turn v3</b> (local, CPU) juge sur l’audio si la phrase est finie.</li><li><b>Stratégies</b> : <code>user_turn_strategies</code> pour changer les règles de début et de fin de tour.</li><li><b>Silence</b> : <code>user_turn_stop_timeout</code> (5 s par défaut) clôt un tour resté ouvert.</li><li><b>Mesures</b> : <code>enable_metrics=True</code> publie le délai de chaque service.</li></ul>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "tours",
  "look": {},
  "scene": "tours",
  "fig": ""
 },
 {
  "kicker": "81.4",
  "title": "Pipecat : brancher le RAG",
  "sub": "un processeur avant le LLM",
  "body": "<pre style=\"font-size:11.5px;line-height:1.35;white-space:pre-wrap;overflow-wrap:anywhere;background:rgba(0,0,0,.04);padding:8px 10px;border-radius:6px;margin:8px 0\">class RAG(FrameProcessor):\n    async def process_frame(self, frame, direction):\n        await super().process_frame(frame, direction)\n        if isinstance(frame, LLMContextFrame):\n            msgs = frame.context.get_messages()\n            question = msgs[-1][\"content\"]\n            extraits = await chercher(question, k=3)\n            frame.context.add_message({\"role\": \"system\",\n                \"content\": \"Extraits utiles :\\n\" + extraits})\n        await self.push_frame(frame, direction)</pre><ul class=\"rules\"><li>Ajouter les extraits <b>après</b> le prompt système stable, pour garder le cache.</li><li>Retirer les extraits des tours précédents, sinon le contexte gonfle.</li><li>Variante : <code>llm.register_function(\"chercher_notes\", ...)</code>, appelée par le LLM.</li></ul>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "rag",
  "look": {},
  "scene": "rag",
  "fig": ""
 },
 {
  "kicker": "81.5",
  "title": "LiveKit : salles et sessions",
  "sub": "le modèle mental",
  "body": "<ul class=\"rules\"><li><b>Serveur LiveKit</b> : relaie l’audio et la vidéo entre participants d’une salle ; en local : <code>livekit-server --dev</code>.</li><li><b>AgentServer</b> : attend les demandes et lance un processus par conversation.</li><li><b>AgentSession</b> : les modèles (STT, LLM, TTS, VAD) et la gestion des tours.</li><li><b>Agent</b> : les consignes, les outils (<code>@function_tool</code>) et des crochets comme <code>on_user_turn_completed</code>.</li></ul><p>Test sans navigateur : <code>python agent.py console</code> parle directement par le micro et le haut-parleur du terminal.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "lkarchi",
  "look": {},
  "scene": "lkarchi",
  "fig": ""
 },
 {
  "kicker": "81.6",
  "title": "LiveKit : un agent local",
  "sub": "tout pointé vers des serveurs locaux",
  "body": "<pre style=\"font-size:11.5px;line-height:1.35;white-space:pre-wrap;overflow-wrap:anywhere;background:rgba(0,0,0,.04);padding:8px 10px;border-radius:6px;margin:8px 0\">VOIX = \"http://localhost:8000/v1\"   # Speaches\nLLM = \"http://localhost:11434/v1\"   # Ollama\nserver = AgentServer()\n\n@server.rtc_session()\nasync def entrypoint(ctx: agents.JobContext):\n    session = AgentSession(\n        vad=silero.VAD.load(),\n        stt=openai.STT(base_url=VOIX, language=\"fr\",\n            model=\"Systran/faster-whisper-large-v3\"),\n        llm=openai.LLM(base_url=LLM, model=\"qwen3:8b\"),\n        tts=openai.TTS(base_url=VOIX, model=\"kokoro\",\n            voice=\"ff_siwis\"),\n        turn_handling={\"turn_detection\": MultilingualModel()})\n    await session.start(room=ctx.room, agent=Assistant())\n\nagents.cli.run_app(server)</pre><p>Ici, un serveur <b>Speaches</b> sur le port 8000 sert la reconnaissance et la synthèse, <b>Ollama</b> le LLM. Les noms de modèles dépendent de ce que vous y avez installé.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "hors",
  "look": {},
  "scene": "hors",
  "fig": ""
 },
 {
  "kicker": "81.7",
  "title": "LiveKit : régler les tours",
  "sub": "turn_handling",
  "body": "<pre style=\"font-size:11.5px;line-height:1.35;white-space:pre-wrap;overflow-wrap:anywhere;background:rgba(0,0,0,.04);padding:8px 10px;border-radius:6px;margin:8px 0\">turn_handling={\n  \"turn_detection\": MultilingualModel(),\n  \"endpointing\": {\"min_delay\": 0.4, \"max_delay\": 3.0},\n  \"interruption\": {\"min_duration\": 0.5, \"min_words\": 2,\n                   \"resume_false_interruption\": True},\n  \"preemptive_generation\": {...},   # LLM lancé avant la fin sûre\n}</pre><ul class=\"rules\"><li><b>MultilingualModel</b> : modèle de fin de tour sur le texte, le français compris, exécuté en local.</li><li><b>min_delay</b> : silence minimum avant de répondre ; <b>max_delay</b> : attente maximale si le modèle pense que la phrase continue.</li><li><b>min_words</b> : n’interrompre l’agent que sur de vrais mots, pas sur un « mm ».</li></ul>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "tours",
  "look": {},
  "scene": "tours",
  "fig": ""
 },
 {
  "kicker": "81.8",
  "title": "LiveKit : brancher le RAG",
  "sub": "un crochet avant chaque réponse",
  "body": "<pre style=\"font-size:11.5px;line-height:1.35;white-space:pre-wrap;overflow-wrap:anywhere;background:rgba(0,0,0,.04);padding:8px 10px;border-radius:6px;margin:8px 0\">class Assistant(Agent):\n    def __init__(self):\n        super().__init__(instructions=PROMPT_ORAL)\n\n    async def on_user_turn_completed(self, turn_ctx, new_message):\n        extraits = await chercher(new_message.text_content, k=3)\n        turn_ctx.add_message(role=\"assistant\",\n            content=\"Informations utiles pour répondre : \" + extraits)</pre><p>Le crochet s’exécute à chaque tour, sans aller-retour du LLM. Les extraits ajoutés à <code>turn_ctx</code> ne valent que pour ce tour. Pour les recherches plus larges, ajouter une méthode <code>@function_tool</code> que le LLM appelle lui-même.</p>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "rag",
  "look": {},
  "scene": "rag",
  "fig": ""
 },
 {
  "kicker": "81.9",
  "title": "Pipecat ou LiveKit ?",
  "sub": "selon l’usage",
  "body": "<ul class=\"rules\"><li><b>Un assistant personnel sur une machine</b> : Pipecat, transport local ou SmallWebRTC. Un seul programme, aucun serveur à ajouter.</li><li><b>Un service pour plusieurs personnes</b>, sur le web ou au téléphone : LiveKit, qui répartit les conversations et gère la téléphonie SIP.</li><li><b>Contrôle fin du flux</b> (filtres, traductions, avatars) : Pipecat.</li><li><b>Transferts entre agents</b> (accueil, puis spécialiste) : les deux savent faire (Pipecat Flows, transferts d’Agent LiveKit).</li></ul><p>Pipecat sait aussi utiliser une salle LiveKit comme transport : les deux ne s’excluent pas.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "compare",
  "look": {},
  "scene": "compare",
  "fig": ""
 },
 {
  "kicker": "81.10",
  "title": "Pièges fréquents",
  "sub": "ce qui casse le naturel",
  "body": "<ul class=\"rules\"><li><b>Écho</b> : sans annulation d’écho (navigateur, WebRTC) ni casque, l’agent s’entend et s’interrompt.</li><li><b>Deux détecteurs de fin de tour</b> superposés : délais qui s’additionnent.</li><li><b>Historique faux</b> après une interruption : vérifier que seule la partie prononcée est gardée (les deux cadres le font si le TTS fournit l’alignement).</li><li><b>Markdown lu à voix haute</b> : filtrer la sortie du LLM avant le TTS.</li><li><b>Premier appel lent</b> : précharger les modèles au démarrage.</li></ul>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "tours",
  "look": {},
  "scene": "tours",
  "fig": ""
 },
 {
  "kicker": "81.11",
  "title": "Mesurer",
  "sub": "avant de régler",
  "body": "<ul class=\"rules\"><li><b>Pipecat</b> : <code>enable_metrics=True</code> ; délai jusqu’au premier octet (TTFB) de chaque service, durée de traitement.</li><li><b>LiveKit</b> : événement <code>metrics_collected</code> : délai de fin de tour, premier jeton du LLM, premier son du TTS.</li><li><b>Bout en bout</b> : enregistrer des conversations réelles et mesurer de la fin de parole au premier son (médiane, percentile 95).</li></ul><p>Le tableau de correspondance des réglages et des défauts est au chapitre 80 (pages 80.10 à 80.15).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "trames",
  "look": {},
  "scene": "trames",
  "fig": ""
 }
];
export const PLATES = {
  trames: { text: "Dans Pipecat, un agent est une liste de processeurs. Des trames (audio, texte, transcription, contexte, interruption) les traversent dans l’ordre. Chaque processeur transforme les trames qu’il comprend et laisse passer les autres. L’agrégateur utilisateur décide de la fin du tour de parole et envoie le contexte au LLM ; l’agrégateur assistant, en fin de chaîne, enregistre ce qui a vraiment été dit.", facts: () => [["unité", "la trame"], ["agent", "une liste de processeurs"]] },
  lkarchi: { text: "LiveKit Agents s’appuie sur un serveur WebRTC, LiveKit (ouvert, auto-hébergeable). L’agent rejoint une « salle » comme un participant. Un serveur d’agents reçoit les demandes, lance un processus par conversation, et chaque processus exécute une AgentSession (les modèles et la gestion des tours) au service d’un Agent (ses consignes, ses outils).", facts: () => [["force", "multi-utilisateurs, téléphonie, montée en charge"], ["coût", "un serveur de plus"]] },
  compare: { text: "Pipecat est une bibliothèque : tout tient dans un programme Python, avec le transport de son choix, et chaque trame est modifiable. LiveKit Agents est un cadre adossé à une infrastructure temps réel : il apporte les salles, la téléphonie SIP, la répartition des conversations entre machines. Les deux sont sous licence libre et peuvent fonctionner sans aucun service en ligne.", facts: () => [["prototype local", "Pipecat"], ["service à plusieurs", "LiveKit"]] },
  hors: { text: "Pipecat embarque directement des services locaux : Whisper (faster-whisper ou MLX), Piper, Kokoro, Ollama. LiveKit passe le plus souvent par le greffon OpenAI pointé vers un serveur local compatible : Ollama ou vLLM pour le LLM, Speaches (faster-whisper, Kokoro, Piper) pour la voix. Dans les deux cas, la détection de voix et de fin de tour tourne sur le CPU.", facts: () => [["clé", "le format OpenAI en local"], ["GPU", "STT + LLM (+ TTS)"]] },
  tours: { text: "Les deux cadres combinent une détection de voix rapide et un modèle de fin de tour, qui lit l’audio (Smart Turn) ou le texte (turn-detector de LiveKit) pour juger si la phrase est finie. On règle ensuite des délais minimum et maximum, la durée ou le nombre de mots qui déclenchent une interruption, et la reprise après une fausse interruption.", facts: () => [["Pipecat", "agrégateur utilisateur"], ["LiveKit", "turn_handling"]] },
  rag: { text: "Le RAG s’insère juste avant le LLM : un processeur Pipecat qui enrichit le contexte, ou le crochet on_user_turn_completed de LiveKit. Autre voie : déclarer une fonction « chercher dans les notes » que le LLM appelle lui-même ; plus souple, mais un aller-retour de plus, donc plus lent à l’oral.", facts: () => [["rapide", "injection à chaque tour"], ["souple", "outil appelé par le LLM"]] }
};
