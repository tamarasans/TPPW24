//Ciclo For

for(let i = 0; i < 10; i++){
    console.log(i + " giro");
}

for(let i = 0; i < 10; i++){
    console.log((i+1) + " giro");
}

for(let i = 1; i <= 10; i++){
    console.log("giro " + i);
}

//Vado al contrario
for(let i = 10; i > 0; i--){
    console.log("Giro " + i);
}


//Calcola la somma delle ore totali in un giorno
console.log("Sommo le ore totali in una giornata");
let oreTotali = 0;

for(let i = 0; i <= 24; i++){
    let oraAttuale = i;
    oreTotali += oraAttuale;
}

console.log(oreTotali);

