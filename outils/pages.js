// Chapitre 61 : Les outils du praticien (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 61 · outils",
  "title": "Les outils du praticien",
  "sub": "la pile logicielle de l’IA",
  "body": "\n    <p class=\"lede\">Entre un GPU et un assistant conversationnel, il y a une pile de logiciels. La connaître aide à choisir, à déboguer et à estimer les coûts.</p>\n    <p>Ce chapitre présente les couches : pilotes, frameworks de calcul, bibliothèques de modèles, formats de fichiers et moteurs de service.</p>",
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
  "lit": "pile",
  "look": {},
  "scene": "pile",
  "fig": ""
 },
 {
  "kicker": "61.1",
  "title": "La pile",
  "sub": "six couches",
  "body": "<ul class=\"rules\"><li><b>Matériel et pilotes</b> : CUDA (NVIDIA), ROCm (AMD), Metal (Apple) donnent accès au calcul parallèle.</li><li><b>Framework</b> : des tenseurs, des opérations, et la <b>dérivation automatique</b>.</li><li><b>Bibliothèques</b> : des architectures prêtes (transformeurs, diffusion) et leurs poids.</li><li><b>Moteur de service</b> : faire répondre le modèle vite et à beaucoup d’utilisateurs.</li><li><b>Application</b> : le harnais, les outils, la mémoire (chapitre 9).</li></ul><p>Une panne ou une lenteur se diagnostique couche par couche : pilote mal installé, mauvaise précision, moteur mal réglé (chapitre 16).</p>",
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
  "lit": "pile",
  "look": {},
  "scene": "pile",
  "fig": ""
 },
 {
  "kicker": "61.2",
  "title": "Les frameworks",
  "sub": "PyTorch, TensorFlow, JAX",
  "body": "<ul class=\"rules\"><li><b>PyTorch</b> (Meta, 2016) : code Python ordinaire, graphe construit à l’exécution ; standard de la recherche et de la plupart des modèles ouverts.</li><li><b>TensorFlow</b> (Google, 2015) et <b>Keras</b> : historiquement forts en production ; Keras 3 fonctionne au-dessus de plusieurs moteurs.</li><li><b>JAX</b> : transformations de fonctions (dériver, vectoriser, compiler) et compilation <b>XLA</b>, très utilisé sur TPU.</li><li><b>scikit-learn</b> : arbres, forêts, régressions, sans GPU (chapitre 40).</li></ul><p>Le point commun : on écrit le calcul « vers l’avant », et le framework produit seul les gradients pour l’entraînement.</p>",
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
  "lit": "frameworks",
  "look": {},
  "scene": "frameworks",
  "fig": ""
 },
 {
  "kicker": "61.3",
  "title": "Hugging Face et les formats",
  "sub": "partager, charger, affiner",
  "body": "<ul class=\"rules\"><li>Le <b>Hub</b> héberge modèles, jeux de données et démonstrations.</li><li><b>Transformers</b> et <b>Diffusers</b> chargent un modèle en quelques lignes ; <b>PEFT</b> et <b>TRL</b> l’affinent.</li><li><b>safetensors</b> : format de poids qui ne peut pas exécuter de code, contrairement aux anciens fichiers « pickle ».</li><li><b>GGUF</b> : poids quantifiés et métadonnées pour llama.cpp (chapitre 57) ; <b>ONNX</b> : échange entre moteurs.</li></ul><p>Avant usage : lire la fiche, la licence et les évaluations.</p>",
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
  "lit": "hub",
  "look": {},
  "scene": "hub",
  "fig": ""
 },
 {
  "kicker": "61.4",
  "title": "Servir un modèle",
  "sub": "local ou serveur",
  "body": "<ul class=\"rules\"><li><b>Local</b> : llama.cpp, Ollama, LM Studio font tourner des modèles quantifiés sur un portable ou un petit GPU (chapitre 19).</li><li><b>Serveur</b> : vLLM et SGLang regroupent les requêtes et paginent le cache KV pour multiplier le débit (chapitre 3).</li><li><b>Embarqué</b> : ONNX Runtime, Core ML, TensorFlow Lite sur téléphone (chapitre 43).</li><li><b>Interface</b> : une API compatible OpenAI permet de changer de moteur sans réécrire l’application.</li></ul><p>Le simulateur du chapitre 38 aide à prévoir mémoire et débit avant d’installer quoi que ce soit.</p>",
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
  "lit": "servir",
  "look": {},
  "scene": "servir",
  "fig": ""
 }
];
export const PLATES = {
  pile: { text: "Un système d’IA empile plusieurs couches. En bas, le matériel et ses pilotes (CUDA pour NVIDIA, ROCm pour AMD, Metal pour Apple). Au-dessus, un framework de calcul sur tenseurs avec dérivation automatique. Puis des bibliothèques de modèles prêts à l’emploi, un moteur qui sert le modèle efficacement, et enfin l’application (chapitres 9 à 11).", facts: () => [["CUDA", "NVIDIA, 2007"], ["dérivation automatique", "le cœur de tout framework"]] },
  frameworks: { text: "Un framework manipule des tenseurs sur GPU et calcule automatiquement les gradients nécessaires à l’entraînement (rétropropagation, chapitre 6). PyTorch, publié par Meta en 2016, est devenu le standard de la recherche ; TensorFlow et Keras restent présents en production ; JAX, plus fonctionnel, compile les calculs avec XLA et sert notamment sur les TPU de Google. scikit-learn reste la référence pour l’apprentissage classique.", facts: () => [["PyTorch", "graphe dynamique, très répandu"], ["JAX", "fonctions pures + XLA"]] },
  hub: { text: "Hugging Face héberge des centaines de milliers de modèles et de jeux de données, et fournit des bibliothèques pour les charger, les affiner (PEFT pour LoRA, TRL pour l’apprentissage par renforcement) et les évaluer. Les poids circulent dans des formats standard : safetensors (sûr, sans code exécutable), GGUF (quantifié, pour llama.cpp), ONNX (portable entre moteurs). Chaque modèle a sa licence, plus ou moins ouverte (chapitre 5).", facts: () => [["safetensors", "pas de code caché dans le fichier"], ["GGUF", "chapitre 57"]] },
  servir: { text: "Pour l’inférence, llama.cpp fait tourner des modèles quantifiés sur presque tout matériel ; Ollama et LM Studio l’emballent pour un usage simple. Côté serveur, vLLM gère la mémoire du cache KV par pages (PagedAttention) et regroupe les requêtes pour un fort débit ; SGLang et TensorRT-LLM visent la performance maximale. La plupart exposent une API compatible OpenAI, ce qui rend les applications interchangeables (chapitres 3, 16 et 38).", facts: () => [["local", "llama.cpp, Ollama"], ["serveur", "vLLM, SGLang"]] }
};
