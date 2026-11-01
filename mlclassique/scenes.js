export const SPECS = [
 {
  "key": "outils",
  "title": "La boîte à outils",
  "sub": "des méthodes éprouvées",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Régression linéaire / logistique",
    "s": "base lisible",
    "pal": "blue"
   },
   {
    "n": "Arbres de décision",
    "s": "des questions oui/non en cascade",
    "pal": "blue"
   },
   {
    "n": "Forêts aléatoires",
    "s": "beaucoup d’arbres qui votent",
    "pal": "blue"
   },
   {
    "n": "Boosting",
    "s": "des arbres qui corrigent les erreurs",
    "pal": "red"
   },
   {
    "n": "SVM",
    "s": "la marge maximale, noyaux"
   },
   {
    "n": "k-moyennes, ACP",
    "s": "sans étiquettes"
   }
  ],
  "x0": 0
 },
 {
  "key": "boost",
  "title": "Le boosting",
  "sub": "corriger pas à pas",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Modèle faible 1",
    "s": "un petit arbre"
   },
   {
    "n": "Erreurs",
    "s": "résidus",
    "pal": "red"
   },
   {
    "n": "Arbre suivant",
    "s": "apprend les erreurs",
    "pal": "blue"
   },
   {
    "n": "Somme pondérée",
    "s": "on additionne",
    "pal": "blue"
   },
   {
    "n": "Répéter",
    "s": "des centaines de fois",
    "pal": "blue"
   },
   {
    "n": "Modèle fort",
    "s": "précis",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "choix",
  "title": "Quel outil choisir ?",
  "sub": "règle pratique",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.3,
  "gap": 0.8,
  "y": 1.4,
  "stages": [
   {
    "n": "Peu de données tabulaires",
    "s": "arbres, modèles linéaires",
    "pal": "blue"
   },
   {
    "n": "Beaucoup, tabulaires",
    "s": "boosting",
    "pal": "blue"
   },
   {
    "n": "Images, son, texte",
    "s": "réseaux profonds",
    "pal": "red"
   },
   {
    "n": "Explicabilité exigée",
    "s": "linéaire, arbres peu profonds"
   },
   {
    "n": "Prototype rapide",
    "s": "forêt aléatoire"
   },
   {
    "n": "Toujours",
    "s": "comparer à un modèle simple",
    "pal": "red"
   }
  ],
  "x0": 80
 }
];
