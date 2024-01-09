//Dati i seguenti array comporre uno scontrino della spesa
let items = ["Nutella", "Biscotti", "Acqua", "Insalata", "Mandarini", "Amaro"];
let prezzi = [5.40, 3.50, 1.80, 0.75, 2.20, 12.69];


let listaSpesa = document.getElementById("listaSpesa");
let totale = document.getElementById("totale");
let demo = document.getElementById("demo");

let totaleScontrino = 0;
let prezziMin5 = 0;

for(let i = 0; i < items.length; i++){
    // listaSpesa.innerHTML += "<li> " + items[i] + " - " + prezzi[i] + " € </li>";
    listaSpesa.innerHTML += `<li> ${items[i]} - ${prezzi[i]} € </li>`;

    totaleScontrino += prezzi[i];

    if(prezzi[i] < 5){
        prezziMin5++;
    }
}

totale.innerHTML += `<h2> Totale ${totaleScontrino.toPrecision(4)} € </h2>`;
demo.innerHTML += `<p> Hai acquistato ${prezziMin5} prodotti a meno di 5 €`