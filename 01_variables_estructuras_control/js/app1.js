// var (global -todo la aplicacion, redeclarar y reasign, siempre ocupan memoria)

var nombre = "Contenido";
var nombre = "Contenido2";
nombre = "contenido3"; //reasign

let monitor = "Pantalla Ordenador 21 Pulgadas"; // ambito es de bloque. bloque el juego de { } al qu epertenece/ se puede reasign, pero no redeclarar. una vez usada su memoria se libera.

//podemos cambiar el tipo de dato
monitor = 20;
console.log(monitor);
monitor = true;
console.log(monitor);
monitor = null;
console.log(monitor);

//JavaScript es Leng. Dinamico. no se especifica tipos de datos cuando se crea la variable. permite por ejemplo  no acabar las sentencias con "; "

let precio = 200;
console.log(precio);

//tambien se puede inciializar una variable sin valor y asignarlo despues:

let disponible;
console.log(disponible);
disponible = true;
console.log(disponible);

//Inicializar multiples variables
let tipo;
let fabriacante;
let valoracion = 5;

console.log(tipo);
console.log(fabriacante);
console.log(valoracion);

//Reglas de las variables:
// Pueden tener: letras, numeros, _ no pueden iniciar con numero

let = dia99;

// Camel Case (camelCase): 
// Primera palabra en minúsculas, las siguientes en mayúsculas. 
// Se utiliza para variables y funciones.
let totalAmount = 500;
function calculateTotal() {
  return totalAmount * 1.2; // ejemplo de función en camelCase
}

// Pascal Case (PascalCase): 
// Similar a camelCase, pero la primera palabra también comienza con mayúscula. 
// Usado para clases y constructores.
class UserProfile {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let myProfile = new UserProfile('John Doe', 30);

// Snake Case (snake_case): 
// Palabras separadas por guiones bajos y todas en minúsculas.
// Aunque no es común en JavaScript, se usa en otros lenguajes o en nombres de archivos.
let total_amount = 500;

// Kebab Case (kebab-case): 
// Palabras separadas por guiones. No es válido en JavaScript para variables,
// pero se utiliza en URLs y nombres de archivos.
let total-amount = 500;  // **No válido en JavaScript**

const url = 'http://example-site.com/my-page';

// Upper Case (UPPER_CASE): 
// Todas las letras en mayúsculas, con guiones bajos separando las palabras.
// Se utiliza para constantes.
const MAX_VALUE = 1000;

// Dot Notation: 
// Notación para acceder a propiedades de un objeto.
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};
console.log(person.firstName); // Accediendo a la propiedad 'firstName' del objeto person
