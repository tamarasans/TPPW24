//lista da punteggi da controllare punto per punto.L'utente deve totalizzare 100 punti in 5 livelli diferenti.

let puntiPerLivello = [
    20,
    15,
    35,
    22,
    18
];

for(let i = 0; i < puntiPerLivello.length; i++){
    if(puntiPerLivello[i] < 20){
        console.log(`Livello ${i+1} - ${puntiPerLivello[i]} - Sei sotto la media`);
        listaPunteggi.innerHTML += `<li> Livello ${i+1} - ${puntiPerLivello[i]} - Sei sotto la media`;
    }else{
          console.log(`Livello ${i+1} - ${puntiPerLivello[i]}`);
          listaPunteggi.innerHTML += `<li> Livello ${i+1} - ${puntiPerLivello[i]}`;
        }
        }