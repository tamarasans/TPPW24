function Item(descrizione){
    this.descrizione = descrizione;

    this.stampa = function(){
        return this.descrizione;
    }
}

let listaItem = document.getElementById("listaItem");
let miaLista = []

function inserisci(){
    //prendo quello che scrive l'utente
    let quellocheScriveUser = document.getElementById("item").value;

    //creo l'oggetto
    let mioItem = new Item(quellocheScriveUser);

    //inserisco l'oggetto nell'array
    miaLista.push(mioItem);

    listaItem.innerHTML += `<li> ${mioItem.stampa()} </li>`;

    // for(let i = 0; i < miaLista.length; i++){
    //     listaItem.innerHTML += miaLista[i].stampa();
    // }    
}


//COSTRUTTORE DELL'OGGETTO PERSONA

function Persona(nome, cognome, cdFiscale, eta){
    this.nome = nome;
    this.cognome = cognome;
    this.cdFiscale = cdFiscale;
    this.eta = eta;

    this.presentati = function(){
        return `${this.nome} ${this.cognome} ${this.cdFiscale} età: ${this.eta}`;
    }
}

//Queste sono 2 istanze del costruttore di Persona
let persona1 = new Persona("Elena", "Soave", "sdfghjk667cfgbnm", 14);
let persona2 = new Persona("Dario", "Mennillo", "dfghjkl786fghbjn", 34);

console.log(persona2.presentati());
console.log(persona1.presentati());