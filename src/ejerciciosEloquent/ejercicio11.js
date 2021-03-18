function arrayToList(array){ 
    let list = null
    for(let i = array.length - 1; i >= 0 ; i--){
        list = { value: array[i], rest: list}
    };
    return list;
};

function listToArray(list){
    let array = [];
    for(let nodo = list; nodo; nodo = nodo.rest){
        array.push(nodo.value);
    }
    return array
}

console.log(arrayToList([10,20,30]))
console.log(listToArray(arrayToList([10,20,30])))

