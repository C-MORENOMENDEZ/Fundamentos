const mostrarMensaje = () => {
  console.log("¡Hola, mundo!");
}

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
  mostrarInformacion: function() { //Funcion anonima como método del objeto
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Activo: ${this.activo}`);
    console.log(`Dirección: ${this.direccion.calle}, ${this.direccion.carrera}`);
  },
  mostrarMensaje: mostrarMensaje
};

persona.mostrarInformacion(); //Llamada al método para mostrar información
persona.mostrarMensaje(); //Llamada al método para mostrar mensaje

delete persona.activo; //Eliminar un atributo del objeto
console.log(persona); //Mostrar el objeto después de eliminar un atributo

