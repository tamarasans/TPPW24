//nome, passato tra () è un parametro

function salutaPersone(nome){
    console.log("Ciao " + nome);
}

salutaPersone("Dario");

let nome = "Paolo";
salutaPersone(nome);

// let nomeUtente = window.prompt ("come ti chiami? ");
// salutaPersone(nomeUtente);

//essempio estremo e stupido
salutaPersone(["anna", "dario", "sam", "luca"]);

function calcolaArea(base, altezza){
    let area = base * altezza;
    console.log("L'area vale: " + area);
}

calcolaArea(2, 9);

//podes nombrar dos veces la misma varaible en dos FUNCIONES DISTINTAS que dentro no se confunden

function calcolaVolume(base, altezza, profondita){
    let volume = base * altezza * profondita;
    console.log("Il volume vale: " + volume) ;
}

calcolaVolume(3,8,4);

