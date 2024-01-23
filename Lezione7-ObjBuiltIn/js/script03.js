let oggi = new Date();

console.log(oggi);

let anno = oggi.getFullYear();
let day = oggi.getDay();
let month = oggi.getUTCMonth();
let data = oggi.getDate();


console.log(day);

let giorni = ["Domenica", "Lunedì", "Martedì", "Giovedì", "Venerdì", "Sabato"];

console.log("Oggi è: " + giorni[2]);

console.log(data + " / " +( month + 1) + " / " + anno);

//Per manipolare le date https://momentjs.com/

let orologioDigitale = document.getElementById("orologioDigitale");



setInterval(()=>{  
    let oggi = new Date();
    
    let ora = (oggi.getHours() < 10? '0' : '') + oggi.getHours();
    let min = (oggi.getMinutes() < 10? '0': '') + oggi.getMinutes();
    let sec = (oggi.getSeconds() < 10? '0' : '') + oggi.getSeconds();
    
    let time = ora + ":" + min + ":" + sec;
    
    orologioDigitale.innerHTML = time;
    
}, 1000);