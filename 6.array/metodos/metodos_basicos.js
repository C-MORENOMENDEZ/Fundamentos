//metodo ."push()" su accion es agragar elementos al final del array

//los elementos son los que va dentro del array
//ejemplo: 'manzana', 'banana', 'naranja.

let frutas = ['manzana', 'banana', 'naranja'];

frutas.push('kiwi'); //Aqui la consola me muestra el elemento agregado al final. En este caso 'kiwi'.

console.log(frutas);

//si quiero que el elemento se guarde en un sitio especifico, se puede hacer ejercicio de logica.
console.log("=========");

//metodo ".pop()" su accion es eleminar el ultimo elemento del array

frutas.pop() //Elimina a 'kiwi' - es el utlimo en el array

console.log(frutas);

console.log("===========");

//Metodo ".length" Le el tamaño del array (longitud)

console.log(frutas.length); //enseña 3 que son los elementos del array

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
for (const key in frutas) {
console.log(key);

}