//Questo viene recuperato al lancio dello script
let demo = document.getElementById("demo");

function salutaStudente(){
    //il nome viene recuperato solo quando l'utente fa click sul pulsante
    //value è ciò che l'utente digita nel campo input
    let nomeUser = document.getElementById("nomeUser").value;
    let cognomeUser = document.getElementById("cognomeUser").value;

    //trim() metodo per stringhe per eliminare gli spazi davanti e alla fine della stringa
    // if(nomeUser.trim() == ""){
    //     demo.innerHTML = "Amico, almeno dimmi il nome"
    // } else if(cognomeUser.trim() == ""){
    //     demo.innerHTML = "Amico, almeno dimmi il cognome"   
    // }else{
    //     demo.innerHTML = "Ciao, " + nomeUser + " " + cognomeUser; 
    // }

    if(nomeUser.trim() == "" && cognomeUser.trim() == ""){
        demo.innerHTML = "Non hai inserito niente"
    }else if(nomeUser.trim() == "" && cognomeUser.trim() != ""){
        demo.innerHTML = "Hai scordato il nome"
    }else if(nomeUser.trim() != "" && cognomeUser.trim() == ""){
        demo.innerHTML = "Hai scordato il cognome";
    }else{
        demo.innerHTML = "Ciao, " + nomeUser + " "  +cognomeUser
        document.getElementById("nomeUser").value = "";
        document.getElementById("cognomeUser").value = "";
    }
    
    console.log("Ciao, Dario");
}
    //pulisco il campo
