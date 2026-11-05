export const PRACTICE = {
 "3": [
  {
   "q": "Pourquoi seules 16 couches sur 64 ont-elles un cache KV qui grandit avec le texte ?",
   "choices": [
    "les 48 autres sont des GDN, qui tiennent un résumé de taille fixe",
    "les 48 autres sont désactivées",
    "le cache est partagé entre 4 couches",
    "le MLP n’a pas de poids"
   ],
   "answer": 0,
   "why": "<p>Les couches Gated DeltaNet mettent à jour un état compact au lieu de garder chaque mot précédent.</p>"
  }
 ],
 "5": [
  {
   "q": "Que fait la tête MTP ?",
   "choices": [
    "elle devine les 3 mots suivants, vérifiés au passage suivant",
    "elle traduit la réponse",
    "elle compresse les poids",
    "elle choisit la température"
   ],
   "answer": 0,
   "why": "<p>Environ 85 % des propositions sont acceptées : la réponse est identique, mais arrive plus vite.</p>"
  }
 ],
 "7": [
  {
   "q": "Quelles parties restent en 16 bits ?",
   "choices": [
    "les MLP des couches 1 à 56",
    "les normalisations, l’état récurrent et la convolution des GDN, la tête MTP",
    "la table des embeddings",
    "toutes les couches d’attention"
   ],
   "answer": 1,
   "why": "<p>Elles sont petites mais fragiles : une erreur s’y accumule ou fausse les devinettes.</p>"
  }
 ],
 "8": [
  {
   "q": "Que mesure la divergence KL de 0,022 ?",
   "choices": [
    "la vitesse en tokens par seconde",
    "l’écart entre les probabilités du modèle compressé et celles de l’original",
    "la taille du fichier",
    "la température"
   ],
   "answer": 1,
   "why": "<p>0 voudrait dire des probabilités identiques ; « 4 bits partout » est à ~0,037.</p>"
  }
 ],
 "11": [
  {
   "q": "À quoi sert --prefill-chunk-tokens 1024 ?",
   "choices": [
    "à limiter la réponse à 1 024 tokens",
    "à lire la requête par tranches de 1 024 tokens pour limiter le pic de mémoire",
    "à garder 1 024 conversations",
    "à choisir le port"
   ],
   "answer": 1,
   "why": "<p>Une requête de 65 536 tokens est lue en 64 tranches successives.</p>"
  }
 ]
};
