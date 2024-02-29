let elListaProd = document.querySelector("#elListaProd");

let allProdotti = [];

//recupero tutti i dati dalla API
fetch("https://dummyjson.com/products")
    .then(data =>{
        return data.json();
    })
    .then(response=>{
        console.log(response);

        allProdotti = response.products;

        allProdotti.forEach(prodotto => {
            elListaProd.appendChild(creaLiProdotto(prodotto));
        });
    })


let prodottiCarrello = [];

function creaLiProdotto(prodotto){
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-baseline");

    li.textContent = `${prodotto.brand} ${prodotto.title} - € ${prodotto.price}`;

    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary bi bi-cart");
    
    button.addEventListener("click", function(){
        console.log(prodotto);
        prodottiCarrello.push(prodotto);
        caricaCarrello(prodottiCarrello);
    })


    li.appendChild(button);

    return li;
}

/**
 * 
 * @param {Prodotto[]} arrayProdotti 
 */
function caricaCarrello(arrayProdotti){
    let listaJSON = JSON.stringify(arrayProdotti);
    localStorage.setItem("listaCarrello", listaJSON);
}