// let docenti = [
//     {
//         nome: "Luca",
//         cognome: "Ceroni",
//         materie: ["Comunicazione", "Cv", "Sicurezza sul lavoro"],
    
//         descriviTeStesso(){
            
//             let materie = "";
            
//             this.materie.forEach(materia => {
//                 materie += materia + " ";
//             });
            
//             let descrizione = `Docente ${this.nome} ${this.cognome} insegna: ${materie}`;
//             return descrizione;
//         }
//     },

//     {
//         nome: "Davide",
//         cognome: "Ghione",
//         materie: ["HTML", "CSS", "Bootstrap"],
    
//         descriviTeStesso(){
            
//             let materie = "";
            
//             this.materie.forEach(materia => {
//                 materie += materia + " ";
//             });
            
//             let descrizione = `Docente ${this.nome} ${this.cognome} insegna: ${materie}`;
//             return descrizione;
//         }
//     },
//     {
//         nome: "Egle",
//         cognome: "Risola",
//         materie: ["Cv", "Colloquio", "Compilazione"],
    
//         descriviTeStesso(){
            
//             let materie = "";
            
//             this.materie.forEach(materia => {
//                 materie += materia + " ";
//             });
            
//             let descrizione = `Docente ${this.nome} ${this.cognome} insegna: ${materie}`;
//             return descrizione;
//         }
//     }
// ]

// for(let i = 0; i < docenti.length; i++){
//     console.log(docenti[i].descriviTeStesso());
// }


//Nel caso di più oggetti dello stesso tipo mi conviene usare la notazione con COSTRUTTORE

class Docente {
    /**
     * 
     * @param {String} nome 
     * @param {String} cognome 
     * @param {String[]} materie 
     */
    constructor(nome, cognome, materie) {
        //creo le prop usando la parola chiave this
        this.nome = nome;
        this.cognome = cognome;
        this.materie = materie;

        this.descriviTeStesso = function () {
            let materie = "";

            this.materie.forEach(materia => {
                materie += materia + " ";
            });


            let descrizione = `Docente ${this.nome} ${this.cognome} insegna: ${materie}`;
            return descrizione;
        };
    }
}


// let docente1 = new Docente("Dario", "Mennillo", ["Js", "Ts", "Angular", "React"]);
// let docente2 = new Docente("Davide", "Ghione", ["HTML", "CSS", "Bootstrap"]);

// console.log(docente1.descriviTeStesso());
// console.log(docente2.descriviTeStesso());

let docenti = [
    new Docente("Dario", "Mennillo", ["Js", "Ts", "Angular", "React"]),
    new Docente("Davide", "Ghione", ["HTML", "CSS", "Bootstrap"]),
    new Docente("Egle", "Risola", ["Comunicazione", "CV"]),
    new Docente("Luca", "Ceroni", ["Sicurezza sul lavoro"]),
    new Docente("Mauro", "Bogliaccino", ["Java", "Spring"])
];

docenti.forEach(docente =>{
    console.log(docente.descriviTeStesso());
})