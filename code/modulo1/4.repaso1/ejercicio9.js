//Crear una funcion que se llame tablaDeMultipolicar(numero) que imprima la tabla de multiplicar del numero ingresado.

//tablaDeMultiplicar(5)
//Output:
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//5 x 4 = 20
//5 x 5 = 25
//5 x 6 = 30
//5 x 7 = 35
//5 x 8 = 40
//5 x 9 = 45
//5 x 10 = 50


//tablaDeMultiplicar(5, 15)
//Output:
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//5 x 4 = 20
//5 x 5 = 25
//5 x 6 = 30
//5 x 7 = 35
//5 x 8 = 40
//5 x 9 = 45
//5 x 10 = 50
//5 x 11 = 55
//5 x 12 = 60
//5 x 13 = 65
//5 x 14 = 70
//5 x 15 = 75


function tablaDeMultiplicar(n, nMultiplicador) {
for (let i = 1; i <= nMultiplicador; i++) {
    console.log(n, "x", i, "=", (i * n));
    }
}    

tablaDeMultiplicar(5, 12);
tablaDeMultiplicar(82, 10);