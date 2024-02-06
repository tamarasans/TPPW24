let miaString = "Il martedì pomeriggio facciamo lezione in aula 5";

let lunghezzaStringa = miaString.length; //.length conta i caratteri, spazio incluso

console.log(lunghezzaStringa);

console.log(miaString.charAt(0));
console.log(miaString.charAt(miaString.length - 1));

console.log(miaString.charCodeAt(0)); //cod ASCII dei caratteri 


//Metodi per ricerca
console.log(miaString.indexOf("martedì"));// 3 //restituisce la prima occorrenza
console.log(miaString.indexOf("a")); //4

console.log(miaString.lastIndexOf("a")); //45 //l'ultima occorrenza

console.log(miaString.indexOf("o f"));

console.log(miaString.indexOf("Dario")); //-1 quando cerco qualcosa che non esiste

function trovaParola(parola){
    if(miaString.indexOf(parola) == -1){
        console.log("Mi spiace, la parola o il pattern che stai cercando non esiste");
    }else{
        console.log("La parola esiste in posizione: " + miaString.indexOf(parola));
    }
}

trovaParola("martedì");


console.log(miaString.includes("martedì")); //true
console.log(miaString.includes("sabato")); //false

//metodi per il taglio 
let frase = "Javascript è utilizzato in ambito front-end";

console.log(frase.slice(4,15));
console.log(frase.substring(4,15));

console.log(frase.slice(9));

///Giochino video scorrimento
let frase2 = "Ciao, come stai ?";
console.log(frase2[0]); //prima lettera
console.log(frase2.slice(10)); //resto della frase

let tempoDiEsecuzione = 100;

let nuovaFrase = frase2.slice(1) + frase2[0];

setInterval(()=>{
    nuovaFrase = nuovaFrase.slice(1) + nuovaFrase[0];
    // console.log(nuovaFrase);
    document.getElementById("demo").innerHTML = nuovaFrase;
}, tempoDiEsecuzione)


//metodi split() e join()

console.log(frase2.split(" "));

let fraseInArray = frase2.split(" "); //viene eliminato lo spazio e le parole vengono inserite in un array

console.log(fraseInArray.length);

let fraseString = fraseInArray.join("_");
console.log(fraseString);

let frase3 = "i topi non avevano nipoti";

console.log(frase3.split("").reverse().join(""));

//REGEX

const miaReg = /([A-Z])\w/;

let miaString2 = "DARIO";

if(miaString2.match(miaReg)){
    console.log("La parola fornita rispetta la regex");
}else{
    console.log("La parola NON rispetta la regex");
}

const regexCODFISC = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;

let mioCodFisc = "MNNMNK87D42F931X";

if(mioCodFisc.match(regexCODFISC)){
    console.log("Codice Fiscale valido");
}else{
    console.log("Codice Fiscale non valido");
}

