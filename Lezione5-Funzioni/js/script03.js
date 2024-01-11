//nome, passato tra () è un parametro
function salutaPersona(nome){
    console.log("Ciao " + nome);
}

salutaPersona("Dario");

let nome = "Paolo";
salutaPersona(nome);


// let nomeUtente = window.prompt("come ti chiami ?");
// salutaPersona(nomeUtente);

//esempio estremo e stupido
salutaPersona(["Anna", "Dario", "Sam", "Luca"]);

function calcolaArea(base, altezza){
    let area = base * altezza;
    console.log("L'area vale: " + area);
}

calcolaArea(2, 9);

function calcolaVolume(base, altezza, profondita){
    let volume =base * altezza * profondita;

    console.log("Il volume vale: " + volume);
}

calcolaVolume(3,8,4);
calcolaVolume(2,9,4)
