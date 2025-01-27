// Array mit den Begriffen
const terms = [
  "Valor màxim que pot tenir un número en JavaScript",
  "Valor mínim que pot tenir un número en JavaScript",
  "Alçada total de la pantalla",
  "Amplada total de la pàgina",
  "Alçada de la pàgina web",
  "Amplada de la pàgina web",
  "URL de la pàgina web",
  "Nom de la pàgina web amb la seva extensió (index.html)",
  "Nom de la pàgina web sense la seva extensió (index)",
  "Un valor aleatori entre 0 i 200 (utilitza Math)",
  "Sistema operatiu de l'ordinador",
];

// Zugriff auf das div-Element, in das wir die Tabelle einfügen
const tableContainer = document.getElementById("tableContainer");

// Erstelle die Tabelle
const table = document.createElement("table");

// Erstelle den Tabellenkopf
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headerCell1 = document.createElement("th");
headerCell1.textContent = "PROPIETAT";
const headerCell2 = document.createElement("th");
headerCell2.textContent = "VALOR OBTINGUT AMB JS";
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
thead.appendChild(headerRow);
table.appendChild(thead);

// Erstelle den Tabellenkörper
const tbody = document.createElement("tbody");

// Schleife durch die Begriffe und füge Zeilen hinzu
terms.forEach((term) => {
  const row = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.textContent = term;
  row.appendChild(cell1);

  const cell2 = document.createElement("td"); // Leere Zelle für den Wert
  row.appendChild(cell2);

  tbody.appendChild(row);
});

table.appendChild(tbody);

// Füge die Tabelle zum div-Container hinzu
tableContainer.appendChild(table);

headerCell2.style.backgroundColor = "lightblue";

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;

function myFunction(item, index) {
  text += index + ": " + item + "<br>";
}
