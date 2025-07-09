//Dada una matriz cuadrada de NxN, crear un array con los valores de las 4 esquinas
//output: [1, 3, 7, 3]
//Altura del cuadro es 3

//Ancho del cuadro es 3

const array = [
    [1, 2, 3],
    [4, 99, 6],
    [7, 8, 3]
]

let valores4Esquina = "";

for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    for (let j = 0; j < array[i].length; j++) {
        //console.log(array[i][j]);
        if ((i === 0 && j === 0) || (i === 0 && j === 2) || (i === 2 && j === 0) || (i === 2 && j === 2)) {
            if (([i][j]) === 0) {
                valores4Esquina += array[i][j]
            } else {
            valores4Esquina +=  ", " +  array[i][j];
            //console.log(valores4Esquina);
            }
        }
    }
};
console.log(valores4Esquina);

