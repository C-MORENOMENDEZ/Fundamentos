//Crear un objeto libro con titulo, autor, año de publicacion.


let libro = {
    titulo: "Lugares Asombrosos",
    autor: "Luisito Comunica",
    anoDePublicacion: 2019,
    mostrarInformacion: function () {
        console.log(`El libro ${this.titulo}, fue escrito por ${this.autor} en el año ${this.anoDePublicacion}. `);
    }
}
console.log("========");

libro.mostrarInformacion();
console.log(libro);
 



