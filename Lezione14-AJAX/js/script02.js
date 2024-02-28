
let btnShowContacts = document.querySelector("#btnShowContacts");
let demo = document.querySelector("#demo");


function recuperaContatti(){
    const urlUsers = "https://dummyjson.com/users";

    fetch(urlUsers)
    .then(data =>{
        return data.json();
    })
    .then(response => {
        console.log(response.users);
        
        response.users.forEach(utente => {
                demo.innerHTML += creaCard(utente);
        });
        
    })
}


btnShowContacts.addEventListener("click", recuperaContatti);

function creaCard(utente){

    let card = `<div class="cardUser">
                    <img src=${utente.image} class="dimImg">
                    <p> ${utente.firstName} ${utente.lastName} </p>
                    <p>Tel: ${utente.phone}</p>
                </div>`;

    return card;
}