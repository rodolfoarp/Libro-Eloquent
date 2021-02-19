/* Dado las edades de 10 individuos. Determine el promedio de los menores de edad,
la cantidad de alumnos mayores y menores al promedio e imprima el arreglo resultante.*/

let alumnos = [
    {nombre: 'Rodolfo', edad: 21},
    {nombre: 'Jose', edad: 14},
    {nombre: 'Jackson', edad: 18},
    {nombre: 'Adrian', edad: 15},
    {nombre: 'Reysmer', edad: 29},
    {nombre: 'Angel', edad: 30},
    {nombre: 'Ydermar', edad: 17},
    {nombre: 'Jefferson', edad: 20},
    {nombre: 'Mariangela', edad: 7},
    {nombre: 'Jana', edad: 13},
];

function PromMenorDeEdad(alumno){
    const menor = 18
    let suma = 0; 
    for (let i = 0; i < alumno.length; i++){
        if(alumno[i].edad < menor){
            suma += alumno[i].edad;
        }
    }
     return Math.ceil(suma/alumno.length);
}

function mayorMenor(estudiante){
    let a = 0, b = 0;
    for(let j = 0; j < estudiante.length; j++){
        if(estudiante[j].edad > PromMenorDeEdad(estudiante) ){
            a += 1;
        } else {
            b += 1;
        }
    } 
    return [a,b]; 
}

console.log(PromMenorDeEdad(alumnos));
console.log(mayorMenor(alumnos));