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

                    // elListaRiep.innerHTML += `<li class='list-group-item'>${response.titolo} - ${response.prezzo} € </li>`;
                    totale += Number(response.prezzo);
                    grandTotal.innerHTML = "Totale: € " + totale;

                });

            elListaRiep.innerHTML += `<li class='list-group-item'> ${localStorage[key]} € </li>`;

        }

    }



}


window.addEventListener("DOMContentLoaded", recuperaFilmLS)



class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;

        this.studia = function () {
            console.log("Studia");
        };
    }
}

let persona = new Persona("Dario", "Menn")

console.log(persona.nome);

console.log(persona["nome"]); //notazione parentesi quadre

for (const key in persona) {

    if (Object.hasOwnProperty.call(persona, key) && typeof persona[key] != "function") {
        const valore = persona[key];
        console.log(valore);

    }
}