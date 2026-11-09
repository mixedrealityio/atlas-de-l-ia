export const PRACTICE = {
 "1": [
  {
   "q": "Dans Pipecat, comment une interruption arrête-t-elle la réponse en cours ?",
   "choices": [
    "une trame d’interruption vide les files du LLM et du TTS",
    "le programme redémarre",
    "le micro est coupé",
    "le LLM change de température"
   ],
   "answer": 0,
   "why": "<p>Tout passe par des trames, y compris l’interruption.</p>"
  }
 ],
 "5": [
  {
   "q": "Dans LiveKit Agents, que fait AgentServer ?",
   "choices": [
    "il attend les demandes et lance un processus par conversation",
    "il synthétise la voix",
    "il remplace le serveur WebRTC",
    "il entraîne le modèle"
   ],
   "answer": 0,
   "why": "<p>Chaque conversation tourne dans son propre processus.</p>"
  }
 ],
 "9": [
  {
   "q": "Pour un assistant vocal personnel sur un seul PC, hors ligne, quel choix est le plus simple ?",
   "choices": [
    "Pipecat avec un transport local",
    "LiveKit avec la téléphonie SIP",
    "un service en ligne",
    "aucun cadre"
   ],
   "answer": 0,
   "why": "<p>Un seul programme, aucun serveur WebRTC à ajouter.</p>"
  }
 ]
};
