function saludar() {
  console.log('Hola mundo');
  console.log('Clases');
  console.log('Con 8 personas');
}

//Esto no ejecuta nada
saludar;

//Este si me ejecuta
//saludar();

function ensenar(dinero) {
  if(dinero) {
    console.log("Enseño X módulos " + dinero);
  } else {
    console.log("Pailas");
  }
}

// ensenar(500)

//Ejemplo retornar
function NoRetornar(a, b) {
  let c = a + b;
  return c;
}

let _resultado = NoRetornar(3 + 5, 5);
_resultado = _resultado + 5;
console.log(_resultado);

//Ejemplo String
function RetornarNombreCompleto(nombre, apellido) {
  //return "Hola " + nombre + " " + apellido;
  return `Hola ${nombre} ${apellido} bienvenido`;
}

//const RetornarNombreCompleto = (nombre, apellido) => `Hola ${nombre} ${apellido} bienvenido`;
const RetornarNombreCompleto2 = (nombre, apellido) => {
  return `Hola ${nombre} ${apellido} bienvenido`
};

let nombreCompleto = RetornarNombreCompleto("Yeison", "Gomez");
console.log(nombreCompleto);

function sumar(a, b){
  return a + b;
}

//console.log(sumar(3, 5));
let resultado = sumar(3, 5);
//console.log(resultado);

//Resumir
let sumar2 = (a, b) => a + b;


//IDENTIFICAR NUMERO PAR
numero = 10;

if(numero%2){
  console.log('Es par');  
} else {
  console.log('Es impar');  
}
