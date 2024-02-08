//Istanzia un oggetto, applica il metodo stringify() per trasformarlo in JSON. 
//Salva l'oggetto in uno Storage
//Recupera l'oggetto dallo Storage e trasformalo con il metodo parse() in un oggetto utilizzabile


//Creare un oggetto e salvare in local storage le singole proprietà e relativi valori

let programmatore = {
    nome: "Luisa",
    cognome: "Verdi",
    matricola: 58,
    pagaStipendio: function(){
        let stipendio = this.matricola * 100;
        return stipendio;
    }
}


localStorage.setItem("programmatore", JSON.stringify(programmatore));


let programmatoreOBJ = JSON.parse( localStorage.getItem("programmatore") );

console.log(programmatoreOBJ);

//voglio aggiungere un metodo
function ProgrammatoreOBJ(nome, cognome, matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;

    this.pagaStipendio = function(){
        let stipendio = this.matricola * 100;
        return stipendio;
    }
}

let mioProgrammatore = new ProgrammatoreOBJ(programmatoreOBJ.nome, programmatoreOBJ.cognome, programmatoreOBJ.matricola);

console.log(mioProgrammatore.pagaStipendio());


localStorage.setItem("saluta", "Ciao Bello")
localStorage.setItem("status", "online")
localStorage.setItem("Età", 34);

let colori = ["Bianco", "Azzurro", "Verde"];
let coloriJSON = JSON.stringify(colori)
localStorage.setItem("colori", coloriJSON)


console.log(localStorage.key(0), localStorage.length);
