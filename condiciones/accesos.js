let edad = 18;
let tienePermiso = true;

if (edad >= 18 && tienePermiso) {
  //console.log("Acceso concedido para el evento");
} else if (edad >= 18 || tienePermiso) {
  //Entrar cuando es mayor de edad o si tiene permiso
  //Si soy menor de edad, y tengo permiso, entra aca
  //Si soy mayor de dad y no tengo permiso
  //console.log("Acceso parcial: Necesitas autorización especial");
} else {
  //console.log("Acceso denegado");
}

//let A = true; let B = true;

//Operadores = y (&&), o (||), ~ (!)

//Operador y (&&)
//A = Leche && B = Galleta

//= (true && true) = true
//= (true && false) = false
//= (false && true) = false
//= (false && false) = false

//Operador o (||)
//A = Leche || B = Galleta

//= (true || true) = true
//= (true || false) = true
//= (false || true) = true
//= (false || false) = false


//Operador negar ~ (!)

//A = true && B = false

//if(!A && B)
//!A = !Leche && B = Galleta
//= (false && false) = false

//if(!A && !B)
//!A = !Leche && !B = !Galleta
//= (false && true) = false

//A = true, B = false, C = true
//(!A || B) && (C || !C)
//1. Asignar variable
//2. Despejamos
//(!true || false) && (true || !true)
//(false || false) && (true || false)
//(false) && (true) = false

