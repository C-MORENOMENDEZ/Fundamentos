//Crear una funcion mostrarPropiedades(obj) que itere sobre las propiedades de un objeto
// y muestre en consola: "[clave]: [valor]" para cada una.

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
}
    
    for (let key in auto) {
        console.log(key, ":",  auto[key]);
    }