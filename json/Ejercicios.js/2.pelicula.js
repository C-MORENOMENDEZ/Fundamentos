//Crear un objeto JSON llamado pelicula con:
//titutlo: "string"
//año: numero
//genero: "string"
//esFavorita (boolean)
//output: 
//función mostrarInfo() que retorne: titulo: "", año: numero

let pelicula = {
    titulo: "El niño que domó el viento",
    ano: 2019,
    genero: "Historia - Drama",
    esFavorita: true,

    mostrarInformacion: function () {
        console.log(`Titulo: ${this.titulo}  Año: ${this.ano}  Genero: ${this.genero} Es favorita ${this.esFavorita}`);
    }
    
}

console.log(pelicula.titulo, pelicula.año);
