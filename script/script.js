/**
 Tipos de Variables

 JavaScript no obliga a definir que tipo de variable estas trabajando
 */


nombreApellido = "Maria Rojas";//tipo de variable String puedes utilizar "" o ''
edad = 25;//tipo Number, no necesita comillas
espaniol = true//tipo Boolean, solo dos estados (true o false)
sexo = null;

//¿Como puedes ver los valores sin mostrarlos en el html?
//Se utiliza para ver la ejecución o valores ->console.log (lo que quieres mostrar)

console.log(nombreApellido);
console.log(edad);
console.log(espaniol);
console.log(sexo);
//operador de concatenación + une dos o más expresiones de salida
console.log("nombreApellido->" + typeof (nombreApellido) + " !");
console.log("edad->" + typeof (edad));
console.log("espaniol->" + typeof (espaniol));
console.log("sexo->" + typeof (sexo));

direccion = "Calle Campo 81"
//Simplificar las cadenas con Backticks
console.log(`Datos Personales->Nombre:  ${nombreApellido}, Dirección: ${direccion}`);
console.log("Datos Personales ->Nombre: " + nombreApellido + ", Direccción:" + direccion);

//Si la variable es númerica, podemos realizar operaciones matemáticas
console.log("El año que viene cumpliras " + (edad + 1) + " años");
console.log(`El año que viene cumpliras ${edad + 1} años`);

console.log('Esta es una frase de Cervante \'En un lugar de la Mancha\'');
console.log("Esta es una frase de Cervante \"En un lugar de la Mancha\"");
console.log("Esta es una frase de Cervante 'En un lugar de la Mancha' "); //Se recomienda
console.log("Esta es una frase de Cervante \n 'En un lugar de la Mancha' "); //Salto de línea 
console.log("Esta es una frase de Cervante \n\t'En un lugar de la Mancha' "); //Salto y sangría
console.log("El signo de la eternidad Armenia es \u{058D}");
console.log("El signo de Bitcoin es \u{20BF}");


//Actividad Propuesta 2.4 //
console.log('El acceso a la ruta C:\\\\usuario\\ tarda 1\'23", algo considerado "lento" en la actualidad.');


/*Tipos de datos Númericos (number) */

altura = 1.80; //tipo de dato numérico es decimal
diametro = 2e-9;
console.log(`Altura->${altura}`);
console.log(`Diámetro->${diametro}`);
resultado = altura / 0; //->Infinito
otroResultado = resultado + 10;
console.log(otroResultado);

//Si tienes otros tipos de datos y quieres hacer una operación matemática-> NaN-> Not a Number

resultado = nombreApellido * 25;
console.log(resultado); //* / % ** pero con el + siempre concatena

resultado = nombreApellido + " " + edad;
resultado = `${nombreApellido} ${edad}`;
console.log(resultado);

//Tipo de datos Booleanos (true o false)
//true ->1 false ->0
valorVerdadero = true;
valorFalso = false;

console.log(`1-¿true?:${Boolean(true)}`);
console.log(`2-¿false?:${Boolean(false)}`);
console.log(`3-1: ${Boolean(1)}`);
console.log(`4-0: ${Boolean(0)}`);

//si existen datos...siempre va a ser true!
texto = "Un texto ejemplo";
console.log(`5-texto: ${Boolean(texto)}`);

textoVacio = ""
console.log(`5-textoVacio: ${Boolean(textoVacio)}`);

//Conversion de tipos//
masAnios = "10"; //tipo de dato es string o cadena...

console.log(edad + masAnios); //2510
console.log(edad + Number(masAnios)); //35 ->casting
console.log(String(edad) + masAnios); //2510

console.log(true * 7);
console.log(9 - false);
console.log(9 - true);
console.log(edad * masAnios); //conversion es automatica
console.log(edad / masAnios);
console.log(edad - masAnios);
console.log(edad ** masAnios); //exponencial
console.log(undefined / edad); //NaN
console.log(null * edad); //0

/*--------------------------- */

parrafo = document.getElementById("parrafo");
// parrafo = document.querySelectorAll("p"); //Arrays
parrafo.innerHTML = "Es una prueba de javascrip en el DOM";
//lectura del documento...resultaria vacío
parrafo.innerHTML = "";


cuadrado = document.querySelector(".cuadrado"); //clase
// parrafo=document.querySelector("#parrafo"); //id-->solo el primero cuando existan varios
titulo = document.querySelector("h1"); //etiqueta

titulo.innerHTML = "Práctica de JavaScript";
cuadrado.innerHTML = "A";

document.write("Es una prueba de document.write")
//variables - 
var edad = "cincuenta y ocho";

let email = "j@email.com";
document.write("<p>" + email + "</p>");
document.write("<p>" + edad + "</p>");//cuidado con el var!



/*let */
/*******Ámbito de bloque*********/
// let mensaje1 = "Mensaje1"; //declaramos mensaje
// function mostrarMensaje2() { //funcion -> actua como un bloque
//     let mensaje1 = "<br>Mensaje dentro del Bloque";
//     document.write(mensaje1);
// }
// mostrarMensaje2();
// document.write("<br>mensaje fuera->" + mensaje1);



