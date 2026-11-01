// Chapitre 67 : Armes autonomes et IA militaire (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 67 · défense",
  "title": "Armes autonomes et IA militaire",
  "sub": "la machine peut-elle décider de tuer ?",
  "body": "\n    <p class=\"lede\">L’IA transforme déjà la guerre : renseignement, drones, défense antimissile. La question la plus grave est celle des armes qui choisiraient et frapperaient leurs cibles sans humain.</p>\n    <p>Ce chapitre décrit la boucle de décision, les usages réels, les risques propres et l’état du droit international.</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "67.1",
  "title": "La boucle de décision",
  "sub": "dans, sur ou hors de la boucle",
  "body": "<ul class=\"rules\"><li><b>Dans la boucle</b> : un humain valide chaque engagement.</li><li><b>Sur la boucle</b> : le système agit, un humain supervise et peut l’arrêter.</li><li><b>Hors de la boucle</b> : l’arme sélectionne et attaque seule ; c’est la définition usuelle d’une <b>arme autonome</b>.</li></ul><p>La frontière est floue : un missile qui choisit seul sa cible dans une zone donnée, ou un drone qui termine sa course quand la liaison est coupée, est-il autonome ?</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "67.2",
  "title": "Les usages militaires",
  "sub": "du renseignement aux drones",
  "body": "<ul class=\"rules\"><li><b>Renseignement</b> : trier des volumes d’images et de signaux impossibles à lire à la main.</li><li><b>Logistique et maintenance</b> : la majorité des projets, peu visibles.</li><li><b>Défense antimissile</b> : des modes automatiques existent depuis des décennies.</li><li><b>Drones</b> : en Ukraine, des millions de drones bon marché ; guidage final autonome contre le brouillage.</li><li><b>Ciblage assisté</b> : des logiciels qui proposent des cibles, avec une validation humaine parfois très rapide.</li></ul>",
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
  "lit": "usages",
  "look": {},
  "scene": "usages",
  "fig": ""
 },
 {
  "kicker": "67.3",
  "title": "Les risques",
  "sub": "ce qui change avec l’IA",
  "body": "<ul class=\"rules\"><li><b>Erreurs de classification</b> : les données de guerre sont rares, bruitées et piégeables (chapitre 45).</li><li><b>Vitesse</b> : des interactions entre systèmes plus rapides que la décision politique.</li><li><b>Responsabilité diluée</b> entre concepteurs, chefs et opérateurs.</li><li><b>Prolifération</b> : des armes peu chères, copiables, accessibles à des groupes armés.</li><li><b>Biais d’automatisation</b> : valider en quelques secondes n’est pas contrôler.</li></ul>",
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
  "lit": "risques",
  "look": {},
  "scene": "risques",
  "fig": ""
 },
 {
  "kicker": "67.4",
  "title": "Le droit international",
  "sub": "un traité en débat",
  "body": "<ul class=\"rules\"><li>Le <b>droit humanitaire</b> s’applique : distinction, proportionnalité, précaution.</li><li>Discussions à <b>Genève</b> (Convention sur certaines armes classiques) depuis 2014.</li><li><b>2023</b> : première résolution de l’Assemblée générale de l’ONU sur les systèmes d’armes létaux autonomes.</li><li>Pas de <b>traité contraignant</b> à ce jour ; beaucoup d’États demandent un « contrôle humain significatif ».</li></ul><p>L’AI Act européen (chapitre 33) exclut les usages militaires.</p>",
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
  "lit": "droit",
  "look": {},
  "scene": "droit",
  "fig": ""
 }
];
export const PLATES = {
  boucle: { text: "Un système d’arme suit une boucle : détecter, identifier, décider, agir. On parle d’humain « dans la boucle » quand il valide chaque engagement, « sur la boucle » quand il supervise et peut interrompre, et « hors de la boucle » quand l’arme sélectionne et attaque seule ses cibles : c’est la définition courante d’un système d’arme létal autonome (SALA).", facts: () => [["dans / sur / hors de la boucle", "trois degrés de contrôle"], ["SALA", "système d’arme létal autonome"]] },
  usages: { text: "L’essentiel des usages militaires de l’IA concerne le renseignement (trier des images satellites, des communications), la logistique et la maintenance. Certaines défenses antimissiles fonctionnent déjà en mode automatique, faute de temps pour une décision humaine. La guerre en Ukraine a vu se multiplier les drones bon marché, dont certains finissent leur trajectoire seuls quand la liaison est brouillée. Des enquêtes journalistiques ont décrit des logiciels proposant des cibles à grande échelle.", facts: () => [["Ukraine", "drones par millions, guidage terminal autonome"], ["défense", "systèmes automatiques depuis des décennies"]] },
  risques: { text: "Une classification erronée peut tuer des civils. Des systèmes qui réagissent en millisecondes peuvent déclencher une escalade avant toute décision politique. Si une arme autonome commet un crime de guerre, la responsabilité se dilue entre programmeur, fabricant, commandant et opérateur. Les drones autonomes sont peu chers et se copient, y compris par des groupes non étatiques. Enfin, un humain « dans la boucle » qui valide en quelques secondes peut n’être qu’un tampon (biais d’automatisation).", facts: () => [["contrôle humain significatif", "pas une simple validation"], ["prolifération", "acteurs non étatiques"]] },
  droit: { text: "Le droit international humanitaire s’applique déjà : distinguer combattants et civils, proportionner l’attaque, prendre des précautions. Des États discutent depuis 2014 dans le cadre de la Convention sur certaines armes classiques à Genève ; l’Assemblée générale de l’ONU a adopté fin 2023 une première résolution sur les systèmes d’armes létaux autonomes. Beaucoup d’États et d’ONG demandent un traité garantissant un contrôle humain significatif ; les grandes puissances militaires y sont réticentes.", facts: () => [["2023", "résolution 78/241 de l’Assemblée générale"], ["AI Act", "exclut les usages militaires de son champ"]] }
};
