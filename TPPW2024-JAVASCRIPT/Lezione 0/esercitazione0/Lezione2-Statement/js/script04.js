let elPunteggi = document.getElementById("elPunteggi");
let demo = document.getElementById("demo");


let punteggio = 120;
let skill= 54;

//HARDMODE -  Per superare il livello devo avere tutto sopra soglia

// if (punteggio >= 100 && skill >= 50){
//     demo.innerHTML = "Bravo, hai superato il livello";
// }else{
//     demo.innerHTML = "Mi dispiace, non hai superato il livello";
// }

// // Alt + 96 = (``)
// elPunteggi.innerHTML = `Questi sono i tuoi punteggi: punteggio - ${punteggio} / skill -${skill}`;

//EASYMODE - PER superare il livello basta che 1 punteggio sia sopra soglia

if (punteggio >= 100 || skill >= 50){
    demo.innerHTML = "Bravo, hai superato il livello";
}else{
    demo.innerHTML = "Mi dispiace, non hai superato il livello";
}