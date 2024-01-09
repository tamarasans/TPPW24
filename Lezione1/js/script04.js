//Acquisisco i 2 numeri dall'utente
let num1 = Number(window.prompt("Inserisci il primo numero"));
let num2 = Number(window.prompt("Inserisci un altro numero"));

let somma = num1 + num2;
let prodotto = num1 * num2;
let differenza = num1 - num2;
let quoziente = num1 / num2;

console.log(somma, prodotto, differenza, quoziente);

let elNumUtente = document.getElementById("elNumUtente");
let elSomma = document.getElementById("elSomma");
let elProdotto = document.getElementById("elProdotto");
let elDifferenza = document.getElementById("elDifferenza");
let elQuoziente = document.getElementById("elQuoziente");

elNumUtente.innerHTML= "I due numeri sono :  " + num1 +  " - " + num2;
elSomma.innerHTML = "La somma vale: " + somma;
elDifferenza.innerHTML = "La differenza vale: " + differenza;
elProdotto.innerHTML = "Il prodotto vale: " + prodotto;
elQuoziente.innerHTML = "Il quoziente vale: " + quoziente;
