// Chapitre 73 : L’IA, le cosmos et le Grand Filtre (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 73 · cosmos",
  "title": "L’IA, le cosmos et le Grand Filtre",
  "sub": "une question vertigineuse",
  "body": "\n    <p class=\"lede\">Si l’univers est si vaste, pourquoi ne voyons-nous personne ? Certaines réponses font jouer un rôle à l’IA.</p>\n    <p>Ce chapitre est le plus spéculatif de l’atlas : il distingue ce qui est observé, ce qui est calculé et ce qui est imaginé.</p>",
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
  "lit": "fermi",
  "look": {},
  "scene": "fermi",
  "fig": ""
 },
 {
  "kicker": "73.1",
  "title": "Le paradoxe de Fermi",
  "sub": "et le Grand Filtre",
  "body": "<ul class=\"rules\"><li><b>Le constat</b> : beaucoup d’étoiles, beaucoup de planètes, aucune civilisation observée.</li><li><b>Drake (1961)</b> : une équation qui multiplie des facteurs, dont plusieurs sont inconnus à des ordres de grandeur près.</li><li><b>Grand Filtre</b> (Hanson, 1996) : une étape quasi infranchissable entre la matière inerte et une civilisation qui colonise l’espace.</li><li><b>Où est-il ?</b> Derrière nous (apparition de la vie), ou devant (autodestruction).</li></ul>",
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
  "lit": "fermi",
  "look": {},
  "scene": "fermi",
  "fig": ""
 },
 {
  "kicker": "73.2",
  "title": "L’IA dans les hypothèses",
  "sub": "filtre ou successeur",
  "body": "<ul class=\"rules\"><li><b>Filtre</b> : une technologie trop puissante et mal maîtrisée, comme une IA non alignée (chapitre 34).</li><li><b>Successeur</b> : les civilisations deviendraient des machines, au comportement imprévisible.</li><li><b>Paradoxe</b> : une IA qui détruirait sa civilisation pourrait elle-même se répandre ; on devrait alors la voir.</li><li><b>Statut</b> : des arguments intéressants, aucune donnée.</li></ul><p>Ces réflexions servent surtout de miroir : elles interrogent notre capacité à survivre à nos propres techniques.</p>",
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
  "lit": "hypotheses",
  "look": {},
  "scene": "hypotheses",
  "fig": ""
 },
 {
  "kicker": "73.3",
  "title": "L’IA pour chercher",
  "sub": "ce qui se fait vraiment",
  "body": "<ul class=\"rules\"><li><b>Radioastronomie</b> : séparer d’éventuels signaux artificiels des interférences humaines (téléphones, satellites).</li><li><b>2023</b> : huit signaux candidats trouvés par apprentissage, non confirmés à la réobservation.</li><li><b>Exoplanètes</b> : des réseaux de neurones repèrent des planètes dans les données de Kepler et TESS.</li><li><b>Atmosphères</b> : chercher des molécules associées à la vie avec le télescope James-Webb.</li></ul><p>L’IA ne répondra pas seule à la question, mais elle permet de fouiller des volumes de données inaccessibles à la main.</p>",
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
  "lit": "seti",
  "look": {},
  "scene": "seti",
  "fig": ""
 }
];
export const PLATES = {
  fermi: { text: "La galaxie compte des centaines de milliards d’étoiles et beaucoup de planètes ; pourtant, nous n’observons aucune civilisation. Enrico Fermi aurait demandé en 1950 : « Où sont-ils ? ». Frank Drake a proposé en 1961 une équation pour estimer leur nombre. L’économiste Robin Hanson (1996) imagine un « Grand Filtre » : une étape presque impossible à franchir. S’il est derrière nous, nous sommes rares ; s’il est devant, il pourrait nous attendre, et certains y placent une technologie comme l’IA.", facts: () => [["équation de Drake", "des facteurs très incertains"], ["Hanson", "« The Great Filter », 1996"]] },
  hypotheses: { text: "Deux idées s’opposent. Pour certains, une IA mal maîtrisée serait un filtre qui met fin aux civilisations (chapitre 34). Pour d’autres, les civilisations avancées deviendraient post-biologiques : des machines, peut-être silencieuses ou indétectables. Des sondes capables de se reproduire (idée de von Neumann) pourraient explorer la galaxie, mais nous n’en voyons aucune. Tout cela reste spéculatif : l’absence de données ne permet pas de trancher.", facts: () => [["chapitre 34", "risques et alignement"], ["statut", "hypothèses non testables aujourd’hui"]] },
  seti: { text: "L’IA trie les données des radiotélescopes : une étude de 2023 a utilisé l’apprentissage pour réanalyser des observations et proposer huit signaux candidats, qui ne se sont pas reproduits. Elle aide aussi à repérer des exoplanètes dans les courbes de lumière et à analyser leurs atmosphères. À ce jour, aucune trace de vie extraterrestre n’a été confirmée.", facts: () => [["Ma et al., 2023", "Nature Astronomy, signaux candidats"], ["Kepler", "exoplanètes trouvées par réseau de neurones"]] }
};
