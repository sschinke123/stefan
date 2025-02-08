let counter;
let palabra = "";
let wordIntoArray = [];
let gameOver = false;

//start
//start
//start

document.getElementById("startGame").addEventListener("click", adivinaPalabra);

function adivinaPalabra() {
  gameOver = false;

  const randomIndex = Math.floor(Math.random() * listado.length);
  palabra = listado[randomIndex].palabra.toLowerCase();
  wordIntoArray = palabra.split("");

  const container = document.getElementById("container");
  container.innerHTML = "";

  wordIntoArray.forEach(() => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = "_";
    container.appendChild(div);
  });

  document.querySelector(".letrasErroneas").innerHTML = "";
  document.querySelector(".mostra").innerHTML = "";

  document.querySelector("#pista span").textContent =
    listado[randomIndex].pista;

  counter = 8;
  document.getElementById(
    "intentos"
  ).innerHTML = `Intentos: <span>${counter}</span>`;
}

// PLAY
// PLAY
// PLAY

document.addEventListener("keydown", function (event) {
  if (gameOver || !/^[a-zA-Z]$/.test(event.key)) return;

  checkLetter(event.key.toLowerCase());
});

// LETTER-CHECK
// LETTER-CHECK
// LETTER-CHECK

function checkLetter(letter) {
  if (gameOver) return;

  const boxes = document.querySelectorAll(".box");
  let found = false;

  wordIntoArray.forEach((char, index) => {
    if (char === letter) {
      boxes[index].textContent = letter;
      found = true;
    }
  });

  if (!found) {
    counter--;
    document.getElementById(
      "intentos"
    ).innerHTML = `Intentos: <span>${counter}</span>`;
    document.querySelector(
      ".letrasErroneas"
    ).innerHTML += `${letter.toUpperCase()} `;
  }

  checkWinOrLose();
}

// WIN or LOSE?
// WIN or LOSE?
// WIN or LOSE?

function checkWinOrLose() {
  const boxes = document.querySelectorAll(".box");

  if ([...boxes].every((box) => box.textContent !== "_")) {
    gameOver = true;
    let message = msg[Math.floor(Math.random() * msg.length)].replace(
      "${palabra.toUpperCase()}",
      palabra.toUpperCase()
    );
    document.querySelector(".mostra").innerHTML = message;
    return;
  }

  if (counter === 0) {
    gameOver = true;
    let message = msgError[Math.floor(Math.random() * msgError.length)].replace(
      "${palabra.toUpperCase()}",
      palabra.toUpperCase()
    );
    document.querySelector(".mostra").innerHTML = message;
    setTimeout(
      () =>
        confirm("Jugar más?")
          ? adivinaPalabra()
          : (window.location.href = "https://www.google.com"),
      500
    );
  }
}

const msg = [
  `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Has ganado, pero en realidad has perdido (tu tiempo)`,
  `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Deja de jugar a esto y echa un Euromillón ... a ver si sales "probre"`,
  `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Deja de jugar a esto y prueba a lamer un ladrillo`,
  `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Este juego no tiene secretos para ti`,
  `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Un gallifante para ti!!`,
  `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Has ganado un chorizo poco chupado`,
];

const msgError = [
  `Has fallado. La palabra correcta era "${palabra.toUpperCase()}". Esto es demasiado para un... como tú`,
  `Has fallado OTRA VEZ!!!. La palabra correcta era "${palabra.toUpperCase()}". Deberías dedicar tu tiempo a otras cosas`,
  `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".. Las adivinanzas no son lo tuyo!!!`,
  `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".... Zumo de Gato`,
  `Has fallado por no leer bien la pista, La palabra correcta era "${palabra.toUpperCase()}".... más fácil no puede ser esto!!!`,
  `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".... y resulta que las cosas no son lo que parecen`,
];
