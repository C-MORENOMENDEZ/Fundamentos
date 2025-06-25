//Añade la propiedad marca con valor "Hp"
//Reduce el precio en un 10%
//elimina la propiedad stock

const producto = {
    nombre: "Laptop",
    precio: 1200,
    stock: 5,
}
producto.marca = "hp";

console.log(producto);

producto.precio = 1080;

console.log(producto);

delete producto.stock;

console.log(producto);


