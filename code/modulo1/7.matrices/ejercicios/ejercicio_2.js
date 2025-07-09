//Ejercicio 2. Dada una matriz cuadrada de N x N, crear una matriz igual,
// pero solo con los números de las esquinas, el resto de valores llenarlos con 0.

//output: [[1, 0, 3], [0, 0, 0], [7, 0, 3]];

const array = [
    [1, 2, 3],
    [4, 99, 6],
    [7, 8, 3]
];

let nuevoArray = [];

for (let i = 0; i < array.length; i++) {
    let fila = []
    for (let j = 0; j < array.length; j++) {
        if ((i === 0 && j === 0) || (i === 0 && j === 2) || (i === 2 && j === 0) || (i === 2 && j === 2)) {
            fila[fila.length] = array[i][j]
            //console.log(fila);
        } else {
            fila[fila.length] = 0;
            //console.log(fila);
        }
        //console.log(fila);  
    }
    nuevoArray[nuevoArray.length] = fila;
};

console.log(nuevoArray)

