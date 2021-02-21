function arrayLista(array){
    const lista = {};
    if (array.length <= 0){
        return lista;
    } else if (array.length === 1){
        lista.valor == array.shift();
        lista.resto = null;
        return lista;
    } else {
        lista.valor = array.shift();
        lista.resto = arrayLista(array);
    }
    return lista;
}

console.log(arrayLista([1,2,3]))