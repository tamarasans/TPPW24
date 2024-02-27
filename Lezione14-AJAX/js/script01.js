let demo = document.querySelector("#demo");
const URL = "https://reqres.in/api/users";

let utenti = [];

fetch(URL)
    .then(data => {
        
        console.log(data);
        // if(data.status != 200){
        //     location.href = "./404.html";
        // }
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

    })
    //il metodo catch parte solo se la promise (ovvero le fetch) entra in uno stato di rejected
    .catch(error =>{
        console.log(error);
        demo.innerHTML = "Mi spiace, i dati non si trovano oppure c'è il server rotto";
        location.href = "./404.html";
    })
    

    function creaCard(utente){
        let card = `<li> ${utente.first_name} ${utente.last_name}
                        <img src=${utente.avatar}>
                    </li>`;

        return card;
    }

