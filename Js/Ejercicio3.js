const btn = document.getElementById("btn");
btn.addEventListener("click", numeroMayor);

const respuesta = document.getElementById("respuesta");

function numeroMayor() {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  if (numero1 == "" || numero2 == "") {
    respuesta.innerHTML =
      "<p style='font-weight: bold; color: red;'>hay campos vacios</p>";
  } else {
    if (numero1 > numero2) {
      respuesta.innerHTML = "el " + numero1 + " es mayor que " + numero2;
    } else {
      respuesta.innerHTML = "el " + numero2 + " es mayor que " + numero1;
    }
  }
}
