const validateInput = () => {
  const nombre = document.getElementById("inputNombre");
  const telefono = document.getElementById("inputTelef");
  const dia = document.getElementById("inputDia");
  const mes = document.getElementById("inputMes");
  const ano = document.getElementById("inputAno");
  const email = document.getElementById("inputEmail");
  const dni = document.getElementById("inputDNI");

  let valid = true;
  let output = "";

  // username 3-20 signs
  if (!/^[A-Za-z][A-Za-z0-9]{2,19}$/.test(nombre.value)) {
    output += "Username is invalid. It must be 3-20 characters long and must not start with a number.\n";
    valid = false;
  }

  // Telephone
  if (!/^\+?\d{10,15}$/.test(telefono.value)) {
    output += "Phone number is invalid. Please enter a valid phone number.\n";
    valid = false;
  }

  // Birthday
  const birthDate = new Date(ano.value, mes.value - 1, dia.value);
  const age = new Date().getFullYear() - birthDate.getFullYear();
  if (age < 18 || isNaN(birthDate.getTime())) {
    output += "The birthdate is invalid. You must be at least 18 years old.\n";
    valid = false;
  }

  // E-Mail 
  if (!/\S+@\S+\.\S+/.test(email.value)) {
    output += "Email is invalid. Please enter a valid email address.\n";
    valid = false;
  }

  // DNI/NIE 
  if (!validateDniNie(dni.value)) {
    output += "DNI/NIE is invalid. Please enter a valid Spanish DNI or NIE.\n";
    valid = false;
  }

  // fault
  document.getElementById("output").value = output;

  return valid;
};

// DNI/NIE
const validateDniNie = (dni) => {
  dni = dni.toUpperCase();
  const dniRegex = /^[XYZ]?\d{7,8}[A-Z]$/;
  if (!dniRegex.test(dni)) return false;

  const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
  let number = dni.substring(0, dni.length - 1);
  let letter = dni[dni.length - 1];

  // NIE
  if (dni.startsWith("X")) number = number.replace("X", "0");
  else if (dni.startsWith("Y")) number = number.replace("Y", "1");
  else if (dni.startsWith("Z")) number = number.replace("Z", "2");

  return dniLetters[number % 23] === letter;
};

// registrate
const registrar = () => {
  if (document.getElementById("inputConditions").checked && validateInput()) {
    alert("Form submitted successfully!");
  } else {
    alert("Please accept the terms and ensure all inputs are correct.");
  }
};

// save Cookies
const guardarDatos = () => {
  document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], input[type='number']").forEach((input) => {
    document.cookie = `${input.name}=${input.value}; path=/;`;
  });
};

// get Cookies
const recuperarDatos = () => {
  document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], input[type='number']").forEach((input) => {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name === input.name) {
        input.value = decodeURIComponent(value);
      }
    });
  });
};

// reset
const limpiarFormulario = () => {
  document.getElementById("formulario").reset();
  document.getElementById("output").value = ""; 
};
