//array è un contenitore di elementi simili tra loro 
//0-based          0         1        2        3        4
let studenti = ["Tamara", "Paolo", "Marco", "Sofia", "Vania"];

//richiamare il nome degli studenti
// console.log(studenti[0]);
// console.log(studenti[1]);
// console.log(studenti[2]);
// console.log(studenti[3]);
// console.log(studenti[4]);

console.log(studenti.length); //5

//inizilizzazione; condizione;     aggiornamento
for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i]);
}

console.log("Scrivo i nomi al contrario");
for(let i = studenti.length - 1; i >= 0; i--){
    console.log(studenti[i]);
}

//FOREACH, si applica SOLO agli array
console.log("Leggo con ForEach");

studenti.forEach(studente => {
    console.log(studente);
});

/////////////////////Array di numeri
let numeri = [16,20,99,54,78,1,30,15,6,25,12];
//Voglio controllare quanti e quali numeri sono minori di 15

for(let i = 0; i < numeri.length; i++) {
    
    if(numeri[i] < 15){
        console.log(numeri[i] + " questo è minore di 15");
    }else if(numeri[i] == 15){
        console.log(numeri[i] + " questo è proprio 15");
    }else if(numeri[i] > 40){
        console.log(numeri[i] + " questo è maggiore di 40");
    }else{
        console.log(numeri[i]);
    }
}