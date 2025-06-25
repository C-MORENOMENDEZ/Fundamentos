let decimal = 4.5;
let booleanas = true;

let numero = 0;
if (!numero) {
  console.log("El numero es 0");
}

let texto = "";
if (!texto) {
  console.log("El texto esta vacio");
}

let texto2 = "hola";
if (texto2) {
  console.log("Entra");
}

let _numero = 1;
let _texto = "1";
if (_numero == _texto) {
  console.log("Entraria");
} else if (_numero === _texto) {
  console.log("No es el mismo tipo de variable");
}

//Ternario
let edad = 18;
const mensaje = edad >= 18 ? "Mayor edad" : "Menor de edad";

let mensaje2 = "";
if (edad >= 18) {
  mensaje2 = "Mayor edad";
} else {
  mensaje2 = "Menor de edad";
}

//Ternario anidado
let _edad = 18;
const _mensaje = edad >= 18 ? "Mayor edad" : 
  edad === 0 ? "Recien nacido" : "Menor de edad";

let _mensaje2 = "";
if (_edad >= 18) {
  mensaje2 = "Mayor edad";
} else if (_edad === 0) {
  mensaje2 = "Recien nacido";
} else {
  mensaje2 = "Menor de edad";
}

//Vacio
//textos = ""; //false
//numeros = 0; //false
//booleano = false; 
//undefined //false
//null //false

//let persona = consultarBaseDeDatos = undefined;
//let billetera = consultarBaseDeDatos = null;
//if(undefined == null) // true
//if(undefined === null) // false