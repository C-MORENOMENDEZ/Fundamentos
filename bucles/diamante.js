let asterisco = "*";

//Primera parte
for (let i = 0; i < 5; i++) {
  //Mostrar espacios
  let espacios = "";
  for (let j = 0; j < 4 - i; j++) {
    espacios += " ";
  }
  console.log(espacios + asterisco);
  asterisco += "**";
}

//Segunda parte
let espacios = " ";
let cantidadAsteriscos = 7;
let asteriscos = "";
for (let i = 0; i < 4; i++) {
  //Crear la cadena de asteriscos
  for (let j = 0; j < cantidadAsteriscos; j++) {
    asteriscos += "*";
  }
  //Mostrar mis espacios y asteriscos
  console.log(espacios + asteriscos);
  espacios += " ";
  cantidadAsteriscos -= 2;
  asteriscos = "";
}


//    *
//   ***
//  *****
// *******
//*********
// *******
//  *****
//   ***
//    *

//4 espacios, 1 asterisco
//3 espacios, 3 asterisco
//2 espacios, 5 asterisco
//1 espacios, 7 asterisco
//0 espacios, 9 asterisco
//1 espacios, 7 asterisco
//2 espacios, 5 asterisco
//3 espacios, 3 asterisco
//4 espacios, 1 asterisco