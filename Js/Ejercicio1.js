let boton = document.getElementById("boton")
boton.addEventListener("click", calcularPar)
let resultado = document.getElementById("resultado")

function calcularPar(){
    let numero = document.getElementById("number").value;
    
    if((numero % 2) == 0){
        resultado.innerHTML = "El " + numero + " es par"   
    }else{    
        resultado.innerHTML = "El " + numero + " es impar"      
    }
}