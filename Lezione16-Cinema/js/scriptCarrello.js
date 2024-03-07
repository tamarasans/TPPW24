let elListaRiep = document.querySelector("#listaRiep");
let grandTotal = document.querySelector("#grandTotal");

console.log(localStorage);

let filmCarrello = [];

function recuperaFilmLS() {
    let totale = 0

    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {

            fetch("http://localhost:3000/spettacoli/" + key)
                .then(data => { return data.json() })
                .then(response => {
                    console.log(response);
                    filmCarrello.push(response);

                    totale += Number(response.prezzo);

                    grandTotal.innerHTML = "€ " + totale;
                });

            elListaRiep.innerHTML += `<li class='list-group-item'> ${localStorage[key]} € </li>`;

        }

    }



}


window.addEventListener("DOMContentLoaded", recuperaFilmLS)