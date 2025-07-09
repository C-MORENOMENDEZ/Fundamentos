//Encontrar el numero solitario
//dado a un array donde todos los numeros aparecen dos veces, excepto uno, escribe una funcion
//"encontrarSolitario(nums)" que retorne el numero unico.

function encontrarSolitario(numeros) {
    for (let i = 0; i < numeros.length; i++) {

        let contador = 0;

        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                contador++
            }

        }

        if (contador === 1) {
            console.log("el solitario es el", numeros[i]);
            return numeros[i]
        }
    }
    console.log("ninguno esta solito");

};

encontrarSolitario([4, 1, 2, 1, 2]);
encontrarSolitario([5, 5, 1, 2, 5, 1]);
encontrarSolitario([0, 5, 0, 5]);
encontrarSolitario([1, 1, 2, 2, 3]);
encontrarSolitario([5, 5, 1, 1]);
encontrarSolitario([1, 2, 2, 1])

//CON METODOS
console.log("===================");


function encontrarSolitario2(nums) {
    let encontrado = false;
    nums.forEach((num) => {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) {
            console.log("Soliotario:", num);
            encontrado = true;
        }
    });
    if (!encontrado) {
        console.log("Ninguno esta solito");
    }
};

encontrarSolitario2([4, 1, 2, 1, 2]);
encontrarSolitario2([2, 2, 1, 1, 2]);
encontrarSolitario2([6, 5, 6, 5, 9]);