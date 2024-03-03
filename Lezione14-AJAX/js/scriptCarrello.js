let elResoconto = document.querySelector("#elResoconto");
let elTotali = document.querySelector("#elTotali");
let btnDelCart = document.querySelector("#btnDelCart");


function caricaProdotti(){
    if(localStorage.key("listaCarrello") != null){
        let prodotti = JSON.parse(localStorage.getItem("listaCarrello"));

        let grandTotal = 0;
        prodotti.forEach(prodotto => {
            elResoconto.innerHTML += `<li> ${prodotto.brand} <img src=${prodotto.thumbnail}> </li>`;
            grandTotal += Number( prodotto.price );
        });

        elTotali.innerHTML = "<h2> Totale: " + grandTotal + "</h2>"
    }
}

btnDelCart.addEventListener("click", function(){
    localStorage.removeItem("listaCarrello");
    location.reload();
})

window.addEventListener("DOMContentLoaded", caricaProdotti);