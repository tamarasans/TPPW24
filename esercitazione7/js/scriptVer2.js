class Utente {
    constructor(nome, cognome, email, tel) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.tel = tel;
    }
}



function aggiungiContatto(){
    
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    
    if(nome == "" || cognome == "" || email == "" || telefono == ""){
        // avviso nel feed
        feed.innerHTML = "Amico, stai dimenticando i seguenti campi: ";

        if(nome == ""){
            feed.innerHTML += "<li> nome </li>";
        }
        if(cognome == ""){
            feed.innerHTML += "<li> cognome </li>";
        }
        if(email == ""){
            feed.innerHTML += "<li> email </li>";
        }
        if(telefono == ""){
            feed.innerHTML += "<li> telefono </li>"   
        }

    }else{
        
        let utente = new Utente(nome, cognome, email, telefono);
        listaUtenti.push(utente);
        
        feed.innerHTML = "Utente Aggiunto";

        demo.innerHTML = "";
        // for(let i = 0; i < listaUtenti.length; i++){
        //     demo.innerHTML += creaCard(listaUtenti[i])
        // }
        stampaLista(listaUtenti);

        pulisciCampi();

    }
    console.log(listaUtenti);
}

/**
 * @param {Utente} utente 
 */
function creaCard(utente){
    let card = `<div class="boxUser">
                    <p>Nome: ${utente.nome} ${utente.cognome}</p>
                    <p>@: ${utente.email}</p>
                    <p>Tel: ${utente.tel}</p>
                </div>`;
    return card;
}

/**
 * @param {Utente[]} listaUtenti 
 */
function stampaLista(listaUtenti){
    listaUtenti.forEach(utente =>{
        demo.innerHTML += creaCard(utente)
    });
}

function pulisciCampi(){
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
}

let listaUtenti = [];
let feed = document.getElementById("feed");
let demo = document.getElementById("demo");