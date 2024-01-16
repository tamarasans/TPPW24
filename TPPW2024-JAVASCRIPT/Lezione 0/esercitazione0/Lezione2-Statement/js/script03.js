// OPERATORE LOGICI && AND
let etaUtente = 34 ;
let invito = true ;

let condTotale = (etaUtente >= 18 && invito); //true


console.log (condTotale);

//sintaxis IF (condicion){
// esto que sigue se ejecuta si da verdadero
// } ELSE { se ejecuta esto si da FALSO
//}


if ( condTotale) {
    console.log ("Benvenuto, puoi entrare");
} else {
    console.log("Mi spiace, non puoi entrare");
}


// OR LOGICO, en este caso basta que una de las dos o mas sea verdadera para poder ser todo verdadera

let eta2 = 18 ;
let patente = "valida";

if ( eta2 >= 18 || patente == "valida"){
    console.log ("Puoi iscriverti al corso per la patente");
} else { 
    console.log ("Mi dispiace non puoi iscriverti");
}


/// altro esempio

let votoScritto = 25;
let votoOrale = 17;

// passo el examen con 1 sola nota sobre el 18

if (votoOrale >= 18 || votoScritto >= 18){
    console.log ("Bravo, hai passato l'esame");
}else{
    console.log(" Mi spiace, NON hai passato l'esame");
}

// passo con dos notas mayores a 18
if (votoOrale >= 18 && votoScritto >=18){
    console.log("bravo hai passato l'esame");
}else{
    console.log("Mi spiace non hai passato");
}


if(votoOrale >= 18 && votoScritto >=18){
    console.log("bravo, hai passato l'esame");
} else if (votoOrale < 18 && votoScritto >= 18){
     console.log ("non hai passato l'essame a causa del voto basso all'orale");
} else if (votoOrale >= 18 && votoScritto <18){
    console.log ("non hai passato per il voto basso al scritto");
} else {
    console.log ("mi spiace, non hai passato l'esame. entrambi voti sono bassi");
}
