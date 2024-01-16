let username = window.prompt("Inserici il tuo username!!");

console.log("Ciao " + username);

// Voglio stampare un saluto nella pagina
//  1. Recupero l'elemento html attraverso l'id
// TODO LO VERDE SON METODOS, SON VERBOS. - - -> es un metodo del DOM (document object model)

let elSaluto = document.getElementById("elSaluto");

console.log(elSaluto);

// 2. Scrivo nell'ellemento appena recuperato
//  innerHTML - - -> es una propiedad intrinseca del objeto del DOM 
elSaluto.innerHTML = "Ciao " + username;
