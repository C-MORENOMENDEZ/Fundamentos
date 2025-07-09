//Crear una función cuadradoDeCaracteres(lado, caracter) que imprima un cuadrado de lado x lado usando
// el simbolo caracter.

//NO RETORNAR NADA 

//cuadradoDeCaracteres(3, '#')
//Output:
//###
//###
//###
function cuadradoDeCaracteres(caracter, fila) {

    for (let i = 0; i < 3; i++) {
        fila = "";
        for (let j = 0; j < 3; j++) {
            fila = fila + caracter;
        }
        console.log(fila);
    }
}

cuadradoDeCaracteres("#", 4);



console.log("_____________");

//1. Ejercicio gpt
//Contar del 1 al 5

let numero = "";

for (let i = 1; i < 6; i++) {
    console.log(i);

}
console.log("_____________");

//2. Ejercicio gpt
//buscar numero del 1 al 10 si es par o impar;

//1.Crear bucle del 1 al 10;
//2.buscar numeros, par = true y impar = false;

function sumaPares(n1, n2) {
    let suma = 0;
    for (let i = n1; i <= n2; i++) {
        if (i % 2 === 0) {
            suma += i;
            console.log(i + " par");
        } else {
            console.log(i + " impar");
        }
    }
    return suma;
}
console.log(sumaPares(0, 20));