//validacion de contraseña segura
//crea una funcion "validarContrasena(contraseña)" que retorne true si la contraseña cumple
//longitud mayor o igual a 8 caracteres
//Almenos 1 mayuscula, 1 minuscula y 1 numero
//noo contiene espacios


function validarContrasena(contrasena) {
    let longitud = 0;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspacio = false;
    let tieneMayuscula = false;

    for (let i = 0; true; i++) {
        if (contrasena[i] === undefined) break;
        longitud++;

        if (contrasena[i] >= 'A' && contrasena[i] <= 'Z') {
            tieneMayuscula = true;

        } else if (contrasena[i] >= 'a' && contrasena[i] <= 'z') {
            tieneMinuscula = true;

        } else if (contrasena[i] >= '0' && contrasena[i] <= '9') {
            tieneNumero = true;

        } else if (contrasena[i] === ' ') {
            tieneEspacio = true;
        }
    }

    return (
        longitud >= 8 &&
        tieneMayuscula &&
        tieneMinuscula &&
        tieneNumero &&
        !tieneEspacio
    );
}

console.log(validarContrasena("Abc12345"));  // true (cumple todo)
console.log(validarContrasena("abc12345"));  // false (falta mayúscula)
console.log(validarContrasena("Abc 1234")); // false (tiene espacio)
console.log(validarContrasena("ABCD1234")); // false (falta minúscula)
console.log(validarContrasena("A1b2c3d4")); // true (cumple todo)

console.log("===============");

//Con metodos

function validarContrasena(contrasena) {
    // Verificar longitud (>= 8)
    const longitudValida = contrasena.length >= 8;

    // Verificar al menos 1 mayúscula, 1 minúscula y 1 número usando regex
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);

    // Verificar que no tenga espacios
    const noTieneEspacios = !/\s/.test(contrasena);

    // Retornar true solo si TODAS las condiciones se cumplen
    return longitudValida &&
        tieneMayuscula &&
        tieneMinuscula &&
        tieneNumero &&
        noTieneEspacios;
}

console.log(validarContrasena("Abc12345"));
console.log(validarContrasena("abc12345"));
console.log(validarContrasena("Abc 1234"));
console.log(validarContrasena("ABCD1234"));
