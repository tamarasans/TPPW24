function saluta(){
    let body = document.querySelector("body");
    
    let saluto = "Ciao Caro/a*";

    let p = document.createElement("p");

    p.textContent = saluto;

    body.appendChild(p);
}


////////////////////////////////////////////

let btn1 = document.querySelector("#btn1");

btn1.onclick = saluta;


/////////////EVENT LISTENER/////////////////
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", saluta);
