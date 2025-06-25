//crear un metodo que me cuente cuantas letras hay en la palabra
//Outoput
//contarletrtas("Murcielago", "u");
//contarletras("Panda", "a");
//contarletras("Gato", "e");

function contarLetras(palabra, letra) {
  contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      contador ++;
    }
  }
return contador;  
}

console.log(contarLetras("murcielago", "u"));
console.log(contarLetras("Panda", "a"));
console.log(contarLetras("Gato", "e"));