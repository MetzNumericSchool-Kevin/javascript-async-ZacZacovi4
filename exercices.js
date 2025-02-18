/**
 * Code de base, ne pas modifier
 */

// Définition
const boutonVoyageHTML = document.querySelector(".btn-voyage");
const localisationEpoqueHTML = document.querySelector(".localisation_epoque");
const listeArtefactHTML = document.querySelector(".liste_artefacts");
const formChoixEpoqueHtml = document.querySelector(".form__choix_epoque");
const formRechercheArtefact = document.querySelector(
  ".form__recherche_artefact"
);
const localisation_epoque_element = document.querySelector(
  ".localisation_epoque"
);
const voyage_en_cours_element = document.querySelector(".voyage_en_cours");

const epoques = {
  romaine: "Romaine",
  medievale: "Médievale",
  jurassique: "Jurassique",
};

const creerLesChoixEpoque = (epoques) => {
  const selectHtml = formChoixEpoqueHtml.querySelector("select");
  Object.entries(epoques).forEach(([id_epoque, nom_epoque]) => {
    const option = document.createElement("option");
    option.value = id_epoque;
    option.text = nom_epoque;
    selectHtml.appendChild(option);
  });
};

function generationNombreAleatoireEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Permet d'afficher l'époque de destination du voyage
const afficherDestination = (nomEpoque) =>
  (localisationEpoqueHTML.textContent = nomEpoque);

// Execution
formChoixEpoqueHtml.addEventListener("submit", (event) => {
  event.preventDefault();
  const epoque = new FormData(formChoixEpoqueHtml).get("epoque");

  if (!epoque) {
    alert("Choisie une époque de voyage temporel Chronos !");
    return;
  }

  quandEpoqueChoisie(epoque);
});

formRechercheArtefact.addEventListener("submit", (event) => {
  event.preventDefault();
  const artefact = new FormData(formRechercheArtefact).get("artefact");
  quandRechercheArtefact(artefact);
});
// Permet d'afficher un artefact trouvée, ou non, à une époque
const afficherRechercheArtefact = ({ artefact, epoque, success = true }) => {
  const li = document.createElement("li");
  li.textContent = `${success ? "✅" : "❌"} ${artefact} (Epoque ${epoque})`;
  listeArtefactHTML.appendChild(li);
};

/**
 * Votre partie commence ici, la partie modifiable par vos soins
 */
let nomEpoqueActuelle;

creerLesChoixEpoque(epoques);

// Fonction appelée plus haut quand le formulaire de voyage temporel est soumis
// et qu'une époque de destination du voyage temporel a été choisi
function quandEpoqueChoisie(nomEpoque) {
  nomEpoqueActuelle = nomEpoque;
  // Utilisation de votre fonction voyagerTemps

  localisation_epoque_element.style.display = "none";
  voyage_en_cours_element.style.display = "inline-block";

  voyagerTemps(nomEpoque, function (nomEpoque) {
    localisation_epoque_element.style.display = "inline-block";
    voyage_en_cours_element.style.display = "none";
    afficherDestination(nomEpoque);
  });
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est soumis
function quandRechercheArtefact(artefact) {
  // Utilisation de votre fonction collecterArtefact
  collecterArtefact(artefact, function (artefact, success) {
    afficherRechercheArtefact({
      artefact: artefact,
      epoque: nomEpoqueActuelle,
      success: success,
    });
  });
}

//exo 1 Le Téléporteur Temporel

function voyagerTemps(destination, callback) {
  console.log("Voyage en cours vers :", destination);
  setTimeout(() => {
    console.log("Arrive à destination :", destination);
    callback(destination);
  }, generationNombreAleatoireEntre(1000, 3000));
}

// exo 2 La Collecte d'Artefact Mystère

function collecterArtefact(nomArtefact, callback) {
  console.log("Recherche artefact :", nomArtefact);
  const success = Math.random() > 0.5;
  setTimeout(() => {
    callback(nomArtefact, success);
  }, generationNombreAleatoireEntre(1000, 3000));
}

// exo 3 La Mission Temporelle Complexe

function missionTemporelleComplexe() {
  voyagerTemps(epoques.medievale, function () {
    collecterArtefact("épée de chevalier", function (art, success) {
      if (success) {
        console.log("Artefact", art, " trouvé!");
      } else {
        console.log("Artefact", art, " n'étais pas trouvé!");
      }
      voyagerTemps(epoques.romaine, function () {
        collecterArtefact("bouclier romain", function (art, success) {
          if (success) {
            console.log("Artefact", art, " trouvé!");
          } else {
            console.log("Artefact", art, " n'étais pas trouvé!");
          }
          collecterArtefact("épée romaine", function (art, success) {
            if (success) {
              console.log("Artefact", art, " trouvé!");
            } else {
              console.log("Artefact", art, " n'étais pas trouvé!");
            }
            console.log("Mission Temporelle Complexe terminée!");
          });
        });
      });
    });
  });
}

// missionTemporelleComplexe();

// exo 4 Je te promet des voyages temporels sans tracas !

function voyagerTempsPromesse(destination) {
  console.log("Voyage en cours vers : ", destination);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(destination);
    }, generationNombreAleatoireEntre(1000, 3000));
  });
}

function collecterArtefactPromesse(nomArtefact) {
  console.log("Recherche artefact: ", nomArtefact);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve(nomArtefact);
      } else {
        reject(nomArtefact);
      }
    }, generationNombreAleatoireEntre(1000, 3000));
  });
}

function missionTemporelleComplexePromesse() {
  voyagerTempsPromesse(epoques.medievale)
    .then((destination) => {
      console.log("Arrive à destination : ", destination);
      return collecterArtefactPromesse("épée de chevalier")
        .then((result) => console.log(result, "a été trouvé"))
        .catch((error) => console.error(error, "n'a pas été trouvé"));
    })
    .then(() => {
      return voyagerTempsPromesse(epoques.romaine);
    })
    .then((destination) => {
      console.log("Arrive à destination : ", destination);
      return collecterArtefactPromesse("bouclier romain")
        .then((result) => console.log(result, "a été trouvé"))
        .catch((error) => console.error(error, "n'a pas été trouvé"));
    })
    .then(() => {
      return collecterArtefactPromesse("épée romaine")
        .then((result) => console.log(result, "a été trouvé"))
        .catch((error) => console.error(error, "n'a pas été trouvé"));
    })
    .catch((error) => {
      console.error("Erreur pendant le voyage :", error);
    });
}

// missionTemporelleComplexePromesse();

// exo 5 La Mission Finale Asynchrone

async function missionTemporelleComplexePromesseAsync() {
  try {
    const destination1 = await voyagerTempsPromesse(epoques.medievale);
    console.log("Arrive à destination :", destination1);

    try {
      const artefact1 = await collecterArtefactPromesse("épée de chevalier");
      console.log(artefact1, "a été trouvé");
    } catch (error) {
      console.error(error, "n'a pas été trouvé");
    }

    const destination2 = await voyagerTempsPromesse(epoques.romaine);
    console.log("Arrive à destination : ", destination2);

    try {
      const artefact2 = await collecterArtefactPromesse("bouclier romain");
      console.log(artefact2, "a été trouvé");
    } catch (error) {
      console.error(error, "n'a pas été trouvé");
    }
    try {
      const artefact3 = await collecterArtefactPromesse("épée romain");
      console.log(artefact3, "a été trouvé");
    } catch (error) {
      console.error(error, "n'a pas été trouvé");
    }
  } catch (error) {
    console.error("Erreur pendant le voyage :", error);
  }
}

missionTemporelleComplexePromesseAsync();
