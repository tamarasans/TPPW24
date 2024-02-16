//salvo qualcosa nella local Storage

// let nomeUser = "Dario";
// localStorage.setItem("user", nomeUser);

// let statusConn = "online";
// localStorage.setItem("status", statusConn);

// let token = "DarioOnlineDoc24";
// localStorage.setItem("token", token);

let formLogin = document.querySelector("#formLogin");
let formLogout = document.querySelector("#formLogout");

let btnLogin = document.querySelector("#btnLogin");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btnLogout = document.querySelector("#btnLogout");

// idea: salvare i campi input in localStorage
function login(){
    if(username.value != "" && password.value != ""){
        localStorage.setItem("nomeUser", username.value);
        localStorage.setItem("passUser", password.value);
    }

    checkUser();
}

btnLogin.addEventListener("click", login);

function logout(){
    localStorage.clear();
    checkUser()
}

btnLogout.addEventListener("click", logout)

let feed = document.querySelector("#feed");

function checkUser(){
    if(localStorage.length != 0){
        formLogin.classList.replace("show",  "hide");
        formLogout.classList.replace("hide", "show");
        feed.innerHTML = "<h2>Bentornato " + localStorage.getItem("nomeUser") + "</h2>";
    }else{
        feed.innerHTML = "<p>Nessun utente connesso</p>";
        formLogin.classList.replace("hide", "show");
        formLogout.classList.replace("show", "hide");
    }
}

checkUser();