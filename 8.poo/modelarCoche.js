class coche {
  constructor(marca, velocidadActual) {
    this.marca = marca
    this.velocidadActual = velocidadActual

  }
  acelerar() {
    this.velocidadActual += 1
    console.log(`Coche ${this.marca} está acelarando ${this.velocidadActual} `);
  }
  frenar() {
    this.velocidadActual -= 1
    console.log(`Coche ${this.marca} freno ${this.velocidadActual} `);
  }
};

const coche1 = new coche("BMW", 0);
const coche2 = new coche("Ferrari", 0);
const coche3 = new coche("Chevrolet", 0);

coche1.acelerar();
coche1.frenar();
coche2.acelerar();
coche2.frenar();
coche3.acelerar();
coche3.frenar();


const coches = [coche1, coche2, coche3];

for (let i = 0; i < 3; i++) {
  coche1.acelerar();
};

for (let i = 0; i < 5; i++) {
  coche2.acelerar();
};

for (let i = 0; i < 1; i++) {
  coche3.acelerar();
};

console.log(coches);
