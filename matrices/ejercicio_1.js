//Esquina derecha inferior = 9
//Diagonal 

const array = [
    [1, 5, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let baseDeDatos = "";

for (let i = 0; i < array.length; i++) {
    //console.log('fila', i, array[i]);
    for (let j = 0; j < array[i].length; j++) {
        //console.log('columna', j, array[i][i]);
        if (i === 2 && j === 2) {
           // console.log("ESquina deerecha inferior", array[i][j]);
        }

        if ((i === 0 && j === 0) || (i === 1 && j === 1) || (i === 2 && j === 2)) {
            //console.log(array[i][j])
            baseDeDatos += array[i][j] + ",";
        } 
    }
};  
console.log(baseDeDatos);

