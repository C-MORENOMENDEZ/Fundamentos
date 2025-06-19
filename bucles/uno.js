let veces = 10;

for (
  let index = 0; //Definir iterador
  index < veces; //Si se cumple esta condicion se repite
  index++ //Sumarle 1 al iterador
) {
  //console.log(`${index} Hola`);
}

for (let index = 0; index < 5; index++) {
  if(index === 0){
    //console.log(`*`);
  }
  if(index === 1){
    //console.log(`**`);
  }
  if(index === 2){
    //console.log(`***`);
  }
}

for (let index = 0; index < 10; index++) {
  let texto = "";
  
  for (let subindex = 0; subindex < (index + 1); subindex++) {
    texto = texto + '*';
  }
  console.log(texto);
}

//       *
//      ***
//     *****
//    *******
//   *********
//   *********
//    *******
//     *****
//      ***
//       *