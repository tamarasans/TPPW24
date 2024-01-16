let persona = {
    nome : "Tamara ",
    cognome : "Sans",
    eta : 31,
    corso : "TPPW ",
    materie : ["CSS", "HTML", "Javascript", "Angular", "React", "Typescript"],

    descrivi(){
        let materie = ""

        for(let i = 0; i < this.materie.length; i++){
            materie+= "<li>" + this.materie [i] + " " + "</li>";
        }

        let descrizione = `Ciao mi chiamo ${this.nome} ${this.cognome}, ho ${this.eta} anni. Imparo nell corso di ${this.corso} le seguenti materie: ${materie}. `;

        return descrizione;
    }
}

let docente1 = {
    nome : "Dario",
    cognome : "Menillo",
    materie : "Javascript",


    descriviTeStesso(){
        let descrizione =`Docente ${this.nome} ${this.cognome}, insegna ${this.materie}.`;
        return descrizione;
    }
}

let docente2 = {
    nome : "Davide",
    cognome : "Ghione",
    materie : "CSS",


    descriviTeStesso(){
        let descrizione =`Docente ${this.nome} ${this.cognome}, insegna ${this.materie}.`;
        return descrizione;
    }
}



let demo = document.getElementById("demo");
demo.innerHTML = persona.descrivi();


let demoDocenti = document.getElementById("demoDocenti");


function stampaDocenti(){
    
demoDocenti.innerHTML = docente1.descriviDocenti() + docente2.descriviDocenti();
}
