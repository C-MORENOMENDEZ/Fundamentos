//Cuenta regresiva con metodo recursivo
const cuentaRegresiva = (numeroInicial) => {
  console.log(numeroInicial);
  
  if(numeroInicial === 0){
    console.log('Fin!');
    return undefined;
  }
  
  cuentaRegresiva(numeroInicial - 1);
}

cuentaRegresiva(5);

//1. Muestra 5, mi nuevo numero es 4
//3. Muestra 4, mi nuevo numero es 3
//4. Muestra 3, mi nuevo numero es 2
//5. Muestra 2, mi nuevo numero es 1
//6. Muestra 1, Muestra Fin