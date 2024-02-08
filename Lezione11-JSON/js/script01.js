//notazione letterale
let studente = {
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 1,
}

//notaizione con costruttore
function Alunno(nome, cognome, matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
}
let mioAlunno = new Alunno("Pippo", "Rossi", 2);

//notazione JSON (JavaScript Object Notation)
//è una notazione integralmente basata sulle stringhe
let discente = '{"nome": "Dario", "cognome": "Mennillo", "Matricola": 1}';
console.log(discente);
console.log(discente.nome); //undefined

//trasformo una stringa in oggetto
let discenteOBJ = JSON.parse(discente);


console.log(discenteOBJ);
console.log(discenteOBJ.nome);

//posso anche "mappare" l'oggetto che ricevo
let mioDiscente = new Alunno(discenteOBJ.nome, discenteOBJ.cognome, discenteOBJ.matricola);



///Strada al contrario: ho un oggetto, lo trasformo in stringa per poterlo inviare da qualche parte
// let docente = {
//     nome: "Davide",
//     cognome: "Ghione",
//     materia: "HTML & CSS"
// }
class Docente {
    constructor(nome, cognome, materia) {
        this.nome = nome;
        this.cognome = cognome;
        this.materia = materia;
    }
}

let docente = new Docente("Davide", "Ghione", "HTML e CSS")

let docenteJSON = JSON.stringify(docente);

console.log(docenteJSON);
console.log(docenteJSON.materia);//undefined


