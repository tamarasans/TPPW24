console.log("Ciao, mondo");

let mioNome = "Tamara";
let mioCognome = "Sans";
let miaEta = 31;
let mioCorso = "TPPW";

//concateno las variables usando el operador matematico "+"
console.log("Ciao, mi chiamo " + mioNome + " " + mioCognome + " " + "ho " + miaEta + " anni " + " .Il mio cosro si chiama: " + mioCorso);

//concateno sin el "+" utilizando el backtick ``(alt + 96 )
console.log( `Ciao mi chiamo ${mioNome} ${mioCognome}, ho ${miaEta} anni. Il mio corso si chiama ${mioCorso}`);

//operador +
let num1 = 10;
let num2 = 23;

//esta no funciona pq me suma como si fuese string
console.log("La somma vale " + num1 + num2);

//creamo una funcion para que sume bien
let somma = num1 + num2;
console.log(`La somma vale ${somma}`);

// forzamos a que sean numeros poniendo Number adelante, pero solo hay problema con la suma "+" 

let num3 = "21";
let num4 = "66";

let somma2 = Number(num3) + Number(num4);
console.log(somma2);

//Las otras operaciones si la string puede ser numeros los transforma como tal
let prodotto2 = num3 * num4;
console.log(prodotto2);

