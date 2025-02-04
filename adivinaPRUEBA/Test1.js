let counter;
let randomWord;
let wordIntoArray = [];
let gameOver = false; // Variable to track the game state

// Function to start a new game when the "Adivinar Palabra" button is clicked
function adivinaPalabra() {
  gameOver = false; // Set the game to active

  // Randomly select a word from the array
  const randomIndex = Math.floor(Math.random() * listado.length);
  randomWord = listado[randomIndex].palabra.toLowerCase();
  wordIntoArray = randomWord.split(""); // Split word into an array of characters

  // Clear previous content
  const container = document.getElementById("container");
  container.innerHTML = "";

  // Create a div for each character in the word
  wordIntoArray.forEach(() => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = "_"; // Display underscores initially
    container.appendChild(div);
  });

  // Reset the wrong letters section
  document.querySelector(".letrasErroneas").innerHTML = "Letras erroneas:";
  document.querySelector(".mostra").innerHTML = "";

  // Get the clue from the array and display it
  const pistaFromArray = listado[randomIndex].pista;
  document.querySelector(
    "#pista"
  ).innerHTML = `Pista: <span>${pistaFromArray}</span>`;

  // Set the counter to 8 attempts
  counter = 8;
  document.getElementById(
    "intentos"
  ).innerHTML = `Intentos restantes: <span>${counter}</span>`;

  // Disable the input field initially
  document.getElementById("inputField").disabled = true;
  document.getElementById("inputField").value = ""; // Reset the input field
}

// Function to activate the input field when the "Activar Entrada" button is clicked
function activateInput() {
  if (gameOver) return; // Do nothing if the game is over

  // Enable the input field for the player to start typing letters
  document.getElementById("inputField").disabled = false;
  document.getElementById("inputField").focus(); // Focus the input field for immediate use
}

// Event listener for the input field
document.getElementById("inputField").addEventListener("input", function () {
  if (gameOver) return; // Do nothing if the game is over

  const letter = document.getElementById("inputField").value.toLowerCase(); // Get the letter entered

  if (/^[a-zA-Z]$/.test(letter)) {
    // Ensure only letters are entered
    checkLetter(letter); // Check if the letter is correct
    document.getElementById("inputField").value = ""; // Clear the input field after each entry
  }
});

// Function to check if the letter is correct
function checkLetter(letter) {
  if (gameOver) return; // Do nothing if the game is over

  const boxes = document.querySelectorAll(".box");
  let found = false;

  // Check if the letter is in the word
  wordIntoArray.forEach((char, index) => {
    if (char === letter) {
      boxes[index].textContent = letter; // Show the letter in the corresponding box
      found = true;
    }
  });

  // If the letter is incorrect, reduce the counter and show it in the wrong letters list
  if (!found) {
    counter--;
    document.getElementById(
      "intentos"
    ).innerHTML = `Intentos restantes: <span>${counter}</span>`;
    document.querySelector(
      ".letrasErroneas"
    ).innerHTML += `${letter.toUpperCase()} `;
  }

  // Check if the player has won or lost
  checkWinOrLose();
}

// Function to check if the player has won or lost
function checkWinOrLose() {
  const boxes = document.querySelectorAll(".box");

  // If all letters are revealed, the player wins
  if (boxes.every((box) => box.textContent !== "_")) {
    gameOver = true; // End the game
    const randomMsg = msg[Math.floor(Math.random() * msg.length)];
    document.getElementById("mostra").textContent = randomMsg; // Display success message

    // Disable the input field
    document.getElementById("inputField").disabled = true;
    return;
  }

  // If the counter reaches 0, the player loses
  if (counter === 0) {
    gameOver = true; // End the game
    const randomMsgError =
      msgError[Math.floor(Math.random() * msgError.length)];
    document.querySelector(".mostra").innerHTML = randomMsgError; // Display error message

    // Disable the input field
    document.getElementById("inputField").disabled = true;
  }
}
