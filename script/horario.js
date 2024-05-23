let horario = ""; //salida en html
let botones=document.querySelectorAll(".boton"); //toma todos los elementos que tienen la clase boton y crea un array!
    //array.forEach(arrayItem=>{...................})

botones.forEach(elemento=>{//En Js forEach es una función que se le aplica a un array para reconocerlo
    elemento.addEventListener("click", function(){ 
    switch (elemento.value){
    case "L": {
        horario="Lunes de 07:00 a 15:00";
        break;

    }case "M": {
        horario="Martes de 08:00 a 14:00";
        break;

    }case "X": {
        horario="Miércoles de 16:00 a 18:00";
        break;

    }case "J": {
        horario="Jueves de 10:00 a 12:00";
        break;

    }case "V": {
        horario="Viernes de 07:30 a 15:30";
        break;

    }case "S": {
        horario="Sábado de 12:00 a 14:00";
        break;

    }case "D":{
        horario="Domingo está cerrado";
        break;
    }
}
    document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;
})

})


    
