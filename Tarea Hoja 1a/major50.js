let counter = 0;
let number1;

do {
  number1 = Number(prompt("Please enter a number:"));
  counter++;
} while (number1 < 50);

alert("Final value: " + counter);

// isNaN(num2) || num2 == "")?contador = contador: contador++;

// same like:

// if (isNaN(num2) || num2 == "") {
//   contador = contador;
// } else {
//   contador++;
// }

// same like

// if (isNaN(num2) || num2 == "") contador = contador; contador++;
