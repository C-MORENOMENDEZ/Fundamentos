//Crear una funcion "contarTipoPropiedades(obj, tipo)" que cuente cuantas propiedades de un objeto
//"obj" son de un "tipo" especifico

function contarTipoPropiedades(obj, tipo) {
    let contar = 0;

    for (let key in obj) {
        if (typeof obj[key] == tipo) {
            contar = contar + 1;
        }

        
    }
    return contar;
};

let persona = {
    nombre: "Luisa",
    edad: 30,
    activo: true,
    direccion: "Calle 123"
};

let persona2 = {
nombre: "Christian",
edad: 30,
activo: true,
direccion: "calle 22",
ciudad: "florencia",
numero: 11,
estudia: true
};

console.log(contarTipoPropiedades(persona, "boolean"));
console.log(contarTipoPropiedades(persona2, "string"));
