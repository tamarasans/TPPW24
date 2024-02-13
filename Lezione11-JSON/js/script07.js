let mioArray = ["bianco", "giallo", "verde", "rosso", "blu", "rosa", "nero"];

localStorage.setItem("elencoColori", JSON.stringify( mioArray) );

console.log(JSON.parse( localStorage.getItem("elencoColori") ));

function Studente(nome, cognome, matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
}

let elencoStudenti = [
    new Studente("Dario", "Mennillo", 1),
    new Studente("Paola", "Verdi", 2),
    new Studente("Giacomo", "Rossi", 3)
];

localStorage.setItem("elencoStudenti", JSON.stringify(elencoStudenti));

//mieiStudenti è un Array di Object

let mieiStudenti = JSON.parse(localStorage.getItem("elencoStudenti"));

console.log(mieiStudenti);

for(let i = 0; i < mieiStudenti.length; i++){
    console.log(mieiStudenti[i]);
}