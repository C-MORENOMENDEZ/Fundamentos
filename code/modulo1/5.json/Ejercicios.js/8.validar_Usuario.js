/*Crear funcion validarUsuario(usuario) que verifique si un objeto usuairo tiene las propiedades obligatorias:
El nombre tenga mas de 2 letras, la edad sea > 0, y este activo.
Retornar true si es valido y false si no.*/

//1. crear funcion
//2. crear un espacio de almacenamiento en donde guarde las propiedades obligatorias
//3. hacer un bucle que cuente las propiedades que retorne false si no cumple
//4. Colocar las condiciones obligatorias que retorne false si no cumple
//5. crear los objetos



function validarUsuario(usuairo) {
    let propiedades = ["nombre", "edad", "activo"];

    for (let i = 0; i < usuairo.length; i++) {
        let propiedad = propiedades[i];

        if (!(propiedad in usuairo)) {
            return false;
        }
    }

    if (usuairo.nombre.length <= 2) {
        return false;
    }

    if (usuairo.edad <= 0) {
        return false;
    }

    if (usuairo.activo !== true) {
        return false;
    }
    return true;
};

let usuario1 = {
    nombre: "Christian",
    edad: 20,
    activo: true,
};

let usuario2 = {
    nombre: "Christian",
    edad: 0,
    activo: false,
};
console.log(validarUsuario(usuario1));
console.log(validarUsuario(usuario2));
console.log("__________________");

function validarUsuario2(usuairo) {
    if (usuairo.nombre.length > 2 && usuairo.edad > 0 && usuairo.activo === true) {
        return true;
    } else {
        return false;
    }
}

console.log(validarUsuario2(usuario1));
console.log(validarUsuario2(usuario2));

