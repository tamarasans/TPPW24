// Tipi Primitivi: Number, String, Boolean
var numero = 9; //Qui non dichiaro il tipo
//il salto tra un tipo e l'altro non è più fattibile
// numero = "9";
console.log(numero);
//Dichiaro una variabile
var mioNome = "Dario";
var mioCognome;
mioCognome = "Mennillo";
var miaEta = 34;
var presenza = true;
var info = "Ciao mi chiamo " + mioNome + " " + mioCognome + " e ho " + miaEta + " anni";
console.log(info);
var mieiHobbies = ["pallavolo", "calcio", "musica", "libri"];
mieiHobbies.forEach(function (hobby) {
    console.log(hobby);
});
var arrayNum = [8, 12, 20, 5, 14, 90];
//Tipo any
var qualcosa = "Ciao";
qualcosa = 7;
qualcosa = true;
qualcosa = ["Ciao", "Buongiorno", "Buonasera", "Buonanotte"];
qualcosa = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34
};
//Object
var persona = {
    nome: "Dario",
    cognome: "Mennillo",
    id: 0
};
//In questo modo posso dichiarare un tipo "al volo"
var docenti;
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
];
var respoCorso;
respoCorso = {
    nome: "Egle",
    cognome: "Risola",
    corso: ["TPPW", "TSS", "TSR"]
};
function presentaDoc(docente) {
    console.log("Mi chiamo : " + docente.nome + " e insegno " + docente.corso);
}
var docenteJS;
docenteJS = {
    nome: "Pippo Rossi",
    corso: "Colori chiari"
};
presentaDoc(docenteJS);
