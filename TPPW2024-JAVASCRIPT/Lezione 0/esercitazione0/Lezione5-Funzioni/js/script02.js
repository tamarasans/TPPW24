function descriviDocente(){
    let nomeDocente = "Dario Menillo";

    console.log("Docente; " + nomeDocente);
//Posso richiamare una funzione dall'interno di un'altra funzione
    descriviCorso();
}

function descriviCorso(){
    let nomeCorso = "TPPW-2024";

    console.log("Il corso è: " + nomeCorso);

    //ATTENZIONE; stai creando un loop perchè le due funzion si chiamano a vicenda
    // descriviCorso
}

descriviCorso();
