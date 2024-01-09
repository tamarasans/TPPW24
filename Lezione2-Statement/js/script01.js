//Operatori di post & pre incremento decremento

//Operatori di post - incremento/decremento
// in questo caso la var viene prima letta poi incrementata
let miaEta = 34;
console.log(miaEta); //34
console.log(miaEta++); //34
console.log(miaEta); //35
console.log(miaEta++); //35
console.log(miaEta);//36

console.log(miaEta--); //36
console.log(miaEta); //35
console.log(miaEta--);
console.log(miaEta--);
console.log(miaEta--);
console.log(miaEta--);
console.log(miaEta); //31

//Operatore di pre - incremento/decremento
//in questo caso prima incremento e poi leggo
let tuaEta = 25;

console.log(tuaEta); //25
console.log(++tuaEta);//26
console.log(++tuaEta); //27
console.log(tuaEta); //27
console.log( --tuaEta); //26
console.log( --tuaEta); //25
console.log( --tuaEta); //24
 

//Operatore di auto.incremento
let saluto = "ciao";

console.log(saluto);

saluto += " come"; //saluto = saluto + " come"
console.log(saluto);

saluto += " stai"; //saluto = saluto + " stai"
console.log(saluto);

saluto += " ?";
console.log(saluto);


//con i number
let ora = 14;

//ora += 1;
ora++

let prezzoTotale = 0;

prezzoTotale += 10;
prezzoTotale += 22.50;
prezzoTotale += 15.10;

console.log(prezzoTotale);