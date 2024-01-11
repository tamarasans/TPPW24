function descriviDocente(){
    let nomeDocente = "Dario Mennillo";

    console.log("Docente: " + nomeDocente);

    //Posso richiamare una funzione dall'interno di un'altra funzione
    descriviCorso();
}

function descriviCorso(){
    let nomeCorso = "TPPW-2024";

    console.log("Il corso è : " + nomeCorso);
    
    salutaRespo();
    //ATT: stai creando un loop perché le due funzioni si chiamano a vicenda
    // descriviDocente();
}

function salutaRespo(){
    let nomeRespo = "Egle Risola";
    console.log("Ciao " + nomeRespo);
}

descriviDocente();

