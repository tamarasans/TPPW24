//Questo viene recuperato al lancio dello script
let demo = document.getElementById("demo");


 
function salutaStudente(){
    //il nome viene recuperato solo quando l'utente fa click sul pulsante
    //valuè è cio che l'utente digita nel campo input.
    let nomeUser  = document.getElementById("nomeUser").value;
    let cognomeUser = document.getElementById ("cognomeUser").value;


    //.trim() metodo per stringhe per elminare gli spazi davanti e alla fine
    if(nomeUser.trim() == ""){
        demo.innerHTML = "Amico, almeno dimmi come ti chiami"
    }
     else if (cognomeUser.trim() == ""){
    demo.innerHTML = "Amico, almeno dimmi il cognome"
    }else{
    demo.innerHTML= "Ciao " + nomeUser + " "+ cognomeUser;
       //pulisco il campo poner .value= "" solo cuando puso bien todos los campos
    document.getElementById("nomeUser").value = "";
    document.getElementById("cognomeUser").value = "";}
 

}

