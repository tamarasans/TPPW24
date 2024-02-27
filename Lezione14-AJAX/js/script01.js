let demo = document.querySelector("#demo");
const URL = "https://reqres.in/api/users";


let utenti = [];


fetch(URL)
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(response =>{
        // response è il "macro-object" restituito dalla Request
        console.log(response);

        //data è solo il nome della proprietà della response.
        //dentro response.data si trovano degli utenti
        console.log(response.data);

        utenti = response.data;
        console.log("Utenti", utenti);

        utenti.forEach(utente => {
            demo.innerHTML += creaCard(utente);
        });

    });
    

    function creaCard(utente){
        let card = `<li> ${utente.first_name} ${utente.last_name}
                        <img src=${utente.avatar}>
                    </li>`;

        return card;
    }