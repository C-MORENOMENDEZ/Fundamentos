//Crea una función obtenerValor(obj, key) que retorne el valor de cualquier atributo de un objeto
//obj usando una variable key.
function obtenerValor(obj, key) {
    return obj[key];
}
let persona = {
    primerNombre: "Christian",
    segundoNombre: "Camilo",
    edad: 20,
    email: "christian@hotmail.com",
    juegosFavoritos: {
        xbox: "pes 2018",
        pc: "gta San Andreas",
        vidaReal: "Futbol",
        
    }
};

console.log(obtenerValor(persona, "email"));
console.log(obtenerValor(persona, "segundoNombre"));
console.log(obtenerValor(persona.juegosFavoritos, "pc"));



