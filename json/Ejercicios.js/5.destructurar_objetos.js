//Usa destructuracion para extraer nombre y precio.
//crear una funcion "formatearProdcuto" que retorne:
//  "producto: [nombre], precio: $[precio]"

const producto = {
    id: 1,
    nombre: "Lactop",
    precio: 999.99,
    stock: 10,
    formatearProducto: function () {
        console.log(`Producto: ${this.nombre} Precio: ${this.precio}`);
        
    }
};

producto.formatearProducto();