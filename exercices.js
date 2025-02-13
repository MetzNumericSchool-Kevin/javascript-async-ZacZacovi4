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
  const localisation_epoque_element = document.querySelector('.localisation_epoque')
  const voyage_en_cours_element = document.querySelector('.voyage_en_cours');
  
  localisation_epoque_element.style.display = 'none';
  voyage_en_cours_element.style.display = 'block';
  
  voyagerTemps(nomEpoque, function () {
    localisation_epoque_element.style.display = 'block';
    voyage_en_cours_element.style.display = 'none';
    afficherDestination(nomEpoque);
  })
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est soumis
function quandRechercheArtefact(artefact) {
  // Utilisation de votre fonction collecterArtefact
  collecterArtefact(artefact, function(success, artefact){
    if(success){
      console.log("artefact été trouvé ", artefact)
    }else{
      console.log("artefact n'est pas trouvé ", artefact)
    }
  })
}

//exo 1 Le Téléporteur Temporel

function voyagerTemps(destination, callback){
  console.log("Voyage en cours vers : ", destination)
  setTimeout(() => {
    console.log("Arrive à destination : ", destination)
    callback()
  }, generationNombreAleatoireEntre(1000, 3000));
};


// exo 2 La Collecte d'Artefact Mystère

function collecterArtefact(nomArtefact, callback){
  console.log("Recherche artefact ", nomArtefact)
  setTimeout(() => {
    const chanceGainArtedact = Math.random() * 100;
    console.log(chanceGainArtedact);
    if(chanceGainArtedact >= 50){
      //console.log("artefact trouvé ", nomArtefact)
      callback(true, nomArtefact);
    }else{
      //console.log("artefact n'est pas trouvé ", nomArtefact)
      callback(false, nomArtefact);
    }
  }, generationNombreAleatoireEntre(1000, 3000));
};





