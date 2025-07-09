//Generador de patron de asteriscos
//crear una funcion "generarPatron(n)" que dibuje un patron como este (para n = 3);
// * 
// **
// ***
// **
// *


//function generarPatron(n) {
  let asterisco = "*";
  let longitud = 3;

  for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < i; j++) {
      console.log([i], "." + asterisco);
      
    }

  }
//}
//generarPatron(3)