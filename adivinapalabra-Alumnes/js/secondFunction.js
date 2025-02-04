document.querySelector(".content").addEventListener("click", function () {
  // Aktiviert das Input-Feld, wenn auf den div mit der Klasse 'content' geklickt wird
  document.getElementById("inputField").focus(); // Optional: Fokus auf das Input-Feld setzen
});

document.getElementById("inputField").addEventListener("input", function () {
  // Hole den aktuellen Wert aus dem Input-Feld
  let input = document.getElementById("inputField").value;

  // Wandle die Eingabe in Kleinbuchstaben um
  input = input.toLowerCase();

  // Setze den Wert des Input-Feldes auf den umgewandelten Wert (nur ein Buchstabe)
  document.getElementById("inputField").value = input;
});
