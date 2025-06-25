//Buscar letra "a" en un texto 
//Variable tipo texto "Hola" 
//Buscar letra a y return la posicion
//buscarLetraA("Hola")
//Output: 3

//Ejercicio mio

function buscarLetra(texto, letraBuscar) {

    //let texto = "Hola";
    //let letraBuscar = "a";
    let textoEnMinuscula = texto.toLowerCase();
    let letraBuscarMinuscula = letraBuscar.toLowerCase();
    let posicion = textoEnMinuscula.indexOf(letraBuscarMinuscula);

    if (posicion != -1) {
        console.log(`La ${letraBuscar} se encuentra en la posición "${posicion}"`);
    } else {
        console.log(`"${texto}" No contiene la letra "${letraBuscar}"`);
    }
}
buscarLetra("Hola", "a")

//ejercicio karen

function buscarLetraA(texto) {
    let posicion = texto.indexOf("a")

    if (posicion === -1) {
        return "no existe"
    } else {
        return posicion;
    }
}

console.log(buscarLetraA("Hola"));


//Steiger
//opcion 1

function buscarLetra(texto, letra) {
    return texto.indexOf(letra);

}
console.log(buscarLetra("tikitaka", "a"));


//opcion 2

function encontrarLetra(palabra, letrao) {
    for (let i = 0; i <= palabra.length; i++) {
        if (palabra[i] === letrao) {
            console.log(i);

        }
    }
}
encontrarLetra("alto", "a")