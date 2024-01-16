//se puede leer sin prioridad de arriba para abajo. PERO por convencion se declaran las funciones arriba 
// saluta();


//dichiaro una funzione
function saluta(){
    //corpo della funzione
    let nome = "Tamara";
    let cognome ="Sans";
    //nome e cognome sono VARIABILI LOCALI
    console.log("Ciao " + nome + " " + cognome);
}

//Richiamo la funzione per farla eseguiere, posso richiamarla N volte
 saluta();

 //la variabile nome qui fuori non esiste
//  console.log(nome);


//VARIABLE GLOBALE con una visibilità totale
let nomeCorso = "T P P Web 2024";

function salutaStudente(){
    let studente = "Paolo Carinola";
    console.log("Ciao " + studente + ":corso " + nomeCorso);
}

salutaStudente();


//Le variabili locali hanno, à parita di nome la precedenza

let respoCorso = "Tina Ponte";

function salutaRespo(){
    let respoCorso = "Egle Risola";
    console.log("Ciao " + respoCorso);
}

salutaRespo();