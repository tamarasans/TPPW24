//le stringhe sono considerabili come un insieme di caratteri. Anche le stringhe sono 0-based

let frase = "Ciao, come stai ?";

let numCaratteri = frase.length;
console.log(numCaratteri);

let primoCarattere = frase.charAt(0);
console.log(primoCarattere);

let ultimoCarattere = frase.charAt(frase.length - 1);
console.log(ultimoCarattere);

let parola = "Panettone";

//trasformo la parola in un ARRAY di caratteri
let parolaArr = parola.split("");
console.log(parolaArr);

//ribalto l'array
console.log(parolaArr.reverse());

//fondo di nuovo tutti i caratteri con il metodo join("")
console.log(parolaArr.join(""));

let frase2 = "Mi chiamo Dario Mennillo";
console.log(frase2);
let fraseArr = frase2.split(" ");
console.log(fraseArr.join("_"));

let fraseRevers = frase2.split("").reverse().join("");
console.log(fraseRevers);

//metodi per ricerca
console.log(frase2.includes("Dario"));
console.log(frase2.includes("Pasquale"));

//metodi per la sostituzione
let frase3 = "Il miglior browser al mondo è Internet Explorer";
let frase3Corrretta = frase3.replace("Internet Explorer", "Google Chrome");
console.log(frase3Corrretta);