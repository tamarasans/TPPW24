export class Utente{
    nome: string;
    cognome: string;
    email: string;
    //il | sta per oppure, quindi la prop status può assumere 2 tipi diversi
    status: string | boolean;


    constructor(nome: string, cognome: string, email: string, status: string | boolean){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.status = status;
    }
}