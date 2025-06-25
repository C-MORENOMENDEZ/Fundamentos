//crear funcion que valide que el numero es primo
//Si asi es entonces true
//Si no es entonces else


function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    
    if (num === 2) { 
        return true;
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(esPrimo(3));
console.log(esPrimo(6));
console.log(esPrimo(2));
console.log(esPrimo(-1));




