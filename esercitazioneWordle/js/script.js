let parolaDelGiorno = "AMICO";

let grid = document.querySelector("#griglia");
let word = document.querySelector("#word");
let btnIns = document.querySelector("#btnIns");
let feed = document.querySelector("#feed");
let frasi = 0;

function controllaParola() {
  let wordArr = word.value.toUpperCase().split("");
  let parolaDelGiornoArr = parolaDelGiorno.split("");

  if (wordArr.length == 5) {
    feed.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute("class", "rowparola");

    wordArr.forEach((lettera, index) => {
      let boxlett = document.createElement("div");
      boxlett.setAttribute(
        "class", "boxlett animate__animated animate__flipInY"
      );
      boxlett.textContent = lettera;

      if (parolaDelGiornoArr[index] == lettera) {
        boxlett.classList.add("bgGreen");
      } else if (parolaDelGiornoArr.includes(lettera)) {
        boxlett.classList.add("bgYellow");
      }

      row.appendChild(boxlett);
    });

    grid.appendChild(row);
    
    frasi++;
    checkWinner(word.value.toUpperCase(), parolaDelGiorno, frasi);
    word.value = "";


  } else {
    feed.innerHTML = "Mancano delle lettere";
    word.focus();
  }
}

function checkWinner(word, parolaDelGiorno, frasi) {
  console.log(word, parolaDelGiorno);
  if (frasi < 6) {
    if (word == parolaDelGiorno) {
      feed.innerHTML = "BRAVO, HAI VINTO";
      document.querySelector("#word").setAttribute("disabled", true);
      btnIns.setAttribute("disabled", true);
    } else {
      console.log("Continua a giocare");
    }
  } else {
    feed.innerHTML = "MI SPIACE, HAI PERSO";
    document.querySelector("#word").setAttribute("disabled", true);
    btnIns.setAttribute("disabled", true);
  }
}

btnIns.addEventListener("click", controllaParola);
