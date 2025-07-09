//metodo "forEach" es lo mismo, recorre el array
frutas.forEach(fruta => console.log(fruta));

//El metodo forEach es un metodo que no retorna
 const otrasFrutas = frutas.forEach((element) => {
    console.log(element);
 });

 console.log(otrasFrutas);
 
//metodo "map" A diferencia del forEach este si retorna algo

const otrasFrutas2 = frutas.map((element) => {
    if (element === 'naranja') {
        return 'Pera'; //Si encuentra a naranja, este sera remplazado por pera.-
    }else {
        return element;
    }
});

console.log(otrasFrutas2);

//Este metodo es muy utilizado para las base de datos, es bueno tenerlo en cuenta.


//metodo filter(), crea un nuervo array con todos los elementos que cumplan con la condicion dada.

let cantidadFrutas = frutas.filter((frutas) => frutas.length > 6);
console.log(cantidadFrutas);

//metodo find() de Array instancias devuelve el primer elemento del array proporcionado que cumple con la función de prueba.
// Si ningún valor cumple con la función de prueba, undefinedse devuelve .

const otrasFrutas3 = frutas.find((element) => element > 'manzana'); //retorna naranja ya que es la unica fruta que
//cumple con la misma longitud de manzana = 6 y naranja = 6.
console.log(otrasFrutas3);