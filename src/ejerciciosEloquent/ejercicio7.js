/* La suma de un rango: Escribe una función "range" que tome dos argumentos, "start" y "end"
y devuelva una matriz que contenga todos los números desde el inicio hasta el final (incluido).
A continuación, escribe una función "sum" que tome una Matriz de números y devuelva la suma de los
mismos.
    Como asignación extra, modifique su función de rango para que tome un tercer argumento opcional
que indique el valor "step" utilizado al construir el array. Si no se da ningún paso, los elementos 
suben en incrementos de uno, lo que corresponde al comportamiento antiguo. Asegúrate de que también 
funcione para valores negativos. */

function range (start, end , step) {
    const list = [];
    let inicio = start;
    let final = end; 
    if (inicio > final && step == undefined){
        while(inicio >= final ) {
            list.unshift(final);
            final += 1;
        }
    } else 
    if (inicio > final && step < 0) {
        while(inicio >= final){
            list.push(inicio)
            inicio -= Math.abs(step);
        }
    } else 
    if (inicio < final && step == undefined){
        while(inicio <= final){
            list.push(inicio);
            inicio += 1;
        }
    } else
    if (inicio < final && step > 0){
        while(inicio <= final){
            list.push(inicio);
            inicio += step;
        }
    }

    return list;
}

function sum (numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}

console.log(range(5,2,-3));
console.log(sum(range(5,2,-3)));