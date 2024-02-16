function Studente(nome, cognome, matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
}

let btnReg = document.querySelector("#btnReg");

function salvaStudente(){
    let studente = new Studente("Anna", "Rossi", 2);

    //trasformo lo studente in un JSON per poterlo salvare in localStorage
    let studenteJSON = JSON.stringify(studente);
    
    localStorage.setItem("nuovoStudente", studenteJSON);
}

btnReg.addEventListener("click", salvaStudente);


let btnRead = document.querySelector("#btnRead");

function leggiStudente(){
    //nel recuperare qualcosa daalla localStorage ricevo SEMPRE Stringhe
    let studente = JSON.parse(localStorage.getItem("nuovoStudente"));

    // let studenteOBJ = JSON.parse(studente);

    console.log(studente);
    console.log(studente.nome);
    console.log(studente.cognome);
    console.log(studente.matricola);
}

btnRead.addEventListener("click", leggiStudente);