/**
 Tipos de Variables

 JavaScript no obliga a definir que tipo de variable estas trabajando
 */


nombreApellido="Maria Rojas";//tipo de variable String puedes utilizar "" o ''
edad=25;//tipo Number, no necesita comillas
espaniol=true//tipo Boolean, solo dos estados (true o false)
sexo=null;

//¿Como puedes ver los valores sin mostrarlos en el html?
//Se utiliza para ver la ejecución o valores ->console.log (lo que quieres mostrar)

console.log(nombreApellido);
console.log(edad);
console.log(espaniol);
console.log(sexo);
//operador de concatenación + une dos o más expresiones de salida
console.log("nombreApellido->"+typeof(nombreApellido) + " !");
console.log("edad->"+typeof(edad));
console.log("espaniol->"+typeof(espaniol));
console.log("sexo->"+typeof(sexo));

direccion="Calle Campo 81"
//Simplificar las cadenas con Backticks
console.log(`Datos Personales->Nombre:  ${nombreApellido}, Dirección: ${direccion}`);
console.log("Datos Personales ->Nombre: "+nombreApellido +", Direccción:"+direccion);

//Si la variable es númerica, podemos realizar operaciones matemáticas
console.log("El año que viene cumpliras " + (edad+1) + " años");
console.log(`El año que viene cumpliras ${edad+1} años`);

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

altura=1.80; //tipo de dato numérico es decimal
diametro=2e-9;
console.log(`Altura->${altura}`);
console.log(`Diámetro->${diametro}`);
resultado=altura/0; //->Infinito
otroResultado=resultado+10;
console.log(otroResultado);

//Si tienes otros tipos de datos y quieres hacer una operación matemática-> NaN-> Not a Number

resultado=nombreApellido*25;
console.log(resultado); //* / % ** pero con el + siempre concatena

resultado=nombreApellido+" "+edad;
resultado=`${nombreApellido} ${edad}`;
console.log(resultado);

//Tipo de datos Booleanos (true o false)
//true ->1 false ->0
valorVerdadero=true;
valorFalso=false;

console.log(`1-¿true?:${Boolean(true)}`);
console.log(`2-¿false?:${Boolean(false)}`);
console.log(`3-1: ${Boolean(1)}`);
console.log(`4-0: ${Boolean(0)}`);

//si existen datos...siempre va a ser true!
texto="Un texto ejemplo";
console.log(`5-texto: ${Boolean(texto)}`);

textoVacio=""
console.log(`5-textoVacio: ${Boolean(textoVacio)}`);

//Conversion de tipos//
masAnios="10"; //tipo de dato es string o cadena...

console.log(edad + masAnios); //2510
console.log(edad + Number(masAnios)); //35 ->casting
console.log(String (edad) + masAnios); //2510

console.log(true*7);
console.log(9-false);
console.log(9-true);
console.log(edad*masAnios); //conversion es automatica
console.log(edad/masAnios); 
console.log(edad-masAnios);
console.log(edad**masAnios); //exponencial
console.log(undefined/edad); //NaN
console.log(null*edad); //0

/*--------------------------- */

parrafo=document.getElementById ("parrafo");
parrafo.innerHTML="Es una prueba de javascrip en el DOM"