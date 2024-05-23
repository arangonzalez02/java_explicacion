/*Entrada a un pub-> mayor de 18 años */
//****let edad=Number (prompt("Edad")); //conversión manual de tipo de dato, porque en principio es string
//verificar que edad sea tipo de dato numérico
// ********
//console.log(typeof(edad)); //si es string tengo que pasarlo a numérico
// //si tiene más de 18 años, entonces entrar=true
// let entrada=false //se inicializa a falso para que nadie entre si no cumple la condición de ser mayor de 18 años
// if(edad>=18){
//     entrada=true;
// }
// console.log("Puede entrar al Pub?->" + entrada);

/**************/

/* Ejemplo de if anidados, donde se declara un animal, y luego se va entrando en diferentes if, hasta llegar al último else...y veremos quá pasa */

// ***let mascota="gato";
// if (mascota=="perro"){
//     console.log("La mascota es un perro");
// }else if (mascota=="tortuga"){
//     console.log("La mascota es una tortuga");
// }else if (mascota=="canario"){
//     console.log("La mascota es un canario");
// }else{
//     console.log(mascota);
// }
/*Nota: en el ejemplo anterior, no se cumple ninguna de las condiciones, y va directo al else final. */
//***


/*Si Ana tiene dinero y el artículo está en venta, podrá irse de compras sino, se queda en casa. */
// *** let dinero= Boolean (prompt("¿Tienes dinero?")); //.toUpperCase ->> Es que todo lo que escribas lo pase a mayúscula -> string.toUpperCase
// let enVenta= Boolean (prompt("¿Está en venta?"));

// if (dinero && enVenta){
//     console.log("Ana se puede ir de compras");
// }else{
//     console.log("Ana se queda en casa");
// }

// ***

// *** let dinero= prompt("¿Tienes dinero?"); //.toUpperCase ->> Es que todo lo que escribas lo pase a mayúscula -> string.toUpperCase()
// let enVenta= prompt("¿Está en venta?");

// if (dinero.toUpperCase()=="SI" && enVenta.toUpperCase()=="SI"){
//     console.log("Ana se puede ir de compras");
// }else{
//     console.log("Ana se queda en casa");
// }

//****

/*Estructura Switch Cas */
//*** console.log("Menu Iniciado");
// let letra=prompt("Indica tu opcion: [c]opiar [a]brir [p]egar");
// switch(letra){
//     case "a": case"A":
//         console.log("Se abre archivo");
//         break;
    
//     case "c":
//         console.log("Se copia el archivo");
//         break;

//     case "p":
//         console.log("Se pega el archivo");
//         break;

//     default: console.log("Opción no válida");

// } ****


/*Actividad propuesta 2.9 */


let dia=prompt("Inidica la inicial del día de la semana");
switch(dia){
    case "L":
        console.log("Lunes de 07:00 a 15:00");
        break;

    case "M":
        console.log("Martes de 08:00 a 14:00");
        break;

    case "X":
        console.log("Miércoles de 16:00 a 18:00");
        break;

    case "J":
        console.log("Jueves de 10:00 a 12:00");
        break;

    case "V":
        console.log("Viernes de 07:30 a 15:30");
        break;

    case "S":
        console.log("Sábado de 12:00 a 14:00");
        break;

    case "D":
        console.log("Domingos cerrado");
        break;
}





