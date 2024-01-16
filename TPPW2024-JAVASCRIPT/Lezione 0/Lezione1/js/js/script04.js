let num1 = Number (window.prompt("inserici un numero"));
let num2 = Number (window.prompt("inserici un altro numero"));

let somma = num1 + num2;
let differenza = num1 - num2;
let prodotto= num1 * num2;
let quoziente= num1 / num2;

let elNumUtente = document.getElementById ("elNumUtente");
let elSomma = document.getElementById ("elSomma");
let elDifferenza = document.getElementById ("elDifferenza");
let elProdotto = document.getElementById ("elProdotto");
let elQuoziente= document.getElementById ("elQuoziente");

elNumUtente.innerHTML = "numeri= " + num1 + " - "+ num2;
elSomma.innerHTML = "somma = " + somma ;
elDifferenza.innerHTML = "differenza = " + differenza ;
elProdotto.innerHTML = "prodotto = " + prodotto;
elQuoziente.innerHTML = "quoziente = " + quoziente;





 