//Las variables son espacio de memoria que guarda dato;
//que tipo de dato? - el dato que yo quiera dar: texto, numero, un valor verdadero o falso
//hay dos tipos de variables
//1. let = se puede modificar mas adelante en el codigo;
//2. const = este no se puede modificar, siempre va a ser así;
//3. siempre que se vaya a colocar un a variable, se tiene que definir cual de las dos es

let nombre = "christian";
let apellido = "Moreno";
const sexualidad = "Hetero";
console.log(nombre, apellido, sexualidad);
let resalto = "";

nombre = "camilo"; //nombre se modifico;
apellido = "mendez"; //apellido se modifico;
//sexualidad = "muijer" //se modifico;
console.log(nombre, apellido, sexualidad);
//log. no ejecuta y muestra error por que hay una variable constante modificada;
console.log(resalto = "__________________tipos de variable");


//existen varios tipos de variable (texto, numero entero, numero decimal, boolean)
let texto = "amarillo"; //El texto tiene que estar en comillas "";
let numeroEntero = 20; //No es necesario las comillas "";
let numeroDecimal = 3.99; //No es nevcesario las comillas "";
let mayorEdad = true;//Boolean: true significa verdader. Afirmacion;
let menorEdad = false;//Boolean: false significa falso. Negacion;

console.log(texto);
console.log(numeroEntero)
console.log(numeroDecimal);
console.log(mayorEdad);
console.log(menorEdad);

//concatenar: Reducir los log. lo mas posible;
console.log("hola", nombre, apellido, "tu pasaje cuesta", (numeroEntero + numeroDecimal));
//se coloca la variable numeroEntero y numeroDecimal en parentisi(), por que es una operacion matematica;
//de lo contrario lo leeria como texto;
console.log(resalto = "_________");

console.log("hola", nombre, apellido, "tu pasaje cuesta", numeroEntero, numeroDecimal);
