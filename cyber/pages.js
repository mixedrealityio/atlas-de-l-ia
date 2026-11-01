// Chapitre 53 : IA et cybersécurité (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 53 · secteurs",
  "title": "IA et cybersécurité",
  "sub": "un outil pour les deux camps",
  "body": "<p class='lede'>L’IA accélère la défense et l’attaque. L’équilibre dépend de qui l’adopte le mieux.</p>",
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
  "lit": "defense",
  "look": {},
  "scene": "defense",
  "fig": ""
 },
 {
  "kicker": "53.1",
  "title": "Défendre avec l’IA",
  "sub": "détecter, trier, corriger",
  "body": "<ul class=\"rules\"><li><b>Anomalies</b> sur les journaux et le réseau.</li><li><b>Tri d’alertes</b> : moins de bruit pour les analystes.</li><li><b>Revue de code</b> et recherche de failles ; <b>correctifs</b> proposés.</li></ul>",
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
  "lit": "defense",
  "look": {},
  "scene": "defense",
  "fig": ""
 },
 {
  "kicker": "53.2",
  "title": "Les attaques facilitées",
  "sub": "hameçonnage, voix, vidéo",
  "body": "<ul class=\"rules\"><li><b>Hameçonnage</b> ciblé, sans fautes, à grande échelle.</li><li><b>Clonage de voix</b> et visioconférences truquées.</li><li><b>Automatisation</b> de reconnaissance et d’exploitation de failles connues.</li></ul>",
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
  "lit": "attaque",
  "look": {},
  "scene": "attaque",
  "fig": ""
 },
 {
  "kicker": "53.3",
  "title": "Sécuriser les applications d’IA",
  "sub": "secure by design",
  "body": "<ul class=\"rules\"><li>Attaques sur les LLM : chapitre 45.</li><li><b>Moindre privilège</b>, validation des actions, journalisation (chapitre 22).</li><li><b>Double validation</b> pour les virements et les changements sensibles.</li></ul>",
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
  "lit": "attaque",
  "look": {},
  "scene": "attaque",
  "fig": ""
 }
];
export const PLATES = {
  defense: { text: "Côté défense, l’IA aide à repérer des comportements anormaux, à trier le flot d’alertes d’un centre de supervision, à analyser des logiciels malveillants et à chercher des failles dans le code (par exemple une faille réelle trouvée par un agent de recherche de vulnérabilités en 2024). Les décisions importantes restent humaines.", facts: () => [["usage clé", "tri des alertes"], ["limite", "faux positifs"]] },
  attaque: { text: "Des attaquants gagnent en échelle et en crédibilité : messages d’hameçonnage soignés, voix clonées, vidéoconférences truquées (un cas de fraude signalé en 2024 à Hong Kong aurait coûté de l’ordre de 25 millions de dollars). Parades : vérification par un autre canal, procédures de double validation, formation.", facts: () => [["fraude", "voix et visages clonés"], ["parade", "vérifier hors canal"]] }
};
