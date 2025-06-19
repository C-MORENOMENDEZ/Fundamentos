let asterisco = "*";

const mostrarArbolito = (tamano) => {
  for (let i = 0; i < tamano; i++) {
    //Mostrar espacios
    let espacios = "";
    for (let j = 0; j < ((tamano - 1) - i); j++) {
      espacios += " ";
    }
    console.log(espacios + asterisco);
    asterisco += "**";
  }
}

mostrarArbolito(10);

//    *
//   ***
//  *****
// *******
//*********

//4 espacios, 1 asterisco
//3 espacios, 3 asterisco
//2 espacios, 5 asterisco
//1 espacios, 7 asterisco
//0 espacios, 9 asterisco