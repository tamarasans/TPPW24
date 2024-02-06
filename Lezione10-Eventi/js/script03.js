let formReg = document.querySelector("#formReg");

let feed = document.querySelector("#feed");
let demo = document.querySelector("#demo");


// function controllaDati(event){
//     let username = document.querySelector("#username").value;
//     let password = document.querySelector("#password").value;

//     if(username == "" || username.length < 8 || password == "" || password.length < 8){
//         feed.innerHTML = "Mi spiace, c'è qualcosa che non va !!";
//         // preventDefault blocca la chiamata http
//         event.preventDefault();
//         event.stopPropagation();
//     }else{
//        demo.innerHTML = "Utente autorizzato";
//     }
// }

// formReg.addEventListener("submit", function(event){
//     controllaDati(event);
// })


formReg.addEventListener(event =>{
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
        if(username == "" || username.length < 8 || password == "" || password.length < 8){
            feed.innerHTML = "Mi spiace, c'è qualcosa che non va !!";
            // preventDefault blocca la chiamata http
            event.preventDefault();
            event.stopPropagation();
        }else{
           demo.innerHTML = "Utente autorizzato";
        }
})