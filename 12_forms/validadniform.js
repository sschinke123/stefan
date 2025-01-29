const m1 = document.querySelector("#mostra1");
const m2 = document.querySelector("#mostra2");
const error = document.querySelector("#error");

const formu = document.firstContact;
const pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;

formu.addEventListener("submit", (e) => {
  const mydni = c_dni();
  const myedad = edad();

  if (!mydni || !myedad) {
    e.preventDefault();
    error.innerHTML = "Error .. dsfadsojaeo";
    error.style.color = "#FF0000";
    return false;
  } else {
    formu.submit();
    return true;
  }
});

const c_dni = () => {
  let rdni = formu.dni.value;
  rdni = rdni.toUpperCase();
  let numero, let1;
  let resul = rdni.match(pdni);
  let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (resul) {
    numero = rdni.substr(0, rdni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    unaLetra = rdni.substr(rdni.length - 1, 1);
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);

    if (letra !== unaLetra) return false;
    return true;
  }
};

const edad = () => {
  let fechaNacimiento = formu.miedad.value;
  let fechaNace = new Date(fechaNacimiento);
  console.log(fechaNace);
  let fechaActual = new Date();

  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let año = fechaActual.getFullYear();

  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);

  let mi_edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );
  if (mi_edad >= 18 && mi_edad <= 100) {
    return true;
  } else false;
};

const pasaValor = (event) => {
  let result;
  switch (event.target.name) {
    case "miedad":
      result = edad();
      if (result) {
        m1.innerHTML = "Tienes mas de 18 años";
        miedad.style.border = "solid 1px green";
        error.innerHTML = "";
      } else {
        m1.innerHTML =
          "No puedes registrarte porque tienes menos de 18 años o mas de 100 años";
        miedad.style.border = "solid 1px red";
      }
      break;
    case "dni":
      result = c_dni();
      if (result) {
        m2.innerHTML = "DNI valido";
        dni.style.border = "solid 1px green";
        error.innerHTML = "";
      } else {
        m2.innerHTML = "DNI o NIE no valido";
        dni.style.border = "solid 1px red";
      }
      break;
  }
};
const listeners = [formu.dni, formu.miedad];
for (const listener of listeners) listener.addEventListener("keyup", pasaValor);
