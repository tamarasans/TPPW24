let demo = document.getElementById("demo");
let display = document.getElementById("display");
//crea un array di 100 numeros casuales da 1 a 100. Controla cuales y cuantos son menores de 20

//let numeroCasuale = Math.ceil(Math.random() *100);
//numeri.push(numeroCasuale);
//let numeri = [ ];

//for (let numeri = i ; i < numeri.length , i++){}

let numCasuali = [];
//este for carga con numeros casuales
for (let i = 0; i < 100; i ++){
    let numeroRandom = Math.ceil(Math.random() * 100);
    numCasuali.push(numeroRandom);
}
console.log(numCasuali);


let contatore = 0
//leo el array y estampo el numero en el div demo
for ( let i = 0; i < numCasuali.length; i ++){

    if(numCasuali [i]< 20){
        demo.innerHTML += "<li>" + numCasuali[i] + " questo è min di 20 </li>";
        contatore++
    }else{
    demo.innerHTML += "<li>" + numCasuali[i] + "</li>";
}
}



let numDoppio = 0;

for (let i = 0; i < numCasuali.length; i++){
    if (numCasuali.includes(i)) {
        numDoppio++
    }
}
console.log(numDoppio);

//el funcionamiento del Math.random() --> numero Casuale tra 0 e 1
console.log(Math.ceil(Math.random () * 25));


display.innerHTML = "<p> I numeri minori di 20 sono: " + contatore + "</p>";
display.innerHTML += "<p> I numeri doppioni sono: " + numDoppio + "</p>"

//Math.ceil() arrotonda all'intero superiore
//Math.floor() arrotonda all'intero inferior