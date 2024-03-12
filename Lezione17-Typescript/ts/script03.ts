//Definisco le prop e i metodi "comuni" a qualsiasi altro oggetto o classe che implementerà l'interfaccia
interface Dipendente{
    nome: string;
    cognome: string;
    matricola: number;

    // calcolaStipendio(): number;
    calcolaStipendio: () => number;
}


//Utilizzando la parola chiave implements ereditò obbligatoriamente prop e metodi dell'interfaccia
class AmministratoreDelegato implements Dipendente{
    nome: string;
    cognome: string;
    matricola: number;
    private passSistema: string;

    constructor(nome: string, cognome: string, matricola: number){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }

    calcolaStipendio(): number{
        let stipendio: number = 1000 * 4;
        return stipendio
    };

    setPassSistema(nuovaPass: string) {
        this.passSistema = nuovaPass
    }
}

class Manager implements Dipendente{
    nome: string;
    cognome: string;
    matricola: number;

    constructor(nome: string, cognome: string, matricola: number){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }

    calcolaStipendio(): number{
        let salario: number = (1000 * 2) + 0.5;
        return salario;
    };
}

let amm1 = new AmministratoreDelegato("Laura", "Gialli", 1);
console.log(amm1.calcolaStipendio());

let man1 = new Manager("Paolo", "Bianchi", 2);
console.log(man1.calcolaStipendio());

