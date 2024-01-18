//Calcolare Area e Volume utilizzando lo HTML fornito. 
//Successivamente controlla l'esistenza o meno dei dati all'interno dei campi input 

let demo = document.getElementById("demo");

function prendiDatiVolume(){

    let base = document.getElementById("base").value;
    let altezza = document.getElementById("altezza").value;
    let profondita = document.getElementById("profondita").value;
    
    if(base != "" && altezza != "" && profondita != ""){
        demo.innerHTML = "Il volume vale: " + calcolaVolume(base, altezza, profondita);
    }else{
        demo.innerHTML = "Mancano alcuni dati";
    }
}

function prendiDatiArea(){

    let base = document.getElementById("base").value;
    let altezza = document.getElementById("altezza").value;

    if(base != "" && altezza != ""){
        demo.innerHTML = "L'area vale: " + calcolaArea(base, altezza);
    }else{
        demo.innerHTML = "Mancano alcuni dati";
    }

}


function calcolaArea(base, altezza){
    let area = base * altezza;
    console.log(area);
    return area;
}

function calcolaVolume(base, altezza, profondita){
    let volume = base * altezza * profondita;
    return volume;
}