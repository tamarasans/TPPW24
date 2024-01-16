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
        let descrizione = `${this.marca} ${this.modello} ${this.cilindrata} ${this.colore} ${this.stripLed} ${this.trasmissione}`;
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

        let velAttuale = this.calcolaVelocita(3500, 6);
        console.log("La tuà velocitta attuale è: " + velAttuale);
        return "L'auto è accesa: " + this.accesa + " " + "La tua velocità attuale è: " + velAttuale + "km/h";
    
    }

}
//voglio discrivere la mia auto quindi  usando il metodo descriviAuto() oterro una stringa in uscita
console.log(automobile.descriviAuto());

//Richiamo il metodo guidaAuto il quale di per se si scrive in console
automobile.guidaAuto();


let demo = document.getElementById("demo");

function guidaAuto(){
    demo.innerHTML = automobile.descriviAuto() + "<br>" + automobile.guidaAuto();
}