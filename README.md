# Atlas de l’IA

Un manuel interactif en 3D pour comprendre en détail comment fonctionne une IA : 24 chapitres et 148 pages, en français. Chaque page a une figure animée que l’on peut tourner et décomposer, et la plupart ont un exercice.

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
| 20 | Le RAG, du prototype à la production | recherche, boucles, wiki, voix |
| 21 | Une infrastructure IA sur site | cadrer, dimensionner, construire, exploiter |
| 22 | Jailbreaks et défenses | pourquoi un modèle se laisse détourner, comment s’en protéger |
| 23 | Un agent conversationnel pour un robot | entendre, voir, se souvenir, raisonner, s’exprimer |
| 24 | Les limites de l’IA et l’IA hybride | monde physique, calcul, cellules vivantes, robots quadrupèdes |

Le moteur de rendu (three.js, pages qui se tournent, figures décomposables) vient d’[Atlas of Physics](https://github.com/nathanliow/atlas-of-physics) de Nathan Liow, sous licence MIT, conservée dans `LICENSE`. Les figures de l’atlas de l’IA sont construites par `engine/iakit.js` à partir de petits dictionnaires de données.

Les chiffres donnés dans les pages sont des ordres de grandeur, destinés à comprendre : vérifiez les valeurs exactes dans la documentation de votre modèle, de votre moteur d’inférence et de votre matériel.

## Sources consultées pour les chapitres 14 à 19

Ces pages ont servi de point de départ ; les textes de l’atlas sont rédigés à neuf.

- Visualisation 3D de réseaux : [TensorSpace (article de présentation, juejin.cn)](https://juejin.cn/post/6844903713203568653), [dépôt TensorSpace](https://github.com/BoTime/tensorspace).
- Modélisation 3D : [A Survey on 3D Gaussian Splatting](https://arxiv.org/html/2401.03890v8) ; [Hunyuan3D 2.0 (ai-bot.cn)](https://ai-bot.cn/hunyuan3d-2-0/), [annonce de l’ouverture du code (IT之家)](https://www.ithome.com/0/826/197.htm).
- Mémoire et quantification : [formule de mémoire GPU pour LLM auto-hébergés (tianpan.co)](https://tianpan.co/zh/blog/2026-04-10-self-hosted-llms-production-gpu-memory-math), [vLLM : gpu_memory_utilization](https://docs.vllm.ai/projects/vllm-omni/en/latest/configuration/gpu_memory_utilization/), [niveaux de quantification GGUF](https://tinyweights.dev/posts/gguf-quantization-levels-q4-q5-q8/).
- Clusters : [conception d’un cluster de GPU NVIDIA (gitcode.csdn.net)](https://gitcode.csdn.net/6a101a4d662f9a54cb765b9f.html), [AWS et NVSwitch (The Next Platform)](https://www.nextplatform.com/2023/11/28/aws-adopts-nvidia-nvswitch-for-beefy-ai-gpu-nodes/), [A100 contre H100](https://www.spheron.network/blog/nvidia-a100-vs-h100/).
- GPU externes : [guide OCuLink eGPU (jisaku.com)](https://jisaku.com/posts/oculink-egpu-guide), [VRAM d’un portable avec GPU externe pour LLM locaux](https://evezone.evetech.co.za/deep-dives/how-to-add-vram-to-a-laptop-for-local-llms-with-an-external-gpu).

Pour les chapitres 20 à 24 :
- RAG et wiki tenu par un LLM : [LLM Wiki contre RAG (Atlan)](https://atlan.com/know/llm-wiki-vs-rag-knowledge-base/), [Karpathy et le wiki d’un LLM (Noqta)](https://noqta.tn/en/news/karpathy-llm-knowledge-bases-personal-wiki-2026) ; RAG vocal : [la règle des 800 ms (AWS)](https://builder.aws.com/content/3JDFAfXBiuwPP5MPzgf4RUWSAIp/the-800ms-rule-budgeting-latency-for-a-real-time-voice-agent-on-aws) ; RAG en production : [Production-Ready RAG on Open Models](https://regolo.ai/production-ready-rag-on-open-models-chunking-retrieval-reranking-evaluation.md), [chunking adaptatif (arXiv)](https://arxiv.org/pdf/2603.25333).
- Infrastructure sur site : [Private LLM Deployment (PremAI)](https://blog.premai.io/private-llm-deployment-a-practical-guide-for-enterprise-teams-2026), [Private LLM Serving (kube-dojo)](https://kube-dojo.github.io/on-premises/ai-ml-infrastructure/module-9.3-private-llm-serving/).
- Garde-fous : [robustesse des garde-fous de LLM (arXiv)](https://arxiv.org/html/2511.22047v1), [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails).
- Biocalcul et IA hybride : [organoïdes et FinalSpark (New Atlas)](https://newatlas.com/computers/finalspark-bio-computers-brain-organoids), [MetaBOC, cerveau sur puce (Yicai)](https://yicaiglobal.com/news/chinese-scientists-develop-worlds-first-open-source-brain-on-chip-interface-system), [MetaBOC (WAM)](https://www.wam.ae/en/article/b4243o2-chinese-researchers-develop-brain-on-a-chip-system) ; Genie 3 : [annonce de DeepMind](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/), [analyse (TechTalks)](https://bdtechtalks.com/2025/08/07/deepmind-genie-3/).
