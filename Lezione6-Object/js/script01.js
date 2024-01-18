//Definisco con NOTAZIONE LETTERALE il mio object

let user = {
    //definisco alcune prop
    nome: "Dario",
    cognome: "Mennillo",
    eta : 34,
    citta: "Torino",
    status: "online",
    accesso: true,

    //definisco un metodo
    doLogin: function(){
        //sto manipolando la mia stessa prop status
        this.status = "online";
        console.log("Il tuo status attuale è: " + this.status);
    },

    doLogout: function() {
        this.status = "offline";
        console.log("Il tuo status attuale è: " + this.status);
    }

}

user.doLogout();
// user.doLogin();

//Richiamo delle proprietà
let descrizione = "User: " + user.nome + " " + user.cognome + " status: " + user.status;
console.log(descrizione);


let admin = {
    nome: "Pippo",
    cognome: "Rossi",
    status: "online",

    computer: {
        nome: "Dell",
        modello: "Vostro 1125",
        softwares: ["Vsc", "Photoshop", "Eclipse", "Android", "Postman"]
    },

    gestisciUtente(utente){
        return "Sto gestendo l'utente: " + utente;
    }
}


//recupero le prop di admin e poi lancio il metodo gestisciUtente()
// let softwareUtilizzati = "";

// admin.computer.softwares.forEach(software =>{
//     softwareUtilizzati += software +  " - ";
// })

let descrizioneAdmin = `Admin: ${admin.nome} ${admin.cognome}. Pc in uso ${admin.computer.nome} ${admin.computer.modello}. Software installati: ${admin.computer.softwares[2]}`;

console.log(descrizioneAdmin);

//avendo un return sul metodo gestisciUtente(utente) vado direttamente a metterlo in console
console.log(admin.gestisciUtente("Anna"));
console.log(admin.gestisciUtente(user));
