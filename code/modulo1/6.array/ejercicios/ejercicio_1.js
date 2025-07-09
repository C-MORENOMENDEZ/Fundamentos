const temperatura = [
    {dia: 'lunes', grado: 40 },
    {dia: 'martes', grado: 22 },
    {dia: 'miercoles', grado: 35 },
    {dia: 'jueves', grado: 21 },
    {dia: 'viernes', grado: 32 },
    {dia: 'sabado', grado: 30 },
    {dia: 'domingo', grado: 24 },
];

//Lunes, miercoles, y viernes son los dias con temperaturas mayores a 30 grado
//son 3 dias

let diasConTemperaturaAlta = 0;
let listaDias = "";

for (let i = 0; i < temperatura.length; i++) {
    if (temperatura[i].grado > 30) {
        diasConTemperaturaAlta++;
        listaDias += (i === 0? "": ", ") + temperatura[i].dia;
    }    
};

console.log(listaDias, 'los dias con temperaturas mayores a 30 grado');
console.log(`Son ${diasConTemperaturaAlta} días`);

//Hecho con metodos

const diasConTemperaturaAlta2 = temperatura.filter(item => item.grado > 30);
const dias = diasConTemperaturaAlta2.map((item, index) => {
    if (index + 1 === diasConTemperaturaAlta2.length) {
     return  'y ' + item.dia;   
    }
    return item.dia;
});
let diasTemperaturaAlta = dias.join(', ');


console.log(diasTemperaturaAlta, 'son dias con temperaturas mayores a 30 grado');
console.log(`Son ${diasConTemperaturaAlta2.length} dias`);
