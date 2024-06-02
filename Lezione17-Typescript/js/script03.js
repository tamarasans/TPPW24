//Utilizzando la parola chiave implements ereditò obbligatoriamente prop e metodi dell'interfaccia
var AmministratoreDelegato = /** @class */ (function () {
    function AmministratoreDelegato(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    AmministratoreDelegato.prototype.calcolaStipendio = function () {
        var stipendio = 1000 * 4;
        return stipendio;
    };
    ;
    return AmministratoreDelegato;
}());
var Manager = /** @class */ (function () {
    function Manager(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    Manager.prototype.calcolaStipendio = function () {
        var salario = (1000 * 2) + 0.5;
        return salario;
    };
    ;
    return Manager;
}());
var amm1 = new AmministratoreDelegato("Laura", "Gialli", 1);
console.log(amm1.calcolaStipendio());
var man1 = new Manager("Paolo", "Bianchi", 2);
console.log(man1.calcolaStipendio());
