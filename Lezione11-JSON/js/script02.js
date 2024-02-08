// //Local e Session Storage lavorano con i JSON, quindi in entrata e in uscita sono stringhe

let corso = {
    nome: "TPPW 2024",
    durata: 600,
    sede: "I&L"
}

let corsoJSON = JSON.stringify(corso);

//setItem registra un JSON in local o session storage
localStorage.setItem("corso", corsoJSON);


//voglio recuperare il JSON chiamato docente che si trova in localstorage
if(localStorage.getItem("docente") != null){
    let docenteJSON = localStorage.getItem("docente");
    console.log(docenteJSON);   
    let docenteOBJ = JSON.parse(docenteJSON);
    console.log(docenteOBJ.nome + " " + docenteOBJ.cognome);
}else{
    console.log("Il docente non esiste in local storage");
}
    
let btnClean = document.querySelector("#btnClean");

btnClean.addEventListener("click", function(){
    // localStorage.clear();
    localStorage.removeItem("corso");
})



