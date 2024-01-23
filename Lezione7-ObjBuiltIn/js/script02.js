let num1 = 123;

let num2 = "ciao";

let num3 = "123";

console.log(isNaN(num1)); //false
console.log(isNaN(num2)); //true
console.log(isNaN(num3)); //false


let num4 = "234";

console.log(Number(num4));
console.log(parseInt(num4));
console.log(parseFloat(num4));

console.log(parseInt("10010011110110000010010", 2));


//////////////MATH
let num5 = -34;

console.log(Math.abs(num5)); //valore assoluto, quindi la parte positiva di un numero

let num6 = 23;
console.log(Math.pow(num6, 2));
console.log(Math.sqrt(num6).toPrecision(3));

//Arrotondamenti
let num7 = 3.2342423;
console.log(Math.round(num7)); //3
console.log(Math.ceil(num7)); //4, intero superiore
console.log(Math.floor(num7)); //3 intero inferiore

console.log(Math.random());

//un numero casuale tra 10 e 25
function setRidottoRandom(min, max){
    console.log(Math.ceil((Math.random() * (max-min)) + min));
}
setRidottoRandom(10,25);