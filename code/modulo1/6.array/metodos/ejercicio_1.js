//Convertir una funcion que formatee nombre:

//1.Converitr la primera letra en mayuscula
//2.Eliminar espacios extras al inicio y al final
//let nombre = "christian";

const nombre = "   christian    ";

function nombreMayuscula(n) {
    if (nombre === nombre.trim()) { 
        
    }
    return n.charAt(0).toUpperCase() + n.slice(1);
 
};
console.log(nombreMayuscula('|' + nombre.trim() + '|'));