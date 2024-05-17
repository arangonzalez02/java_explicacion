let boton=document.querySelector(".boton");

boton.addEventListener("click", function (){
    let num=document.querySelector("#numero").ariaValueMax;
    if(num==""){
        document.querySelector(".mensajeError").innerHTML="Debe ingresar un número para poderle indicar si es par o impar."
    }












})