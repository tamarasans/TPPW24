function Studente(nome, cognome, matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;

    this.descrivi = function(){
        return `${this.nome} ${this.cognome} - matricola: ${this.matricola} `
    }
}

//creo un array di oggetti
let elencoStudenti = [
    new Studente("Paolo", "Carinola", 1),
    new Studente("Kewin", "Montenegro", 2),
    new Studente("Elena", "Soave", 3),
    new Studente("Alessandro", "Caprano", 4)
]

// console.log(elencoStudenti);
function mostraElenco(){
    let demo = document.getElementById("demo");

    elencoStudenti.forEach(studente =>{
        console.log(studente.descrivi());
        demo.innerHTML += studente.descrivi() + "<br>"
    })


}