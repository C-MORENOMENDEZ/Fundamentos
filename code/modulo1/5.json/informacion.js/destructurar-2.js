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
  }
};

const { edad, nombre, direccion } = persona; //Desestructuración de objeto
console.log(edad);

let { edad: age, nombre: name, direccion: address } = persona; //Desestructuración de objeto
console.log(address);

age = 31;
console.log('edad', persona.edad);
console.log('age', age);

let age2 = persona.edad;
age2 = 32;
console.log('edad2', persona.edad);

