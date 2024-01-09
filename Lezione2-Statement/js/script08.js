//Voglio estrarre 6 numeri da un set di 90

let numeriEstratti = [] 
let contatore = 0;

for(let i = 0; i < 90; i++){
    let numeroCasuale = Math.ceil(Math.random() * 90);
    
    if(numeriEstratti.includes(numeroCasuale)){
        i-- //fatti un nuovo giro

    }else{
        numeriEstratti.push(numeroCasuale);
    }

    contatore++;
}

console.log(numeriEstratti);
console.log("Num giri " + contatore);

