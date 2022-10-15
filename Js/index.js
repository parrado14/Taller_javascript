let container = document.getElementById("container");
let exercises = [
    {
      number: "1",
      subtitle: "Determinar par",
      description: "Al ingresar un numero se indica si es par o no",
    },
    {
      number: "2",
      subtitle: "Longitud de palabras",
      description: "Al ingresar dos palabras determina cual es la mas larga",
    },
    {
      number: "3",
      subtitle: "El número mayor",
      description: "Determina cual es el mayor de dos números ingresados",
    },
    {
      number: "4",
      subtitle: "Las tablas de multiplicar",
      description: "Al ingresar un número muestra su tabla de multiplicar",
    },
    {
      number: "5",
      subtitle: "Ordenar lista de números",
      description: "Ordena una lista de números ingresada por el usuario",
    },
    {
      number: "6",
      subtitle: "Número primo",
      description: "Calcula si el numero ingresado es primo o no",
    },
  ];
    
 


for (let exercise of exercises) {
    container.innerHTML += "<div class='card' style='width: 18rem'><div class='card-body'><h5 class='card-title'>Ejercicio" +" " + exercise.number+"</h5><h6 class='card-subtitle mb-2 text-muted'>Ejercicio: " +   exercise.subtitle + "</h6><p class='card-text'>" + exercise.description +"</p><a href='' class='Ir al ejercicio'></a><a href='html/ejercicio"+exercise.number +".html' class=''>Ir al ejercicio</a></div></div>";
}  