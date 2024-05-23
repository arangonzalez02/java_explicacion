let pases=0;
//bucle while, evalua la condición y si es true entra en el bucle, sino, finaliza y va a la siguiente línea
while(pases<10){//booleano (true o false)
    console.log("Número de pase->" + pases);
    pases++;//si no se pone esto, sería un bucle infinito
}


/* Mostrar la tabla de multiplicar */

let x=1;
let y=1;
while(x<10){
    while(y<10){
        console.log(x+"x"+y+"="+(x*y));
        y++;
    }
    x++; //se incrementa x
    y=1; //se inicializa y, para que en la próxima vuelta comience en 1
}

//Random o aleatorio!
//Array o cadenas
let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; //abecedario guarda todas las letras...que van con un índice desde el 0=A hasta la 26=Z.
let numeroAleatorio=parseInt(Math.random()*26);// número aleatorio, parseInt convierte el número a entero
console.log(abecedario[numeroAleatorio]);

let letra="";
while(letra!=abecedario[numeroAleatorio]){
    letra=prompt("Indica la letra").toUpperCase();
    }
    alert("Adivinaste..es la letra->" + abecedario[numeroAleatorio]);


