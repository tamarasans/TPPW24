
class Pagamento {
    constructor(persona, email, tel, metodoPagamento, numBiglietti) {
        this.persona = persona;
        this.email = email;
        this.tel = tel;
        this.metodoPagamento = metodoPagamento;
        this.numBiglietti = numBiglietti;
    }
}

function paga() {
    let nomeUser = document.querySelector("#nomeUser").value;
    let emailUser = document.querySelector("#emailUser").value;
    let telUser = document.querySelector("#telUser").value;
    let numBiglietti = document.querySelector("#numBiglietti").value;
    let cCUser = document.querySelector("#cCUser").value;

    // if(){
    // Controlli sui singoli campi
    // }

    let pagamento = new Pagamento(nomeUser, emailUser, telUser, cCUser, numBiglietti)

    fetch("http://localhost:3000/bigliettiAcquistati", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pagamento)
    }).then(data => {
        return data.json();

    }).finally(() => {

        localStorage.clear();
        window.location.href = "./index.html"
        alert("Pagamento andato a buon fine");
    })
}


let btnPaga = document.querySelector("#btnPaga");

btnPaga.addEventListener("click", paga);



let citta = "Melizzano";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=b542efe3dcddbd27283ebf045c4e1ca6`)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);
    })