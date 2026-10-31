// Chapitre 2 : Attention et transformeur (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 2 · tous niveaux",
  "title": "Attention et transformeur",
  "sub": "le calcul au cœur du modèle",
  "body": "\n    <p class=\"lede\">Dans « Le chat dort car il est fatigué », qui est « il » ? Pour répondre, le modèle doit relier un jeton à un autre, parfois loin. Le <b>mécanisme d’attention</b> fait exactement cela.</p>\n    <p>Chaque jeton calcule un <b>poids</b> pour chacun des jetons qu’il peut lire. Plus le poids est grand, plus l’information de ce jeton influence le sien. La figure montre ces poids : une ligne par jeton qui interroge, une colonne par jeton interrogé.</p>\n    <p>Le <b>transformeur</b> (2017) est l’architecture bâtie autour de cette idée. Il a remplacé les réseaux récurrents parce qu’il traite tous les jetons en parallèle, ce qui s’entraîne bien mieux sur des GPU.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 2,
   "el": 3,
   "dist": 26,
   "auto": true
  },
  "lit": "att",
  "look": {},
  "scene": "att",
  "fig": ""
 },
 {
  "kicker": "2.1",
  "title": "Requête, clé, valeur",
  "sub": "trois rôles, trois matrices",
  "body": "\n    <p class=\"lede\">Chaque jeton joue trois rôles à la fois, avec trois projections apprises de son vecteur <i>x</i>.</p>\n    <ul class=\"rules\">\n      <li>la <b>requête</b> <i>Q</i> : ce que ce jeton cherche ;</li>\n      <li>la <b>clé</b> <i>K</i> : ce que ce jeton offre à ceux qui cherchent ;</li>\n      <li>la <b>valeur</b> <i>V</i> : l’information qu’il transmet s’il est choisi.</li>\n    </ul>\n    <div class=\"eq\">Attention(<i>Q</i>, <i>K</i>, <i>V</i>) = softmax( <i>Q</i><i>K</i><sup>T</sup> / √<i>d</i> ) <i>V</i></div>\n    <p>Le produit <i>Q</i>·<i>K</i> mesure la pertinence ; le softmax en fait des poids de somme 1 ; la sortie est la moyenne pondérée des valeurs.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 4,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "qkv",
  "look": {},
  "scene": "qkv",
  "fig": ""
 },
 {
  "kicker": "2.2",
  "title": "Ne pas lire le futur",
  "sub": "le masque causal",
  "body": "\n    <p class=\"lede\">Un modèle de langage est entraîné à prédire le jeton suivant. Il ne doit donc pas pouvoir lire les jetons qui viennent après.</p>\n    <p>Le <b>masque causal</b> met à −∞ les scores des jetons futurs avant le softmax : leurs poids deviennent nuls (les cases sombres de la figure). Chaque ligne ne distribue donc sa probabilité que sur le passé et sur elle-même.</p>\n    <p>Grâce à ce masque, une seule passe sur un texte de <i>n</i> jetons apprend <i>n</i> prédictions à la fois : c’est ce qui rend l’entraînement efficace. À l’inférence, le même masque justifie le <b>cache KV</b> (chapitre 3).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 2,
   "el": 3,
   "dist": 26,
   "auto": true
  },
  "lit": "att",
  "look": {},
  "scene": "att",
  "fig": ""
 },
 {
  "kicker": "2.3",
  "title": "Plusieurs têtes, des positions",
  "sub": "têtes d’attention, RoPE, GQA",
  "body": "\n    <p class=\"lede\">Une seule attention ne suffit pas : le modèle en calcule <b>plusieurs en parallèle</b>, les <b>têtes</b>, chacune sur une tranche différente du vecteur.</p>\n    <p>Une tête peut suivre la syntaxe, une autre les références (« il » → « chat »), une autre la position. Leurs sorties sont recollées puis mélangées par une dernière matrice.</p>\n    <p>L’attention ne sait pas où est chaque jeton : on injecte l’<b>ordre</b>. Les modèles récents utilisent les <b>positions rotatives</b> (RoPE), qui font tourner Q et K selon la position. Pour économiser la mémoire, beaucoup partagent les clés et valeurs entre plusieurs têtes (<b>GQA</b>), ce qui réduit le cache KV.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 2,
   "el": 3,
   "dist": 26,
   "auto": true
  },
  "lit": "att",
  "look": {},
  "scene": "att",
  "fig": ""
 },
 {
  "kicker": "2.4",
  "title": "Le bloc complet",
  "sub": "attention, MLP, raccourcis",
  "body": "\n    <p class=\"lede\">Un bloc de transformeur combine deux sous-couches.</p>\n    <ul class=\"rules\">\n      <li><b>Attention</b> : les jetons s’échangent de l’information.</li>\n      <li><b>MLP</b> (réseau dense) : chaque jeton est transformé seul, avec une couche qui élargit puis une qui resserre. C’est là que se trouve la plus grande part des paramètres.</li>\n    </ul>\n    <p>Autour de chacune : une <b>normalisation</b> et un <b>raccourci résiduel</b> (on ajoute l’entrée à la sortie). Ces raccourcis laissent le signal et le gradient traverser des dizaines de blocs sans s’éteindre.</p>\n    <p>Dans un modèle à <b>mélange d’experts</b>, le MLP est remplacé par plusieurs MLP « experts » dont seuls quelques-uns travaillent sur chaque jeton.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 4,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "bloc",
  "look": {},
  "scene": "bloc",
  "fig": ""
 },
 {
  "kicker": "2.5",
  "title": "Empiler et compter",
  "sub": "d’où viennent les milliards de paramètres",
  "body": "\n    <p class=\"lede\">Le modèle empile <i>N</i> blocs identiques en forme, mais aux poids différents.</p>\n    <p>Pour une dimension <i>d</i>, un bloc standard a environ 4<i>d</i>² paramètres pour l’attention et 8<i>d</i>² pour le MLP, soit <b>≈ 12 <i>d</i>²</b>.</p>\n    <div class=\"eq\">paramètres ≈ 12 · <i>N</i> · <i>d</i>² + (vocabulaire × <i>d</i>)</div>\n    <p>Avec <i>d</i> = 4 096 et <i>N</i> = 32 : 12 × 32 × 4 096² ≈ 6,4 milliards, plus 0,5 milliard pour les plongements : un modèle « de 7 milliards ». Ce nombre de paramètres décide de la mémoire (chapitre 3) et du coût d’entraînement (chapitre 6).</p>",
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
  "lit": "pile",
  "look": {},
  "scene": "pile",
  "fig": ""
 }
];
export const PLATES = {
  att: { text: "Chaque ligne est un jeton qui interroge tous les jetons précédents : la hauteur de la barre est le poids qu’il leur accorde. Ici, « il » regarde surtout « chat ». Les cases sombres sont masquées : un jeton ne peut pas lire le futur.", facts: () => [["somme d’une ligne", "100 %"], ["masque causal", "ne regarde que le passé"], ["valeurs ici", "illustratives"]] },
  qkv: { text: "À partir du vecteur de chaque jeton, trois matrices apprises fabriquent une requête Q, une clé K et une valeur V. Q·K donne un score de pertinence, le softmax le transforme en poids, et ces poids mélangent les valeurs V.", facts: () => [["matrices apprises", "Wq, Wk, Wv"], ["division par √d", "garde les scores raisonnables"]] },
  bloc: { text: "Un bloc enchaîne une attention (les jetons s’échangent de l’information) et un petit réseau dense (chaque jeton est transformé seul), chacun suivi d’un raccourci résiduel et d’une normalisation. Le modèle empile des dizaines de ces blocs.", facts: () => [["attention", "mélange entre jetons"], ["MLP", "calcul sur chaque jeton"], ["raccourcis", "facilitent l’entraînement"]] },
  pile: { text: "Les blocs sont empilés : la sortie de l’un est l’entrée du suivant. Un modèle de 7 milliards de paramètres a typiquement une trentaine de blocs de 4 096 dimensions ; les plus gros en ont plus de cent.", facts: () => [["7 Md de paramètres", "≈ 32 blocs × 4 096 dim."], ["règle approchée", "≈ 12 d² paramètres par bloc"]] }
};
