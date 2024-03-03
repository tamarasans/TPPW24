let demo = document.querySelector("#demo");

const ENDPOINT = "http://localhost:3000/studenti";

fetch(ENDPOINT)
    .then((data) => {
        return data.json();
    })
    .then((response) => {
        console.log(response);
        response.forEach((studente) => {
            demo.innerHTML += `<li> ${studente.id} - ${studente.nome} </li>`;
        });
    });

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let nuovoStud = {
        nome: "Pasquale",
    };

    fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(nuovoStud),
    }).then((data) => {
        return data.json();
    });
});


//partendo da un form di inserimento inserisci un nuovo utente con le prop id, nome e cognome. ATT: utilizza un tag form con method post