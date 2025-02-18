# Exercices sur l'Asynchrone en JavaScript

- Toutes les réponses doivent être placées dans le fichier `exercices.js`.
- Pour chaque exercice, tu dois faire un commit avec le titre de l'exercice.
- Il n'est pas nécessaire de conserver le code précédent, mais ⚠️ **attention** certaines parties seront utiles pour les exercices suivants.
- Le code existant dans exercices.js n'a pas vocation a être modifié.

## Rappels

- N'hésite pas à consulter vos notes de cours et la documentation en ligne.
- Utilise `console.log()` fréquemment pour vérifier tes résultats.

## Thème 🌐🕰️🌈🚀📡

- Tu es Chronos 🕰️, un voyageur temporel qui explore différentes époques et collecte des artefacts historiques rares via des missions asynchrones.

## Note : Du code est déjà présent

Tu verras dans le code JavaScript que plusieurs fonctions existent déjà. Soit curieux pour comprendre ce qui s'y passe.

## Exercices

### Le Téléporteur Temporel

**Objectifs :**

- Comprendre l'utilisation de callbacks asynchrones.
- Maîtriser la fonction `setTimeout()`.
- Simuler un processus asynchrone simple.
- Manipuler le DOM avec JavaScript pour gérer l'affichage d'un loader.

**Résultat attendu :**

- Quand une époque est choisie, on doit voir un "loader" de chargement à la place de "Actuelle (2025)".
- Quand le votage temporel est terminé :
  - Le loader disparaît.
  - On doit voir le nom de l'époque apparaitre à la place de "Actuelle (2025)".

**Instructions :**

