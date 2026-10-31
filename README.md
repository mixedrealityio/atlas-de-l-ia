# Atlas de l’IA

Un manuel interactif en 3D pour comprendre en détail comment fonctionne une IA : treize chapitres et 76 pages, en français, avec pour chaque page une figure animée que l’on peut tourner et décomposer, et un exercice.

| N° | Chapitre | Contenu |
|---|---|---|
| 1 | Du texte aux nombres | jetons, BPE, vocabulaire, plongements |
| 2 | Attention et transformeur | requêtes, clés, valeurs, masque causal, têtes, blocs |
| 3 | Ce qui se passe pendant une inférence | prefill, décodage, cache KV, mémoire, décodage spéculatif |
| 4 | Les réglages d’inférence | température, top-k, top-p, min-p, pénalités, graine |
| 5 | Les étapes de fabrication d’un modèle | données, pré-entraînement, SFT, préférences, évaluation |
| 6 | Entraîner son modèle | optimiseur, mémoire GPU, parallélisme, LoRA et QLoRA |
| 7 | L’apprentissage par renforcement | politique, PPO, RLHF, DPO, GRPO, RLVR |
| 8 | La vision par ordinateur | convolutions, ViT, détection, CLIP, diffusion |
| 9 | Les harnais et les outils | appels d’outils, contexte, RAG, permissions |
| 10 | Les agents | ReAct, planification, multi-agents, fiabilité |
| 11 | Le loop engineering | générer-vérifier, pass@k, garde-fous, contexte long |
| 12 | L’IA et la robotique | perception, imitation, sim2real, modèles VLA |
| 13 | Les modèles du monde | dynamique latente, planification, JEPA, génération vidéo |

Le moteur de rendu (three.js, pages qui se tournent, figures décomposables) vient d’[Atlas of Physics](https://github.com/nathanliow/atlas-of-physics) de Nathan Liow, sous licence MIT, conservée dans `LICENSE`. Les figures de l’atlas de l’IA sont construites par `engine/iakit.js` à partir de petits dictionnaires de données.

Les chiffres donnés dans les pages sont des ordres de grandeur, destinés à comprendre : vérifiez les valeurs exactes dans la documentation de votre modèle et de votre moteur d’inférence.
