//El centro de la matriz es 5

//Altura del cuadro es 3
//centro es 2

//Ancho del cuadro es 3
const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < array.length; i++) {
    console.log('fila', i, array[i]);
    for (let j = 0; j < array[i].length; j++) {
        console.log('columna', j, array[i][i]);
        if (i === 1 && j === 1) {
            console.log("Estamos en el centro 2");
        }
    }
}

