console.log("hello world");

var numero = 5;
let miVariable;
const miConstante = 3; //la direferencia es que esta variable su valor es constante.

console.log("el valor de mis contante es" + miConstante); 

//condicionales
// let miNumero = 6;
// let miNombre = Rafael;

// if(miNumero == 7){
//     console.log("Eres un Infante");
// } else{
//     console.log("no eres un infante");
// } 

let miNumnero2 = 5;
if(miNumnero2 > 0){
    console.log("Mi numero es positivo")
}else if(miNumnero2 === 0){
    console.log("Mi numero es cero");
}else{
    console.log("Mi numero es negativo");
}

let contador = 0;
while(contador < 5){
    console.log(contador);
    contador++;
}

function saludar(nombre, edad){
    console.log("Mi nombre es:" + nombre);
    console.log("mi edad es: " + edad);
}

saludar("Rafael", "24")

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

 let recibidor = multiplicar(2,5);
 console.log(recibidor);

//Arreglos

let miArreglo = ["David", "Fernando", "Juan"];
 for(let i = 0; i< 3 ; i++){
    let mostrar = miArreglo[i];
    console.log("Mostrando el nombre de: " + mostrar);
 }

 //objetos

 let Persona = {
    nombre : "Rafael",
    edad : 24,
    maculino : true
 };

 
 console.log(Persona.nombre);
//  Persona.comidaFavorita = "Hamburguesa";

//  let Persona2 = {
//     nombre : "Juan",
//     edad : 24,
//     maculino : true
//  };

//  let arregloDeObjetos = [Persona, Persona2]