// Chapitre 68 : Éthique de l’IA (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 68 · éthique",
  "title": "Éthique de l’IA",
  "sub": "principes et dilemmes",
  "body": "\n    <p class=\"lede\">Des centaines de chartes éthiques de l’IA ont été publiées. Elles se ressemblent beaucoup ; la difficulté est de les appliquer.</p>\n    <p>Ce chapitre présente les principes communs, les grandes chartes, les dilemmes réels et ce qui transforme les principes en actes.</p>",
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
  "lit": "principes",
  "look": {},
  "scene": "principes",
  "fig": ""
 },
 {
  "kicker": "68.1",
  "title": "Cinq principes",
  "sub": "un socle commun",
  "body": "<ul class=\"rules\"><li><b>Bienfaisance</b> : servir le bien-être des personnes et de la planète.</li><li><b>Non-malfaisance</b> : éviter les dommages (vie privée, sécurité).</li><li><b>Autonomie</b> : les humains gardent la décision sur ce qui compte.</li><li><b>Justice</b> : partager équitablement bénéfices et risques, ne pas discriminer.</li><li><b>Explicabilité</b> : comprendre les décisions et savoir qui en répond.</li></ul><p>Ces principes entrent souvent en tension : plus d’explicabilité peut coûter de la performance, plus de protection peut coûter de l’utilité.</p>",
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
  "lit": "principes",
  "look": {},
  "scene": "principes",
  "fig": ""
 },
 {
  "kicker": "68.2",
  "title": "Les grandes chartes",
  "sub": "des chercheurs aux États",
  "body": "<ul class=\"rules\"><li><b>Asilomar</b> (2017) : 23 principes rédigés par des chercheurs et des industriels.</li><li><b>Montréal</b> (2018) : une déclaration co-construite avec des citoyens.</li><li><b>UE et OCDE</b> (2019) : IA « digne de confiance », principes adoptés par des dizaines de pays.</li><li><b>UNESCO</b> (2021) : première norme mondiale adoptée par ses États membres.</li><li><b>2024</b> : l’AI Act et la convention du Conseil de l’Europe en font du <b>droit</b>.</li></ul>",
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
  "lit": "chartes",
  "look": {},
  "scene": "chartes",
  "fig": ""
 },
 {
  "kicker": "68.3",
  "title": "Les dilemmes",
  "sub": "moins spectaculaires qu’un tramway",
  "body": "<ul class=\"rules\"><li>Le <b>tramway</b> : rare en pratique, mais il force à expliciter des valeurs.</li><li><b>Moral Machine</b> : des millions de réponses, des préférences qui varient selon les cultures.</li><li><b>Les vrais arbitrages</b> : quel taux d’erreur accepter, pour qui, avec quel recours ?</li><li><b>Équité</b> : plusieurs définitions raisonnables sont incompatibles ; il faut choisir (chapitre 32).</li><li><b>Qui choisit ?</b> Développeurs, entreprises, États, utilisateurs, personnes affectées ?</li></ul>",
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
  "lit": "dilemmes",
  "look": {},
  "scene": "dilemmes",
  "fig": ""
 },
 {
  "kicker": "68.4",
  "title": "Des principes aux actes",
  "sub": "ce qui engage vraiment",
  "body": "<ul class=\"rules\"><li><b>Étude d’impact</b> avant de déployer : qui peut être lésé, comment ?</li><li><b>Audit indépendant</b> et accès des chercheurs aux systèmes.</li><li><b>Recours</b> : pouvoir contester une décision et obtenir une réponse humaine.</li><li><b>Traçabilité</b> : documenter données, modèles et évaluations (chapitre 44).</li><li><b>Obligations légales</b> avec sanctions (chapitre 33).</li></ul><p>Signe d’éthique de façade : une charte publiée, mais aucun budget, aucune personne responsable et aucun indicateur.</p>",
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
  "lit": "actes",
  "look": {},
  "scene": "actes",
  "fig": ""
 }
];
export const PLATES = {
  principes: { text: "En comparant des dizaines de chartes, les philosophes Luciano Floridi et Josh Cowls (2019) retrouvent les quatre principes de la bioéthique (bienfaisance, non-malfaisance, autonomie, justice) et en ajoutent un propre à l’IA : l’explicabilité, c’est-à-dire pouvoir comprendre comment une décision est prise et savoir qui en répond.", facts: () => [["bioéthique", "quatre principes classiques"], ["IA", "+ explicabilité"]] },
  chartes: { text: "Les 23 principes d’Asilomar (2017) sont issus d’une conférence de chercheurs. La Déclaration de Montréal (2018) a été élaborée avec des citoyens. En 2019, l’Union européenne publie des lignes directrices pour une IA digne de confiance et l’OCDE adopte ses principes. L’UNESCO adopte en 2021 une recommandation signée par ses États membres. En 2024, l’AI Act européen et la convention-cadre du Conseil de l’Europe transforment une partie de ces principes en obligations.", facts: () => [["tendance", "des principes volontaires vers le droit"], ["chapitre 33", "AI Act"]] },
  dilemmes: { text: "Le dilemme du tramway est souvent cité pour les voitures autonomes. L’expérience « Moral Machine » du MIT (Nature, 2018) a recueilli environ 40 millions de décisions dans 233 pays et territoires : les préférences varient selon les cultures. Mais les vrais dilemmes sont moins spectaculaires : quel taux d’erreur accepter, pour quels groupes, au profit de qui ? Plusieurs définitions de l’équité sont mathématiquement incompatibles (chapitre 32).", facts: () => [["Awad et al., 2018", "Moral Machine"], ["incompatibilités", "chapitre 32"]] },
  actes: { text: "Des principes trop vagues n’engagent à rien ; on parle d’« éthique de façade » (ethics washing) quand une organisation affiche une charte sans changer ses pratiques. Ce qui compte : des études d’impact avant le déploiement, des audits indépendants, des voies de recours pour les personnes concernées, et des obligations légales sanctionnées.", facts: () => [["ethics washing", "l’éthique comme communication"], ["chapitres 31 et 44", "évaluer, surveiller"]] }
};
