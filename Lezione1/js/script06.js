let libri = [
    "Guida Galattica per autostoppisti", 
    "Il signore degli anelli", 
    "Harry Potter", 
    "La città invincibile", 
    "I fiori Blu", 
    "Il visconte dimezzato",
    "Rumore Bianco",
    "Underworld"
];

let elListaLibri = document.getElementById("elListaLibri");

// elListaLibri.innerHTML += libri[0] + "<br>"; 
// elListaLibri.innerHTML += libri[1] + "<br>"; 
// elListaLibri.innerHTML += libri[2] + "<br>"; 
// elListaLibri.innerHTML += libri[3] + "<br>"; 
// elListaLibri.innerHTML += libri[4] + "<br>"; 
// elListaLibri.innerHTML += libri[5] + "<br>"; 

for(let i = 0; i < libri.length; i++){
    elListaLibri.innerHTML += libri[i] + "<br>";
}

// libri.forEach(libro =>{
//     elListaLibri.innerHTML += libro + "<br>";
// })