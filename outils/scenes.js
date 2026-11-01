export const SPECS = [
 {
  "key": "pile",
  "title": "La pile logicielle",
  "sub": "du silicium à l’application",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Matériel",
    "s": "GPU, TPU, NPU (chapitre 17)",
    "pal": "dark"
   },
   {
    "n": "Pilotes et noyaux",
    "s": "CUDA, ROCm, Metal"
   },
   {
    "n": "Framework",
    "s": "PyTorch, JAX, TensorFlow",
    "pal": "blue"
   },
   {
    "n": "Bibliothèques",
    "s": "Transformers, Diffusers, PEFT",
    "pal": "blue"
   },
   {
    "n": "Moteur de service",
    "s": "vLLM, llama.cpp, Ollama",
    "pal": "red"
   },
   {
    "n": "Application",
    "s": "harnais, agents, RAG",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "frameworks",
  "title": "Les frameworks",
  "sub": "calculer et dériver",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "PyTorch",
    "s": "Meta, 2016 ; dominant en recherche",
    "pal": "blue"
   },
   {
    "n": "TensorFlow et Keras",
    "s": "Google, 2015 ; Keras 3 multi-moteurs",
    "pal": "blue"
   },
   {
    "n": "JAX",
    "s": "Google ; compilation XLA, TPU",
    "pal": "blue"
   },
   {
    "n": "scikit-learn",
    "s": "apprentissage classique (chapitre 40)"
   },
   {
    "n": "Dérivation automatique",
    "s": "les gradients calculés seuls",
    "pal": "red"
   },
   {
    "n": "Compilation",
    "s": "torch.compile, XLA : fusionner les opérations",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "hub",
  "title": "Hugging Face et les formats",
  "sub": "partager des modèles",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Hub",
    "s": "modèles, jeux de données, démos",
    "pal": "blue"
   },
   {
    "n": "Transformers",
    "s": "charger un modèle en quelques lignes",
    "pal": "blue"
   },
   {
    "n": "Datasets",
    "s": "données en flux, versions"
   },
   {
    "n": "PEFT et TRL",
    "s": "LoRA, RLHF, DPO (chapitres 6 et 7)",
    "pal": "red"
   },
   {
    "n": "Formats",
    "s": "safetensors, GGUF, ONNX",
    "pal": "red"
   },
   {
    "n": "Licences",
    "s": "à vérifier pour chaque modèle"
   }
  ],
  "x0": 80
 },
 {
  "key": "servir",
  "title": "Servir un modèle",
  "sub": "du portable au centre de données",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "llama.cpp",
    "s": "C/C++, GGUF, CPU et GPU",
    "pal": "blue"
   },
   {
    "n": "Ollama et LM Studio",
    "s": "faciles en local",
    "pal": "blue"
   },
   {
    "n": "vLLM",
    "s": "PagedAttention, fort débit",
    "pal": "red"
   },
   {
    "n": "SGLang, TensorRT-LLM",
    "s": "haute performance"
   },
   {
    "n": "ONNX Runtime",
    "s": "portabilité, embarqué"
   },
   {
    "n": "API compatible OpenAI",
    "s": "une interface commune",
    "pal": "red"
   }
  ],
  "x0": 120
 }
];
