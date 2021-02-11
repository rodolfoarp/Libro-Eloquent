/* Escribe una función recursiva "esPar" que corresponda a esta descripción.
La función debería aceptar un "número" como parámetro y regresar un Booleano.
Pruebala con 50 y 75. Observa cómo se comporta con -1.¿Por qué? ¿Puedes pensar
en alguna forma de componer esto? */ 

function esPar (número){
    if (número < 0){
        if (número % 2 == 0){
            return true
        } else {
            return false
        }
    } else 
    if (número == 0){
        return true
    } else
    if (número == 1){
        return false
    } else {
        return esPar(número -2);
    }
}

console.log (esPar(50));
console.log(esPar(75));
console.log(esPar(-1));
console.log(esPar(-4));