/*var */
/******Ámbito de bloque*******/
// document.write("<br>*****************");
// var mensaje = "Mensaje1";
// function mostrarMensaje() {
//     mensaje = "<br>Mensaje dentro del Bloque";
//     document.write(mensaje);
// }
// mostrarMensaje();
// document.write("<br>mensaje fuera->" + mensaje1);


//********Constantes********/
// const IVA=21;
// let precio=50*((IVA/100)+1);
// document.write("<br>El precio final es " + precio);

// precio=105*((iva/100)+1);
// document.write("<br>El precio final es " + precio);


//******salidas por consola*****//
// console.error("aquí hay un error");
// console.info("Es una información");
// console.warn("Es una notificación importante");
// console.log('%c mensaje con estilo', 'font-size: 36px; font-weight:bold; colo:blue');




//***salidas de mensajes***//

// alert("Es una alerta");
//  document.write("prueba...prueba...prueba")

//mensajes de confirmación (si/no..true/false)//
//mensaje de entrada de datos//




//****Actividad 2.5******/
//1
nombreApellido = prompt("Escribe tu nombre completo");
document.write(`<br>El nuevo nombre es ->${nombreApellido}`);

//2
let confirmacion = confirm("Quieres salir del programa");
document.write(`<br>El usuario quiere salir?->${confirmacion}`);
if (confirmacion) {
    window.location.replace("https://google.es")
} else {
    alert("finalmente se queda en la web")
}

//4
console.log('%c FIN DEL PROGRAMA', ' font-weight: bold; color:blue; text-decoration:underline');



/*Actividad propuesta 2.5 */
//Operados
//1.Asignación
let a = 5
let b = a;
console.log("El valor de b es " + b);


a = a + b //o de forma simplifacada
console.log("El valor del primer a->" + a);//el resultado es 10

a += b; //el valor de a se le suma otra vez su valor + el valor de b
//10+5
console.log("El valor del segundo a -> " + a);

let c = a % b; //modulo 0 porque a=15 b=5 =3 resto 0
console.log("El valor de c es ->" + c);

let d = b ** 4;
console.log("El valor de d es ->" + d);

//Operadores de comparación ->solo dan como resultado true o false
//Igual
let respuesta = a == b; //false
console.log(respuesta);

//Distinto
respuesta = a != b; //true
console.log(respuesta);

//Igualdad estricta
let e = "5"; //string
respuesta = b == e;
console.log(respuesta);
//da true porque los dos valen 5

respuesta = b === e;
console.log(respuesta);
//en el caso de igualdad estricta resulta falso porque b es number y e es string


//Desigualdad estricta
respuesta = b !== e;//b no es igual que e en valor o en tipo
console.log(respuesta); //true

//Mayor | Menor | Mayor o igual | Menor o igual

respuesta = a > b;//true
respuesta = c > b;//true
respuesta = b >= e;//compara sus valores!
console.log(respuesta);

a++; //a vale 16 -> a=a+1
console.log("Ahora a vale ->" + a);
a--; //a vale 15
console.log(respuesta);
a -= 3; //a vale 12
console.log(respuesta);


console.log("Operaciones con AND");
console.log(`1. => ${true && true}`);
console.log(`3. => ${true && false}`);
console.log(`4. => ${false && true}`);
console.log(`5. => ${false && false}`);

//Evaluamos condiciones
console.log(`6. => ${4 > 5 && 3 > 5}`);
console.log(`6. => ${4 <= 5 && 3 <= 5}`);


console.log("Operaciones con OR");
console.log(`1. => ${true || true}`);
console.log(`3. => ${true || false}`);
console.log(`4. => ${false || true}`);
console.log(`5. => ${false || false}`);


console.log("Operaciones con NOT");
console.log(`1.=> ${!true}`);
console.log(`2.=> ${!false}`);


//Ejemplo práctico
let edadNueva = 18;
let matriculado = true;
resultado = edadNueva && matriculado;//true
console.log(resultado);


//Operario ternario

resultado = a > b ? "A es mayor que B" : "B es mayor que A";
console.log(resultado);

//ejercicio: solicita por promt la edad e indica por un alert si es mayor o menos de edad

// edadNueva=prompt("Indica tu edad");
// resultado=edadNueva>=18?"Eres Mayor de Edad":"Eres menor de edad";
// alert(resultado);

edadNueva >= 18 ? edadNueva++ : edadNueva--;
console.log(edadNueva);


//Estructura condicional if - else
console.log("Inicio");
let local = 2;
let visitante = 1;
if (local === visitante) {
    console.log("Hay empate");
}
else {
    console.log("No hay empate");
}
console.log("Fin");

//Estructura condicionales con if else if
if (local === visitante) {
    console.log("Hay empate");
} else if (local > visitante) {
    console.log("Gana equipo Local");
} else {
    console.log("Gana equipo visitante");
}

