// Chapitre 4 : Les réglages d’inférence (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 4 · tous niveaux",
  "title": "Les réglages d’inférence",
  "sub": "ce que vous contrôlez vraiment",
  "body": "\n     <p class=\"lede\">À chaque mot, un modèle ne « choisit » rien : il calcule un score pour chaque mot de son vocabulaire (des dizaines de milliers). Ce sont <b>les réglages d’échantillonnage</b> qui transforment ces scores en un mot.</p>\n     <p>Avec un modèle <b>à poids ouverts</b>, vous les réglez tous, et vous voyez les scores. Avec une API, certains sont fixés ou cachés. Le même modèle peut ainsi sembler prudent, créatif ou délirant, sans qu’aucun de ses poids ne change.</p>\n     <p>La figure montre huit mots possibles après « La capitale de la France est ». Les barres sont les probabilités ; la barre rouge est le mot tiré à cet instant.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "temp",
  "look": {},
  "scene": "temp",
  "fig": ""
 },
 {
  "kicker": "4.1",
  "title": "La température",
  "sub": "aplatir ou durcir",
  "body": "\n     <p class=\"lede\">La <b>température</b> <i>T</i> divise les scores avant le softmax.</p>\n     <div class=\"eq\"><i>p</i><sub>i</sub> = e<sup>z<sub>i</sub>/T</sup> / Σ<sub>j</sub> e<sup>z<sub>j</sub>/T</sup></div>\n     <p>À <i>T</i> = 1, on garde les probabilités du modèle. Quand <i>T</i> descend vers 0, le mot le plus probable absorbe presque toute la probabilité : c’est le <b>décodage glouton</b>, déterministe. Quand <i>T</i> monte, la distribution s’aplatit et les mots improbables deviennent possibles.</p>\n     <p>Ordres de grandeur : 0 à 0,3 pour du code ou de l’extraction, 0,7 à 1 pour de la rédaction. Au-delà de 1,2 le texte devient vite incohérent.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "temp",
  "look": {},
  "scene": "temp",
  "fig": ""
 },
 {
  "kicker": "4.2",
  "title": "Top-k et top-p",
  "sub": "couper la queue de la distribution",
  "body": "\n     <p class=\"lede\">La température garde tous les mots, même absurdes. Les <b>filtres</b> les écartent.</p>\n     <p><b>Top-k</b> garde les <i>k</i> mots les plus probables. Simple, mais le nombre de candidats ne s’adapte pas : <i>k</i> = 40 est trop large quand le modèle est sûr de lui, et peut être trop étroit quand il hésite.</p>\n     <p><b>Top-p</b> (échantillonnage par noyau) garde le plus petit ensemble de mots dont la probabilité cumulée atteint <i>p</i>. Il s’élargit quand le modèle hésite et se resserre quand il est sûr. Valeurs courantes : <i>p</i> = 0,9 à 0,95.</p>\n     <p class=\"hintline\">Page suivante : le top-p en mouvement.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "topk",
  "look": {},
  "scene": "topk",
  "fig": ""
 },
 {
  "kicker": "4.3",
  "title": "Le noyau (top-p)",
  "sub": "un nombre de candidats qui s’adapte",
  "body": "\n     <p class=\"lede\">Regardez le nombre de barres bleues quand <i>p</i> varie : il change, et il change aussi d’une distribution à l’autre.</p>\n     <p>Après le filtre, les probabilités restantes sont <b>renormalisées</b> pour que leur somme vaille 1, puis un mot est tiré au hasard. À <i>p</i> = 1, aucun filtre ; à <i>p</i> très petit, un seul mot : on retombe sur le glouton.</p>\n     <p>Top-k et top-p se combinent : on applique d’abord l’un, puis l’autre, et un mot doit passer les deux.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "topp",
  "look": {},
  "scene": "topp",
  "fig": ""
 },
 {
  "kicker": "4.4",
  "title": "Min-p",
  "sub": "un seuil qui suit la confiance du modèle",
  "body": "\n     <p class=\"lede\"><b>Min-p</b> écarte les mots dont la probabilité est inférieure à <i>min_p</i> fois celle du meilleur mot.</p>\n     <p>Si le meilleur mot a 80 % et <i>min_p</i> = 0,1, le seuil est 8 % : presque tout est coupé. S’il n’a que 20 %, le seuil tombe à 2 % et beaucoup de mots restent. Le filtre est donc strict quand le modèle est sûr et souple quand il hésite, ce qui marche bien à température élevée.</p>\n     <p>Valeurs courantes : 0,02 à 0,1. Le réglage existe dans les moteurs à poids ouverts les plus répandus, mais pas dans toutes les API.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "minp",
  "look": {},
  "scene": "minp",
  "fig": ""
 },
 {
  "kicker": "4.5",
  "title": "Pénalités de répétition",
  "sub": "éviter de tourner en rond",
  "body": "\n     <p class=\"lede\">Un petit modèle ou une température basse peuvent boucler : « et puis et puis et puis… ».</p>\n     <p>La <b>pénalité de répétition</b> divise le score des mots déjà présents (multiplie s’il est négatif). Les <b>pénalités de présence et de fréquence</b> soustraient un montant fixe, ou proportionnel au nombre d’occurrences.</p>\n     <p>Piège : trop forte, la pénalité interdit de répéter un nom propre, un identifiant de code ou un mot de la question. Commencez à 1,05 à 1,15, et pas plus sans raison.</p>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 6,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "penalty",
  "look": {},
  "scene": "penalty",
  "fig": ""
 },
 {
  "kicker": "4.6",
  "title": "Tous les autres réglages",
  "sub": "longueur, arrêt, graine, contexte",
  "body": "\n     <p class=\"lede\">Les réglages s’appliquent <b>en chaîne</b>. L’ordre dépend du moteur : vérifiez-le dans le vôtre.</p>\n     <ul class=\"rules\">\n       <li><b>max_tokens</b> : borne la longueur de la réponse (et le coût). Trop bas, le texte est coupé net.</li>\n       <li><b>stop</b> : chaînes qui arrêtent la génération (utile pour des formats structurés).</li>\n       <li><b>seed</b> : fixe le tirage ; même graine et mêmes réglages donnent souvent le même texte, mais pas toujours sur des machines différentes.</li>\n       <li><b>logit_bias, grammaires</b> : interdire ou imposer des mots, ou contraindre la sortie à un format (JSON, grammaire).</li>\n       <li><b>fenêtre de contexte</b> : le nombre de jetons que le modèle peut lire ; au-delà, il faut résumer ou chercher.</li>\n     </ul>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 6,
   "el": 8,
   "dist": 26,
   "auto": true
  },
  "lit": "chain",
  "look": {},
  "scene": "chain",
  "fig": ""
 }
];
export const PLATES = {
  temp: { text: "Le modèle produit un score (logit) par mot possible. La température divise ces scores avant le softmax : T petit durcit la distribution (le mot le plus probable écrase les autres), T grand l’aplatit.", facts: () => [["entrée", "8 scores (logits)"], ["formule", "p = softmax(z / T)"], ["T → 0", "choix du plus probable"]] },
  topk: { text: "Top-k garde les k mots les plus probables, met les autres à zéro puis renormalise. Le nombre de candidats est fixe, quelle que soit la forme de la distribution.", facts: () => [["k = 1", "décodage glouton"], ["k grand", "presque aucun effet"]] },
  topp: { text: "Top-p garde les mots les plus probables jusqu’à ce que leur probabilité cumulée atteigne p. Le nombre de candidats s’adapte : peu quand le modèle est sûr, beaucoup quand il hésite.", facts: () => [["p = 1", "aucun filtre"], ["valeurs courantes", "0,9 à 0,95"]] },
  minp: { text: "Min-p écarte tout mot dont la probabilité est inférieure à min_p fois celle du meilleur mot. Le seuil suit la confiance du modèle : strict quand il est sûr, souple quand il hésite.", facts: () => [["seuil", "min_p × p(meilleur)"], ["valeurs courantes", "0,02 à 0,1"]] },
  penalty: { text: "La pénalité de répétition affaiblit le score des mots déjà présents dans le texte. Trop forte, elle empêche de répéter un nom propre ou un terme technique, même quand il le faudrait.", facts: () => [["effet", "z / r si z > 0 ; z × r sinon"], ["r = 1", "aucune pénalité"]] },
  chain: { text: "Un moteur d’inférence applique ses réglages en chaîne. L’ordre compte : filtrer avant ou après la température ne donne pas le même résultat, et chaque moteur a son ordre par défaut.", facts: () => [["à vérifier", "l’ordre dans votre moteur"], ["graine", "même graine = même texte"]] }
};
