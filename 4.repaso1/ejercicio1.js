//Crear una función generarPatron(n) que genere un patron como el siguiente 

function generarPatron(n) {
    for (let i = 1; i <= n; i++) {  // Repite desde 1 hasta n
        let linea = "";             // Crea un string vacío
        for (let j = 0; j < i; j++) { // Agrega el número "i" veces
            linea += i;               // Concatena el número en cada vuelta
        }
        console.log(linea);          // Imprime la línea terminada
    }
}
// Ejemplo:

generarPatron(5);

//fin

function letras(n) {
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z']; // Array con corchetes
  
  for (let i = 1; i <= n; i++) { 
    let linea = "";
    for (let j = 0; j < i; j++) {
      linea += abc[i-1];
    }
    console.log(linea);
  }
}
letras(3);