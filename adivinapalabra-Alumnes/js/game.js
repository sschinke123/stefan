let counter;
let randomWord;
let wordIntoArray = [];
let gameOver = false;

//start 
//start 
//start 

document.getElementById("startGame").addEventListener("click", adivinaPalabra);

function adivinaPalabra() {
    gameOver = false;
    
    const randomIndex = Math.floor(Math.random() * listado.length);
    randomWord = listado[randomIndex].palabra.toLowerCase();
    wordIntoArray = randomWord.split("");

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

    document.querySelector("#pista span").textContent = listado[randomIndex].pista;

    counter = 8;
    document.getElementById("intentos").innerHTML = `Intentos: <span>${counter}</span>`;
}


// PLAY
// PLAY
// PLAY

document.addEventListener("keydown", function(event) {
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
        document.getElementById("intentos").innerHTML = `Intentos: <span>${counter}</span>`;
        document.querySelector(".letrasErroneas").innerHTML += `${letter.toUpperCase()} `;
    }

    checkWinOrLose();
}

// WIN or LOSE?
// WIN or LOSE?
// WIN or LOSE?

function checkWinOrLose() {
    const boxes = document.querySelectorAll(".box");

    if ([...boxes].every(box => box.textContent !== "_")) {
        gameOver = true;
        let message = msg[Math.floor(Math.random() * msg.length)].replace("${palabra.toUpperCase()}", randomWord.toUpperCase());
        document.querySelector(".mostra").innerHTML = message;
        return;
    }

    if (counter === 0) {
        gameOver = true;
        let message = msgError[Math.floor(Math.random() * msgError.length)].replace("${palabra.toUpperCase()}", randomWord.toUpperCase());
        document.querySelector(".mostra").innerHTML = message;
        setTimeout(() => confirm("Jugar más?") ? adivinaPalabra() : window.location.href = "https://www.google.com", 500);
    }
}