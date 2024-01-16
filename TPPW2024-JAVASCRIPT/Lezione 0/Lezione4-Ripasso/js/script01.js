//array es un contenedor de elementos similes entre ellos
//0 based            0        1         2        3        4
let studenti = [ "Tamara", "Paolo",  "Marco", "Sofia", "Vania"]

//stampo il nome degli studenti 
//de forma larga y poco comoda, es mejor hacer uun ciclo FOR

// console.log( studenti [0]);
// console.log(studenti [1]);
// console.log(studenti [2]);
// console.log(studenti [3]);
// console.log(studenti [4]);


//   inizializzazione; condizione; aggiornamento
//posincremeto i++
for (let i = 0; i < studenti.length; i ++){
    console.log(studenti[i]);
}


//escribimos el array al reves
console.log( "Scrivo i nomi al contrario");
for (let i = studenti.length -1; i >=0 ; i--){
    console.log(studenti[i]);
}

//FOREACH, se aplica solo al array, para cada elemento dentro del array
console.log("Leggo con ForEach");
studenti.forEach(studente => {
    console.log(studente);
});


///////////Array di numeri
let numeri = [16,20,99,54,78,1,15,30,6,25,12];
// Quiero controlar cuantos y cuales son menores de 15

for (let i = 0 ; i < numeri.length; i++){

    if(numeri [i] < 15){
        console.log(numeri[i] + " questo è minore di 15");
    }else if (numeri[i] == 15){
        console.log(numeri[i] + " questo è proprio 15");
    }else{
        console.log(numeri[i]);
    }
}