//Codigo basico
const ajedrezBasico = () => {
  const negro = "□";
  const blanco = "■";

  for (let i = 0; i < 8; i++) {
    //Validar si es par
    if (i % 2 == 0) {
      let fila = "";
      for (let j = 0; j < 8; j++) {
        if (j % 2 == 0) {
          fila = fila + negro;
        } else {
          fila = fila + blanco;
        }
      }
      console.log(fila);
    } else {
      let fila = "";
      for (let j = 0; j < 8; j++) {
        if (j % 2 == 0) {
          fila = fila + blanco;
        } else {
          fila = fila + negro;
        }
      }
      console.log(fila);
    }
  }
};

//Optimizado visualmente
const negro = "□";
const blanco = "■";

const mostrarFila = (primerCuadro, segundoCuadro) => {
  let fila = "";
  for (let j = 0; j < 8; j++) {
    fila += (j % 2 == 0)? (primerCuadro): (segundoCuadro)
  }
  console.log(fila);
};

for (let i = 0; i < 8; i++) {
  //Validar si es par
  (i % 2 == 0)?  mostrarFila(negro, blanco):  mostrarFila(blanco, negro);
}


//Optimizar la concatenación
let nombreCompleto = "Yeison";
const apellido = "Gomez";

nombreCompleto += ' ' + apellido;
//console.log(nombreCompleto);
