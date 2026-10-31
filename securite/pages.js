// Chapitre 22 : Jailbreaks et défenses (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 22 · avancé",
  "title": "Jailbreaks et défenses",
  "sub": "un modèle n’obéit pas à une règle, il suit une tendance",
  "body": "\n    <p class=\"lede\">Un modèle n’a pas de règle de sécurité gravée : il a appris, par entraînement, à <b>refuser</b> certaines demandes. Ce comportement peut être contourné ; on parle de <b>jailbreak</b>.</p>\n    <p>Ce chapitre explique <b>pourquoi</b> cela arrive et <b>comment s’en protéger</b>, y compris avec des modèles ouverts. Il décrit les attaques à un niveau général pour mieux se défendre ; il ne donne pas de méthode détaillée pour en monter.</p>",
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
  "lit": "couches",
  "look": {},
  "scene": "couches",
  "fig": ""
 },
 {
  "kicker": "22.1",
  "title": "Pourquoi ça arrive",
  "sub": "trois causes de fond",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Objectifs concurrents</b> : le modèle est entraîné à être utile <b>et</b> à refuser ; une formulation qui fait pencher vers l’utilité peut l’emporter.</li>\n      <li><b>Généralisation incomplète</b> : le refus est appris sur des exemples ; une demande formulée autrement (langue rare, codage, mise en scène) peut sortir du domaine couvert.</li>\n      <li><b>Un seul canal</b> : consignes, question et documents sont du texte dans le même contexte ; le modèle ne sépare pas parfaitement ce qu’on lui demande de ce qu’il lit.</li>\n    </ul>\n    <p>Conséquence : on ne peut pas « corriger » définitivement un modèle. Il faut des protections <b>autour</b> de lui.</p>",
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
  "lit": "canal",
  "look": {},
  "scene": "canal",
  "fig": ""
 },
 {
  "kicker": "22.2",
  "title": "Les familles d’attaques",
  "sub": "un aperçu, côté défense",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Injection directe</b> : l’utilisateur demande au modèle d’ignorer ses consignes.</li>\n      <li><b>Injection indirecte</b> : des instructions cachées dans un document, une page web ou un courriel que le système lit.</li>\n      <li><b>Mise en scène</b> : faire jouer un rôle, un récit ou une hypothèse pour obtenir ce que la demande directe n’obtiendrait pas.</li>\n      <li><b>Brouillage</b> : changer de langue, coder, fragmenter ou masquer le contenu pour échapper aux filtres.</li>\n      <li><b>Conversations longues</b> : avancer par petites étapes, ou saturer le contexte d’exemples.</li>\n      <li><b>Attaques automatisées</b> : des programmes cherchent des formulations qui marchent.</li>\n    </ul>",
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
  "lit": "canal",
  "look": {},
  "scene": "canal",
  "fig": ""
 },
 {
  "kicker": "22.3",
  "title": "Se protéger",
  "sub": "défense en profondeur",
  "body": "\n    <p class=\"lede\">La règle de base : <b>ne jamais compter sur le modèle seul</b> pour protéger quelque chose d’important.</p>\n    <ul class=\"rules\">\n      <li><b>Droits minimaux</b> : un agent ne reçoit que les outils et les données dont il a besoin ; les actions sensibles demandent la confirmation d’un humain.</li>\n      <li><b>Séparer instructions et données</b> : marquer clairement le contenu extérieur comme une donnée, ne pas lui obéir.</li>\n      <li><b>Filtrer l’entrée et la sortie</b> avec des classifieurs, et vérifier les actions demandées avant de les exécuter.</li>\n      <li><b>Isoler et tracer</b> : code en bac à sable ; tout comportement inhabituel doit se voir.</li>\n    </ul>",
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
  "lit": "couches",
  "look": {},
  "scene": "couches",
  "fig": ""
 },
 {
  "kicker": "22.4",
  "title": "Les garde-fous ouverts",
  "sub": "des modèles et des outils à brancher",
  "body": "\n    <p class=\"lede\">Des classifieurs de sécurité à poids ouverts existent, que l’on branche avant et après le modèle principal.</p>\n    <ul class=\"rules\">\n      <li><b>Llama Guard</b> (Meta) et <b>ShieldGemma</b> (Google) : classent une requête ou une réponse selon des catégories de risques.</li>\n      <li><b>Granite Guardian</b> (IBM) : modèle de garde, y compris pour des contrôles de fidélité d’un RAG.</li>\n      <li><b>NeMo Guardrails</b> (NVIDIA) : cadre pour définir des règles de dialogue autour d’un modèle.</li>\n      <li><b>LLM Guard</b> et d’autres bibliothèques : filtres déterministes (données personnelles, secrets, formats).</li>\n    </ul>\n    <p>Aucun n’est infaillible : des études montrent qu’ils peuvent eux-mêmes être contournés. On les <b>combine</b> et on les <b>reteste</b>.</p>",
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
  "lit": "couches",
  "look": {},
  "scene": "couches",
  "fig": ""
 },
 {
  "kicker": "22.5",
  "title": "Tester et mesurer",
  "sub": "red teaming et jeux d’évaluation",
  "body": "\n    <p class=\"lede\">Une défense non testée est une hypothèse.</p>\n    <ul class=\"rules\">\n      <li><b>Équipe rouge</b> : des personnes autorisées essaient de détourner le système, avec un périmètre et des règles écrits.</li>\n      <li><b>Jeux d’évaluation publics</b> (par exemple HarmBench, JailbreakBench) : mesurent le taux de réussite d’attaques connues.</li>\n      <li><b>Deux mesures</b> : le taux d’attaques qui réussissent, <b>et</b> le taux de refus injustifiés (un système trop prudent est inutilisable).</li>\n      <li><b>En continu</b> : rejouer à chaque changement de modèle ou de consigne, et ajouter chaque incident réel au jeu d’essais.</li>\n    </ul>",
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
  "lit": "redteam",
  "look": {},
  "scene": "redteam",
  "fig": ""
 }
];
export const PLATES = {
  couches: { text: "Les protections se superposent : un filtre à l’entrée, un modèle entraîné à refuser, un filtre à la sortie, des outils aux droits minimaux, et une trace de tout. Chaque couche arrête une partie des attaques ; aucune ne les arrête toutes.", facts: () => [["principe", "plusieurs barrières indépendantes"], ["à ne pas faire", "tout confier au prompt système"]] },
  canal: { text: "Pour un modèle, consignes, question et documents sont du texte dans le même contexte. Un contenu extérieur (page web, courriel, fichier) peut donc contenir des ordres que le modèle prend pour légitimes : c’est l’injection de consignes, directe ou indirecte.", facts: () => [["injection directe", "dans la demande"], ["injection indirecte", "dans un contenu lu par le modèle"], ["risque max", "quand des outils agissent"]] },
  redteam: { text: "Tester ses défenses est un travail régulier : une équipe, ou un outil, tente de détourner le système avec des attaques connues ; on mesure le taux de réussite ; on corrige (consignes, filtres, droits des outils) ; on retest, y compris les cas anciens.", facts: () => [["mesure principale", "taux de réussite des attaques"], ["à surveiller aussi", "les refus injustifiés"]] }
};
