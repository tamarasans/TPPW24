class Messaggio {
    constructor(idUtente, contenuto) {
        this.idUtente = idUtente;
        this.contenuto = contenuto;
    }
}

let messaggi = [];

let btnInvia = document.querySelector("#btnInvia");

function salvaMessaggio(){
    let contenuto = document.querySelector("#messaggio").value;

    let nuovoMsg = new Messaggio("Dario", contenuto);

    messaggi.push(nuovoMsg);

    localStorage.setItem("messaggi", JSON.stringify(messaggi));
}

btnInvia.addEventListener("click", salvaMessaggio);

///////////////////////////////////////////////

let textArea = document.querySelector("#messaggio");

function controllaCaratteri(){
    let caratteriRestanti = 10 - textArea.value.length;
    document.querySelector("#contatore").textContent = caratteriRestanti;

    if(caratteriRestanti <= 0){
        let contenutoMsg = document.querySelector("#messaggio").value.substring(0,10);
        textArea.value = contenutoMsg;
    }
    console.log(caratteriRestanti);
}

textArea.addEventListener("input", controllaCaratteri);
