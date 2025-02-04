let counter;
let randomWord;
let wordIntoArray = [];
let divElements = []; // Array, das die div-Elemente speichert
let wrongLetters = []; // Array für die falschen Buchstaben

// Funktion, die ein neues Wort auswählt und das Spiel zurücksetzt
function adivinaPalabra() {
  const randomIndex = Math.floor(Math.random() * listado.length);
  randomWord = listado[randomIndex].palabra.toLowerCase();
  wordIntoArray = randomWord.split(""); // Das Wort in ein Array zerlegen

  // Container leeren
  const container = document.getElementById("container");
  container.innerHTML = "";

  // Neue divs für jedes Zeichen im Wort erstellen
  wordIntoArray.forEach((letter, index) => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = "_"; // Standardmäßig "_" anzeigen
    container.appendChild(div);
    divElements.push(div); // Speichere das div im divElements-Array
  });

  // Versuche zurücksetzen
  counter = 8;
  document.getElementById(
    "intentos"
  ).innerHTML = `Intentos restantes: <span>${counter}</span>`;

  // Falsche Buchstaben zurücksetzen
  wrongLetters = [];
  document.querySelector(".letrasErroneas").innerHTML =
    "Letras erroneas: <span></span>";
}

// Überwacht das Input-Feld und vergleicht den eingegebenen Buchstaben
document.getElementById("inputField").addEventListener("input", function () {
  let input = document.getElementById("inputField").value.toLowerCase(); // Umwandeln in Kleinbuchstaben
  if (input.length === 1) {
    // Wenn nur 1 Zeichen eingegeben wurde
    let foundMatch = false; // Flag, das überprüft, ob der Buchstabe im Wort ist

    // Überprüfe, ob der eingegebene Buchstabe im Wort vorhanden ist
    wordIntoArray.forEach((letter, index) => {
      if (letter === input) {
        divElements[index].textContent = input; // Den Buchstaben im entsprechenden div anzeigen
        foundMatch = true;
      }
    });

    // Wenn der Buchstabe nicht im Wort gefunden wurde
    if (!foundMatch) {
      if (!wrongLetters.includes(input)) {
        // Verhindert doppelte falsche Buchstaben
        wrongLetters.push(input);
        document.querySelector(
          ".letrasErroneas"
        ).innerHTML = `Letras erroneas: <span>${wrongLetters.join(
          ", "
        )}</span>`;
        counter--; // Versuche reduzieren
        document.getElementById(
          "intentos"
        ).innerHTML = `Intentos restantes: <span>${counter}</span>`;
      }
    }

    // Überprüfen, ob das Spiel zu Ende ist (alle Buchstaben erraten oder 0 Versuche)
    if (counter === 0) {
      // Zeige eine Fehlernachricht (Beispiel)
      const randomErrorMessage =
        msgError[Math.floor(Math.random() * msgError.length)];
      alert(randomErrorMessage); // Oder benutze ein anderes Display-Element, falls gewünscht
      return; // Verhindert weitere Eingaben, wenn die Versuche aufgebraucht sind
    }

    // Überprüfen, ob alle Buchstaben erraten wurden
    if (!divElements.some((div) => div.textContent === "_")) {
      // Alle Buchstaben sind erraten, Erfolgsmeldung anzeigen
      const randomSuccessMessage = msg[Math.floor(Math.random() * msg.length)];
      alert(randomSuccessMessage); // Oder benutze ein anderes Display-Element, falls gewünscht
    }

    // Zurücksetzen des Input-Feldes für die nächste Eingabe
    document.getElementById("inputField").value = "";
  }
});

// Funktion beim Klicken auf das div mit der Klasse 'content', um das Eingabefeld zu aktivieren
document.querySelector(".content").addEventListener("click", function () {
  document.getElementById("inputField").focus(); // Input-Feld aktivieren
});
