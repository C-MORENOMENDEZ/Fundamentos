function cuadradoDeCaracteres(caracter1, caracter2, fila) {

    for (let i = 0; i < fila; i++) {
        let cuadrado = "";
        for (let j = 0; j < fila; j++) {
            if (i % 2 === 0) {
                cuadrado += caracter1
            } else {
                cuadrado += caracter2
            }
                
        }
        console.log(cuadrado);
    }
}

cuadradoDeCaracteres("⇝", "⇜", 10);
cuadradoDeCaracteres("°", "*", 8);
cuadradoDeCaracteres("⌦", "⌫", 6)
