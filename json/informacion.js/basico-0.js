

let texto = "";
let numero = 0;
let bandera = true;
let objeto = {
  clave: "valor",
  numero: 42,
  bandera: false,
};
//Claves minuscula
let persona = {
  nombre: "Juan", //Atributo nombre
  edad: 30, //Atributo edad
  activo: true,
  direccion: { //Subobjeto
    calle: "Calle Falsa",
    carrera: "Carrera 123",
    ciudad: "Ciudad Ejemplo",
    pais: "Pais Imaginario",
    numero: 123,
  },
};

console.log(persona.edad); //Acceso a un atributo
console.log(persona.direccion.carrera);

persona.edad = 31; //Modificación de un atributo
console.log(persona.edad); //Acceso a un atributo modificado

persona.direccion.carrera = "Carrera 456"; //Modificación de un subatributo
console.log(persona.direccion.carrera); //Acceso a un subatributo modificado

//ASIGNAR UN ATRIBUTO A UNA VARIABLE
persona.apellido = "Perez"; //Asignación de un nuevo atributo
console.log(persona);


//OTRA FORMA DE ACCEDER A UN ATRIBUTO
let atributoMostrar = ""; //Atributo a mostrar

//ALGORITMO
if(condicion) { //Condición para cambiar el atributo a mostrar
  atributoMostrar = "edad"; //Cambio de atributo a mostrar
} else {
  atributoMostrar = "nombre"; 
}

console.log(persona[atributoMostrar]); //Acceso a un atributo usando una variable