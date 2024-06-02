class Amministratore {

    nome: string;
    cognome: string;
    eta: number;
    private accessi: string[];

    //constructor è il metodo costruttore. Questo metodo viene chiamato nel momento in cui istanzio (faccio new Amministratore) un oggetto di questo tipo
    constructor(nome: string, cognome: string, eta: number) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta
    }

    presenta(): string{
        return `Sono: ${this.nome} ${this.cognome}`;
    }

    setAccessi(accessi: string[]): void{
        this.accessi = accessi;
    }

    getAccessi(password: string){
        if(password == "12345"){
            return this.accessi;
        }else{
            return "Non puoi accedere"
        }
    }
}

let admin = new Amministratore("Jacopo", "Bianchi", 34);
 
console.log(admin.nome);
console.log(admin.presenta());
admin.setAccessi(["Aula4", "Aula5", "Aula8"]);
console.log(`I miei accessi sono: ${admin.getAccessi("12345")}`);
