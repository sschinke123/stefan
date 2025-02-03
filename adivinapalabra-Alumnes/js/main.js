// Funktion, die ausgeloest wird, wenn man auf den Button "Adivinar Palabra" klickt
// 1. Befehl der ein palabra aus einem beliebigen Objekt aus dem Array const listado auswaehlt und zerlegt in Buchstaben und jeweils einem div zuordnet ohne die Buchstaben anzuzeigen.
// // 2. Befehl der Pista aus dem selben array holt wie das beliebige palabra und dem p(pista) zuordnet
// 3. Befehl, der den Counter auf 8 Versuche stellt.

let counter;

function adivinaPalabra() {
  const randomIndex = Math.floor(Math.random() * listado.length);
  let randomWord = listado[randomIndex].palabra;
  console.log(randomWord);
  const wordIntoArray = randomWord.split("");
  console.log(wordIntoArray);
  const container = document.getElementById("container");

  wordIntoArray.forEach((letter) => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = letter;
    container.appendChild(div);
  });

  const pistaFromArray = listado[randomIndex].pista;
  console.log(pistaFromArray);
  const pistaParagraph = document.querySelector("#pista");
  pistaParagraph.innerHTML = `Pista: <span>${pistaFromArray}</span>`;

  counter = 8;
  const intentos = document.getElementById("intentos");
  intentos.innerHTML = `Intentos restantes: <span>${counter}</span>`;
}

// function adivinaLetra(event) {
// Funktion, die ausgeloest wird, wenn man einen Buchstaben eingibt.
//1. Befehl, der kontrolliert, ob es sich nur um ein einziges Zeichen handelt. Im Falle von mehr Zeichen wird, der Input auf das erste Zeichen reduziert.
//2. Befehl der kontrolliert, ob es sich bei dem verblieben Zeichen um ein Buchstaben handelt oder ein anderes Symbol. Im Falle einer Zahl, sollte das Input feld sich sofort wieder leeren und eine Warnung kommen, dass nur Buchstaben zulaessig sind.
//3. Befehl, der im falle, dass der User nur einen Buchstaben eingegeben hat, diesen abspeichert.
//4. Befehl, der den abgespeicherten Buchstaben mit den Buchstaben aus den divs abgleicht und gleichzeitig den Counter um eins reduziert.
//5. Befehl, der im Falle das die Buchstaben uebereinstimmen, den Buchstaben in seinem Div anzeigt.
//6. Befehl, der im Falle, dass der eingebene Buchstabe mit keinem uebereinstimmt aus den divs, diesen anzeigt unter dem p (class=letrasErroneas).
//7. Befehl, der schaut, ob alle divs einen Buchstaben anzeigen, sprich alle Buchstaben erraten wurden und in diesem Fall im div (class=mostra) eine beliebige Nachricht aus dem array const msg aus der mensajes.js datei auswaehlt und keine weiteren Eingaben mehr zulaesst, und den User auffordert wieder auf den Button "Adivinar palabra" zu druecken.
//8. Befehl, der schaut, ob der Counter bereits bei 0 ist. Im Falle, dass der Counter bei 0 ist, soll im div (class=mostra) eine beliebige Nachricht aus dem array const msgError aus der mensajes.js Datei erscheinen und keine weitere eingabe mehr moeglich sein und ein pop up fenster erscheinen, dass fragt, ob man weiterspielen moechte. Bei ja loest man die adivina palabra funktion aus und bei nein oeffnet sich die startseite von google.

//   const inputText = event.target.value;
//   const feedback = document.getElementById("feedback");

//   const inputField = document.getElementById("userInput");
//   inputField.addEventListener("input", handleInput);
// }
