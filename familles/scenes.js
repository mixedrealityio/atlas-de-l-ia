export const SPECS = [
 {
  "key": "trois",
  "title": "Trois architectures",
  "sub": "encodeur, décodeur, les deux",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Encodeur (BERT)",
    "s": "lit tout le texte, masque des mots",
    "pal": "blue"
   },
   {
    "n": "Décodeur (GPT)",
    "s": "prédit le mot suivant",
    "pal": "red"
   },
   {
    "n": "Encodeur-décodeur (T5)",
    "s": "texte vers texte",
    "pal": "blue"
   },
   {
    "n": "Usage encodeur",
    "s": "classer, chercher, comprendre"
   },
   {
    "n": "Usage décodeur",
    "s": "générer, converser"
   },
   {
    "n": "Aujourd’hui",
    "s": "les décodeurs dominent",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "recette",
  "title": "De GPT-3 à l’assistant",
  "sub": "les étapes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Pré-entraînement",
    "s": "prédire le jeton suivant",
    "pal": "blue"
   },
   {
    "n": "Few-shot",
    "s": "exemples dans le prompt (GPT-3, 2020)",
    "pal": "blue"
   },
   {
    "n": "Instruction tuning",
    "s": "FLAN, InstructGPT",
    "pal": "red"
   },
   {
    "n": "Préférences",
    "s": "RLHF, DPO",
    "pal": "red"
   },
   {
    "n": "Poids ouverts",
    "s": "LLaMA, Mistral, Qwen…",
    "pal": "blue"
   },
   {
    "n": "Raisonnement",
    "s": "entraîné par renforcement",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
