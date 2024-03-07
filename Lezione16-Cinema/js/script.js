let elListaSpettacoli = document.querySelector("#elListaSpettacoli");

function recuperaFilm() {
    const urlFilm = "http://localhost:3000/spettacoli"

    fetch(urlFilm)
        .then(data => { return data.json() })
        .then(response => {
            let films = response;
            console.log(films);

            films.forEach(film => {
                elListaSpettacoli.appendChild(creaCardFilm(film));
            });
        })
}

window.addEventListener("DOMContentLoaded", recuperaFilm);

/**
 * @param { Object } film 
 */
function creaCardFilm(film) {
    let card = document.createElement("div");
    card.setAttribute("class", "card col-3 p-2 ");

    let img = document.createElement("img");
    img.setAttribute("src", film.locandina);
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", "titolo del film " + film.titolo);

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    card.appendChild(img);
    card.appendChild(divCardBody);

    divCardBody.innerHTML += `<h4 class="card-title"> ${film.titolo} </h4>`;
    divCardBody.innerHTML += `<p class="card-text"> Costo: ${film.prezzo} € </p>`;

    let dropDown = document.createElement("select");
    dropDown.setAttribute("class", "form-select");
    film.replica.forEach(rep => {
        dropDown.innerHTML += `<option value="${rep.orario}"> ${rep.sala} - ${rep.orario} </option>`
    });

    divCardBody.appendChild(dropDown)

    let buttonAcquista = document.createElement("button");
    buttonAcquista.setAttribute("class", "btn btn-primary mt-3");
    buttonAcquista.textContent = "Acquista";

    divCardBody.appendChild(buttonAcquista);

    return card;
}

// <div class="card col-3 m-2">
//     <img class="card-img-top" src="holder.js/100x180/" alt="Title" />
//           <div class="card-body">
//                <h4 class="card-title">Title</h4>
//                 <p class="card-text">Text</p>
//                 <button class="btn btn-primary ">Acquista</button>
//           </div>
// </div>