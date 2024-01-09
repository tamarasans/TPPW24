//Variabili e tipi di dato
let nomeCorso = "Tecnico Prod Pag Web"; //String
let annoCorso = 2024; //Number
let numPartecipanti = 14; //Number
let attivo =  true; //Boolean

console.log(nomeCorso);

//riassegno una variabile
annoCorso = 2023;
console.log(annoCorso);

//il valore boolean è un valore binario
console.log("Il corso è attivo: " + attivo);

//Concateno tutti i valori
// let presentazione = nomeCorso + " - anno: " + annoCorso + ". partecipanti: " + numPartecipanti + ". Stato attuale: " + attivo;

// `` backtick = alt + 96
// Commento ctrl + ù
let presentazione = `${nomeCorso} - anno: ${annoCorso}. Partecipanti: ${numPartecipanti}. Stato attuale: ${attivo}`;

//recupero la porzione di html con il metodo getElementById("")
//ATT: l'id deve essere uguale identico a quello definito nello HTML
let elPresentazione = document.getElementById("elPresentazione");

//con la proprietà .innerHTML = ... vado a stampare nella pagina
elPresentazione.innerHTML = presentazione;

console.log(elPresentazione);
console.log(presentazione);


//Voglio recuperare l'elemento p#demo e leggere queloo che è scritto dentro
let demo = document.getElementById("demo");
let testoDemo = demo.innerHTML;
console.log(testoDemo);
//poi lo cambio 
demo.innerHTML = "La respo corso è Risola Egle. I docenti sono sempre gli stessi"

//elenco classe come Array
let alunni = [
    "Paolo Carinola", //0
    "Paolo Carlini",
    "Marco Meola",
    "Simone Astore",
    "Mounir Ghanam",
    "Elena Soave",
    "Alessandro Capraro",
    "Leonardo Stahl",
    "Tamara Sans",
    "Vania Villanueva",
    "Paolo Gippa" //10
];

console.log(alunni.length);


let listaStudenti = document.getElementById("listaStudenti");
// listaStudenti.innerHTML = alunni;

// listaStudenti.innerHTML = `<li> ${alunni[0]} </li>
// <li> ${alunni[1]} </li>
// <li> ${alunni[2]} </li>
// <li> ${alunni[3]} </li>
// <li> ${alunni[4]} </li>
// <li> ${alunni[5]} </li>
// `

for(let i = 0; i < alunni.length; i++){
    listaStudenti.innerHTML += `<li> ${alunni[i]} </li>`;
}

let statusCorso = document.getElementById("statusCorso");

if(alunni.length < 8){
    //..il corso è Sospeso
    statusCorso.innerHTML = "Il corso è sospeso !"
}else{
    //..il corso è attivo
    statusCorso.innerHTML = "Il corso è attivo !"
}


function contaStud(){
    //Voglio contare quanti dei miei studenti hanno come iniziale la lettera P
    let contaLettere = document.getElementById("contaLettere");
    
    let lettera = window.prompt("Inserisci una lettera");

    let numStudP = 0;
    
    //idea: con ciclo scorrro l'array studenti e controllo iniziale per iniziale
    for(let i = 0; i < alunni.length; i++){
        if(alunni[i].charAt(0) == lettera){
            numStudP++;
        }
    }
    contaLettere.innerHTML = "Gli studenti che cominciano con la "+ lettera+" sono: " + numStudP;
}
    
//richiamo la funzione nello script, quindi partirà sempre, tutte le volte che verrà letta
// contaStud();

//Esercizio: oltre a poter contare gli studenti mostra anche il loro nome







