// Chapitre 29 : Échelle, émergence et raisonnement (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 29 · avancé",
  "title": "Échelle, émergence et raisonnement",
  "sub": "pourquoi plus gros, plus longtemps, plus profond",
  "body": "\n    <p class=\"lede\">Entre 2018 et 2024, l’essentiel des progrès des modèles de langage est venu d’un <b>changement d’échelle</b> : plus de paramètres, plus de données, plus de calcul.</p>\n    <p>Ce chapitre explique la régularité mathématique derrière ces progrès (les lois d’échelle), le débat sur l’<b>émergence</b> de capacités, puis les deux leviers récents : le <b>raisonnement écrit</b> (chaîne de pensée) et le <b>calcul à l’inférence</b>.</p>",
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
  "lit": "loi",
  "look": {},
  "scene": "loi",
  "fig": ""
 },
 {
  "kicker": "29.1",
  "title": "Les lois d’échelle",
  "sub": "une régularité inattendue",
  "body": "\n    <p class=\"lede\">En 2020, Kaplan et ses collègues observent que la <b>perte</b> d’un modèle de langage baisse selon une <b>loi de puissance</b> quand on augmente le calcul, les données ou les paramètres, sur plusieurs ordres de grandeur.</p>\n    <div class=\"eq\">perte ≈ plancher + <i>a</i> × <i>C</i><sup>−α</sup></div>\n    <p>Conséquence pratique : on peut <b>prévoir</b> la perte d’un gros entraînement à partir de petits essais, et justifier un investissement. Conséquence théorique : la perte baisse lentement, et chaque gain demande de multiplier les ressources.</p>",
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
  "lit": "loi",
  "look": {},
  "scene": "loi",
  "fig": ""
 },
 {
  "kicker": "29.2",
  "title": "Chinchilla et le bon équilibre",
  "sub": "la taille et les données",
  "body": "\n    <p class=\"lede\">Avec un budget de calcul donné (≈ 6 × paramètres × jetons), faut-il un gros modèle peu entraîné ou un petit très entraîné ?</p>\n    <p>L’étude <b>Chinchilla</b> (2022) a montré que les modèles de l’époque étaient trop gros pour leurs données, et qu’il fallait environ <b>20 jetons par paramètre</b>. Depuis, la pratique a changé : comme on sert un modèle des millions de fois, on préfère un modèle plus petit et <b>beaucoup plus entraîné</b>, qui coûte moins à l’inférence.</p>\n    <p>L’optimum dépend donc de ce qu’on compte : le coût d’entraînement seul, ou le coût total de vie du modèle.</p>",
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
  "lit": "optimal",
  "look": {},
  "scene": "optimal",
  "fig": ""
 },
 {
  "kicker": "29.3",
  "title": "Les capacités émergentes",
  "sub": "un débat ouvert",
  "body": "\n    <p class=\"lede\">Certaines capacités (arithmétique à plusieurs chiffres, certains raisonnements) semblent absentes des petits modèles puis <b>apparaissent brusquement</b> à partir d’une certaine taille.</p>\n    <p>Wei et ses collègues (2022) ont décrit ces « capacités émergentes ». Schaeffer et ses collègues (2023) ont répondu que le saut vient en partie de la <b>métrique</b> : une mesure tout-ou-rien (réponse exacte) fait apparaître un saut là où une mesure continue montre une progression régulière.</p>\n    <p>Retenez : on ne sait pas toujours prévoir <b>quand</b> un modèle saura faire une tâche, même si la perte moyenne se prévoit bien.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "emergence",
  "look": {},
  "scene": "emergence",
  "fig": ""
 },
 {
  "kicker": "29.4",
  "title": "La chaîne de pensée",
  "sub": "écrire pour raisonner",
  "body": "\n    <p class=\"lede\">Écrire les étapes avant la réponse améliore nettement les résultats sur des problèmes à plusieurs étapes.</p>\n    <p>Pourquoi ? Un modèle fait un calcul de taille fixe par jeton ; en produisant des jetons intermédiaires, il se donne <b>plus de calcul</b> et un espace de travail. Des variantes : <b>« réfléchissons étape par étape »</b>, quelques exemples de raisonnement, <b>autocohérence</b> (plusieurs chaînes, vote sur la réponse).</p>\n    <p>Attention : la chaîne écrite n’est <b>pas toujours fidèle</b> au calcul réel du réseau (chapitre 30) : elle peut être plausible sans être la vraie cause de la réponse.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "cot",
  "look": {},
  "scene": "cot",
  "fig": ""
 },
 {
  "kicker": "29.5",
  "title": "Les modèles de raisonnement",
  "sub": "un second axe d’échelle",
  "body": "\n    <p class=\"lede\">Depuis 2024, des modèles sont entraînés par <b>renforcement</b> (chapitre 7) pour produire de longues réflexions avant de répondre, avec une récompense vérifiable (maths, code).</p>\n    <p>Résultat : plus le modèle <b>réfléchit longtemps</b>, mieux il réussit, ce qui ajoute un axe d’échelle au moment de l’<b>inférence</b>, et pas seulement à l’entraînement. Le prix : plus de jetons, de la latence, un coût multiplié par la longueur de la réflexion.</p>\n    <p>On l’emploie là où la vérification existe (code, mathématiques) ou là où la réponse mérite d’être soignée.</p>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "testtime",
  "look": {},
  "scene": "testtime",
  "fig": ""
 },
 {
  "kicker": "29.6",
  "title": "Les murs",
  "sub": "jusqu’où l’échelle ?",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Données</b> : le texte public de qualité est un stock fini ; on le complète par des données synthétiques, avec le risque de boucler sur ses propres erreurs.</li>\n      <li><b>Énergie</b> : un grand cluster demande des mégawatts (chapitre 18).</li>\n      <li><b>Argent</b> : un entraînement de pointe se compte en centaines de millions de dollars ou plus.</li>\n      <li><b>Fiabilité</b> : certaines limites ne s’effacent pas avec l’échelle seule (chapitre 24).</li>\n    </ul>\n    <p>D’où la recherche de nouveaux leviers : <b>algorithmes plus efficaces</b>, calcul à l’inférence, <b>outils</b> et boucles (chapitres 9 à 11), données de meilleure qualité.</p>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "murs",
  "look": {},
  "scene": "murs",
  "fig": ""
 },
 {
  "kicker": "29.7",
  "title": "Grokking, échelle inversée, vérification",
  "sub": "surprises et méthodes",
  "body": "\n    <p class=\"lede\">L’échelle n’explique pas tout : des comportements surprenants et des méthodes de raisonnement la complètent.</p><ul class=\"rules\"><li><b>Grokking</b> : un petit modèle généralise brusquement bien après avoir longtemps mémorisé.</li><li><b>Échelle inversée</b> : sur certaines tâches, le modèle empire en grossissant.</li><li><b>Récompense de processus</b> : noter chaque étape.</li><li><b>Recherche arborescente</b> : explorer plusieurs raisonnements.</li></ul><p>Le fil commun : mieux vaut un bon <b>vérificateur</b> qu’un générateur isolé.</p>",
  "cam": {
   "target": [
    240,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "grokking",
  "look": {},
  "scene": "grokking",
  "fig": ""
 }
];
export const PLATES = {
  loi: { text: "Kaplan et collaborateurs (2020) ont montré que la perte d’un modèle de langage baisse selon une loi de puissance en fonction du calcul, des données et des paramètres, sur de nombreux ordres de grandeur. Cette régularité permet de prévoir ce que donnera un entraînement plus grand.", facts: () => [["variables", "paramètres N, données D, calcul C"], ["forme", "perte = plancher + a × C^−α"]] },
  optimal: { text: "Pour un budget de calcul donné, il existe un équilibre entre taille du modèle et quantité de données. L’étude « Chinchilla » (2022) a trouvé environ 20 jetons par paramètre. Les modèles récents s’entraînent bien plus longtemps, pour obtenir un petit modèle bon marché à servir.", facts: () => [["Chinchilla", "≈ 20 jetons par paramètre"], ["actuel", "souvent plus de 100"], ["raison", "le coût d’inférence domine"]] },
  emergence: { text: "Certaines capacités semblent apparaître brusquement à partir d’une certaine taille. Selon une analyse critique (2023), l’aspect de saut vient en partie de la mesure : une métrique tout-ou-rien (réponse exacte) donne un saut, une métrique continue donne une progression régulière. Courbes illustratives.", facts: () => [["thèse « émergence »", "sauts à certaines tailles"], ["thèse « mirage »", "effet de la métrique"], ["consensus", "débat ouvert"]] },
  cot: { text: "En demandant au modèle d’écrire son raisonnement avant de répondre, on améliore nettement ses réponses aux problèmes à plusieurs étapes : chaque jeton produit devient une étape de calcul supplémentaire. Le raisonnement écrit n’est pas toujours fidèle à ce qui se passe réellement dans le réseau.", facts: () => [["idée", "plus de jetons = plus de calcul"], ["variantes", "autocohérence : voter sur plusieurs chaînes"]] },
  testtime: { text: "Les modèles de raisonnement sont entraînés, par renforcement sur des problèmes vérifiables (chapitre 7), à produire de longues réflexions. Leur performance progresse avec le calcul dépensé à répondre : c’est un second axe d’échelle, en plus de l’entraînement. Courbes illustratives.", facts: () => [["axe 1", "calcul d’entraînement"], ["axe 2", "calcul à l’inférence"], ["coût", "plus de jetons, plus lent, plus cher"]] },
  murs: { text: "Quatre obstacles pèsent sur la poursuite de l’échelle : le stock de textes de qualité (que l’on complète par des données synthétiques), l’énergie, le coût, et le fait que certaines limites (faits, physique, fiabilité) ne s’effacent pas seulement avec plus de calcul.", facts: () => [["données synthétiques", "produites par d’autres modèles"], ["autres leviers", "algorithmes, inférence, outils"]] },
  grokking: { text: "Le grokking (Power et collègues, 2022) décrit une généralisation qui apparaît soudain après un long surapprentissage. L’échelle inversée (McKenzie et collègues, 2023) recense des tâches où les grands modèles font moins bien. Côté raisonnement : des modèles de récompense de processus (Lightman et collègues, 2023) notent chaque étape, la recherche arborescente explore plusieurs pistes, l’autocohérence vote.", facts: () => [["grokking", "2022"], ["PRM", "récompense par étape"], ["recherche", "arbre de pensées"]] }
};
