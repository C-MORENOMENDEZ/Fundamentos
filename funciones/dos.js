
//Parametros por defecto
const saludar = (nombre = "Invitado") => {
  return `!Hola, ${nombre}!`;
}

//console.log(saludar('Yeison'));

const saludar2 = (nombre) => {
  if(nombre)
    return `!Hola, ${nombre}!`;
  
  //ESTO ES UNA BUENA PRACTICA
  return undefined;
}

//Ejemplo con ternarias
const saludar3 = () => "Hola";
const despedir = () => "Adios";

const esSaludo = false;
const mensaje = esSaludo? saludar3(): despedir();
console.log(mensaje);

const saludarDespedir = (isSaludo) => isSaludo? 'Hola': "Adios";
const inicioSesion = () => {
  //1. Funcion que reciba correo y contrasena
  //1.1 Valida en la base de datos

  //Auditoria de inicios de sesiones
  //2. Registra en la base de datos que inicio sesion

  //Enviar correo
  //3. Envia un correo de bienvenida

  //Enviar notificaciones al celular = Tipo de mensaje
  //4 Enviar una notificacion al celular
}