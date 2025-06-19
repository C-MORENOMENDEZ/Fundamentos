//Calcular el total de un carrito
//Dado un array "carrito" con objetos que tienen "precio" y "cantidad", calcular el total a pagar.
//outpoo: // 70 (20*2 + 30*1)

const carrito = [
    {producto: "Camisa", precio: 20, cantidad: 2 },
    {producto: "pantalon", precio: 30, cantidad: 1 },
];

const cantidad = carrito.reduce((acc, currentValue) => acc + currentValue.cantidad, 0);
console.log(cantidad);

const precioTotal = carrito.reduce((acc, currentValue) => acc + currentValue.precio, 0);
console.log(precioTotal);

