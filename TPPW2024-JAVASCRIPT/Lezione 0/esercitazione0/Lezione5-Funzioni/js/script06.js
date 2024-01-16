// let base  = document.getElementById("base").value;
// let altezza = document.getElementById ("altezza").value;
// let profondita  = document.getElementById("profondita").value;

let demo = document.getElementById("demo");


function prendiDati(){
let base  = document.getElementById("base").value;
let altezza = document.getElementById ("altezza").value;
let profondita  = document.getElementById("profondita").value;


    if(base != "" && altezza != "" && profondita == ""){
        calcolaArea(base,altezza)
    }else if (base != "" && altezza != "" && profondita != ""){
    calcolaVolume(base,altezza,profondita)
    }else{
    demo.innerHTML= "Mancano alcuni dati";
    }
}

function calcolaVolume(base,altezza,profondita){
    let volume = base*altezza * profondita;

    console.log("Il volume calcolato vale: " + volume);
    demo.innerHTML= "il volume vale: " + volume; 
}
// function calcolaArea(base, altezza){
//     let area = base * altezza;
//     console.log("L'area vale: " + area);
// }

function calcolaArea(base,altezza){
    let area = base*altezza;
    demo.innerHTML= "L'area vale: " + area;

}