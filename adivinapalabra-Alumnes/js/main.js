
// let counter;

// function adivinaPalabra() {
//   const randomIndex = Math.floor(Math.random() * listado.length);
//   let randomWord = listado[randomIndex].palabra;
//   console.log(randomWord);
//   const wordIntoArray = randomWord.split("");
//   console.log(wordIntoArray);
//   const container = document.getElementById("container");

//   wordIntoArray.forEach((letter) => {
//     const div = document.createElement("div");
//     div.classList.add("box");
//     div.textContent = letter;
//     container.appendChild(div);
//   });

//   const pistaFromArray = listado[randomIndex].pista;
//   console.log(pistaFromArray);
//   const pistaParagraph = document.querySelector("#pista");
//   pistaParagraph.innerHTML = `Pista: <span>${pistaFromArray}</span>`;

//   counter = 8;
//   const intentos = document.getElementById("intentos");
//   intentos.innerHTML = `Intentos restantes: <span>${counter}</span>`;
// }


// document.getElementById("container").addEventListener("click", function() {
//   let input = document.getElementById("hiddenInput");
//   input.style.pointerEvents = "auto"; // Aktiviert die Interaktion
//   input.focus();
// });

let counter;
let randomWord;
let wordIntoArray = [];
let gameOver = false;

function adivinaPalabra() {
    gameOver = false;
    
    const randomIndex = Math.floor(Math.random() * listado.length);
    randomWord = listado[randomIndex].palabra.toLowerCase(); // Wort in Kleinbuchstaben
    console.log(randomWord);

    wordIntoArray = randomWord.split("");
    
    const container = document.getElementById("container");
    container.innerHTML = ""; // Vorherige Inhalte entfernen

    wordIntoArray.forEach(() => {
        const div = document.createElement("div");
        div.classList.add("box");
        div.textContent = "_"; // Platzhalter für noch nicht erratene Buchstaben
        container.appendChild(div);
    });

    document.querySelector(".letrasErroneas").innerHTML = ""; // Fehler zurücksetzen
    document.querySelector(".mostra").innerHTML = ""; // Anzeige zurücksetzen

    const pistaFromArray = listado[randomIndex].pista;
    document.querySelector("#pista").innerHTML = `Pista: <span>${pistaFromArray}</span>`;

    counter = 8;
    document.getElementById("intentos").innerHTML = `Intentos restantes: <span>${counter}</span>`;
}

// 1. Eingabefeld aktivieren und nur Buchstaben akzeptieren
document.addEventListener("keydown", function(event) {
    if (gameOver) return; // Falls das Spiel vorbei ist, keine Eingaben mehr erlauben

    if (/^[a-zA-Z]$/.test(event.key) && event.key.length === 1) {
        let input = document.getElementById("hiddenInput");
        input.style.pointerEvents = "auto";
        input.focus();

        checkLetter(event.key.toLowerCase());
    }
});

// 2. Prüfen, ob der eingegebene Buchstabe im Wort enthalten ist
function checkLetter(letter) {
    if (gameOver) return;

    const boxes = document.querySelectorAll(".box");
    let found = false;

    wordIntoArray.forEach((char, index) => {
        if (char === letter) {
            boxes[index].textContent = letter; // Buchstaben anzeigen
            found = true;
        }
    });

    if (!found) {
        counter--;
        document.getElementById("intentos").innerHTML = `Intentos restantes: <span>${counter}</span>`;
        document.querySelector(".letrasErroneas").innerHTML += `${letter.toUpperCase()} `; // 6. Falsche Buchstaben anzeigen
    }

    checkWinOrLose(); // 7. und 8. Erfolg oder Niederlage prüfen
}

// 7. Prüfen, ob alle Buchstaben erraten wurden
function checkWinOrLose() {
    const boxes = document.querySelectorAll(".box");

    if ([...boxes].every(box => box.textContent !== "_")) {
        gameOver = true;
        const randomMsg = msg[Math.floor(Math.random() * msg.length)]; // Zufällige Erfolgsmeldung
        document.querySelector(".mostra").innerHTML = `<p>${randomMsg}</p>`;
        return;
    }

    // 8. Prüfen, ob der Counter auf 0 ist
    if (counter === 0) {
        gameOver = true;
        const randomMsgError = msgError[Math.floor(Math.random() * msgError.length)]; // Zufällige Fehlernachricht
        document.querySelector(".mostra").innerHTML = `<p>${randomMsgError}</p>`;

        setTimeout(() => {
            const weiter = confirm("Game Over! Möchtest du weiterspielen?");
            if (weiter) {
                adivinaPalabra(); // Neues Spiel starten
            } else {
                window.location.href = "https://www.google.com"; // Google öffnen
            }
        }, 500);
    }
}

