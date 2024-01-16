//Nel caso di piu oggetti dello stesso tipo mi conviene usare la notazione con CONSTRUTTORE

function Docente(nome,cognome, materie){
    //creo le propieta usando la parola chiave this
    this.nome = nome;
    this.cognome = cognome;
    this.materie = materie;


   this.descriviTeStesso = function (){
    let materie = "";

        this.materie.forEach(materia => {
            materie += materia + " ";  
        });

        let descrizione =`Docente ${this.nome} ${this.cognome}, insegna ${materie}.`;
        return descrizione;
    }


}

let docenti = [
    new Docente("Dario", "Menillo", ["Js", "ANgular", "React"]),
    new Docente("Davide", "Ghione", ["CSS", "HTML"]),
    new Docente("Egle", "Risola", ["Comunicazione", "CV"]),
]