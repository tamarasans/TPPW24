let formLogin = document.querySelector("#formLogin");

function login(){

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if(username != "" && password != ""){
        localStorage.setItem("userConnesso", username);
    }else{
        
        event.preventDefault();
        event.stopImmediatePropagation();
    }

}

formLogin.addEventListener("submit", login);