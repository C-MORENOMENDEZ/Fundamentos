//filtrar los que tenga valor mayor a 500
//ordenarlo del mas barato al mas caro
//calcular el pecio total

const products = [
    { name: 'Smartphone', price: 800 },
    { name: 'laptop', price: 1200 },
    { name: 'Monitor', price: 300 },
    { name: 'Keyboard', price: 100 },
    { name: 'Tablet', price: 600 },
]

const productosMayor500 = products.filter(item => item.price > 500)
const organizado = productosMayor500.sort((a, b) => a.price - b.price);
const precioTotal = organizado.reduce((acc, currentValue) => acc + currentValue.price, 0);

console.log(organizado);
console.log(precioTotal);

