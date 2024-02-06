let formUser = document.querySelector("#formUser");
let feed = document.querySelector("#feed");

let campoInputNome = document.querySelector("#nome");
let campoInputCognome = document.querySelector("#cognome");
let campoInputCap = document.querySelector("#cap");

function checkNome(){
    if(campoInputNome.value.length < 5){
        campoInputNome.classList.remove("borderGreen");
        campoInputNome.classList.add("borderRed"); 
    }else{
        campoInputNome.classList.remove("borderRed");
        campoInputNome.classList.add("borderGreen");
    }
}

function checkCognome(){
    if(campoInputCognome.value.length < 5){
        campoInputCognome.classList.remove("borderGreen");
        campoInputCognome.classList.add("borderRed"); 
    }else{
        campoInputCognome.classList.remove("borderRed");
        campoInputCognome.classList.add("borderGreen");
    }
}

let regexCAP = /^[0-9]{5}/;

function checkCAP(){
    if(campoInputCap.value.match(regexCAP)){
        campoInputCap.classList.add("borderGreen");
        campoInputCap.classList.remove("borderRed");
    }else{
        campoInputCap.classList.add("borderRed");
        campoInputCap.classList.remove("borderGreen");
    }

}


campoInputNome.addEventListener("input", checkNome);
campoInputCognome.addEventListener("input", checkCognome);
campoInputCap.addEventListener("input",checkCAP);

function validate(){
    let inputs = document.querySelectorAll("#formUser input");
    
    inputs.forEach(input=>{
        if(input.classList.contains("borderRed") || input.classList.length == 0){
            feed.innerHTML = "Stai sbagliando qualcosa, controlla i campi con il bordo rosso";
            event.preventDefault();
            event.stopPropagation();
        }
    })

}

formUser.addEventListener("submit", validate);