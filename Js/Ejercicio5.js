const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", agregarNumero);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ordenarNumeros);

const respuesta = document.getElementById("respuesta");

var lista;

lista = [];

function agregarNumero() {
  let num = document.getElementById("num").value;

  if (num == "") {
    respuesta.innerHTML =
      "<p style='font-weight: bold; color: red;'>el campo esta vacio</p>";
  } else {
    lista.push(num);

    document.getElementById("num").value = "";
    respuesta.innerHTML = "";
  }
}

function ordenarNumeros() {
  if (lista == "") {
    respuesta.innerHTML =
      "<p style='font-weight: bold; color: red;'>no exite ningun arreglo</p>";
  } else {
    let orden = lista.length;

    let tem;

    for (i = 1; i < orden; i++) {
      for (j = 0; j < orden - i; j++) {
        if (lista[j] > lista[j + 1]) {
          tem = lista[j];
          lista[j] = lista[j + 1];
          lista[j + 1] = tem;
        }
      }
    }
    respuesta.innerHTML = lista;
  }
}
