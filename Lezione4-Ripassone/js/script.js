console.log("Ciao, mondo");

let mioNome = "Dario";
let mioCognome = "Mennillo";
let miaEta = 34;
let mioCorso = "TPPW";

//Concateno le variabili usando l'operatore +
console.log("Ciao, mi chiamo " + mioNome + " " + mioCognome + " ho " + miaEta + " anni " + ". Il mio corso si chiama: " + mioCorso);

//concateno senza + utilizzando il ` (alt + 96)
console.log(`Ciao mi chiamo ${mioNome} ${mioCognome}, ho ${miaEta} anni. Il mio corso si chiama: ${mioCorso}`);

//Operatore +
let num1 = 10;
let num2 = 23;

// console.log("La somma vale " + num1 + num2); Qui predilige le stringhe
let somma = num1 + num2;
console.log("La somma vale: " + somma);
console.log(`La somma vale ${somma}`);

//////
let num3 = "21";
let num4 = "66";

let somma2 = Number(num3) + Number(num4); //
console.log(somma2);

let prodotto2 = num3 * num4;
console.log(prodotto2);

let quoziente2 = num3 / num4;
console.log(quoziente2);

let sottrazione2 = num3 - num4;
console.log(sottrazione2);

//Tipizzazione debole
//Saltare di tipo è possibile ma NON SI FA
let miaVariabile = "Ciao";
miaVariabile = 30;
miaVariabile = true;
miaVariabile = ["ciao", "arrivederci", "buongiorno"];