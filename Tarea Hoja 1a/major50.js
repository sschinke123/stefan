let counter = 0;
let number1;

do {
  number1 = Number(prompt("Please enter a number:"));
  counter++;
} while (number1 < 50);

alert("Final value: " + counter);
