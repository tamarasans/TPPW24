// Tipi Primitivi: Number, String, Boolean

let numero = 9; //Qui non dichiaro il tipo

//il salto tra un tipo e l'altro non è più fattibile
// numero = "9";

console.log(numero);


//Dichiaro una variabile

let mioNome: string = "Dario";

let mioCognome: string;
mioCognome = "Mennillo";

let miaEta: number = 34;

let presenza: boolean = true;

let info: string = "Ciao mi chiamo " + mioNome + " " + mioCognome + " e ho " + miaEta + " anni"; 

console.log(info);
 
let mieiHobbies: string[] = ["pallavolo", "calcio", "musica", "libri"];

mieiHobbies.forEach(hobby => {
    console.log(hobby);
});

let arrayNum: number[] = [8,12,20,5,14,90];

//Tipo any
let qualcosa: any = "Ciao";
qualcosa = 7;
qualcosa = true;
qualcosa = ["Ciao", "Buongiorno", "Buonasera", "Buonanotte"];
qualcosa = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34
}

//Object
let persona = {
    nome: "Dario",
    cognome: "Mennillo",
    id: 0
}

//In questo modo posso dichiarare un tipo "al volo"
let docenti: {
    nome: string,
    cognome: string,
    corso: string,
    matricola: number
}[]

docenti = [
    {
        nome: "Davide",
        cognome: "Ghione",
        corso: "TPPW",
        matricola: 1
    },
    {
        nome: "Dario",
        cognome: "Mennillo",
        corso: "TPPW",
        matricola: 2
    },
]


let respoCorso: {
    nome: string,
    cognome: string,
    corso: string[]
} 

respoCorso = {
    nome : "Egle",
    cognome: "Risola",
    corso: ["TPPW", "TSS", "TSR"]
}

//ALIAS o custom type
type Docente = {
    nome: string,
    corso: string
}

function presentaDoc(docente: Docente){
    console.log("Mi chiamo : " + docente.nome + " e insegno " + docente.corso);
}

let docenteJS: Docente;

docenteJS = {
    nome: "Pippo Rossi",
    corso: "Colori chiari"
}

presentaDoc(docenteJS)



