//Contar Numeros pares en un rango
//Crear una función contarPares(inicio, fin) que cuente cuantos numeros pares hay entre inicio y fin (incluyendolos si son pares).


function contarPares(inicio, fin) {
    let totalDePares = 0;

if (inicio > 0 ) {
    
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 == 0) {
            totalDePares += 1;
            // console.log(i, "par");
            //console.log(totalDePares);
        } else {
            console.log(i , "impar");
            
        }
        
    }
} else {
    console.log(inicio , "Numero Invalido");
    
}
    
    //console.log("El total de numeros pares entre " + inicio + " y " + fin + " es: " + totalDePares);
    console.log(`El total de numeros pares entre ${inicio} y ${fin} es: ${totalDePares}`);
    console.log(totalDePares);
}

contarPares(1, 10);
contarPares(4, 8);
contarPares(-5, 7);
contarPares(7, 9);


//1. 1impar
//2. 2 par
//3. 3impar
//4. 4 par
//5. 5 impar

//pares = 2

//1. 1impar
//2. 2 par
//3. 3impar
//4. 4 par
//5. 5 impar
//6. 6 par
//7. 7 impar
//8. 8 par
//9. 9 impar
//10. 10 par
