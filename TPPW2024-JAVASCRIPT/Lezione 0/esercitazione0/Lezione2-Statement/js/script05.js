//Ciclo for
for(let i = 0; i< 10; i++){
    console.log(i + " giro");
}

for (let i = 0; i< 10; i++){
    console.log((i+1) + " giro");
}

for(let i = 1; i <= 10; i++){
    console.log(" giro" + i);
}

// VADO al contrario

for (let i = 10; i > 0; i--){
    console.log("Giro " + i);
}


//Calcola la somma delle ore totali in un giorno
let oreTotali = 0;

for (let i = 0; i <= 24; 1++){
    let oraAttuale = i;
    oreTotali += oraAttuale;
}
console.log (oreTotali);