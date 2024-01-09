let coloriPR = ["rosso", "giallo", "blu", "rosa", "verde", "nero"];

let nomiPr = ["Jason", "Trini", "Billy", "Kimberly", "Tommy", "Zack"];

let powerRangers = [];

//per poter leggere un array, scorrere gli elementi all'interno il ciclo for è adattissimo
for(let i = 0; i < nomiPr.length; i++){
    //leggo l'array
    console.log(i + " " + coloriPR[i] + " - " + nomiPr[i]);
    
    //inserisco i valori in un terzo array
    let powerRanger = nomiPr[i] + " - " + coloriPR[i];
    powerRangers.push(powerRanger);
}

console.log(powerRangers);


//MEGAZORD
