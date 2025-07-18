class libro {
    constructor(titulo, autor, anoPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacion = anoPublicacion;
        this.disponible = true;
    }

    prestarLibro() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`El libro "${this.titulo}" del autor "${this.autor}" del año "${this.anoPublicacion}" ha sido prestado con exito!!. `);
        } else {
            console.log(`El libro "${this.titulo}" no esta disponible.`);
        }
    }

    devolverLibro() {
        if (!this.disponible) {
            this.disponible = true;
            console.log(`El libro "${this.titulo}" del autor "${this.autor}" del año "${this.anoPublicacion}" ha sido devuelto con exito!!. `);
        } else {
            console.log(`ERROR!! El libro "${this.titulo}" no se puede devolver dos veces."`);
        }
    }

    obtenerInformacion() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año de Publicación: ${this.anoPublicacion}`);
        console.log(`Disponible: ${this.disponible ? "Sí" : "No"}`);
    }

}


const nada = new libro("Nada", "Carmen Laforet", 1944);
const ficciones = new libro("Ficciones", "Jorge Luis Borges", 1944);
const harryPotter = new libro("Harry Potter y la piedra filosofal", "J.K. Rowking", 1997);
const elSeñordeLosAnillos = new libro("El señor de Los Anillos", "J.R.R. TOlkien", 1954);
const elExtranjero = new libro("El extranjero", "Albert Camus", 1942);
const delirio = new libro("Delirio", "Laura Restrepo", 2004);
const enAgostoNosVemos = new libro("En agosto nos vemos", "Gabriel Garcia Márquez", 2024);
/*
nada.prestarLibro();
console.log("=========");
nada.prestarLibro();
console.log("=========");
nada.devolverLibro();
console.log("=========");
nada.prestarLibro();
console.log("=========");
nada.devolverLibro();
console.log("=========");
nada.devolverLibro();
console.log("=========")
nada.obtenerInformacion();
console.log("=========");
nada.prestarLibro();
console.log("=========");
nada.obtenerInformacion();
console.log("=========");
nada.devolverLibro();
console.log("=========");
*/


class Usuario {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.librosPrestados = [];
    }

    tomarPrestado(libro) {
        if (libro.disponible) {
            libro.prestarLibro();
            this.librosPrestados.push(libro);
            console.log(`${this.nombre} ha tomado prestado el libro "${libro.titulo}" exitosamente!!`);
        } else {
            console.log(`El libro "${libro.titulo}" no esta disponible.`);

        }


    }

    devolverLibro(libro) {
        let encontrado = false;

        for (let i = 0; i < this.librosPrestados.length; i++) {
            if (this.librosPrestados[i] === libro) {
                libro.devolverLibro();
                this.librosPrestados.splice(i, 1);
                console.log(`${this.nombre} devolvio el libro "${libro.titulo}" con exito!!`);
                encontrado = true;
                break;

            }

        } if (!encontrado) {
            console.log(`ERROR!!. ${this.nombre} no tiene prestado el libro ${libro.titulo}. `);

        }

    }

}

const camilo = new Usuario("Camilo Moreno", 1010);
const laura = new Usuario("Laura Rey", 1414);
/*
camilo.tomarPrestado(nada);
console.log("=========");
camilo.devolverLibro(nada);
console.log("=========");
camilo.devolverLibro(nada);
console.log("=========");
camilo.tomarPrestado(harryPotter);
console.log("=========");
camilo.tomarPrestado(ficciones);
console.log("=========");
laura.tomarPrestado(delirio);
console.log("=========");
laura.tomarPrestado(harryPotter);
console.log("=========");
laura.devolverLibro(nada);
console.log("=========");
laura.tomarPrestado(enAgostoNosVemos);
console.log("=========");
*/


class Biblioteca {
    constructor() {
        this.libros = [];
        this.usuarios = [];
    }
    agregarLibro(libro) {
        let existe = false;

        for (let i = 0; i < this.libros.length; i++) {
            let libroExistente = this.libros[i];

            if (libroExistente.titulo === libro.titulo) {
                existe = true;
                break;
            }
        }
        if (existe) {
            console.log(`El libro ${libro.titulo} ya existe en la biblioteca`);
        } else {
            this.libros.push(libro);
            console.log(`El libro "${libro.titulo}" ha sido agregado al inventario con exito!!`);
        }
    }

    registrarUsuario(Usuario) {
        this.usuarios.push(Usuario);
        console.log(`El usuari ${Usuario.nombre} ha sido registrado con exito!!`);
    }

    buscarLibro(titulo) {
        let encontrado = false;
        for (let i = 0; i < this.libros.length; i++) {
            let libro = this.libros[i];
            if (libro.titulo === titulo) {
                console.log(`El libro "${titulo}" de ${libro.autor} publicado en ${libro.anoPublicacion} está en la biblioteca.`);
                encontrado = true;
                return libro;
            }
        }
        if (!encontrado) {
            console.log(`El libro "${titulo}" NO está en la biblioteca.`);
            return null;
        }
    }
}


const biblioteca = new Biblioteca();


biblioteca.agregarLibro(nada);
biblioteca.agregarLibro(harryPotter);
biblioteca.agregarLibro(enAgostoNosVemos);
biblioteca.agregarLibro(ficciones);
biblioteca.agregarLibro(elSeñordeLosAnillos);
biblioteca.agregarLibro(harryPotter);
biblioteca.agregarLibro(elExtranjero);
console.log(biblioteca);

console.log("=====================");
biblioteca.buscarLibro("nada");
console.log("=====================");
biblioteca.registrarUsuario(camilo);
console.log("=====================");
biblioteca.registrarUsuario(laura);
console.log("=====================");
camilo.tomarPrestado(nada);
console.log("=====================");
camilo.tomarPrestado(enAgostoNosVemos);
console.log("=====================");
laura.tomarPrestado(nada);
console.log("=====================");
laura.tomarPrestado(harryPotter);
console.log("=====================");
console.log(camilo);
console.log("=====================");
console.log(laura);
camilo.devolverLibro(harryPotter);
console.log("=====================");
camilo.devolverLibro(nada);
console.log("=====================");
biblioteca.buscarLibro("harryPotter");
console.log("=====================");
biblioteca.buscarLibro("ficciones");
console.log("=====================");
biblioteca.buscarLibro("delirio");

