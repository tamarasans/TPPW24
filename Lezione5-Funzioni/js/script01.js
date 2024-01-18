//Dichiaro Una Funzione
function saluta(){
    //corpo della funzione
    //nome e cognome sono VARIABILI LOCALI
    let nome = "Dario";
    let cognome = "Mennillo";

    console.log("Ciao " + nome + " " + cognome);
}

//Richiamo la funzione per farla eseguire e posso richiamarla n volte
saluta();

// La variabile nome qui fuori non esiste
// console.log(nome);


//VARIABILE GLOBALE con una visibilità totale
let nomeCorso = "T P P Web 2024";

function salutaStudente(){
    let studente = "Paolo Carinola";
    console.log("Ciao " + studente + ": corso " + nomeCorso);
}

salutaStudente();


///Le varibili Locali hanno, a parità di nome, la precedenza

let respoCorso = "Tina Ponte";

function salutaRespo(){
    
    let respoCorso = "Egle Risola";
    console.log("Ciao " + respoCorso);
}
salutaRespo();

console.log("Ciao da fuori " + respoCorso);


