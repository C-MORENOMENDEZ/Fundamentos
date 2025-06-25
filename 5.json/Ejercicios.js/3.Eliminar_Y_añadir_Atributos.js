//Crear un objeto "usuario" con: nombre, edad, y email.
//Eliminar el atributo email usando delete.
//Añade un nuevo atributo activo (boolean).

let usuario = {
    nombre: "Christian",
    edad: 20,
    email: "christian@hotmail.com",
}
console.log(usuario);

delete usuario.email;

console.log(usuario);

usuario.activo = true;

console.log(usuario);





