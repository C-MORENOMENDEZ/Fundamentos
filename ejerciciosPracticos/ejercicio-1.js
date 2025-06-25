//validacion de contraseña segura
//crea una funcion "validarContrasena(contraseña)" que retorne true si la contraseña cumple
//longitud mayor o igual a 8 caracteres
//Almenos 1 mayuscula, 1 minuscula y 1 numero
//noo contiene espacios


function validarContrasena(contrasena) {

    let validarLongitud = false;

    for (let i = 0; i < 8; i++) {
        if (i >= 8 && contrasena[i] !== undefined) {
            validarLongitud = true;
        }
    }

    let validarNumero = false;

    for (let i = 0; i < contrasena.length; i++) {
        if (parseInt(contrasena[i]) >= 0) {
            validarNumero = true;

        }
    }

    let validarMayuscula = false

    for (let i = 0; i < contrasena.length; i++) {
        if (/[A-Z]/.test(contrasena[i])) {
            return true;
        }
    }
    /*let validarMinuscula = function () {
        for (let i = 0; i < contrasena.length; i++) {
            if (typeof contrasena === "string") {
                return /[a-z]/.test(contrasena);

            }

        }
    };*/



    return validarLongitud === true && validarNumero === true && validarMayuscula === true
};

console.log(validarContrasena("Abc12345"));
console.log(validarContrasena("abc12345"));
console.log(validarContrasena("aA1"));