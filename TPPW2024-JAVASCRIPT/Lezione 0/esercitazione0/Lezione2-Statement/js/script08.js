//Voglio estrarre 6 numeri da un set di 90

let numeriEstratti = []

for(let i=0; i< 6; i++){
    let numeroCasuale = Math.ceil(Math.random() * 90);

    if(numeriEstratti.includes(numeroCasuale)){
        i-- //hacer una vuelta nueva del ciclo.
    }else {
        numeriEstratti.push(numeroCasuale);
    }



}

console.log(numeriEstratti)
