// Chapitre 3 : Ce qui se passe pendant une inférence (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 3 · tous niveaux",
  "title": "Ce qui se passe pendant une inférence",
  "sub": "de l’invite au dernier mot",
  "body": "\n    <p class=\"lede\">Vous envoyez une question. Que fait la machine entre l’appui sur « envoyer » et le dernier mot ?</p>\n    <p>L’<b>inférence</b> (<i>serving</i>) se déroule en deux phases très différentes. Le <b>prefill</b> lit toute l’invite d’un coup. Le <b>décodage</b> écrit ensuite la réponse <b>un jeton à la fois</b>, car chaque jeton dépend du précédent.</p>\n    <p>Presque tout ce que l’on règle en production (latence, débit, coût, mémoire) vient de cette asymétrie.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 4,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "phase",
  "look": {},
  "scene": "phase",
  "fig": ""
 },
 {
  "kicker": "3.1",
  "title": "Prefill et décodage",
  "sub": "deux goulots d’étranglement",
  "body": "\n    <p class=\"lede\">Le <b>prefill</b> traite des milliers de jetons en parallèle : c’est du calcul intense, le GPU est occupé. Il détermine le <b>temps avant le premier jeton</b>.</p>\n    <p>Le <b>décodage</b> produit un jeton par passe, mais chaque passe doit relire <b>tous les poids</b> depuis la mémoire. Le GPU passe son temps à attendre les données : on est limité par la <b>bande passante mémoire</b>.</p>\n    <div class=\"eq\">vitesse maximale ≈ bande passante / taille des poids</div>\n    <p>Avec 14 Go de poids et 2 To/s de bande passante, la borne théorique à une requête est d’environ 140 jetons par seconde. Plus de requêtes servies ensemble amortissent cette lecture.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 4,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "phase",
  "look": {},
  "scene": "phase",
  "fig": ""
 },
 {
  "kicker": "3.2",
  "title": "Le cache KV",
  "sub": "relire au lieu de recalculer",
  "body": "\n    <p class=\"lede\">Pour écrire le jeton <i>n</i>, l’attention a besoin des clés et des valeurs des <i>n</i>−1 jetons précédents. Elles ne changent pas : on les <b>garde en mémoire</b>.</p>\n    <p>À chaque pas, le modèle calcule Q, K et V du <b>seul nouveau jeton</b>, ajoute K et V au cache, et relit le cache pour son attention. Sans cache, le coût de la réponse grandirait comme le carré de la longueur.</p>\n    <p>Le prix est la mémoire : le cache grossit avec la longueur du contexte et le nombre de conversations en cours.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 4,
   "el": 5,
   "dist": 26,
   "auto": true
  },
  "lit": "cache",
  "look": {},
  "scene": "cache",
  "fig": ""
 },
 {
  "kicker": "3.3",
  "title": "Combien de mémoire ?",
  "sub": "poids, cache, quantification",
  "body": "\n    <p class=\"lede\">Deux postes pèsent sur la mémoire : les <b>poids</b> et le <b>cache KV</b>.</p>\n    <p><b>Poids</b> : nombre de paramètres × octets par paramètre. En 16 bits (2 octets) : 14 Go pour 7 milliards. La <b>quantification</b> (8 bits, 4 bits) divise ce chiffre, au prix d’une petite perte de qualité.</p>\n    <div class=\"eq\">cache par jeton = 2 × couches × têtes KV × dim. de tête × octets</div>\n    <p>Pour 32 couches, 8 têtes KV de 128 dimensions et 2 octets : 131 072 octets, soit 128 Ko par jeton ; 4 Go pour 32 000 jetons. Avec 32 têtes KV (sans GQA), ce serait 16 Go. Une carte de 24 Go n’accueille donc pas les deux sans compromis.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 5,
   "el": 5,
   "dist": 26,
   "auto": true
  },
  "lit": "memoire",
  "look": {},
  "scene": "memoire",
  "fig": ""
 },
 {
  "kicker": "3.4",
  "title": "Débit, latence et astuces",
  "sub": "batching, pagination, décodage spéculatif",
  "body": "\n    <p class=\"lede\">Un serveur d’inférence arbitre entre <b>latence</b> (vitesse perçue par un utilisateur) et <b>débit</b> (jetons produits par seconde au total).</p>\n    <ul class=\"rules\">\n      <li><b>Batching continu</b> : traiter plusieurs requêtes ensemble, en y faisant entrer de nouvelles dès qu’une se termine.</li>\n      <li><b>Cache paginé</b> : découper le cache en pages pour ne pas gaspiller la mémoire.</li>\n      <li><b>Cache de préfixe</b> : réutiliser le prefill d’un prompt système identique d’une requête à l’autre.</li>\n      <li><b>Décodage spéculatif</b> (figure) : un petit modèle propose, le gros vérifie ; même résultat, souvent deux à trois fois plus vite.</li>\n    </ul>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 4,
   "el": 6,
   "dist": 26,
   "auto": true
  },
  "lit": "spec",
  "look": {},
  "scene": "spec",
  "fig": ""
 }
];
export const PLATES = {
  phase: { text: "L’inférence a deux temps : le prefill traite toute l’invite d’un coup (calcul intense, parallèle), puis le décodage produit les jetons un par un (chaque pas relit le cache et les poids).", facts: () => [["prefill", "limité par le calcul"], ["décodage", "limité par la bande passante mémoire"]] },
  cache: { text: "À chaque pas, seul le nouveau jeton est calculé. Les clés et valeurs de tous les jetons précédents ont déjà été calculées et sont relues dans le cache. Sans cache, on referait tout le calcul de l’invite à chaque nouveau mot.", facts: () => [["sans cache", "coût ∝ n² par réponse"], ["avec cache", "coût ∝ n"], ["prix", "de la mémoire"]] },
  memoire: { text: "Pour un modèle de 7 milliards de paramètres : 14 Go en 16 bits, environ 4 Go quantifié en 4 bits. Le cache KV s’y ajoute et croît avec le contexte et le nombre de requêtes simultanées. Le partage des têtes (GQA) le divise par quatre ici.", facts: () => [["poids fp16", "2 octets × 7 Md = 14 Go"], ["cache par jeton (GQA)", "128 Ko"], ["32 000 jetons", "≈ 4 Go"]] },
  spec: { text: "Le gros modèle est lent parce qu’il relit tous ses poids à chaque jeton. Pour en tirer plusieurs par lecture, on laisse un petit modèle proposer quelques jetons, et le gros les vérifie en une seule passe. Le résultat est identique à celui du gros modèle seul.", facts: () => [["gain typique", "×2 à ×3"], ["qualité", "inchangée"]] }
};
