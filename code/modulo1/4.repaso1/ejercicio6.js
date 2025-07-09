


//Contar letras de la contrasena
  //La longitud la contrasena >= 6
  //Validar que al menos tenga 1 numero

function validarContrasena(contrasena) {
  let validarLongitud = false;

  //Validar la longitud de la contrasena
  for (let i = 0; i < 6; i++) {
    if(i >= 5 && contrasena[i] !== undefined){
      validarLongitud = true;
    }
  }

  let validarNumero = false;

  //Validar que al menos tenga 1 numero
  for (let i = 0; i < contrasena.length; i++) {
    if(parseInt(contrasena[i]) >= 0){
      validarNumero = true;
    }
  }

  return validarLongitud === true && validarNumero === true;
}

console.log(validarContrasena("abc123")); //true
console.log(validarContrasena("hola")); //false
console.log(validarContrasena("holahola3")); //true
console.log(validarContrasena("12345")); //false
console.log(validarContrasena("1234576768")); //true
console.log(validarContrasena("ab")); //falso

