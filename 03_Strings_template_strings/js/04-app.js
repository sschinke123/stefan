// Métodos para strings
const producto = "        Monitor 20 Pulgadas      ";

console.log(producto);
console.log(producto.length);

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio
console.log(producto.trimEnd()); // Elimina todos los espacios en blancos del final

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd()); // Cortar en ambas direcciones

// Método trim que hace lo mismo
console.log(producto.trim().length);
