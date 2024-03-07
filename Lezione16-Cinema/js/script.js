let elListaSpettacoli = document.querySelector("#elListaSpettacoli");
let elListaScaduti = document.querySelector("#elListaScaduti");

function recuperaFilm() {
    const urlFilm = "http://localhost:3000/spettacoli"

    fetch(urlFilm)
        .then(data => { return data.json() })
        .then(response => {
            let films = response;
            console.log(films);

            films.forEach(film => {
                if (film.disponibilità) {
                    elListaSpettacoli.appendChild(creaCardFilm(film));
                } else {
                    elListaScaduti.appendChild(creaCardFilm(film))
                }
            });
        })
}

window.addEventListener("DOMContentLoaded", recuperaFilm);

/**
 * @param {Object} film 
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

    if (film.disponibilità) {
        let dropDown = document.createElement("select");

        dropDown.setAttribute("id", "sceltaFilm" + film.id); //assegno un id dinamico ad ogni select

        dropDown.setAttribute("class", "form-select");
        film.replica.forEach(rep => {
            dropDown.innerHTML += `<option value="${rep.sala} - ${rep.orario}"> ${rep.sala} - ${rep.orario} </option>`
        });

        divCardBody.appendChild(dropDown)

        let buttonAcquista = document.createElement("button");
        buttonAcquista.setAttribute("class", "btn btn-primary mt-3");
        buttonAcquista.textContent = "Acquista";

        buttonAcquista.addEventListener("click", function () {

            let scelta = dropDown.value;

            localStorage.setItem(film.id, film.titolo + " - " + scelta + " - " + film.prezzo)
        })

        divCardBody.appendChild(buttonAcquista);
    } else {
        divCardBody.innerHTML += "<h3> Film non più disponibile </h3>"
    }

    return card;
}
