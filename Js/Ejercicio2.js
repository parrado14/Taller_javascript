const btn = document.getElementById("btn");
btn.addEventListener("click", palabraLarga);

const respuesta = document.getElementById("respuesta");

function palabraLarga() {
  let palabra1 = document.getElementById("palabra1").value;
  let palabra2 = document.getElementById("palabra2").value;

  let cantidad1 = palabra1.length;
  let cantidad2 = palabra2.length;

  if (palabra1 == "" || palabra2 == "") {
    respuesta.innerHTML =
      "<p style='font-weight: bold; color: red;'>hay campos vacios</p>";
  } else {
    if (cantidad1 > cantidad2) {
      let diferencia = cantidad1 - cantidad2;
      respuesta.innerHTML =
        "la primera palabra es mas grande por " + diferencia;
    } else {
      let diferencia = cantidad2 - cantidad1;
      respuesta.innerHTML =
        "la segunda palabra es mas grande por " + diferencia;
    }
  }
}
