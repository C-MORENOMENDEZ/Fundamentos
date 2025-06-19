function validarContrasena(contrasena) {

    let validarLongitud = contrasena.length >= 6;

    let validarNumero = /\d/.test(contrasena);

    return validarLongitud === true && validarNumero === true;
}

console.log(validarContrasena("abc123"));
console.log("___________________");


