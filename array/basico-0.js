//Arrays es una caja de forma de variable donde almacena datos mas completos

let frutas = ['manzana', 'banana', 'naranja'];
let numeros = [1, 2, 3, 4, 5];
let personas = [
    { nombre: "christian", edad: 20 },
    { nombre: "camilo", edad: 21 }
];
const color = ['amarillo', 'rojo', 'verde'];


console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

console.log(numeros[3]);

console.log(personas[1]);

console.log(color[1]);

for (const persona of personas) { //este for Enseña el objeto como tal
    console.log(persona);
 
}

for (const index in numeros) { // Este for sirve para encontrar algo especifico que esta buscando en el array
    if (numeros[index] === 5)
        console.log(index);
}
for (const index in frutas) { // Este for sirve para encontrar algo especifico que esta buscando en el array
    if (frutas[index] === "naranja")
        console.log(index);
}


//Los metodos son codigos existente que nos ahorra codigo, cumplen con una tarea especifica
//meodo .find() = esto es igual al for en donde busca algo en especifico del array.

let naranja = frutas.find((element) => element === 'naranja'); //lo mismo que el for(in) solo que con un metodo.
console.log(naranja);

let cedula = '123456789';
let ana = personas.find((element) => element.cedula === cedula);
console.log(ana);
