const btn = document.getElementById("btn");
btn.addEventListener("click", tablaMultiplicar);

const respuesta = document.getElementById("respuesta");

function tablaMultiplicar() {
  let num = document.getElementById("num").value;

  if (num == "") {
    respuesta.innerHTML =
      "<p style='font-weight: bold; color: red;'>el campo esta vacio</p>";
  } else {
    respuesta.innerHTML = "";
    for(i=1; i<11; i++){
        let solucion = num * i;
        respuesta.innerHTML += num +" x "+ i +" = "+ solucion +"<br>";
    }
  }
}