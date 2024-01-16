
let colori = ["bianco", "rosso", "blu", "giallo", "rosa"];

// leggo i valori singoli dell'array

let primoColore = colori [0];
console.log(primoColore);

let secondoColore=colori[1];
console.log (secondoColore);

let terzoColore = colori [2];
console.log (terzoColore);

let quartoColore = colori[3];
console.log (quartoColore);

let quintoColore = colori [4];
console.log (quintoColore);


// Quanto misura l'array?
let numeroColori = colori.length;
console.log ("Nell'array ho " + numeroColori + " colori");

let coloreInesistente = colori [10];
console.log (coloreInesistente);

//Ultimo colore
let ultimoColore = colori [colori.length - 1];
console.log (ultimoColore);

//aggiungo un colore
let nuovoColore = colori.push("ottanio");

// ordino i colori 
colori.sort ();

// stampo tutto l'array
console.log (colori);

// inverto l'ordine
colori.reverse();

// elimino l'ultimo
colori.pop();
 /////////////////////////////////////////////

let frutta = ["mandarino", "arancia", "mela", "ananas"];
let verdura = ["broccoli", "lattuga", "friarielli", "zucchine"];

// voglio fondere i miei due array
let fruttaEVerdura = frutta.concat(verdura);
console.log(fruttaEVerdura);

console.log (fruttaEVerdura);


// voglio la posizione di un particolare elemento
console.log(fruttaEVerdura.indexOf("mela"));

// cerco la posizione di un elemento inesistente, ME DA -1 ES UNA CONVENCION
console.log(fruttaEVerdura.indexOf("banana"));

if(fruttaEVerdura.indexOf("banana") == -1) {
    console.log ("Mi spiace, questo non esiste")
} else {
    console.log ("Bravo, quello che cerchi esiste");
}

// ALTERNATIVA AL -1 è IL METODO INCLUDES()
console.log (fruttaEVerdura.includes("arancia"));


