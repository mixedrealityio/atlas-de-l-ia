# Atlas de l’IA

Un manuel interactif en 3D pour comprendre en détail comment fonctionne une IA : 19 chapitres et 111 pages, en français. Chaque page a une figure animée que l’on peut tourner et décomposer, et la plupart ont un exercice.

| N° | Chapitre | Contenu |
|---|---|---|
| 1 | Du texte aux nombres | jetons, vocabulaire, plongements |
| 2 | Attention et transformeur | requêtes, clés, valeurs, couches |
| 3 | Ce qui se passe pendant une inférence | prefill, décodage, cache KV, mémoire |
| 4 | Les réglages d’inférence | température, top-k, top-p, min-p, pénalités |
| 5 | Les étapes de fabrication d’un modèle | des données au déploiement |
| 6 | Entraîner son modèle | boucle, optimiseur, mémoire, LoRA |
| 7 | L’apprentissage par renforcement | récompenses, politiques, RLHF, DPO, GRPO |
| 8 | La vision par ordinateur | convolutions, patchs, détection, texte et image, diffusion |
| 9 | Les harnais et les outils | du modèle seul au système complet |
| 10 | Les agents | penser, agir, observer |
| 11 | Le loop engineering | concevoir la boucle autour du modèle |
| 12 | L’IA et la robotique | percevoir, planifier, agir |
| 13 | Les modèles du monde | prédire, imaginer, planifier |
| 14 | Voir un réseau de neurones en 3D | neurones, cartes, tenseurs, paysage de la perte |
| 15 | L’IA et la modélisation 3D | NeRF, gaussiennes, génération d’objets |
| 16 | Le tableau de bord des paramètres | quantification, contexte, serveur |
| 17 | Dans un GPU | calcul, mémoire, précisions, débits |
| 18 | Du GPU au centre de données | nœuds, réseaux, énergie, pannes |
| 19 | GPU externes et matériel local | Thunderbolt, OCuLink, mémoire, dimensionnement |

Le moteur de rendu (three.js, pages qui se tournent, figures décomposables) vient d’[Atlas of Physics](https://github.com/nathanliow/atlas-of-physics) de Nathan Liow, sous licence MIT, conservée dans `LICENSE`. Les figures de l’atlas de l’IA sont construites par `engine/iakit.js` à partir de petits dictionnaires de données.

Les chiffres donnés dans les pages sont des ordres de grandeur, destinés à comprendre : vérifiez les valeurs exactes dans la documentation de votre modèle, de votre moteur d’inférence et de votre matériel.

## Sources consultées pour les chapitres 14 à 19

Ces pages ont servi de point de départ ; les textes de l’atlas sont rédigés à neuf.

- Visualisation 3D de réseaux : [TensorSpace (article de présentation, juejin.cn)](https://juejin.cn/post/6844903713203568653), [dépôt TensorSpace](https://github.com/BoTime/tensorspace).
- Modélisation 3D : [A Survey on 3D Gaussian Splatting](https://arxiv.org/html/2401.03890v8) ; [Hunyuan3D 2.0 (ai-bot.cn)](https://ai-bot.cn/hunyuan3d-2-0/), [annonce de l’ouverture du code (IT之家)](https://www.ithome.com/0/826/197.htm).
- Mémoire et quantification : [formule de mémoire GPU pour LLM auto-hébergés (tianpan.co)](https://tianpan.co/zh/blog/2026-04-10-self-hosted-llms-production-gpu-memory-math), [vLLM : gpu_memory_utilization](https://docs.vllm.ai/projects/vllm-omni/en/latest/configuration/gpu_memory_utilization/), [niveaux de quantification GGUF](https://tinyweights.dev/posts/gguf-quantization-levels-q4-q5-q8/).
- Clusters : [conception d’un cluster de GPU NVIDIA (gitcode.csdn.net)](https://gitcode.csdn.net/6a101a4d662f9a54cb765b9f.html), [AWS et NVSwitch (The Next Platform)](https://www.nextplatform.com/2023/11/28/aws-adopts-nvidia-nvswitch-for-beefy-ai-gpu-nodes/), [A100 contre H100](https://www.spheron.network/blog/nvidia-a100-vs-h100/).
- GPU externes : [guide OCuLink eGPU (jisaku.com)](https://jisaku.com/posts/oculink-egpu-guide), [VRAM d’un portable avec GPU externe pour LLM locaux](https://evezone.evetech.co.za/deep-dives/how-to-add-vram-to-a-laptop-for-local-llms-with-an-external-gpu).
