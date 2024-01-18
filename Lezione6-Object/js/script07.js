//costruttore dell'oggetto Studente
function Studente(nome, cognome, matricola){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
}

let elenco = document.getElementById("elenco"); //div che si trova nell html
let listaStudenti = [];


//funzione aggiungiStudente() crea l'oggetto e lo aggiunge in un array
function aggiungiStudente(){

    //le prop dello studente vanno "raccolte" dai campi input
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let matricola = Number(document.getElementById("matricola").value);

    if(nome == "" || cognome == "" || matricola == ""){
        alert("Stai dimenticando qualcosa !!!")
    }else{
        let studente = new Studente(nome, cognome, matricola);   
        listaStudenti.push(studente);
        stampaElenco(listaStudenti);
    }

}

/**
 * il mio elencostudenti è un array di oggetti di tipo Studente
 * @param {Studente[]} elencoStudenti
 */
function stampaElenco(elencoStudenti){
    //la riga sotto pulisce ogni volta l'elenco per poi ristamparlo
    elenco.innerHTML = "";

    //elencoStudenti[i] è il singolo oggetto Studente
    // for(let i = 0 ; i < elencoStudenti.length; i++){
    //     // console.log(elencoStudenti[i].nome + " " + elencoStudenti[i].matricola);
    //     elenco.innerHTML += `<li> ${elencoStudenti[i].nome} ${elencoStudenti[i].cognome} - matricola ${elencoStudenti[i].matricola} </li>`;
    // }

    elencoStudenti.forEach(studente =>{
        elenco.innerHTML += `<li> ${studente.nome} ${studente.cognome} - matricola ${studente.matricola} </li>`;
    })
}