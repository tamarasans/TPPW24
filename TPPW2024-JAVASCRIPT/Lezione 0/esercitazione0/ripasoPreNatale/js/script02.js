//le stringhe sono considerabili come un insieme di caractteri. Anche le stringhe sono 0-based

let frase = "Ciao, come, stai ?";

let numCaratteri = frase.length;
console.log(numCaratteri);

let primoCarattere = frase.charAt(0);
console.log(primoCarattere);

let ultimoCarattere = frase.charAt(frase.length - 1);
console.log(ultimoCarattere);

let parole = "Panettone";

//transoformo la palabra en un array de caracteres
let parolaArr = parole.split("");
console.log(parolaArr);

//doy vuelta el array
parolaArr.reverse();

//fondo di nuovo todos los caracteres
console.log(parolaArr.join(""));

let frase2 = "me llamo Tamara Sans";
console.log(frase2.split(" "));

//metodo de busqueda
console.log(frase.includes ("Ciao"));

//metodo de sostitucion
let frase3 = "Il miglior browser al mondo è internet Explorer";
let frase3Corretta = frase3.replace ("internet exlporer" , "Google Chrome");
console.log(frase3Corretta);
