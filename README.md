# Atlas de l’IA

Un manuel interactif en 3D pour comprendre en détail comment fonctionne une IA : 59 chapitres et 364 pages, en français. Chaque page a une figure animée que l’on peut tourner et décomposer, et la plupart ont un exercice.

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
| 25 | Soixante-dix ans d’IA | précurseurs, hivers, renaissance, ère du langage |
| 26 | Généraliser | biais, variance, surapprentissage, double descente |
| 27 | Au-delà du transformeur | réseaux récurrents, experts, modèles à état, graphes |
| 28 | Générer | autoencodeurs, GAN, diffusion, autorégression, audio et vidéo |
| 29 | Échelle, émergence et raisonnement | lois d’échelle, chaîne de pensée, calcul à l’inférence |
| 30 | Ouvrir la boîte noire | explications, circuits, caractéristiques |
| 31 | Évaluer et fiabiliser | benchmarks, contamination, arène, hallucinations |
| 32 | Biais, équité et désinformation | mesurer l’injustice, reconnaître le faux |
| 33 | Droit et gouvernance | AI Act, données personnelles, droit d’auteur, responsabilité |
| 34 | AGI, alignement et sûreté | ce qui est établi, ce qui est débattu |
| 35 | Demande, élasticité et emploi | si l’IA baisse le coût d’une tâche, que devient la demande ? |
| 36 | L’atrophie des compétences | quand l’IA fait à notre place, que reste-t-il ? |
| 37 | Le fossé de l’ingénieur logiciel | ce que l’IA banalise et ce qui reste rare |
| 38 | Simulateur de LLM local | un modèle en 3D : requête, inférence, mémoire, débit |
| 39 | Une machine peut-elle être consciente ? | intelligence, conscience, sentience : ce que disent les théories |
| 40 | L’apprentissage automatique classique | régression, arbres, forêts, boosting, SVM |
| 41 | Les données | collecte, nettoyage, annotation, licences, versions, synthétiques |
| 42 | Les familles de modèles de langage | BERT, GPT, T5, LLaMA |
| 43 | Compresser un modèle | quantification, élagage, distillation, IA embarquée |
| 44 | MLOps et LLMOps | livrer, surveiller, faire évoluer |
| 45 | Robustesse et attaques adverses | exemples adverses, empoisonnement, injection |
| 46 | IA et santé | imagerie, molécules, validation clinique, régulation |
| 47 | L’IA pour la science | simulateurs, météo, mathématiques, modèles spécialisés |
| 48 | Industries créatives | texte, image, son, vidéo, jeu, publicité |
| 49 | IA et éducation | tuteurs, évaluation, triche, littératie |
| 50 | Finance et assurance | scoring, fraude, trading, conformité |
| 51 | Industrie et jumeaux numériques | maintenance, qualité, cobots, simulation |
| 52 | Secteur public et gouvernance algorithmique | administration, justice, transparence |
| 53 | IA et cybersécurité | défense, attaque, deepfakes |
| 54 | Économie de l’IA | coûts, marchés, concentration, productivité |
| 55 | Géopolitique, puces et ressources | semi-conducteurs, contrôle des exportations, énergie, souveraineté |
| 56 | Futurs proches et questions ouvertes | agents, incarnation, murs, inconnues |
| 57 | Ce que contient un fichier de modèle | poids, quantification, et pourquoi tout internet n’y est pas |
| 58 | Pourquoi personne ne sait ce qui se passe dans un modèle | tout est visible, presque rien n’est compris |
| 59 | Annexes | glossaire, chronologie, jeux de données, acteurs, parcours de lecture, ressources |

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

Pour les chapitres 25 à 34 : le plan s’inspire de deux propositions de sommaire pour un « atlas de l’IA » ([Z.ai](https://chat.z.ai/s/100ba5d1-1f55-46b1-aaa1-3dd0dbeaa04d), [DeepSeek](https://chat.deepseek.com/share/lgqrx1if2wb04ctkhi)). Seuls les thèmes ont été repris ; les chiffres et textes réglementaires non vérifiables ont été écartés, et les contenus sont rédigés à neuf à partir de faits établis (Dartmouth 1956, AlexNet 2012, transformeur 2017, lois d’échelle de Kaplan 2020 et Chinchilla 2022, double descente de Belkin 2019, règlement (UE) 2024/1689, norme C2PA, etc.). Pour le droit, le calendrier et les textes sont à vérifier à la source : ces pages ne constituent pas un avis juridique.

Pour les chapitres 35 à 37 (travail et compétences) : cadre économique classique (élasticité-prix, paradoxe de Jevons de 1865, analyse du travail par tâches), et études citées avec leurs limites : [Brynjolfsson, Li et Raymond sur le support client (NBER, 2023)](https://www.nber.org/papers/w31161), [METR sur les développeurs expérimentés (2025)](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), [Bastani et collègues, « Generative AI without guardrails can harm learning » (2025)](https://www.pnas.org/doi/10.1073/pnas.2422633122), [Lee et collègues, Microsoft et Carnegie Mellon, sur la pensée critique (CHI 2025)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/), [Brynjolfsson, Chandar et Chen, « Canaries in the Coal Mine » (2025)](https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/). Les liens sont donnés de mémoire : à vérifier à la source. Les pages sont des analyses, pas des prédictions.

Pour les chapitres 38 à 59 :
- Le **simulateur de LLM local** (chapitre 38) est un modèle simple de type « roofline » : débit de génération ≈ bande passante × efficacité ÷ octets lus par jeton, préremplissage limité par le calcul, cache KV = 2 × couches × têtes KV × dimension × bits. Les fiches matérielles sont des valeurs arrondies de documents publics : les résultats sont des ordres de grandeur (± 30 %).
- Le plan des chapitres 40 à 56 et des annexes complète celui d'une proposition de sommaire en 50 chapitres fournie par l'utilisateur ; les contenus sont rédigés à neuf et prudents.
- Le chapitre 39 (conscience) est inspiré du thème de la vidéo « Voici ce qui manque à l'IA pour être consciente » (chaîne Vision IA), dont le contenu n'a pas pu être consulté depuis le serveur (YouTube a refusé l'accès automatisé) ; il s'appuie sur la littérature : [Butlin, Long et collègues, « Consciousness in Artificial Intelligence: Insights from the Science of Consciousness » (arXiv 2308.08708)](https://arxiv.org/abs/2308.08708), [Techno-Science, « L'IA consciente : le point de vue d'un philosophe »](https://www.techno-science.net/actualite/ia-consciente-point-vue-philosophe-N28024.html), [Next, « Le CNRS se demande ce qu'est la conscience et si l'IA peut y accéder »](https://next.ink/brief-article/le-cnrs-se-demande-ce-quest-la-conscience-et-si-lia-peut-y-acceder/).
- Études citées sans lien vérifié (à retrouver par titre) : Allen-Zhu et Li sur la capacité en bits par paramètre (2024), Delétang et collègues « Language Modeling Is Compression » (2023), Turpin et collègues sur la fidélité des chaînes de pensée (2023), Power et collègues sur le grokking (2022), Lightman et collègues « Let's Verify Step by Step » (2023), Shumailov et collègues sur l'effondrement de modèle (2024), Grinsztajn et collègues sur les données tabulaires (2022), METR (2025). Les dates, chiffres et noms sont donnés de mémoire et à vérifier à la source.
