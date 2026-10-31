// Chapitre 1 : Du texte aux nombres (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 1 · tous niveaux",
  "title": "Du texte aux nombres",
  "sub": "ce que le modèle lit vraiment",
  "body": "\n    <p class=\"lede\">Un modèle de langage ne voit ni lettres ni mots : il voit des <b>nombres</b>. Avant toute chose, il faut transformer le texte en suite d’entiers.</p>\n    <p>La phrase de la figure est découpée en <b>jetons</b> (<i>tokens</i>) : des morceaux de mot, des espaces, des signes. Chaque jeton est un numéro dans un <b>vocabulaire</b> fixé une fois pour toutes, avant l’entraînement. Les identifiants de la figure sont inventés pour l’exemple.</p>\n    <p>Tout ce qui suit dans cet atlas, de l’attention à l’inférence, travaille sur ces suites de nombres.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 4,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "tok",
  "look": {},
  "scene": "tok",
  "fig": ""
 },
 {
  "kicker": "1.1",
  "title": "Apprendre à découper",
  "sub": "l’encodage par paires d’octets",
  "body": "\n    <p class=\"lede\">Découper par mots échoue sur les mots rares ; découper par lettres allonge tout. Le <b>BPE</b> (<i>byte pair encoding</i>) prend un compromis appris sur un gros corpus.</p>\n    <p>On part des caractères (ou des octets), puis on <b>fusionne à répétition la paire la plus fréquente</b>. Chaque fusion crée un jeton. On s’arrête quand le vocabulaire atteint la taille voulue : de 32 000 à plus de 250 000 jetons selon les modèles.</p>\n    <p>Résultat : les mots courants sont un jeton, les mots rares se découpent en morceaux, et <b>tout texte reste codable</b>, car les octets de départ sont toujours là.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 4,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "bpe",
  "look": {},
  "scene": "bpe",
  "fig": ""
 },
 {
  "kicker": "1.2",
  "title": "Ce que le découpage change",
  "sub": "coût, langues, chiffres",
  "body": "\n    <p class=\"lede\">Le découpage n’est pas neutre : il décide de ce que le modèle perçoit facilement.</p>\n    <ul class=\"rules\">\n      <li><b>Coût et mémoire</b> : on paie, on limite le contexte et on mesure la vitesse en <b>jetons</b>, pas en mots. En anglais, un mot vaut environ 1,3 jeton ; dans d’autres langues, souvent davantage.</li>\n      <li><b>Chiffres</b> : un nombre est souvent coupé en morceaux, ce qui explique en partie les erreurs d’arithmétique.</li>\n      <li><b>Espaces et casse</b> : « artificielle » et « Artificielle » sont des jetons différents.</li>\n      <li><b>Mots inventés</b> : « drôlissime » devient plusieurs jetons, que le modèle devine en les recombinant.</li>\n    </ul>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 4,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "tok",
  "look": {},
  "scene": "tok",
  "fig": ""
 },
 {
  "kicker": "1.3",
  "title": "Des identifiants aux vecteurs",
  "sub": "la matrice de plongement",
  "body": "\n    <p class=\"lede\">Un numéro ne dit rien du sens. Chaque identifiant sert donc d’<b>indice de ligne</b> dans une grande table : la <b>matrice de plongement</b>.</p>\n    <p>Cette matrice a une ligne par jeton et une colonne par dimension du modèle. Avec 128 000 jetons et 4 096 dimensions, elle contient environ 0,5 milliard de nombres. Ils ne sont pas écrits à la main : ils sont <b>appris</b> avec le reste du modèle.</p>\n    <p>On compare deux vecteurs par l’angle qu’ils forment (<b>similarité cosinus</b>). Des jetons proches par le sens deviennent proches dans l’espace, et des relations régulières y prennent la forme de directions : de « roi » à « reine », comme de « homme » à « femme ».</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 2,
   "el": 4,
   "dist": 26,
   "auto": true
  },
  "lit": "emb",
  "look": {},
  "scene": "emb",
  "fig": ""
 },
 {
  "kicker": "1.4",
  "title": "Le trajet complet",
  "sub": "du texte au score",
  "body": "\n    <p class=\"lede\">Après les plongements, les vecteurs traversent les couches du transformeur (chapitre suivant), qui produisent à la fin <b>un score par jeton du vocabulaire</b>.</p>\n    <p>Ces scores s’appellent <b>logits</b>. Les réglages d’échantillonnage (chapitre 4) en tirent le mot suivant, qui est ajouté au texte. Le modèle repart alors du début avec un jeton de plus : c’est ainsi qu’il écrit, mot après mot.</p>\n    <p>Retenez la forme générale : <b>texte → jetons → vecteurs → calcul → scores → un jeton</b>, répétée autant de fois qu’il y a de jetons à produire.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 4,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "flow",
  "look": {},
  "scene": "flow",
  "fig": ""
 }
];
export const PLATES = {
  tok: { text: "Un modèle ne lit pas des lettres mais des jetons : des morceaux de mots, d’espaces et de ponctuation. Chaque jeton a un numéro dans un vocabulaire fixé avant l’entraînement.", facts: () => [["jetons", "10"], ["vocabulaire typique", "32 000 à 260 000"], ["caractères", "46"]] },
  bpe: { text: "L’encodage par paires d’octets (BPE) part des caractères et fusionne à chaque étape la paire qui revient le plus souvent dans le corpus d’entraînement du tokenizer. Après quelques dizaines de milliers de fusions, les mots courants sont un seul jeton, les rares sont découpés.", facts: () => [["fusions", "≈ taille du vocabulaire"], ["mot rare", "plusieurs jetons"], ["mot courant", "un seul jeton"]] },
  emb: { text: "Chaque jeton est transformé en un vecteur de plusieurs milliers de nombres, le plongement. Des jetons de sens proches ont des vecteurs proches, et certaines relations (féminin, capitale) correspondent à des directions presque parallèles. Ici, projetées en 2 dimensions.", facts: () => [["dimension réelle", "512 à 16 000"], ["distance", "cosinus des angles"], ["appris par", "l’entraînement"]] },
  flow: { text: "Tout modèle de langage suit le même trajet : texte, jetons, identifiants, vecteurs, calcul par les couches, puis un score par mot du vocabulaire. Le mot choisi est ajouté au texte et le trajet recommence.", facts: () => [["entrée", "texte"], ["sortie", "scores sur le vocabulaire"]] }
};
