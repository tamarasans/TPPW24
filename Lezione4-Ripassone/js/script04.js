// Scrivi un programma che stampa tutti gli interi da 1 a 100. Per i multipli di 3 stampa “Ciao” per i multipli di 5 stampa “Mondo”. Per i multipli sia di 3 , sia di 5 stamperà “Ciao, Mondo”.
//Contare quanti sono i multipli di 3, quanti i multipli di 5 e quanti i multipli di 3 e 5

let demo = document.getElementById("demo");

for(let i = 1; i <= 100; i++){
    
    if((i%3 == 0) && (i%5 == 0)){
        demo.innerHTML += `<li> ${i} - Ciao, Mondo </li>`;
    }else if(i%3 == 0){
        demo.innerHTML += `<li> ${i} - Ciao </li>`;
    }else if(i%5 == 0){
        demo.innerHTML += `<li> ${i} - Mondo </li>`;
    }else{
        demo.innerHTML += `<li> ${i}</li>`;
    }
}








// //Resto della divisione
// let num = 16;
// let restoDellaDivisione = num % 5;
// if(restoDellaDivisione == 0){
//     console.log("Il numero è divisibile per 5");
// }else{
//     console.log("Il numero non è divisibile per 5");
// }
// console.log(restoDellaDivisione);
