// Chapitre 72 : L’IA au service du bien commun (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 72 · bien commun",
  "title": "L’IA au service du bien commun",
  "sub": "ce qui marche vraiment",
  "body": "\n    <p class=\"lede\">L’IA peut-elle aider à résoudre les grands problèmes ? Parfois, oui : quelques réussites sont spectaculaires. Elles ont des conditions précises.</p>\n    <p>Ce chapitre présente des réussites, les conditions qui les expliquent et les pièges des utopies technologiques.</p>",
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
  "lit": "reussites",
  "look": {},
  "scene": "reussites",
  "fig": ""
 },
 {
  "kicker": "72.1",
  "title": "Des réussites",
  "sub": "des cas réels",
  "body": "<ul class=\"rules\"><li><b>AlphaFold</b> : la structure de presque toutes les protéines connues, en accès libre ; prix Nobel de chimie 2024.</li><li><b>Crues</b> : des alertes plusieurs jours à l’avance dans des régions sans réseau de mesure dense.</li><li><b>Accessibilité</b> : sous-titres en direct, description d’images, synthèse vocale.</li><li><b>Langues</b> : traduction pour des langues jusqu’ici ignorées par les outils.</li><li><b>Santé</b> : aide au dépistage dans des régions sans spécialistes (chapitre 46).</li></ul>",
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
  "lit": "reussites",
  "look": {},
  "scene": "reussites",
  "fig": ""
 },
 {
  "kicker": "72.2",
  "title": "Les conditions",
  "sub": "pourquoi ces projets réussissent",
  "body": "<ul class=\"rules\"><li><b>Données publiques</b> accumulées pendant des décennies (Protein Data Bank).</li><li><b>Ouverture</b> : modèles et résultats accessibles à tous.</li><li><b>Ancrage local</b> : partenaires de terrain, langues, contraintes réelles.</li><li><b>Mesure</b> : un impact vérifié, pas seulement une démonstration.</li><li><b>Gouvernance</b> : les personnes concernées participent aux choix.</li></ul>",
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
  "lit": "conditions",
  "look": {},
  "scene": "conditions",
  "fig": ""
 },
 {
  "kicker": "72.3",
  "title": "Utopies et solutionnisme",
  "sub": "se tromper de problème",
  "body": "<ul class=\"rules\"><li><b>Abondance</b> : l’IA ferait baisser le coût de nombreux services ; à qui iront les gains (chapitre 54) ?</li><li><b>Revenu universel</b> : une idée discutée pour partager les gains, sans consensus.</li><li><b>Solutionnisme</b> : traiter un problème politique ou social comme un problème technique.</li><li><b>Utopies concrètes</b> : des objectifs précis, mesurables, avec les personnes concernées.</li></ul><p>L’IA amplifie ce qu’on lui donne à faire : elle sert le bien commun quand on le lui demande explicitement et qu’on en mesure les effets.</p>",
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
  "lit": "utopies",
  "look": {},
  "scene": "utopies",
  "fig": ""
 }
];
export const PLATES = {
  reussites: { text: "AlphaFold a prédit la structure de presque toutes les protéines connues (environ 200 millions, base ouverte depuis 2022), un outil utilisé par des millions de chercheurs ; ses auteurs ont reçu le prix Nobel de chimie 2024. Des systèmes de prévision des crues donnent des alertes dans des dizaines de pays. Sous-titrage automatique, description d’images pour les personnes aveugles et traduction de langues peu dotées améliorent l’accès.", facts: () => [["Nobel 2024", "Hassabis et Jumper, avec Baker"], ["accessibilité", "sous-titres, lecture d’écran"]] },
  conditions: { text: "Les projets qui réussissent partagent des points communs : des modèles et des données ouverts (AlphaFold s’appuie sur des décennies de données publiques), une adaptation au contexte local, une mesure de l’impact réel plutôt que des démonstrations, un financement qui ne dépend pas d’un modèle publicitaire, et l’implication des personnes concernées.", facts: () => [["Protein Data Bank", "données publiques depuis 1971"], ["chapitre 5", "ouvert ou fermé"]] },
  utopies: { text: "Certains imaginent une ère d’abondance où l’IA libère du travail, avec un revenu universel pour partager les gains. Evgeny Morozov a critiqué le « solutionnisme » : la tendance à traiter tout problème social comme un problème technique. La faim, par exemple, est surtout une question de pauvreté et de conflits, pas de rendement. Les utopies utiles se fixent des objectifs concrets et mesurables.", facts: () => [["Morozov, 2013", "« Pour tout résoudre, cliquez ici »"], ["chapitre 54", "à qui vont les gains"]] }
};
