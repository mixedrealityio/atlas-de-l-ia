// Chapitre 39 : Une machine peut-elle être consciente ? (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 39 · philosophie",
  "title": "Une machine peut-elle être consciente ?",
  "sub": "ce qui manque à l’IA, selon un argument récent",
  "body": "\n    <p class=\"lede\">Un modèle de langage peut écrire « j’ai mal ». Cela ne dit pas qu’il ressent quoi que ce soit.</p>\n    <p>Ce chapitre suit la vidéo « Voici ce qui manque à l’IA pour être consciente » (chaîne Vision IA, dont le texte m’a été transmis) et la replace dans les théories de la conscience (chapitre 34 pour la sûreté). Les affirmations de faits propres à la vidéo (règles, citations, dates) sont <b>à recouper</b> ; le passage promotionnel de fin n’est pas repris.</p>",
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
  "lit": "mots",
  "look": {},
  "scene": "mots",
  "fig": ""
 },
 {
  "kicker": "39.1",
  "title": "Trois mots à ne pas confondre",
  "sub": "intelligence, conscience, sentience",
  "body": "<ul class=\"rules\"><li><b>Intelligence</b> : résoudre des problèmes, atteindre des buts. Elle se mesure (chapitre 31).</li><li><b>Conscience</b> : l’expérience subjective. Personne ne sait la mesurer, <b>pas même la vôtre</b> chez autrui : on voit un sourire, pas « quelqu’un à l’intérieur ».</li><li><b>Sentience</b> : ressentir plaisir et souffrance, qui fonde un <b>statut moral</b>.</li></ul><p>Un système peut sembler intelligent sans rien ressentir, ou l’inverse : rien ne lie ces propriétés.</p>",
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
  "lit": "mots",
  "look": {},
  "scene": "mots",
  "fig": ""
 },
 {
  "kicker": "39.2",
  "title": "Deux camps",
  "sub": "le support compte-t-il ?",
  "body": "\n    <p class=\"lede\">Imaginez qu’on remplace vos neurones un à un par des puces qui font exactement le même travail. À la fin, êtes-vous toujours là ?</p><ul class=\"rules\"><li><b>Oui</b> (fonctionnalisme, Chalmers lui-même) : ce qui compte est la façon dont l’information est traitée ; le support est interchangeable. Avec assez de calcul, on y arriverait : c’est la position qui <b>arrange le plus</b> l’industrie.</li><li><b>Non</b> (camp du vivant) : la conscience naît d’un cerveau vivant, de sa chimie et de sa physique ; <b>simuler un processus n’est pas le reproduire</b>, comme la photo d’un repas ne nourrit pas.</li></ul><p>Ce débat tourne en rond depuis les années 1980.</p>",
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
  "lit": "chalmers",
  "look": {},
  "scene": "chalmers",
  "fig": ""
 },
 {
  "kicker": "39.3",
  "title": "Une troisième voie",
  "sub": "le computationalisme biologique",
  "body": "\n    <p class=\"lede\">Deux neuroscientifiques renvoient les deux camps dos à dos.</p><ul class=\"rules\"><li>Au camp du vivant : dire que le vivant compte <b>sans expliquer ce qu’il fait de particulier</b>.</li><li>Au camp de la tech : le cerveau n’a <b>pas de logiciel séparé du matériel</b> ; le calcul est la matière elle-même en train de fonctionner.</li><li>Leur position : le cerveau <b>calcule</b> (la tech a raison), mais d’une façon sans rapport avec une puce.</li></ul><p>Article attribué (d’après la vidéo) à Milinkovic et Aru, <i>Neuroscience &amp; Biobehavioral Reviews</i> ; titre exact à vérifier.</p>",
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
  "lit": "troisieme",
  "look": {},
  "scene": "troisieme",
  "fig": ""
 },
 {
  "kicker": "39.4",
  "title": "Indice 1 : un neurone n’est pas un interrupteur",
  "sub": "calcul hybride",
  "body": "<ul class=\"rules\"><li>L’impulsion est <b>tout ou rien</b> (numérique), mais le milieu chimique et électrique varie <b>en continu</b> (analogique) et règle la réponse suivante.</li><li>Les événements se déroulent sur des <b>échelles de temps imbriquées</b> : millisecondes à minutes ; un souvenir qui remonte modifie le traitement en cours.</li><li>Un neurone cortical détaillé demande un réseau artificiel de <b>5 à 8 couches</b> pour être imité ; <b>sans récepteurs NMDA</b>, une couche suffit.</li></ul><p>Un LLM lit le texte d’un bloc, puis génère jeton après jeton : un calcul <b>discret</b>. Une fenêtre de contexte n’est pas l’équivalent de processus rapides et lents modulés en continu.</p>",
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
  "lit": "neurone",
  "look": {},
  "scene": "neurone",
  "fig": ""
 },
 {
  "kicker": "39.5",
  "title": "Indice 2 : les échelles ne se séparent pas",
  "sub": "tout agit sur tout",
  "body": "<ul class=\"rules\"><li><b>Anesthésie</b> : les neurones fonctionnent, ce qui s’éteint est la <b>coordination entre grandes régions</b>.</li><li>Dans un cerveau, molécules, neurones et régions s’influencent <b>dans les deux sens</b>.</li><li>Dans un ordinateur, les niveaux sont <b>cloisonnés</b> : un tableur ignore le processeur. Un modèle d’IA est <b>un fichier de nombres</b> : la puce exécute, elle ne participe pas.</li></ul><p>C’est le cœur de l’argument : pour ces auteurs, la conscience tient à la <b>façon dont les niveaux se parlent</b>, pas aux briques.</p>",
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
  "lit": "echelles",
  "look": {},
  "scene": "echelles",
  "fig": ""
 },
 {
  "kicker": "39.6",
  "title": "Indice 3 : un calcul né de la pénurie",
  "sub": "le métabolisme",
  "body": "<ul class=\"rules\"><li>Cerveau : environ <b>20 W</b>. Grands centres de données : de l’ordre du <b>gigawatt</b>, soit environ 50 millions de fois plus.</li><li>Chez le vivant, l’énergie fait <b>partie du calcul</b> : la rareté a sculpté l’organisation du cerveau, y compris son couplage entre niveaux.</li><li>Pour une IA, la pénurie d’énergie se traite en <b>construisant des centrales</b>, sans remodeler la matière du calcul.</li></ul><p>C’est une <b>hypothèse</b> : les auteurs en font une condition possible de la conscience, pas un fait établi.</p>",
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
  "lit": "energie",
  "look": {},
  "scene": "energie",
  "fig": ""
 },
 {
  "kicker": "39.7",
  "title": "Ce que l’article dit, et ne dit pas",
  "sub": "une thèse précise",
  "body": "<ul class=\"rules\"><li>Il ne dit <b>pas</b> que seule la biologie peut produire une conscience ; il dit que les IA <b>telles qu’on les construit</b> ne reproduisent probablement pas ce qui la ferait émerger.</li><li>La question change : non plus « quel programme faire tourner ? » mais « quel genre de <b>matière</b> pour calculer comme le vivant ? ».</li><li>Un modèle plus gros, avec plus de données, ne changerait pas l’affaire ; il faudrait de <b>nouveaux matériels</b>.</li></ul><p>Les entreprises cherchent la performance, pas la conscience : selon la vidéo, personne n’en créerait une « par accident ».</p>",
  "cam": {
   "target": [
    280,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "manque",
  "look": {},
  "scene": "manque",
  "fig": ""
 },
 {
  "kicker": "39.8",
  "title": "Limites et critiques",
  "sub": "à garder en tête",
  "body": "<ul class=\"rules\"><li>Ces indices décrivent la <b>seule conscience connue</b> ; une autre forme, très différente, ne serait peut-être <b>pas reconnue</b> par nos marqueurs.</li><li>Les <b>fonctionnalistes</b> contestent que le support compte.</li><li>« 5 à 8 couches » mesure une <b>complexité de calcul</b>, pas une conscience ; une faible consommation n’implique pas la conscience.</li><li>« Pas de conscience par accident » est une <b>opinion</b> : l’étude de 2023 ne voit pas d’obstacle technique pour les théories fonctionnelles.</li></ul>",
  "cam": {
   "target": [
    280,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "manque",
  "look": {},
  "scene": "manque",
  "fig": ""
 },
 {
  "kicker": "39.9",
  "title": "Les théories et ce qui manquerait",
  "sub": "selon les familles",
  "body": "<ul class=\"rules\"><li><b>Espace de travail global</b> (Baars, Dehaene) : diffusion à tous les modules ; <b>récurrence</b> ; <b>ordre supérieur</b> et <b>schéma d’attention</b>.</li><li><b>Information intégrée</b> (Tononi) : le matériel compte.</li><li><b>Approches du vivant</b> et computationalisme biologique : corps, métabolisme, couplage entre échelles.</li></ul><p>Une étude collective de 2023 (Butlin, Long et collègues) liste des <b>indicateurs</b> tirés des théories : aucun système actuel n’en réunit assez, mais elle ne voit pas d’obstacle technique évident pour les théories fonctionnelles. Les deux lectures s’opposent.</p>",
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
  "lit": "theories",
  "look": {},
  "scene": "theories",
  "fig": ""
 },
 {
  "kicker": "39.10",
  "title": "Pourquoi les tests sont piégés",
  "sub": "le discours n’est pas une preuve",
  "body": "\n    <p class=\"lede\">Un modèle de langage a appris sur des textes d’humains qui décrivent leurs sentiments : il sait en parler.</p>\n    <p>Ses affirmations (« j’ai mal », « je suis conscient ») reflètent ses données et ses consignes, <b>pas un fait vérifié</b> (effet ELIZA ; en 2022, un ingénieur de Google a affirmé que LaMDA était sensible, ce que l’entreprise et la plupart des spécialistes ont contesté). Si les auteurs ont raison, une IA peut écrire qu’elle souffre <b>sans que rien en elle ne ressemble à de la douleur</b>.</p>\n    <p>Voie recommandée : examiner l’<b>architecture</b> et le <b>fonctionnement interne</b> (chapitres 30 et 58).</p>",
  "cam": {
   "target": [
    320,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "test",
  "look": {},
  "scene": "test",
  "fig": ""
 },
 {
  "kicker": "39.11",
  "title": "Agir sous incertitude",
  "sub": "précaution sans trancher",
  "body": "<ul class=\"rules\"><li>Selon la vidéo : Claude peut depuis août 2025 <b>mettre fin</b> à une conversation abusive ; une règle d’usage interdirait de s’acharner pour lui faire du mal ; la constitution de janvier 2026 qualifie son statut moral de <b>profondément incertain</b>.</li><li>Les réactions s’opposent : approbation d’un côté, accusation d’apprendre à l’IA qu’elle est peut-être consciente de l’autre, et mise en garde contre le fait de lui prêter une dimension morale ou religieuse.</li><li>Le risque le plus concret : <b>abandonner son jugement</b> face à des modèles toujours plus fluides et « humains ».</li></ul><p>Deux erreurs symétriques : <b>sur-attribuer</b> (s’attacher, se laisser manipuler) et <b>sous-attribuer</b> (ignorer une souffrance possible). Ces faits sont rapportés par la vidéo : à recouper à la source.</p>",
  "cam": {
   "target": [
    360,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "ethique",
  "look": {},
  "scene": "ethique",
  "fig": ""
 },
 {
  "kicker": "39.12",
  "title": "Regarder une IA pour ce qu’elle est",
  "sub": "faire la différence entre faire et être",
  "body": "<ul class=\"rules\"><li><b>Comprendre</b> comment elle fonctionne (chapitres 2 à 6, 57 et 58) : un modèle est un fichier de nombres, exécuté.</li><li><b>Distinguer</b> ce qu’elle fait (écrire, raisonner en apparence) de ce qu’elle est (question ouverte).</li><li><b>Garder son jugement</b> : vérifier, recouper, ne pas confondre fluidité et compréhension (chapitre 31).</li><li><b>Rester informé</b> : la science sur ces sujets avance et se contredit encore.</li></ul><p>La vraie question, dit la vidéo, n’est peut-être pas de savoir si l’IA peut être consciente, mais si nous serions capables de le remarquer.</p>",
  "cam": {
   "target": [
    360,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "ethique",
  "look": {},
  "scene": "ethique",
  "fig": ""
 }
];
export const PLATES = {
  mots: { text: "L’intelligence se mesure par des performances. La conscience est l’expérience subjective (le « problème difficile » de Chalmers). La sentience est la capacité de ressentir du plaisir ou de la souffrance : c’est elle qui fonde un statut moral. Rien ne prouve que ces trois propriétés vont toujours ensemble.", facts: () => [["intelligence", "comportement mesurable"], ["conscience", "expérience subjective"], ["sentience", "valeur positive ou négative ressentie"]] },
  chalmers: { text: "Chalmers (et d’autres) imaginent que l’on remplace un à un vos neurones par des puces qui font exactement le même travail. Pour le fonctionnalisme, vous restez conscient : seule compte la façon dont l’information est traitée, le support est interchangeable. Pour le camp du vivant, la conscience naît de la chimie, de l’électricité et de la physique d’un cerveau vivant : simuler un repas ne nourrit pas. Ce débat dure depuis les années 1980.", facts: () => [["fonctionnalisme", "le support est interchangeable"], ["camp du vivant", "simuler ≠ reproduire"], ["enjeu", "c’est la position qui arrange le plus l’industrie"]] },
  troisieme: { text: "Deux neuroscientifiques computationnels (Borjan Milinkovic, Institut de neurosciences Paris-Saclay, et Jaan Aru, université de Tartu) proposent un « computationalisme biologique » : le cerveau calcule bel et bien, mais le calcul y est la matière elle-même en train de fonctionner, sans séparation logiciel-matériel. Ils relèvent trois indices que les machines actuelles n’ont pas.", facts: () => [["auteurs", "Milinkovic et Aru"], ["revue", "Neuroscience & Biobehavioral Reviews"], ["thèse", "calcul vivant, non séparable de la matière"]] },
  neurone: { text: "Un neurone envoie une impulsion tout ou rien, mais baigne dans un milieu chimique et électrique qui varie en continu et règle sa réactivité : un calcul hybride, numérique et analogique, sur plusieurs échelles de temps imbriquées. Une équipe de l’université hébraïque de Jérusalem (2021) a cherché le plus petit réseau artificiel capable de reproduire un neurone cortical détaillé : de 5 à 8 couches. Sans les récepteurs NMDA dans la simulation, une seule couche suffit.", facts: () => [["mesure", "5 à 8 couches pour un neurone"], ["sans NMDA", "1 couche"], ["LLM", "calcul discret, jeton après jeton"]] },
  echelles: { text: "Pendant une anesthésie, les neurones continuent de fonctionner : ce qui disparaît, c’est la coordination entre les grandes régions du cerveau. Dans un cerveau, les niveaux (molécules, neurones, régions) s’influencent dans les deux sens. Dans un ordinateur, au contraire, chaque niveau est cloisonné : un tableur ne sait pas quel processeur l’exécute. Un modèle d’IA est un fichier de nombres : la puce exécute, elle ne participe pas au résultat.", facts: () => [["cerveau", "niveaux couplés dans les deux sens"], ["machine", "niveaux cloisonnés, support interchangeable"]] },
  energie: { text: "Le cerveau fonctionne avec environ 20 W ; les plus grands centres de données approchent le gigawatt, soit de l’ordre de 50 millions de fois plus. Chez le vivant, l’énergie n’est pas un câble d’alimentation : elle fait partie du calcul, façonné par la pression de consommer peu. Les auteurs y voient une condition possible de la conscience. Cette dernière idée reste une hypothèse.", facts: () => [["cerveau", "≈ 20 W"], ["centre de données", "≈ 1 GW"], ["hypothèse", "calcul ancré dans le métabolisme"]] },
  theories: { text: "Les théories divergent sur ce qui suffit : une organisation fonctionnelle (espace global, ordre supérieur, récurrence, schéma d’attention) ou un substrat particulier (structure causale du matériel pour l’IIT, corps vivant pour les approches incarnées et le computationalisme biologique). Selon la famille retenue, la réponse pour l’IA change.", facts: () => [["fonctionnalisme", "l’organisation suffit"], ["IIT", "le matériel compte"], ["incarné", "la vie compte"]] },
  manque: { text: "Selon la théorie retenue, on pointe des manques différents : peu de rétroaction, pas d’espace global explicite, un modèle de soi peu fiable, pas de continuité, et, pour le computationalisme biologique, un calcul qui n’est ni hybride, ni couplé entre échelles, ni ancré dans l’énergie. Ce sont des critères de théories, pas des vérités établies.", facts: () => [["analyse de 2023", "aucun système actuel n’est un candidat sérieux"], ["barrière technique", "pas d’obstacle évident (fonctionnalisme)"]] },
  test: { text: "Un modèle de langage a appris à parler comme des humains qui décrivent leur expérience : ses affirmations ne prouvent rien. Inversement, si une IA développait une forme d’expérience très différente de la nôtre, on ne trouverait pas les marqueurs humains et l’on conclurait à tort qu’elle n’est pas consciente. Les chercheurs proposent donc de chercher des indicateurs dans l’architecture, sans certitude.", facts: () => [["effet ELIZA", "prêter une conscience à ce qui parle"], ["angle mort", "une autre forme de conscience ?"]] },
  ethique: { text: "Selon la vidéo, Anthropic a limité par précaution la cruauté envers son assistant, tout en qualifiant son statut moral de profondément incertain (ni conscient, ni non conscient). Des dirigeants de la tech ont réagi dans les deux sens. Un risque pratique est signalé : confondre ce qu’une IA fait avec ce qu’elle est, et abandonner son jugement face à des modèles de plus en plus convaincants.", facts: () => [["position", "précaution sans trancher"], ["risque pratique", "confondre faire et être"], ["source", "la vidéo, à recouper"]] }
};
