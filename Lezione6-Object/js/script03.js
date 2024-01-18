let persona = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34,
    corso: "TPPW-2024",
    materie: ["Javascript", "Typescript", "Angular", "React"],

    descriviTeStesso(){
        let materie = ""

        for(let i = 0; i < this.materie.length; i++){
            materie += "<li>" + this.materie[i] + "</li>";
        }

        let descrizione = `Ciao, mi chiamo ${this.nome} ${this.cognome}, ho ${this.eta } anni. Insegno sul corso di ${this.corso} le seguenti materie: ${materie}`;

        return descrizione;
    }
}

let demo = document.getElementById("demo");

demo.innerHTML = persona.descriviTeStesso();

let docente1 = {
    nome: "Luca",
    cognome: "Ceroni",
    materie: ["Comunicazione", "Cv", "Sicurezza sul lavoro"],

    descriviTeStesso(){
        
        let materie = "";
        
        this.materie.forEach(materia => {
            materie += materia + " ";
        });
        
        let descrizione = `Docente ${this.nome} ${this.cognome} insegna: ${materie}`;
        return descrizione;
    }
}

let docente2 = {
    nome: "Davide",
    cognome: "Ghione",
    materie: ["HTML", "CSS", "Bootstrap"],

    descriviTeStesso(){
        
        let materie = "";
        
        this.materie.forEach(materia => {
            materie += materia + " ";
        });
        
        let descrizione = `Docente ${this.nome} ${this.cognome} insegna: ${materie}`;
        return descrizione;
    }
}

let demoDocenti  = document.getElementById("demoDocenti");

function stampaDocenti(){
    demoDocenti.innerHTML = docente1.descriviTeStesso() + " <br> " + docente2.descriviTeStesso();
}