export const PRACTICE = {
 "1": [
  {
   "q": "Pourquoi un contenu lu par un agent (page web, courriel) est-il dangereux ?",
   "choices": [
    "il est trop long",
    "il peut contenir des consignes que le modèle prend pour des ordres légitimes",
    "il utilise trop de jetons",
    "il ralentit le GPU"
   ],
   "answer": 1,
   "why": "<p>Consignes et données partagent le même contexte : c’est l’injection indirecte.</p>"
  }
 ],
 "3": [
  {
   "q": "Quelle est la meilleure défense pour limiter les dégâts d’un agent détourné ?",
   "choices": [
    "un prompt système plus long",
    "lui donner des droits minimaux et exiger une confirmation pour les actions sensibles",
    "augmenter la température",
    "supprimer les journaux"
   ],
   "answer": 1,
   "why": "<p>Les droits minimaux limitent ce qu’une attaque réussie peut faire.</p>"
  }
 ],
 "4": [
  {
   "q": "Pourquoi mesurer aussi le taux de refus injustifiés ?",
   "choices": [
    "pour économiser des jetons",
    "parce qu’un système qui refuse trop est inutilisable",
    "parce que les refus sont gratuits",
    "pour réduire la température"
   ],
   "answer": 1,
   "why": "<p>La sécurité se juge sur les deux erreurs : laisser passer, et bloquer à tort.</p>"
  }
 ]
};
