let demo = document.getElementById("demo");
let display = document.getElementById("display");
//Crea un array di 100 numeri Casuali da 1 a 100. Controlla quali e quanti sono minori di 20

let numCasuali = [];


let contDoppioni = 0;

//carica l'arrray con numeri casuali
for(let i = 0; i < 100; i++){
    let numeroRandom = Math.ceil(Math.random() * 100);
    
    if(numCasuali.includes(numeroRandom)){
        contDoppioni++;
    }
    
    numCasuali.push(numeroRandom);
}
console.log(numCasuali);

let contatore = 0;
//leggo l'array e stampo i numeri nel div demo
for(let i = 0; i < numCasuali.length; i++){

    if(numCasuali[i] < 20){
        demo.innerHTML += "<li>" + numCasuali[i] + " questo è min di 20 </li>";
        contatore++;
    }else{
        demo.innerHTML += "<li>" + numCasuali[i] + "</li>";
    }

}

display.innerHTML = "<p> I numeri minori di 20 sono: " + contatore + "</p>"
display.innerHTML += "<p> I numeri doppioni sono: " + contDoppioni + "</p>";

//OSS: funzionamento del Math.random() ---> numero Casuale tra 0 e 1
console.log(Math.ceil(Math.random() * 25));

//Math.ceil() arrotonda all'intero superiore
//Math.floor() arrotonda all'intero inferiore