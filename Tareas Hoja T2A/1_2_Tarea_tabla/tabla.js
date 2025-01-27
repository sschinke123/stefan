items = `
    <table>
    <thead>
        <tr>
            <th>Propiedad</th>
            <th>Valor obtenido con JS</th>
        </tr>
    </thead>
    <tbody>
        <<tr><td>Valor máximo que puede tener un número en JavaScript</td><td>Number.MAX_VALUE</td></tr>
        <tr><td>Valor mínimo que puede tener un número en JavaScript</td><td>Number.MIN_VALUE</td></tr>
        <tr><td>Altura total de la pantalla</td><td>window.screen.height</td></tr>
        <tr><td>Anchura total de la pantalla</td><td>window.screen.width</td></tr>
        <tr><td>Altura de la página web</td><td>document.documentElement.scrollHeight</td></tr>
        <tr><td>Anchura de la página web</td><td>document.documentElement.scrollWidth</td></tr>
        <tr><td>URL de la página web</td><td>window.location.href</td></tr>
        <tr><td>Nombre de la página web con su extensión (index.html)</td><td>window.location.pathname</td></tr>
        <tr><td>Nombre de la página web sin su extensión (index)</td><td>window.location.pathname.split('.')[0]</td></tr>
        <tr><td>Un valor aleatorio entre 0 y 200 (utiliza Math)</td><td>Math.floor(Math.random() * 201)</td></tr>
        <tr><td>Sistema operativo del ordenador</td><td>navigator.platform</td></tr>
    </tbody>
`;

let tabla = document.querySelector("#tabla");
tabla.innerHTML = items;

let isValid = false;

while (!isValid) {
  let input = prompt(
    "Please enter two values separated by a comma (title, bar):"
  );

  if (input) {
    let values = input.split(",");

    if (values.length === 2) {
      let title = values[0].trim();
      let bar = values[1].trim();

      if (title.length >= 3 && title.length <= 20) {
        if (bar === "yes" || bar === "no") {
          // Random width and height
          let width = Math.floor(Math.random() * (400 - 50 + 1)) + 50;
          let height = Math.floor(Math.random() * (400 - 50 + 1)) + 50;

          let scrollbars = bar === "yes" ? "yes" : "no";

          let params = `?title=${encodeURIComponent(title)}`;

          window.open(
            "../5_finestra/finestra.html" + params,
            title,
            `width=${width},height=${height},scrollbars=${scrollbars}`
          );
        } else {
          alert('The value of "bar" must be "yes" or "no". Please try again.');
        }
      } else {
        alert(
          'The "title" must be between 3 and 20 characters long. Please try again.'
        );
      }
    } else {
      alert("Please enter exactly two values separated by a comma.");
    }
  } else {
    alert("You did not enter any values. Please try again.");
  }
}
