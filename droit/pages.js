// Chapitre 33 : Droit et gouvernance (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 33 · droit",
  "title": "Droit et gouvernance",
  "sub": "ce qu’il faut savoir avant de déployer",
  "body": "\n    <p class=\"lede\">Utiliser l’IA en entreprise ou dans un service public engage des règles : données personnelles, droit d’auteur, responsabilité, réglementation propre à l’IA.</p>\n    <p>Ce chapitre donne des repères, <b>pas un avis juridique</b> : les textes, calendriers et jugements évoluent vite, et il faut les vérifier à la source avant toute décision.</p>",
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
  "lit": "risques",
  "look": {},
  "scene": "risques",
  "fig": ""
 },
 {
  "kicker": "33.1",
  "title": "Le règlement européen sur l’IA",
  "sub": "par niveaux de risque",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Interdits</b> : par exemple la notation sociale par les autorités ou l’exploitation de vulnérabilités.</li>\n      <li><b>Systèmes à haut risque</b> (emploi, crédit, éducation, santé, justice…) : gestion des risques, qualité des données, documentation, supervision humaine, robustesse.</li>\n      <li><b>Obligations de transparence</b> : indiquer qu’on parle à une IA, signaler les contenus générés.</li>\n      <li><b>Modèles d’IA à usage général</b> : documentation, politique de droit d’auteur, évaluation renforcée pour les plus puissants.</li>\n    </ul>\n    <p>Application <b>échelonnée</b> depuis 2024 : <b>vérifier le calendrier au Journal officiel</b>.</p>",
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
  "lit": "risques",
  "look": {},
  "scene": "risques",
  "fig": ""
 },
 {
  "kicker": "33.2",
  "title": "Données personnelles",
  "sub": "le RGPD s’applique",
  "body": "\n    <p class=\"lede\">Dès qu’un prompt, un document ou une base contient des données de personnes, le <b>RGPD</b> s’applique.</p>\n    <ul class=\"rules\">\n      <li>Savoir <b>pourquoi</b> on traite (base légale) et ne garder que le nécessaire.</li>\n      <li>Respecter les <b>droits</b> : accès, rectification, effacement, opposition.</li>\n      <li>Encadrer les <b>décisions automatisées</b> ayant des effets importants.</li>\n      <li>Réfléchir à l’<b>hébergement</b> : un service en ligne reçoit vos données (chapitre 21 pour le sur site).</li>\n    </ul>",
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
  "lit": "donnees",
  "look": {},
  "scene": "donnees",
  "fig": ""
 },
 {
  "kicker": "33.3",
  "title": "Droit d’auteur",
  "sub": "entraînement et sorties",
  "body": "\n    <p class=\"lede\">Les modèles sont entraînés sur d’immenses corpus qui contiennent des œuvres protégées.</p>\n    <p>Plusieurs débats : l’entraînement relève-t-il d’une exception (fouille de textes) ou exige-t-il une licence ; que faire des sorties proches d’une œuvre ; une création générée est-elle protégeable (souvent, sans apport humain créatif, non). Des procès et des accords de licence avec éditeurs sont en cours : <b>aucune règle mondiale stable</b> à ce jour.</p>\n    <p>Pratique : vérifier les conditions de l’outil, éviter de faire reproduire une œuvre, garder trace de l’apport humain.</p>",
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
  "lit": "auteur",
  "look": {},
  "scene": "auteur",
  "fig": ""
 },
 {
  "kicker": "33.4",
  "title": "Responsabilité et gouvernance interne",
  "sub": "qui répond d’une erreur ?",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Responsabilité</b> : l’organisation qui déploie répond de l’usage ; contrats avec le fournisseur, assurance, preuve des contrôles.</li>\n      <li><b>Gouvernance interne</b> : inventaire des usages d’IA, classification par risque, politique d’usage, formation (le règlement européen demande une « maîtrise de l’IA »).</li>\n      <li><b>Traçabilité</b> : journaux des requêtes et des décisions, versions de modèles.</li>\n      <li><b>Humain dans la boucle</b> pour les décisions à enjeu.</li>\n    </ul>",
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
  "lit": "risques",
  "look": {},
  "scene": "risques",
  "fig": ""
 },
 {
  "kicker": "33.5",
  "title": "Dans le monde",
  "sub": "trois philosophies",
  "body": "\n    <p class=\"lede\">Aucune approche mondiale unique.</p>\n    <p>L’<b>UE</b> a un règlement transversal par risques. Les <b>États-Unis</b> combinent textes sectoriels, décrets et lois d’États. La <b>Chine</b> réglemente des applications précises avec enregistrement des services. Des <b>normes volontaires</b> (ISO/IEC 42001 pour un système de management de l’IA, NIST AI Risk Management Framework) servent de langage commun, et des <b>instituts de sûreté</b> nationaux évaluent les modèles les plus puissants.</p>\n    <p>Pour une organisation internationale : viser le niveau d’exigence le plus élevé qui la concerne.</p>",
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
  "lit": "monde",
  "look": {},
  "scene": "monde",
  "fig": ""
 }
];
export const PLATES = {
  risques: { text: "Le règlement européen sur l’IA (« AI Act », 2024) classe les usages par niveau de risque : certains sont interdits, d’autres « à haut risque » demandent évaluation, documentation et supervision humaine, d’autres imposent la transparence. Les dates d’application sont échelonnées : à vérifier au Journal officiel de l’UE.", facts: () => [["adoption", "règlement (UE) 2024/1689"], ["calendrier", "échelonné, à vérifier"], ["sanctions", "jusqu’à un pourcentage du chiffre d’affaires"]] },
  donnees: { text: "Le RGPD s’applique dès qu’un système traite des données de personnes : base légale, minimisation, droits des personnes, encadrement des décisions entièrement automatisées, analyse d’impact. Un modèle entraîné sur des données personnelles pose en plus la question de l’effacement.", facts: () => [["RGPD", "en vigueur depuis 2018"], ["en pratique", "éviter d’envoyer des données sensibles à un service tiers"]] },
  auteur: { text: "Trois questions juridiques : peut-on entraîner sur des œuvres protégées (exception de fouille de textes, opt-out, ou licence) ; une sortie qui ressemble trop à une œuvre est-elle une contrefaçon ; une œuvre générée est-elle protégeable. Les réponses varient selon les pays et évoluent avec les jugements.", facts: () => [["UE", "exception de fouille avec droit d’opposition"], ["situation", "contentieux en cours"]] },
  monde: { text: "L’Union européenne privilégie un règlement transversal fondé sur les risques ; les États-Unis procèdent par textes sectoriels, décrets et lois d’États ; la Chine encadre des applications précises (algorithmes de recommandation, IA générative) avec enregistrement. Des normes volontaires (ISO/IEC 42001, NIST AI RMF) servent de référence commune.", facts: () => [["normes", "ISO/IEC 42001, NIST AI RMF"], ["avertissement", "textes et dates évoluent vite"]] }
};
