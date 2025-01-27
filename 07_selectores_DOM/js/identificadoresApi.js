const principal = document.querySelector("principal"); 
const parrafos = document.querySelectorAll("p");
const clase = document.querySelectorAll(".pepe2");
const pid = document.querySelector("#principal p#p1, #otro");

const ejecutar = () => {

  principal.onclick = adeu;

  for (let i = 0; i < 8; i++) {
    parrafos[i].onclick = hola;
  }

  parrafos[2].onclick = bgcolor;

  for (let i = 0; i < 2; i++) {
    clase[i].onmouseover = color;
}
  pid.onclick = paraId;

  document.querySelector("button").onmouseover = foco;
  document.querySelector("button").onkeyup = detectar_tecla;

};
  

const hola = () => {
  alert("HOOOLA!!!");
};
const adeu = () => {
  alert("Adeuuu");
};

const paraId = () => {
  alert("Has clickado en un ID")
};

const foco = () => {
  document.querySelector("button").focus();
};

const detectar_tecla = (e) => {
  e.keyCode == 13
    ? alert('has presionado ta tecla "Enter"')
    : alert('no has clikado sobre "Enter"')
};

const bgcolor = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
};

const color = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
//   // document.querySelector("#principal").computedStyleMap.color = "grey";
// };


  
  
window.onload = ejecutar;
