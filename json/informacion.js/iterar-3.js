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

for (let key in persona) { //Iterar sobre las propiedades del objeto
  console.log(key, ":", persona[key]); 
}

console.log('---');

for(let key2 in persona.direccion) { //Iterar sobre las propiedades del subobjeto
  console.log(key2);
}