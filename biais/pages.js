// Chapitre 32 : Biais, équité et désinformation (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 32 · société",
  "title": "Biais, équité et désinformation",
  "sub": "ce qu’un modèle reproduit, ce qu’il permet de produire",
  "body": "\n    <p class=\"lede\">Un modèle n’est pas neutre : il hérite de ses données, et il rend facile la fabrication de faux crédibles.</p>\n    <p>Ce chapitre traite de deux risques sociaux : les <b>décisions inégales</b> et les <b>contenus trompeurs</b>.</p>",
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
  "lit": "sourcebiais",
  "look": {},
  "scene": "sourcebiais",
  "fig": ""
 },
 {
  "kicker": "32.1",
  "title": "D’où viennent les biais",
  "sub": "données, étiquettes, proxys",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Représentation</b> : certains groupes sont rares dans les données, le modèle y est moins fiable (reconnaissance faciale moins précise sur certains visages).</li>\n      <li><b>Étiquettes</b> : des décisions humaines passées biaisées (embauches, crédits) deviennent la « vérité » à imiter.</li>\n      <li><b>Proxys</b> : retirer la variable sensible ne suffit pas, d’autres variables (code postal, prénom) la reconstituent.</li>\n    </ul>\n    <p>Les modèles de langage reflètent aussi les stéréotypes du texte aspiré.</p>",
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
  "lit": "sourcebiais",
  "look": {},
  "scene": "sourcebiais",
  "fig": ""
 },
 {
  "kicker": "32.2",
  "title": "Mesurer l’équité",
  "sub": "trois définitions",
  "body": "\n    <p class=\"lede\">Trois idées courantes : <b>parité démographique</b> (mêmes taux de décisions favorables), <b>égalité des chances</b> (mêmes taux de vrais positifs), <b>calibration</b> (un score de 70 % signifie 70 % pour tous).</p>\n    <p>Des résultats théoriques (Kleinberg, Chouldechova, 2016-2017) montrent qu’on ne peut en général pas toutes les satisfaire si les groupes ont des taux de base différents. Il faut <b>choisir</b>, selon l’enjeu et la loi, et documenter ce choix.</p>",
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
  "lit": "equite",
  "look": {},
  "scene": "equite",
  "fig": ""
 },
 {
  "kicker": "32.3",
  "title": "Auditer et corriger",
  "sub": "avant, pendant, après",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Avant</b> : diversifier et documenter les données (fiches de données).</li>\n      <li><b>Pendant</b> : contraintes d’équité à l’entraînement, rééquilibrage.</li>\n      <li><b>Après</b> : mesurer les erreurs <b>par groupe</b>, recours humain, voies de contestation.</li>\n    </ul>\n    <p>Pour les décisions à fort enjeu (emploi, crédit, justice), l’IA assiste et un humain <b>décide</b> ; la loi l’exige souvent.</p>",
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
  "lit": "sourcebiais",
  "look": {},
  "scene": "sourcebiais",
  "fig": ""
 },
 {
  "kicker": "32.4",
  "title": "Contenus synthétiques et désinformation",
  "sub": "le faux devient bon marché",
  "body": "\n    <p class=\"lede\">Générer un texte, une image, une voix ou une vidéo crédibles coûte presque rien.</p>\n    <p>Risques : <b>hypertrucages</b> (<i>deepfakes</i>) pour l’arnaque ou la manipulation, usurpation de voix, fabrication de faux avis ou de faux comptes, bruit informationnel. Autre effet : le « dividende du menteur », quand un vrai document peut être nié comme « faux ».</p>",
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
  "lit": "provenance",
  "look": {},
  "scene": "provenance",
  "fig": ""
 },
 {
  "kicker": "32.5",
  "title": "Provenance et vérification",
  "sub": "C2PA, filigranes, bon sens",
  "body": "\n    <ul class=\"rules\">\n      <li><b>C2PA</b> : un historique signé attaché au fichier, de la création aux modifications.</li>\n      <li><b>Filigranes invisibles</b> dans les contenus générés.</li>\n      <li><b>Détecteurs</b> : peu fiables, donc à ne pas prendre pour des preuves.</li>\n      <li><b>Réflexes</b> : source, contexte, recoupement, image inversée.</li>\n    </ul>\n    <p>Aucune technique ne suffit seule : l’absence de signature ne prouve pas que c’est faux.</p>",
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
  "lit": "provenance",
  "look": {},
  "scene": "provenance",
  "fig": ""
 }
];
export const PLATES = {
  sourcebiais: { text: "Un modèle apprend les régularités de ses données, y compris les injustices. Des données mal représentatives, des étiquettes humaines biaisées ou des variables « proxys » (code postal) produisent des décisions inégales, qui peuvent renforcer les données futures.", facts: () => [["sources", "données, étiquettes, proxys"], ["effet", "boucle de renforcement"]] },
  equite: { text: "Les définitions mathématiques de l’équité (parité, égalité des chances, calibration) ne peuvent en général pas être satisfaites ensemble quand les taux de base des groupes diffèrent. Choisir est une décision de société, à documenter.", facts: () => [["résultat", "impossibilité de tout satisfaire"], ["action", "choisir, documenter, auditer"]] },
  provenance: { text: "La norme C2PA (« Content Credentials ») attache à un fichier un historique signé. Des filigranes invisibles sont aussi insérés dans les contenus générés. Mais métadonnées et filigranes peuvent être supprimés, et un contenu sans signature n’est pas forcément faux.", facts: () => [["C2PA", "provenance signée"], ["limite", "effaçable, adoption partielle"]] }
};
