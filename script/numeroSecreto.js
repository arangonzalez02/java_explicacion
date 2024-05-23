let numeroUser; //guardara el número que inserte o escriba el usuario
let numeroSecreto=parseInt(Math.random()*100+1); //será el número secreto que genere la máquina
let mayor=false; //nos permitirá validar si el numeroUser es menor o mayor que el secreto
let acertado=false; //cambiará a true cuando el usuario acierte
console.log(numeroSecreto);
while(!acertado){
    numeroUser=Number (prompt("Indica el número"));
    if(numeroSecreto<numeroUser){
        alert("El número debe ser menor")
    }else if(numeroSecreto>numeroUser){
        alert("El número debe ser mayor")
    }else if(numeroSecreto==numeroUser){
        alert("¡Has acertado!.....")
        acertado=true;
    }else{
        alert("No es un número, inténtalo de nuevo")
    }
    
}