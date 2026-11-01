// Chapitre 42 : Les familles de modèles de langage (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 42 · modèles",
  "title": "BERT, GPT, T5, LLaMA",
  "sub": "d’où viennent les modèles que l’on utilise",
  "body": "<p class='lede'>Tous reposent sur le transformeur (chapitre 2), mais l’utilisent différemment.</p>",
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
  "lit": "trois",
  "look": {},
  "scene": "trois",
  "fig": ""
 },
 {
  "kicker": "42.1",
  "title": "Les trois architectures",
  "sub": "encodeur, décodeur, les deux",
  "body": "<ul class=\"rules\"><li><b>Encodeur</b> (BERT) : voit tout le texte, apprend en devinant des mots masqués (<i>MLM</i>).</li><li><b>Décodeur</b> (GPT, LLaMA) : ne voit que le passé, apprend à prédire le suivant (<i>CLM</i>).</li><li><b>Encodeur-décodeur</b> (T5, traduction) : lit, puis écrit.</li></ul>",
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
  "lit": "trois",
  "look": {},
  "scene": "trois",
  "fig": ""
 },
 {
  "kicker": "42.2",
  "title": "Les plongements et BERT",
  "sub": "comprendre, retrouver",
  "body": "<p class='lede'>Les encodeurs sont toujours très utilisés pour la <b>recherche</b> (plongements, chapitre 20), la classification et l’extraction d’informations.</p><p>Ils sont plus petits, plus rapides et moins chers qu’un LLM pour ces tâches.</p>",
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
  "lit": "trois",
  "look": {},
  "scene": "trois",
  "fig": ""
 },
 {
  "kicker": "42.3",
  "title": "Du pré-entraînement à l’assistant",
  "sub": "la recette",
  "body": "<ul class=\"rules\"><li><b>Few-shot</b> (GPT-3, 2020) : quelques exemples dans le prompt suffisent.</li><li><b>Instruction tuning</b> : affiner sur des consignes et leurs réponses.</li><li><b>Préférences</b> (chapitre 7) : RLHF, DPO.</li></ul>",
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
  "lit": "recette",
  "look": {},
  "scene": "recette",
  "fig": ""
 },
 {
  "kicker": "42.4",
  "title": "Poids ouverts et familles",
  "sub": "LLaMA et les autres",
  "body": "<p class='lede'>Depuis LLaMA (2023), des familles à poids ouverts (Mistral, Qwen, Gemma, DeepSeek…) rivalisent avec des modèles fermés sur beaucoup de tâches.</p><p>Voir le chapitre 5 pour la nuance « ouvert ≠ transparent ».</p>",
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
  "lit": "recette",
  "look": {},
  "scene": "recette",
  "fig": ""
 }
];
export const PLATES = {
  trois: { text: "BERT (Google, 2018) est un encodeur entraîné à deviner des mots masqués : il comprend, classe, alimente la recherche. GPT (OpenAI) est un décodeur entraîné à prédire le mot suivant : il génère. T5 (2019) reformule toute tâche en texte vers texte. Depuis 2020, les décodeurs géants dominent les assistants.", facts: () => [["MLM", "mots masqués : comprendre"], ["CLM", "mot suivant : générer"], ["T5", "encodeur + décodeur"]] },
  recette: { text: "Les assistants viennent d’une recette : prédiction du jeton suivant sur un énorme corpus, capacité d’apprendre à partir d’exemples donnés dans le prompt (few-shot), affinage sur des consignes (instruction tuning), puis préférences humaines. Des familles à poids ouverts (LLaMA de Meta, 2023, puis d’autres) ont permis l’exécution locale.", facts: () => [["few-shot", "GPT-3, 2020"], ["poids ouverts", "LLaMA et suivants"]] }
};
