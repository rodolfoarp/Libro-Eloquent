/*Invertir una matriz: Los arrays tienen un método inverso que cambia 
el array invirtiendo el orden en que aparecen sus elementos. Para este 
ejercicio., se escriben dos funciones "reverseArray" y "reverseArrayInPlace"
ninguna de las dos puede utilizar el método inverso estándar. */


function reverseArray(array){
    for (let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length -1; j++) {
            if (array[j] < array[j + 1]){
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1]= aux;
            }
        }
    }
    return array;
}

function reverseArrayInPlace (a){
    if (a.length < 1){
        return 1;
    } else {
        let left = [];
        let right = [];
        let pivot = a[0];
        for (let i = 1; i < a.length; i++){
            if (pivot < a[i]){
                left.push(a[i]);
            } else{
                right.push(a[i]);
            }
        }
    }
    return [].concat(reverseArray(left),pivot,reverseArray(right));
}

console.log(reverseArray(["A","B","C"]));
const arrayValue = [1,2,3,4,5];
reverseArray(arrayValue);
console.log(arrayValue); 