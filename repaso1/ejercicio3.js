//Sumar numeros impares en un rango
//sumar 2 a los numeros pares
//1(2+2) + 3 + (4+2) + 5 = 19

//

let suma = 0

function sumarImpares(inicio, fin) {
    let suma = 0;

    for (let i = inicio; i <= fin; i++) {
        console.log("_____________________");

        if (i % 2 !== 0) {
            suma += i;
            console.log(i + ". " + suma);

        } else {
            let sumaAnterior = suma;
            suma = suma + i + 2;
            console.log(i + "." + sumaAnterior, "+", i, "+", "2", "=", suma);

        }
        console.log("_______________");
        
    }
    return suma;
    
}

console.log(sumarImpares(1, 5,));

// 1, 2 , 3, 4, 5;
// 1. 1
// 2. 1 + 2 + 2 = 5
// 3. 5 + 3 = 8
// 4. 8 + 4 + 2 = 14
// 5. 14 + 5 = 19