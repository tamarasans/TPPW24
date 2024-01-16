//definisco con NOTAZIONE LETTERALE il mio object

let user = {
    //definisco alcune propieta
    nome : "Dario",
    cognome : "Menillo",
    eta : 34,
    citta : "Torino",
    status : "online",
    accesso : true,
    //definisco un metodo
    doLogin: function(){
        //sto manipulando la mia stessa propieta status
        this.status = "online";
        console.log("il tuo status attuale è : " + this.status);
    },
    doLogout: function(){
        this.status = "offline";
        console.log("il tuo status attuale è: " + this.status);
    
    }
}

//Richiamo delle propietà

let descrizione = "User: " + user.nome + " " + user.cognome + " eta:  " + user.eta + " status: " + user.status;
console.log(descrizione);

user.doLogout();

// user.doLogin();

let admin = {
    nome: "Pippo",
    cognome: "Rossi",
    status: "online",
    computer: {
        nome: "Dell",
        modello: "Vostro 1125",
    software: ["Vsc", "Photoshop", "Eclipse", "Android", "Postman"]
    },
    gesticiUtente(utente){
        return "Sto gestendo l' utente: " + utente;
    }
}

//recupero le propietà di admin e poi lancio il metodo gesticiUtente()
let descrizioneAdmin = `Admin: ${admin.nome} ${admin.cognome} Pc in uso ${admin.computer.nome} ${admin.computer.modello} Software installati: ${admin.computer.software[0]}`;

console.log(descrizioneAdmin);


//avendo un return sul metodo gesticiUtente(utente)vado diretamente a meterlo in console
console.log(admin.gesticiUtente("Anna"));
