/* Escribe un bucle que haga siete llamadas a "console.log"
para dar salida al siguiente triangulo */

/* Solución 1: */

let numeral = '########';
let counter =  7;

while (counter > 0) { 
    console.log(numeral.substr(counter, numeral.length));
    counter -= 1;
}

/* Solución 2 */

let hash = " ";

for (let i = 1; i <= 7; i++ ){
    console.log(hash += "#");
}

