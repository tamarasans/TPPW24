let automobile = {
    marca: "Audi",
    modello: "RS6",
    cilindrata: "2600 TDI",
    colore: "nero opaco",
    stripLed: true,
    trasmissione: "automatica",

    marciaAttuale: 0,
    accesa: false,
    numGiri: 0,
    velocita: 0,

    descriviAuto(){
        let descrizione = `${this.marca} ${this.modello} - Cilindrata: ${this.cilindrata} - Colore: ${this.colore} - Strip Led: ${this.stripLed} - Trasmissione: ${this.trasmissione}`;
        return descrizione;
    },

    calcolaVelocita(numGiri, marciaAttuale){
        this.numGiri = numGiri;
        this.marciaAttuale = marciaAttuale;
        
        let velocita = this.numGiri * this.marciaAttuale / 100;

        return velocita;
    },


    guidaAuto(){
        this.accesa = true;
        console.log("L'auto è accesa: " + this.accesa);

        let velAtttuale = this.calcolaVelocita(3500, 6);
        console.log("La tua velocità attuale è : " + velAtttuale + " km/h");

        return "L'auto è accesa: " + this.accesa + " La tua velocità attuale è : " + velAtttuale + " km/h";
    }
}

//voglio descrivere la mia auto quindi usando il metodo descriviAuto() otterrò una stringa in uscita
console.log(automobile.descriviAuto());

//richiamo il metodo guidaAuto il quale di per se scrive in console
automobile.guidaAuto();


let demo = document.getElementById("demo");

function guidaAuto(){
    demo.innerHTML = automobile.descriviAuto() + "<br>" + automobile.guidaAuto();
}
