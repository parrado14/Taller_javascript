const btn = document.getElementById("btn");
btn.addEventListener("click", numeroPrimo);

const respuesta = document.getElementById("respuesta");

function numeroPrimo() {
  let num = document.getElementById("num").value;
  primo = true;

  if (num == "") {
    respuesta.innerHTML =
      "<p style='font-weight: bold; color: red;'>el campo esta vacio</p>";
  } else {
    if (num < 0) {
      respuesta.innerHTML =
        "<p style='font-weight: bold; color: red;'>debe ser un numero positivo</p>";
    } else {
      if (num < 2) {
        primo = false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          primo = false;
        }
      }

      if (primo == true) {
        respuesta.innerHTML = "El " + num + " si es un numero primo";
      } else {
        respuesta.innerHTML = "El " + num + " no es un numero primo";
      }
    }
  }
}
