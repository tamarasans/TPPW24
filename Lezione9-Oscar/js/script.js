//Inserire i vari film che hanno vinto e partecipato agli oscar 2023 con le seguenti prop
//titolo
//locandina (link)
//attori
//regista
//durata
//prezzo

//JS: costruire un array di almeno 5 film

//HTML: locandina a sx, testo e info a dx

function Film (titolo, locandina, attori, regista, durata, prezzo){
    this.titolo = titolo;
    this.locandina = locandina;
    this.attori = attori;
    this.regista = regista;
    this.durata = durata;
    this.prezzo = prezzo;
}

let titoloFilm = document.querySelector("#titoloFilm");
let locandinaFilm = document.querySelector("#locandinaFilm");
let listaAttoriFilm = document.querySelector("#listaAttoriFilm");
let registaFilm = document.querySelector("#registaFilm");
let durataFilm = document.querySelector("#durataFilm");
let prezzoFilm = document.querySelector("#prezzoFilm");

let btnIndietro = document.querySelector("#btnIndietro");
let btnAvanti = document.querySelector("#btnAvanti");

let films = [
    new Film("Everything Everywhere all at once", "https://pad.mymovies.it/filmclub/2022/03/243/locandinapg1.jpg",
    ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "James Hong"], "Dan Kwan", 139, 5.90),

    new Film("Gli spiriti dell'isola", "https://pad.mymovies.it/filmclub/2022/07/081/locandinapg1.jpg", ["Colin Farrell", "Brendan Gleeson", "Kerry Condon", "Barry Keoghan"], "Martin McDonagh", 114, 3.80)
];


let indiceFilm = 0;

function mostraFilm(){
    let filmCorrente = films[indiceFilm];

    titoloFilm.textContent = filmCorrente.titolo;

    locandinaFilm.setAttribute("src", filmCorrente.locandina);

    for(let i = 0; i < filmCorrente.attori.length; i++){
        listaAttoriFilm.innerHTML += `<li> ${filmCorrente.attori[i]} </li>`
    }

    registaFilm.textContent = "Regista: " + filmCorrente.regista;
    
    durataFilm.textContent = "Durata: " + filmCorrente.durata;

    prezzoFilm.textContent = "Prezzo: " + filmCorrente.prezzo;
}

mostraFilm();


btnAvanti.onclick = function(){
    indiceFilm++;
    mostraFilm();
}
