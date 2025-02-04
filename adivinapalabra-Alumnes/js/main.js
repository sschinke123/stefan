let counter;
let randomWord;
let wordIntoArray = [];

//function - button "adivina palabra"

function adivinaPalabra() {
  //select a random Word from the arrays

  const randomIndex = Math.floor(Math.random() * listado.length);
  randomWord = listado[randomIndex].palabra.toLowerCase();
  console.log(randomWord);

  //split the word into an array

  wordIntoArray = randomWord.split("");

  //delete the previous content

  const container = document.getElementById("container");
  container.innerHTML = "";

  //one div of the class box for each letter

  wordIntoArray.forEach((letter) => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = letter;
    container.appendChild(div);
  });

  //Rest of the wrong letters and the mostra div

  document.querySelector(".letrasErroneas").innerHTML = "Letras erroneas:";
  document.querySelector(".mostra").innerHTML = "";

  //Select the PISTA related to the word

  const pistaFromArray = listado[randomIndex].pista;
  document.querySelector(
    "#pista"
  ).innerHTML = `Pista: <span>${pistaFromArray}</span>`;

  // change the COUNTER to 8
  counter = 8;
  document.getElementById(
    "intentos"
  ).innerHTML = `Intentos restantes: <span>${counter}</span>`;
}

// document.addEventListener("keydown", function (event) {
//   if (gameOver) return;

//   //Input just a letter?

//   if (/^[a-zA-Z]$/.test(event.key) && event.key.length === 1) {
//     let input = document.getElementById("inputField");
//     input.style.pointerEvents = "auto";
//     input.focus();

//     checkLetter(event.key.toLowerCase());
//   }
// });

// // 2. Check if the letter is included

// function checkLetter(letter) {
//   if (gameOver) return;

//   const boxes = document.querySelectorAll(".box");
//   let found = false;

//   // show the letter

//   wordIntoArray.forEach((char, index) => {
//     if (char === letter) {
//       boxes[index].textContent = letter;
//       found = true;
//     }
//   });

//   // NOT FOUND

//   if (!found) {
//     counter--;
//     document.getElementById(
//       "intentos"
//     ).innerHTML = `Intentos restantes: <span>${counter}</span>`;
//     document.querySelector(
//       ".letrasErroneas"
//     ).innerHTML += `${letter.toUpperCase()} `;
//   }

//   checkWinOrLose();
// }

// // Did I win???

// function checkWinOrLose() {
//   const boxes = document.querySelectorAll(".box");
//   palabra = randomWord;

//   // If every letters was guessed, show me a winning message from the array msg

//   if (boxes.every((box) => box.textContent !== "_")) {
//     gameOver = true;
//     const randomMsg = msg[Math.floor(Math.random() * msg.length)];
//     document.getElementById("mostra").textContent = randomMsg;
//     return;
//   }

//   // if the counter reached 0, show a losing message from the array msgError

//   if (counter === 0) {
//     gameOver = true;
//     const randomMsgError =
//       msgError[Math.floor(Math.random() * msgError.length)];
//     document.getElementById("mostra").innerHTML = randomMsgError;

//     // oeffne ein confirmfenster, dass einen bittet von vorne zu starten oder abzubrechen(man wird dann zu google verlinkt)

//     setTimeout(() => {
//       const weiter = confirm("Game Over! Möchtest du weiterspielen?");
//       if (weiter) {
//         adivinaPalabra(); // Neues Spiel starten
//       } else {
//         window.location.href = "https://www.google.com"; // Google öffnen
//       }
//     }, 500);
//   }
// }
