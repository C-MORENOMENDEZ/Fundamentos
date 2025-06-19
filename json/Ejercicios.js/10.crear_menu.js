/*crear un objeto "menu" con propiedades como opcion1, opcion2, etc., donde cada valor sea
un string descriptivo (ej: "guardar").Luego, usar un blucle for...in para mostrar las opciones
en consola con el formato:
"[key]: [valor]" (ej: "opcion1: guardar")
si el valor incluye la palabra "salir", añadir "(x)" al final.*/


let menu = {
    opcion1: "guardar",
    opcion2: "cargar",
    opcion3: "salir"
}; 
function mostrarMenu(obj) {
    for (let key in obj) {
        if (obj[key] === "salir") {
            console.log(key + ":", obj[key], "(X)");
        } else {
            console.log(key + ":", obj[key]);
        }
    }
};

mostrarMenu(menu);