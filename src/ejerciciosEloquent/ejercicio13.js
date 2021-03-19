/* Aplanamiento: Use el método "reduce" en combinación con el método "concat"
para "aplanar" un array de arrays en un único array que tenga todos los elementos
de los arrays originales */ 

let arrays = [[1,2,3,4],[5,6,7],[8,9,10,11,12]];

let flattening = arrays.reduce((acum, num) => acum.concat(num));

console.log(flattening);
    