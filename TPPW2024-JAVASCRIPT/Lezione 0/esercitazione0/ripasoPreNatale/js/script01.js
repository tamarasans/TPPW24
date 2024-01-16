//Variabili e tipi di dati
let nomeCorso = "Tecnico Prod Pag Web";
let annoCorso = 2024 ;
let numPartecipanti = 14 ;
let Attivo = true ;

console.log(nomeCorso);

//cambio el valor de una variable
annoCorso = 2023;
console.log(annoCorso);

//el valor booleano es un valor binario
console.log("Il corso è attivo:" , Attivo);


//concateno todos los valores
// let presentazione = nomeCorso + " anno:" + annoCorso + " partecipanti " + numPartecipanti + ". Stato attuale" + Attivo;                                                           
// `` backtick = alt + 96
let presentazione = `${nomeCorso} - anno: ${annoCorso}. Partecipanti: ${numPartecipanti}. Stato attuale ${Attivo} `; 


//Recupero la porcion de HTML que modificaremos con el metodo getElementById
//Con la propiedad .innerHTML = .. voy a stampare nella pagina
let elPresentazione = document.getElementById("elPresentazione");
elPresentazione.innerHTML = presentazione;


console.log(presentazione);

//Quiero recuperar el elemento p#demo y leer eso que e escrito dentro 
let demo = document.getElementById("demo");
let testoDemo = demo.innerHTML;
console.log(testoDemo);


let alunni = [
    "Paolo Carinola",
    "Paolo Carlini",
    "Marco Meola",
    "Simone Astore",
    "Mounir Ghanam",
    "Elena Soave",
    "Alessandro Capraro",
    "Leonardo Stahl",
    "Tamara Sans",
    "Vanya Villanueva",
    "Paolo Gippa",
]

let listaStudenti = document.getElementById("listaStudenti");
// listaStudenti.innerHTML = alunni;

// listaStudenti.innerHTML = `<li> ${alunni[0]} <li>
// <li> ${alunni[1]} <li>`

for(let i = 0; i < alunni.length; i++){
    listaStudenti.innerHTML += `<li> ${alunni[i]} </li>`;
}


let statusCorso = document.getElementById  
("statusCorso")


if(alunni.length < 8){
statusCorso.innerHTML ="Il corso è sopeso"

}else {
statusCorso.innerHTML = "Il corso è attivo"
}

function contaStud(){
    //quiero contar cuentos de los estudiantes tienen como inicial la letra P
let contaLettere = document.getElementById
("contaLettere");

let lettera = window.prompt("inserici una lettera");

let numStud = 0;

//idea: con un ciclo corrro el array estudianters y controlo inicial por inicial.

for(let i = 0; i < alunni.length; i ++){
    if (alunni[i].charAt(0) == "lettera"){
        numStud++;
    }
}

contaLettere.innerHTML = "Gli studenti che cominciano con la "+ lettera + "sono: " + numStud ;
}

//richiamo la funzione
// contaStud();

//Ejercicio: ademas de contar los estudiantes mostrar el nombre
