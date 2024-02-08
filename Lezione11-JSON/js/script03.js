// Tramite il form inserisci un nuovo utente specificando il tipo
//l'utente dovrà essere inserito in localStorage

//crea un oggetto con costruttore
//al click su aggiungi costruisco l'oggetto
//trasformo l'oggetto in formato JSON
//salvo in localStorage


// tipo.addEventListener("change", function(){
//     console.log(this.value);
// })

let btnInserisci = document.querySelector("#btnInserisci");

function Persona(nome, cognome, tipo){
    this.nome = nome;
    this.cognome = cognome;
    this.tipo = tipo;
}

let persone = [];

function inserisci(){
    let tipo = document.querySelector("#tipo").value;
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;

    let persona = new Persona(nome, cognome, tipo);

    // let personaJSON = JSON.stringify(persona);
    // localStorage.setItem("persona", personaJSON);
    
    //VER2. inserisco più persone nella localstorage registrando l'intero Array
    persone.push(persona);

    //trasformo l'array in JSON e lo carico in localStorage NON i singoli Object
    let personeArrJSON = JSON.stringify(persone);
    localStorage.setItem("persone", personeArrJSON);
}

btnInserisci.addEventListener("click", inserisci);

//con il pulsante btnLeggiPersone leggo tutti gli utenti presenti nella localStorage.
let btnLeggiPersone = document.querySelector("#btnLeggiPersone");
let demo = document.querySelector("#demo");

function leggiPersone(){
  let persone = JSON.parse(localStorage.getItem("persone"));


  persone.forEach(persona =>{
    demo.innerHTML += `
        <div style="border: 1px solid black; margin-top: 20px">
        <p> ${persona.nome} ${persona.cognome}</p>
        <p> Tipo: ${persona.tipo}
        </div>
    `
  })

}

btnLeggiPersone.addEventListener("click", leggiPersone);
