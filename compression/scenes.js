export const SPECS = [
 {
  "key": "ptq",
  "title": "Quantifier : PTQ et QAT",
  "sub": "après ou pendant l’entraînement",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Modèle entraîné",
    "s": "FP16"
   },
   {
    "n": "Quantification après entraînement (PTQ)",
    "s": "GPTQ, AWQ, SmoothQuant",
    "pal": "blue"
   },
   {
    "n": "Calibration",
    "s": "quelques exemples",
    "pal": "blue"
   },
   {
    "n": "Quantification à l’entraînement (QAT)",
    "s": "le modèle s’adapte",
    "pal": "red"
   },
   {
    "n": "Modèle compact",
    "s": "INT8, INT4",
    "pal": "blue"
   },
   {
    "n": "Vérification",
    "s": "qualité sur vos tâches",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "distill",
  "title": "Distillation et élagage",
  "sub": "un petit modèle apprend d’un grand",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Grand modèle (maître)",
    "s": "produit des réponses et des probabilités",
    "pal": "blue"
   },
   {
    "n": "Petit modèle (élève)",
    "s": "imite le maître",
    "pal": "red"
   },
   {
    "n": "Élagage",
    "s": "supprimer poids ou têtes peu utiles",
    "pal": "blue"
   },
   {
    "n": "Parcimonie structurée",
    "s": "2:4 sur GPU récents"
   },
   {
    "n": "Résultat",
    "s": "plus petit, plus rapide",
    "pal": "red"
   },
   {
    "n": "Exemples",
    "s": "DistilBERT, TinyLlama"
   }
  ],
  "x0": 40
 },
 {
  "key": "edge",
  "title": "Sur l’appareil",
  "sub": "mobile et embarqué",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Modèle compact",
    "s": "< 1 à 3 Md",
    "pal": "blue"
   },
   {
    "n": "Format",
    "s": "GGUF, ONNX, Core ML, LiteRT",
    "pal": "blue"
   },
   {
    "n": "Moteur",
    "s": "llama.cpp, ExecuTorch, MLC-LLM",
    "pal": "blue"
   },
   {
    "n": "Accélérateur",
    "s": "NPU, GPU mobile",
    "pal": "red"
   },
   {
    "n": "Confidentialité",
    "s": "les données restent",
    "pal": "red"
   },
   {
    "n": "Apprentissage fédéré",
    "s": "mettre à jour sans centraliser"
   }
  ],
  "x0": 80
 }
];