- Crée une fonction `voyagerTemps(destination, callback)` qui prend deux paramètres :
  - `destination` (une chaîne représentant l'époque).
  - `callback` (une fonction à exécuter une fois le voyage terminé).
- À l'intérieur de la fonction, utilise `setTimeout()` avec un délai aléatoire entre 1000 et 3000 ms.
  - Utilise la fonction `generationNombreAleatoireEntre(1000, 3000)`.
  - Appelle la fonction de callback quand `setTimeout()` est terminée.
- Affiche des `console.log()` pour que tu puisses comprendre ce qui se passe à l'éxécution :)
  - Au début de la fonction `console.log("Voyage en cours vers la destination : ", destination)`.
  - Au moment ou la fonction `setTimeout()` est terminée, `console.log("Arrivée à l'époque destination : ", destination)`.

**Attention** : Cette fonction, la machine temporelle, n'a pas but de gérer le HTML !

Exemple d'utilisation :

```js
voyagerTemps(nomEpoque, function () {
  console.log("Execution de code quand le voyage est terminé.");
});
```

**Suite des instructions** :

- Utilise cette fonction `voyageTemps()` dans la fonction `quandEpoqueChoisie()`
- La fonction `quandEpoqueChoisie()` est appelée lors du choix d'une époque et après avoir cliquer sur le bouton "Voyager". Nous allons manipuler le HTML pour faire comprendre au voyageur qu'un voyage dans le temps est en cours.
  - Dans le HTML, il y a déjà un élément qui représente un chargement (un loader) `<span class="voyage_en_cours"></span>`. Il est caché par défaut.
- Lorsque l'on lance un voyage :
  - Cache le nom de l'époque actuellement affichée dans `<span class="localisation_epoque">`.
  - Affiche le loader.
- Lorsque le voyage est terminé (donc dans la fonction de rappel de `voyageTemps`)
  - Cache le loader.
  - Utilise la fonction existante `afficherDestination(nomEpoque)` pour afficher le nom de l'époque de destination dans le HTML.

**Note** : Tu peux utiliser `document.querySelector()` pour trouver un élément, et le cacher avec `element.style.display = "none"`. Ou le réafficher avec `element.style.display = ""` ou `element.style.display = "block"`.

- Dans votre callback :
  - Cache le "loader".
  - Met à jour la noeud texte avec l'époque choisie dans `<span class="localisation_epoque">`.
  - Affiche l'époque de la destination.

### La Collecte d'Artefact Mystère

**Note :** Tu vas faire la même chose que l'exercice précédent.

**Objectifs :**

- Cet exercice servira surtout pour la démonstration du prochain exercice.

**Résultat attendu :**

- Quand une collecte d'artefact est effectuée depuis le formulaire, on doit pouvoir voir dans la liste HTML :
  - Artefact qui a bien été collecté.
  - Ou artefact qui a échoué a être collecté.

**Instructions :**

- Crée une fonction `collecterArtefact(nomArtefact, callback)` qui simule la récupération d'un artefact.
- La fonction doit :
  - Prendre deux paramètres : le nom de l'artefact et un callback.
  - Même chose que l'exercice précedent, utilisation d'un setTimeout pour simuler une collecte asynchrone.
  - La collecte a 50% de chance de succès :
    - `Math.random() * 100` pour simuler un résultat entre 0 et 100.
    - Si la collecte réussit, appeler le callback avec le premier argument à `true`.
    - Si la collecte échoue, appeler le callback avec le premier argument à `false`.

**Attention** : Cette fonction, n'a pas but de gérer le HTML !

Exemple d'utilisation :

```js
collecterArtefact(artefact, function (collecte_reussie) {});
```

**Suite des instructions** :

- Utilise cette fonction `collecterArtefact()` dans la fonction `quandRechercheArtefact()`
- La fonction `quandRechercheArtefact()` est appelée lors du choix d'un artefact à rechercher et après avoir cliquer sur le bouton "Collecter". Nous allons manipuler le HTML pour faire comprendre au voyageur qu'une collecte d'artefact est en cours.
- Pour la collecte, nous allons modifier le HTML de la même manière que l'exercice précédent.
  - Lors d'une collecte :
    - Affiche l'élément HTML de chargement `<div class="recherche_en_cours"></div>`.
  - Lorsqu'une collecte est terminée :
    - Cache l'élément HTML de chargement `<div class="recherche_en_cours"></div>`.
    - Utilise la fonction existante `afficherRechercheArtefact` pour afficher la recherche d'un artefact, qu'il soit collecté ou non.

### La Mission Temporelle Complexe

**Objectifs :**

- Comprendre comment gérer des opérations asynchrones séquentielles avec les callbacks.
- Reproduction de la problématique des "callback hell".

**Instructions :**

Nous ne ferons plus de manipulation de DOM à partir de cet exercice.

- Crée une fonction `missionTemporelleComplexe()`
- Exécute dans cette fonction une série de missions temporelles imbriquées qui doivent se réaliser dans un ordre précis :
  - Tâche 1 : Voyager à l'époque médiévale
  - Tâche 2 : Collecter une épée de chevalier
  - Tâche 4 : Voyager à l'époque romaine
  - Tâche 5 : Collecter un bouclier romain
  - Tâche 6 : Collecter une épée romaine
- Utilise `console.log()` à toutes les étapes pour que tu puisses observer l'exécution séquentielle des tâches asynchrones.

**Résultat attendu :**

- On doit pouvoir observer la séquence des tâches asynchrones.
- On doit pouvoir observer que le code prend une forme pyramidale, que l'on appelle "callback hell".
- Cette problématique nous pousse à utiliser les Promesses.

### Je te promet des voyages temporels sans tracas !

**Objectifs :**

- Transformer du code utilisant des callbacks en Promesses
- Comprendre le chaînage de Promesses
- Améliorer la lisibilité du code asynchrone
- Maîtriser la gestion des erreurs avec `.catch()`

**Résultat attendu :**

- Même résultat qu'avant, mais code plus lisible.

**Instructions :**

- Réécritures des fonctions `voyagerTemps` et `collecterArtefact` en Promesses
- Dans le cas de `collecterArtefact`
  - Utilisation de `resolve` si l'artefact est collecté, `reject` sinon.
- Réécrit la séquence de l'exercice précédent avec le chainage des Promesses.
- Utilise `.catch()` pour gérer les erreurs.

Rappel de l'instance d'un objet Promesse quand on veut créer sa propre tâche asynchrone :

```js
const promise = new Promise((resolve, reject) => {
  // Le premier paramètre doit être appelé quand la promesse est résolue en succès
  // Si tu passes un argument, il sera récupéré lors de l'utilisation de .then()
  resolve(argument_optionnel);
  // Le second paramètre doit être appelé quand la promesse est résolue en erreur
  // Si tu passes un argument, il sera récupéré lors de l'utilisation de .catch()
  reject(argument_optionnel);
});
```

Rappel de l'utilisation d'une promesse :

```js
fonctionQuiRetournePromesse()
  .then(function (resultat_promesse) {
    // Lorsque la promesse est résolue en succès
    return "Coucou";
  })
  .then(function (resultat_promesse_precedente) {
    // On peut chaîner plusieurs Promesses
    console.log(resultat_promesse_precedente); // Affichera "Coucou"
    throw new Error("Une erreur");
  })
  .catch(function (erreur_promesse) {
    console.log(erreur_promesse); // Afifchera l'erreur "Une erreur"
  });
```

### La Mission Finale Asynchrone

**Objectifs :**

- Maîtriser la syntaxe `async/await`

**Résultat attendu :**

- Même résultat qu'avant, mais avec une syntaxe alternative.

**Instructions :**

- Remplace la syntaxe `.then()` par la syntaxe `await`
- Rend la fonction `missionTemporelleComplexe()` asynchrone avec `async`
- Met un `try/catch` pour gérer les erreurs (il n'y a pas de `.catch()` avec async/await)

### Chargement asynchrone des époques

**Objectifs :**

- Première utilisation de `fetch` pour récupérer les données JSON des époques.

**Résultat attendu :**

- Les époques sont chargées de manière asynchrone.

**Instructions :**

- Utilise la fonction `fetch()` pour récupérer les données JSON des époques.
  - La constante `epoques` doit contenir les données provenant de votre appel à fetch et non plus des données en dur.
- Un fichier `epoques.json` contiendra les données JSON des époques dans le dossier `data` du projet.
  - Accessible avec votre URL de liveServer : `http://localhost:xxxx/data/epoques.json`
  - Attention : `xxxx` correspond au numéro de port du liveServer.
  - Attention : Si vous êtes dans un sous-dossier du projet, vous devez mettre le chemin absolu vers le fichier `epoques.json`. Par exemple : `http://localhost:xxxx//sub_folder/data/epoques.json`

**Note :** Tu peux voir l'appel HTTP de ton appel fetch dans l'onglet `Network` de ton outil de développement navigateur.
