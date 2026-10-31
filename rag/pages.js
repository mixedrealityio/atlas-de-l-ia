// Chapitre 20 : Le RAG, du prototype à la production (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 20 · pratique",
  "title": "Le RAG, du prototype à la production",
  "sub": "faire répondre un modèle avec vos documents",
  "body": "\n    <p class=\"lede\">Un modèle ne connaît ni vos documents, ni les événements récents. Le <b>RAG</b> (<i>retrieval-augmented generation</i>) lui donne les passages utiles <b>au moment de répondre</b>.</p>\n    <p>Une démonstration se monte en une après-midi ; un système fiable est un chantier. Ce chapitre décrit les <b>quatre ingrédients</b> d’un RAG qui marche (ingestion, recherche, évaluation, boucle de vérification), une variante (le <b>wiki tenu par un LLM</b>), son usage <b>vocal</b>, et ce qui l’<b>industrialise</b>.</p>",
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
  "lit": "ingest",
  "look": {},
  "scene": "ingest",
  "fig": ""
 },
 {
  "kicker": "20.1",
  "title": "L’ingestion",
  "sub": "tout se joue avant la question",
  "body": "\n    <p class=\"lede\">La plupart des RAG médiocres le sont à cause de leurs données, pas du modèle.</p>\n    <ul class=\"rules\">\n      <li><b>Extraction</b> : un PDF mal lu (colonnes mélangées, tableaux aplatis) donne un texte inutilisable.</li>\n      <li><b>Découpage</b> : par structure (titres, paragraphes) plutôt que par longueur fixe ; passages de quelques centaines de jetons, avec un peu de chevauchement.</li>\n      <li><b>Métadonnées</b> : source, date, auteur, section, droits d’accès. Elles servent à filtrer et à citer.</li>\n      <li><b>« Petit pour chercher, grand pour lire »</b> : on cherche sur de petits passages et on donne au modèle le contexte plus large autour.</li>\n    </ul>",
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
  "lit": "ingest",
  "look": {},
  "scene": "ingest",
  "fig": ""
 },
 {
  "kicker": "20.2",
  "title": "Chercher, reclasser",
  "sub": "le sens et les mots",
  "body": "\n    <p class=\"lede\">Chercher par le sens (vecteurs) échoue sur les références exactes : un code d’erreur, un nom propre, un numéro de pièce.</p>\n    <p>On combine donc la <b>recherche vectorielle</b> et la <b>recherche par mots-clés</b> (BM25), et on fusionne les classements (par exemple par somme des inverses des rangs). Puis un <b>modèle de reclassement</b>, plus précis mais plus lent, trie les quelques dizaines de candidats pour n’en garder que cinq à dix.</p>\n    <p>Une <b>réécriture de la question</b> par le modèle (la préciser, la décomposer) améliore souvent le rappel pour peu de coût.</p>",
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
  "lit": "requete",
  "look": {},
  "scene": "requete",
  "fig": ""
 },
 {
  "kicker": "20.3",
  "title": "Mesurer",
  "sub": "sans évaluation, on ne progresse pas",
  "body": "\n    <p class=\"lede\">On évalue séparément la <b>recherche</b> et la <b>réponse</b>.</p>\n    <ul class=\"rules\">\n      <li><b>Recherche</b> : le bon passage est-il parmi les <i>k</i> premiers ? (rappel@<i>k</i>, rang moyen du premier bon résultat.)</li>\n      <li><b>Réponse</b> : est-elle <b>fidèle</b> aux passages (pas d’invention) et <b>pertinente</b> pour la question ? Mesurée par des relecteurs ou par un modèle juge, avec ses biais.</li>\n    </ul>\n    <p>La base de l’évaluation est un <b>jeu de référence</b> : quelques dizaines à centaines de vraies questions, avec les passages et les réponses attendus. On le rejoue à chaque changement de découpage, de modèle ou de consigne. Sans cela, une amélioration sur un cas en dégrade silencieusement dix autres.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 2,
   "el": 4,
   "dist": 26,
   "auto": true
  },
  "lit": "espace",
  "look": {},
  "scene": "espace",
  "fig": ""
 },
 {
  "kicker": "20.4",
  "title": "Le RAG en boucle",
  "sub": "chercher, juger, recommencer",
  "body": "\n    <p class=\"lede\">Une seule recherche ne suffit pas pour une question comme « comment le contrat X diffère-t-il du contrat Y ? ».</p>\n    <p>Un RAG <b>agentique</b> décompose la question, cherche pour chaque partie, <b>juge si les passages suffisent</b>, et reformule ou élargit sinon. Il peut aussi vérifier sa réponse contre les sources avant de la rendre.</p>\n    <p>Ce que cela exige (chapitre 11) : des <b>bornes</b> (nombre de tours, jetons, durée), une détection de l’absence de progrès, et une sortie honnête (« je n’ai pas trouvé ») plutôt qu’une réponse inventée.</p>",
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
  "lit": "agentique",
  "look": {},
  "scene": "agentique",
  "fig": ""
 },
 {
  "kicker": "20.5",
  "title": "Le wiki tenu par un LLM",
  "sub": "une alternative pour les petits corpus",
  "body": "\n    <p class=\"lede\">Idée décrite début 2026 par des comptes rendus de blog : plutôt que de retrouver des passages bruts à chaque question, un LLM <b>écrit et tient à jour un wiki</b>.</p>\n    <p>Il lit les sources, rédige des pages de synthèse, crée un index et des liens, et repasse périodiquement pour signaler les contradictions. Les questions lisent ce wiki, en texte simple, lisible par un humain et versionnable. La recherche reste utile pour retrouver la bonne page.</p>\n    <p>Limites : adapté à des corpus de taille modeste (quelques dizaines de milliers de jetons à quelques centaines de pages) ; une erreur écrite dans le wiki est relue partout ; l’écriture coûte des appels au modèle. Au-delà, le RAG classique reprend l’avantage.</p>",
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
  "lit": "wiki",
  "look": {},
  "scene": "wiki",
  "fig": ""
 },
 {
  "kicker": "20.6",
  "title": "Le RAG vocal",
  "sub": "quand la réponse doit venir en moins d’une seconde",
  "body": "\n    <p class=\"lede\">Un <b>assistant vocal</b> enchaîne détection de fin de parole, reconnaissance, recherche, modèle, synthèse vocale. Le tout doit commencer à répondre en moins d’une seconde environ.</p>\n    <ul class=\"rules\">\n      <li><b>Flux partout</b> : reconnaissance, LLM et synthèse fonctionnent en continu, sans attendre la fin de l’étape précédente.</li>\n      <li><b>Recherche en parallèle</b> ou en cache, souvent démarrée avant la fin de la phrase.</li>\n      <li><b>Interruption</b> (<i>barge-in</i>) : si l’utilisateur reprend la parole, la synthèse s’arrête aussitôt.</li>\n      <li><b>Mesurer le percentile 95</b>, pas la moyenne : une réponse lente sur vingt casse l’impression de naturel.</li>\n    </ul>",
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
  "lit": "voix",
  "look": {},
  "scene": "voix",
  "fig": ""
 },
 {
  "kicker": "20.7",
  "title": "Industrialiser",
  "sub": "ce qui reste après la démonstration",
  "body": "\n    <p class=\"lede\">Six chantiers font la différence entre un prototype et un service.</p>\n    <ul class=\"rules\">\n      <li><b>Évaluation continue</b> sur le jeu de référence, à chaque changement.</li>\n      <li><b>Droits d’accès</b> : filtrer les passages <b>à la recherche</b> selon l’utilisateur ; filtrer après la réponse est trop tard.</li>\n      <li><b>Fraîcheur</b> : réindexer ce qui change, supprimer ce qui disparaît.</li>\n      <li><b>Observabilité</b> : tracer chaque requête (question, passages, réponse, durée, coût) pour comprendre les échecs.</li>\n      <li><b>Coût</b> : cache, modèle plus petit pour la réécriture, reclassement limité.</li>\n      <li><b>Sécurité</b> : un document peut contenir des consignes cachées (chapitre 22) ; traiter le contenu retrouvé comme une donnée.</li>\n    </ul>",
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
  "lit": "prod",
  "look": {},
  "scene": "prod",
  "fig": ""
 }
];
export const PLATES = {
  ingest: { text: "Avant toute question, on transforme les documents en passages que l’on sait retrouver : extraction du texte, découpage, vecteur par passage, métadonnées (source, date, droits d’accès), puis un index qui sait chercher par le sens et par les mots.", facts: () => [["passage typique", "quelques centaines de jetons"], ["à garder", "source, date, droits"], ["piège", "un mauvais découpage coupe l’information"]] },
  requete: { text: "La recherche hybride combine la proximité de sens (vecteurs) et la correspondance exacte (mots-clés, BM25) ; les deux se trompent sur des questions différentes. Un reclassement par un modèle plus fin garde quelques passages, que le modèle cite dans sa réponse.", facts: () => [["fusion", "RRF : somme de rangs"], ["reclassement", "modèle plus précis, plus lent"], ["sortie", "réponse + passages cités"]] },
  espace: { text: "Chaque passage et la question sont des points d’un même espace. On renvoie les k points les plus proches de la question. La qualité dépend des plongements, du découpage, et de ce qu’on demande : une question vague trouve des passages vagues.", facts: () => [["k courant", "5 à 20 avant reclassement"], ["mesure", "angle entre vecteurs (cosinus)"]] },
  agentique: { text: "Un RAG « agentique » ne cherche pas une seule fois. Il décompose la question, cherche, lit, juge si les passages suffisent, et reformule ou cherche ailleurs sinon. Chaque tour coûte du temps et des jetons, d’où un nombre de tours borné.", facts: () => [["bornes", "tours, jetons, durée"], ["gain", "questions à plusieurs étapes"], ["risque", "boucler sans nouvelle information"]] },
  wiki: { text: "Variante décrite début 2026 : au lieu de retrouver des passages bruts à chaque question, un LLM écrit et tient à jour un wiki de pages liées entre elles (un index, des résumés, des renvois). La connaissance est compilée une fois, lisible par un humain, versionnable. Convient aux petits corpus.", facts: () => [["avantage", "lisible, sans base vectorielle"], ["limite", "petits corpus, coût d’écriture"], ["risque", "une erreur écrite est relue partout"]] },
  voix: { text: "Une conversation vocale naturelle demande de répondre en moins d’une seconde environ. Le budget se partage entre détection de fin de parole, reconnaissance, recherche, premier jeton du LLM et premier son. La recherche, qui dépasse facilement le budget, doit se faire en parallèle ou en cache.", facts: () => [["budget cible", "≈ 800 ms jusqu’au premier son"], ["mesure", "médiane et percentile 95"], ["interruption", "barge-in : couper la voix si on parle"]] },
  prod: { text: "Un RAG de démonstration réussit sur dix questions. En production, il faut mesurer en continu (jeu de questions de référence), respecter les droits d’accès, garder l’index à jour, observer les échecs, maîtriser les coûts, et traiter les documents comme non fiables.", facts: () => [["jeu de référence", "questions + passages attendus"], ["droits", "filtrer à la recherche, pas après"], ["dérive", "silencieuse : à surveiller"]] }
};
