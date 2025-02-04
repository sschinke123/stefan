// Wir sollen ein Ratespiel mit Javascript erstellen. dafuer haben wir die folgende HTML struktur erhalten.
// das spiel beginnt, wenn
//
// Wir haben einen div und in diesem div befinden sich verschieden elemente
// eine funktion oder befehl, der ausgeloest wird, wenn man auf einen div der class "content" klickt.

// Befehl, der das versteckte Inputfeld aktiviert, wenn man einen Buchstaben eingibt egal ob groß oder klein. Andere Eingaben werden nicht akzptiert und auch nicht mehrere Zeichen es, darf immer nur ein Buchstabe sein.
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

// // ich moechte, dass nachdem dieser code ausgefuehrt wurde. es moeglich ist einen buchstaben ueber ein verstecktes input feld einzugeben und zu schauen, ob dieser mit einem der buchstaben in den durch die vorherige funktion erstellten divs der class "box" uebereinstimmt. sollte das der fall sein, sollte dieser im div sichtbar werden. sollte er nicht uebereinstimmen, sollte mir dieser buchstabe im p der class letrasErroneas angezeigt werden und der counter sollte sich um eins reduzieren. sollten alle buchstaben erraten sein bzw sichtbar, sollte eine beliebige erfolgsmeldung aus diesem array erscheinen: const msg = [
//   `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Has ganado, pero en realidad has perdido (tu tiempo)`,
//   `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Deja de jugar a esto y echa un Euromillón ... a ver si sales "probre"`,
//   `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Deja de jugar a esto y prueba a lamer un ladrillo`,
//   `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Este juego no tiene secretos para ti`,
//   `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Un gallifante para ti!!`,
//   `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Has ganado un chorizo poco chupado`,
// ];

//im falle, dass man aber 8 mal einen falschen buchstaben geraten hat bzw der counter bei 0 ist, sollte eine meldung aus diesem array erscheinen: const msgError = [
//   `Has fallado. La palabra correcta era "${palabra.toUpperCase()}". Esto es demasiado para un... como tú`,
//   `Has fallado OTRA VEZ!!!. La palabra correcta era "${palabra.toUpperCase()}". Deberías dedicar tu tiempo a otras cosas`,
//   `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".. Las adivinanzas no son lo tuyo!!!`,
//   `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".... Zumo de Gato`,
//   `Has fallado por no leer bien la pista, La palabra correcta era "${palabra.toUpperCase()}".... más fácil no puede ser esto!!!`,
//   `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".... y resulta que las cosas no son lo que parecen`,
// ];
// in beiden faellen sollte man gezwungen sein, wieder auf den button adivinar palabra zu klicken um mit einem neuen Wort fortzufahren.
