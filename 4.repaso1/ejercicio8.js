/*Crea una funcion sumarHastaNegativo(10) que pida numero al usuario y los sume hasta que ingrese un
numero negativo*/

//sumarHastaNegativo(5)
//sumarHastaNegativo(10)
//sumarHastaNegativo(5)
//sumarHastaNegativo(5)
//sumarHastaNegativo(-1)
//sumarHastaNegativo(5)
//sumarHastaNegativo(10)


let totalSuma = 0;
let memoria = false; 

function sumarHastaNegativo(numero) {
    if (numero != -1 && memoria === false) {
        totalSuma += numero;
    } else { 
        memoria = true;
    }
}

sumarHastaNegativo(5);  //5 != -1 = verdad; memoria = false; se suma
sumarHastaNegativo(10); //10 != -1 = verdad; memoria = false; se suma
sumarHastaNegativo(5);  //5 != -1 = verdad; memoria = false;  se suma
sumarHastaNegativo(5)   //5 != -1 = verdad; memoria = false;  se suma
sumarHastaNegativo(-1); //-1 != -1 = verdad; memoria = true;  no suma
sumarHastaNegativo(5);  //5 != -1 = verdad; memoria = true;  no suma
sumarHastaNegativo(10)  //10 != -1 = verdad; memoria = true;  no suma

console.log(totalSuma);
