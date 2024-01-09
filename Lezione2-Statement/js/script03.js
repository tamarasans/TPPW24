//OPERATORI LOGICI && AND
let etaUtente = 34;
let invito = true;

let condTotale = (etaUtente >= 18 && invito == true); //true

console.log(condTotale);

//SINTASSI IF
/**
 * if(condizione){
 *  ..questo viene eseguito se la condizione è true
 * }else{
 *  ..questo se la condizione è false
 * }
 */


if(condTotale){
    console.log("Benvenuto, puoi entrare");
}else{
    console.log("Mi spiace, non puoi entrare");
}


//OR LOGICO In questo caso basta che una delle due o più sia vera per poter essere tutto True

let eta2 = 16;
let patente = "non valida";

if( eta2 >= 18 || patente == "valida"){
    console.log("Puoi iscriverti al corso per la patente per i PULLMAN");
}else{
    console.log("Mi dispiace non puoi iscriverti");
}

///altro esempio

let votoScritto = 30;
let votoOrale = 17;

//docente buono: passo l'esame anche con 1 solo voto sopra il 18

if(votoOrale >= 18 || votoScritto >= 18){
    console.log("Bravo, hai passato l'esame");
}else{
    console.log("Mi spiace, NON hai passato l'esame");
}

//docente cattivo: passo l'esame solo se entrambi i voto superano il 18

if(votoOrale>=18 && votoScritto >=18){
    console.log("Bravoo, hai passato l'esame");
}else{
    console.log("Mi spiace, non hai passato l'esame");
}

//docente corretto: passo l'esame solo con entrambi i voti sopra il 18 ma in questo caso il docente ti dice dove stai sbagliando

if((votoOrale >= 18 && votoScritto >= 18) ){
    console.log("Bravo, hai passato l'esame");
}else if(votoOrale < 18 && votoScritto >= 18){
    console.log("Non hai passato l'esame a causa del voto basso all'orale");
}else if(votoOrale >= 18 && votoScritto < 18){
    console.log("Non hai passato l'esame a causa del voto dello scritto");
}else{
    console.log("Mi spiace, non hai passato l'esame. Entrambi i voti non raggiungono il 18");
}

console.log("Scritto: " + votoScritto, "\nOrale: " + votoOrale);