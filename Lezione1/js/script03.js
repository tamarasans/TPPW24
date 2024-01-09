let username = window.prompt("Inserisci il tuo username !!");

console.log("Ciao " + username);

//Voglio stampare un saluto nella pagina
//1.Recupero l'elemento html attraverso l'id
// document.getElementById() ---> è un METODO del DOM (document object model)
let elSaluto = document.getElementById("elSaluto");
console.log(elSaluto);

//2.Scrivo nell'elemento appena recuperato
// innerHTML ---> è un PROPRIETA' intrinseca dell'oggetto del DOM
elSaluto.innerHTML = "Ciao " + username;

let elDescrizione = document.getElementById("elDescrizione");
elDescrizione.innerHTML = username + " è il docente di JS presso I&L";

let elLinkPagina = document.getElementById("elLinkPagina");
elLinkPagina.innerHTML = "<a target=_blank href=https://www.immaginazioneelavoro.it> Immaginazione e Lavoro </a>";