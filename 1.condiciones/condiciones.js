let nota = 40;
let resultado = "Aprobado";
let resultadoBoleana = false;
const nombre = "Yeison";

if(nota >= 70) {
	//console.log("Aprobado");
} else if(nota >= 30) {
	//console.log("No perdio, pero paso bajito");
} else {
	//console.log("Reprobo");
}

if(nota == 40) {
	//console.log("Saco 40");
}

//Operador del igual
let dia = "martes";

if (dia == "lunes") {
  //console.log("Es lunes");
}

//Operador y &&
let condicion1 = "leche";
let condicion2 = "cereal";
let condicion3 = "chocolate";

if(condicion1 && condicion2 && condicion3){
  //console.log("Tomar leche y cereal en un plato");
} else if(condicion1){
  //console.log('Tomar vaso de leche');
} else {
  //console.log("Pues no coma");
}

//Operador o ||
let condicion11 = "agua";
let condicion22 = "avena";

if(condicion11 == "leche" || condicion22 == "cereal"){
  //console.log('Hay alguno de los dos');
} else if(condicion11 != "leche" && condicion22 != "cereal"){
  //console.log("No hay leche y no hay cereal");
}

//Quiero desayunar
//1. Desayunar leche y cereal si hay
//2. Si no hay cereal, comer leche con avena
//3. Si no hay cereal ni avena, tomar un vaso de leche
//4. Si no hay leche, pero hay cereal comer cereal
//5. Si no hay nada, ir hacer mercado

let isLeche = true;
let isCereal = false;
let isAvena = false;

if(isLeche && isCereal) {
  console.log('Servirme y comer');
} else if(isCereal){
  if(isLeche){
    console.log('Servirme y comer');
  }
} else if(isLeche) {
  if(isAvena){
    console.log("Comer leche con avena");
  } else {
    console.log('Tomar leche');
  }
} else if(isAvena) {
  console.log('Comer avena');
} else {
  console.log("Ir hacer mercado");
}

if(isLeche && isCereal){
  console.log('Servirme y comer');
} else if(isLeche && !isCereal && !isAvena){
  console.log('Hay leche');
} else if(isAvena){
  //Ya se que no hay leche
  console.log('Comer avena');
} else {
  console.log('No hay nada');
}






