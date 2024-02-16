class Messaggio {
    constructor(idUtente, contenuto, oraInvio) {
        this.idUtente = idUtente;
        this.contenuto = contenuto;
        this.oraInvio = oraInvio;
    }
}

let messaggi = [];

let btnInvia = document.querySelector("#btnInvia");

function salvaMessaggio(){
    let contenuto = document.querySelector("#messaggio").value;

    let data = new Date();
    let ora = data.getHours();
    let min = data.getMinutes();

    let nuovoMsg = new Messaggio(localStorage.getItem("userConnesso"), contenuto, ora +":" + min );

    messaggi.push(nuovoMsg);

    localStorage.setItem("messaggi", JSON.stringify(messaggi));

    stampaMessaggi();
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
        document.querySelector("#contatore").textContent = 0;
    }
    console.log(caratteriRestanti);
}

textArea.addEventListener("input", controllaCaratteri);


///////////////////////////////////////////////

let demo = document.querySelector("#demo");

function stampaMessaggi (){
    demo.innerHTML = "";

    //messaggi è un Array di oggetti
    let messaggi = JSON.parse(localStorage.getItem("messaggi"));

    //msg è un oggetto {idUtente: "Dario", contenuto: "qualcosa"}
    messaggi.forEach(msg => {
        demo.innerHTML += `
            <div class ='cardMsg'>
                <h4>${msg.idUtente}:</h4>
                <p>${msg.contenuto}</p>
                <p>${msg.oraInvio}</p>
            </div>
        `
    });
}

//////////////////////////////////////////////////

function recuperaVecchiMsg(){
    //messaggi è la mia variabile globale
        messaggi = JSON.parse( localStorage.getItem("messaggi") );
}

window.addEventListener("DOMContentLoaded", function(){

    this.document.querySelector("#benvenuto").textContent = "Benvenuto" + this.localStorage.getItem("userConnesso")

    if(this.localStorage.key("messaggio") != ""){
        recuperaVecchiMsg();
        stampaMessaggi();
    }
});

