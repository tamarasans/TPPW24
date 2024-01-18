let elenco = [
    {
        nome: "Anna",
        cognome: "Bianchi",
        presenza: true,

        setPresenza(){
            this.presenza = !this.presenza;
        }
    },
    {
        nome: "Pippo",
        cognome: "Rossi",
        presenza: false,

        setPresenza(){
            this.presenza = !this.presenza;
        }
    },
    {
        nome: "Laura",
        cognome: "Verdi",
        presenza: true,

        setPresenza(){
            this.presenza = !this.presenza;
        }
    },
];

function cambiaPresenza(indice){
    elenco[indice].setPresenza();
    console.log(elenco[indice].presenza);
    stampaStudenti();
}

let listaStudenti = document.getElementById("listaStudenti");

function stampaStudenti(){
    listaStudenti.innerHTML = "";
    for(let i = 0; i < elenco.length; i++){
        listaStudenti.innerHTML += `<li> 
        ${elenco[i].nome} ${elenco[i].cognome} - presente: ${elenco[i].presenza} 
        <button onclick='cambiaPresenza(${i})'>Cambia</button>
        </li>` ;
    }
}

stampaStudenti();