class Impiegato{
    constructor(public nome: string, public cognome: string, private stipendio: number){}

    setStipendio(valore: number, password: string){
        if(password == "abcd"){
            this.stipendio = valore;
        }else{
            return "non hai i permessi per settare lo stipendio"
        }
    }
}

let imp1 = new Impiegato("Anna", "Verdi", 0);

imp1.setStipendio(3500, "abcd");

console.log(imp1);
