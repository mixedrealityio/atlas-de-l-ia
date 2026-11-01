// Chapitre 28 : Générer (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 28 · avancé",
  "title": "Générer",
  "sub": "fabriquer plutôt que classer",
  "body": "\n    <p class=\"lede\">Classer une image consiste à répondre « c’est un chat ». <b>Générer</b> consiste à produire un chat qui n’existait pas.</p>\n    <p>Quatre grandes familles se sont succédé : <b>autoencodeurs variationnels</b>, <b>GAN</b>, <b>modèles de diffusion</b> et <b>modèles autorégressifs</b>. Elles reposent toutes sur l’idée d’apprendre la forme des données pour en tirer de nouvelles.</p>",
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
  "lit": "ae",
  "look": {},
  "scene": "ae",
  "fig": ""
 },
 {
  "kicker": "28.1",
  "title": "Autoencodeurs et VAE",
  "sub": "compresser pour comprendre",
  "body": "\n    <p class=\"lede\">Un <b>autoencodeur</b> apprend à compresser une donnée en quelques nombres (l’espace latent) puis à la reconstruire.</p>\n    <p>Le <b>VAE</b> y ajoute une contrainte : l’encodeur produit une <b>distribution</b>, rapprochée d’une loi normale par une pénalité. L’espace latent devient continu : en tirant un point au hasard et en le décodant, on obtient une donnée plausible, et on peut interpoler d’un visage à un autre.</p>\n    <p>Défaut : les images produites sont souvent floues.</p>",
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
  "lit": "vae",
  "look": {},
  "scene": "vae",
  "fig": ""
 },
 {
  "kicker": "28.2",
  "title": "Les GAN",
  "sub": "un faussaire contre un expert",
  "body": "\n    <p class=\"lede\">En 2014, Goodfellow propose d’entraîner <b>deux réseaux l’un contre l’autre</b>.</p>\n    <p>Le <b>générateur</b> fabrique de fausses images à partir de bruit ; le <b>discriminateur</b> apprend à distinguer vrai et faux ; le générateur apprend à le tromper. À l’équilibre, les faux sont difficiles à distinguer.</p>\n    <p>Les GAN ont donné les premiers visages synthétiques réalistes. Mais l’entraînement est capricieux, et le générateur peut se limiter à quelques types d’images. Les modèles de diffusion les ont largement remplacés.</p>",
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
  "lit": "gan",
  "look": {},
  "scene": "gan",
  "fig": ""
 },
 {
  "kicker": "28.3",
  "title": "La diffusion",
  "sub": "apprendre en débruitant",
  "body": "\n    <p class=\"lede\">Les modèles de <b>diffusion</b> (2020) dominent la génération d’images.</p>\n    <p>On apprend à <b>retirer un peu de bruit</b> d’une image. Pour générer, on part de bruit pur et on répète 20 à 50 fois. Le <b>guidage</b> par un texte (via un encodeur comme CLIP, chapitre 8) oriente le résultat ; la force du guidage règle le compromis entre fidélité au texte et diversité.</p>\n    <p>La <b>diffusion latente</b> (Stable Diffusion, 2022) travaille sur une version compressée de l’image, ce qui a rendu la génération accessible sur un GPU grand public. Des variantes récentes simplifient l’entraînement (<i>flow matching</i>).</p>",
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
  "lit": "diffusion2",
  "look": {},
  "scene": "diffusion2",
  "fig": ""
 },
 {
  "kicker": "28.4",
  "title": "Autorégression contre diffusion",
  "sub": "deux philosophies",
  "body": "\n    <p class=\"lede\">Comment fabriquer un objet complexe ?</p>\n    <ul class=\"rules\">\n      <li><b>Autorégression</b> : le produire pièce par pièce, un jeton après l’autre, comme un LLM. On peut y appliquer les mêmes méthodes (contexte, échantillonnage, chapitre 4) à du texte, de l’audio ou des images en jetons.</li>\n      <li><b>Diffusion</b> : partir d’un brouillon (du bruit) et le raffiner en entier à chaque étape.</li>\n    </ul>\n    <p>Aujourd’hui : texte et code en autorégression, images et vidéo surtout en diffusion, audio des deux. Les modèles multimodaux mêlent souvent les deux.</p>",
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
  "lit": "auto",
  "look": {},
  "scene": "auto",
  "fig": ""
 },
 {
  "kicker": "28.5",
  "title": "Voix, musique et vidéo",
  "sub": "du texte aux médias animés",
  "body": "\n    <ul class=\"rules\">\n      <li><b>Voix</b> : depuis WaveNet (2016), la synthèse a gagné en naturel ; des voix sont maintenant presque indiscernables d’une voix réelle, ce qui pose des problèmes d’usurpation (chapitre 32).</li>\n      <li><b>Musique</b> : des services générant des chansons à partir d’un texte combinent codec audio, modèle de langage et diffusion.</li>\n      <li><b>Vidéo</b> : des modèles comme Sora ou Veo traitent des blocs d’espace-temps ; ils produisent des scènes plausibles, mais violent encore parfois la physique (objets qui apparaissent, mouvements impossibles).</li>\n    </ul>\n    <p>Le coût de calcul de la vidéo est très supérieur à celui du texte.</p>",
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
  "lit": "audiovisuel",
  "look": {},
  "scene": "audiovisuel",
  "fig": ""
 },
 {
  "kicker": "28.6",
  "title": "Contrôler et reconnaître",
  "sub": "commander, retoucher, détecter",
  "body": "\n    <p class=\"lede\">Générer au hasard ne suffit pas : on veut <b>commander</b>.</p>\n    <ul class=\"rules\">\n      <li><b>ControlNet</b> et méthodes voisines : imposer une pose, un contour, une carte de profondeur.</li>\n      <li><b>Retouche locale</b> (<i>inpainting</i>) : régénérer seulement une zone.</li>\n      <li><b>Style et identité</b> : adapter un modèle à un style ou à un personnage avec peu d’exemples (LoRA, chapitre 6).</li>\n    </ul>\n    <p>Limites : mains, texte dans l’image, cohérence entre images. Et une image générée peut être confondue avec une photo : le chapitre 32 traite de la provenance.</p>",
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
  "lit": "diffusion2",
  "look": {},
  "scene": "diffusion2",
  "fig": ""
 }
];
export const PLATES = {
  ae: { text: "Un autoencodeur apprend à compresser une donnée en peu de nombres (l’espace latent) puis à la reconstruire. Pour générer, on choisit un point de l’espace latent et on le décode. Le goulot oblige le réseau à garder l’essentiel.", facts: () => [["objectif", "sortie ≈ entrée"], ["espace latent", "la description compacte"], ["version générative", "VAE"]] },
  vae: { text: "Le VAE force l’encodeur à produire une distribution plutôt qu’un point, et une pénalité (KL) la rapproche d’une loi normale. L’espace latent devient continu et bien rangé : tirer un point au hasard et le décoder donne une donnée plausible.", facts: () => [["perte", "reconstruction + divergence KL"], ["défaut", "images souvent floues"]] },
  gan: { text: "Un GAN (2014) oppose deux réseaux : un générateur qui fabrique de faux exemples, et un discriminateur qui distingue le vrai du faux. Chacun progresse contre l’autre. L’entraînement est instable et le générateur peut se limiter à quelques types d’exemples (effondrement de modes).", facts: () => [["inventeur", "Goodfellow et collaborateurs, 2014"], ["difficulté", "entraînement instable"]] },
  diffusion2: { text: "Un modèle de diffusion apprend à retirer un peu de bruit d’une image bruitée. Pour générer, on part de bruit pur et on répète le débruitage, en guidant avec un texte (guidage sans classifieur). Les modèles récents travaillent dans un espace latent compressé et utilisent des transformeurs.", facts: () => [["étapes", "20 à 50 à l’inférence"], ["espace", "latent (plus rapide)"], ["guidage", "texte → image"]] },
  auto: { text: "Deux philosophies : produire une suite de jetons un à un (comme un LLM, appliqué à l’audio ou aux images codées en jetons), ou raffiner un objet complet depuis du bruit. Les images et la vidéo ont surtout choisi la diffusion ; le texte, l’autorégression.", facts: () => [["texte", "autorégressif"], ["images, vidéo", "souvent diffusion"], ["tendance", "mélanger les deux"]] },
  audiovisuel: { text: "La voix et la musique sont codées en jetons par un codec neuronal puis générées comme du texte. La vidéo traite des « blocs » d’espace-temps. Le plus difficile est la cohérence dans le temps : visages, objets et physique qui restent stables.", facts: () => [["voix", "quasi indiscernable"], ["vidéo", "physique approximative"], ["coût", "élevé"]] }
};
