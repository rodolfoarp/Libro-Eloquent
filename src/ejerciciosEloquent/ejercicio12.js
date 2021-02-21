/* Se tiene la siguiente tabla de registro de un abasto;
Calcular: a.Total de Lunes y Martes.
          b.Promedio del Viernes.
          c.Promedio del Refresco. */

const productos = [
    {producto: 'Refresco', precioLV:[200,150,256,325,741]},
    {producto: 'Malta', precioLV:[145,200,78,41,26]},
    {producto: 'Jugo', precioLV:[145,125,136,143,100]},
    {producto: 'Leche', precioLV:[12,15,14,18,73]},
];

function totalLunes(precio,index = 0) {
    let sumaL = 0;
    for(let i = 0; i < precio.length; i++){
        sumaL += precio[i].precioLV[index];
    }
    return sumaL
};

function totalMartes(precio, index = 1) {
    let sumaM = 0;
    for(let i = 0; i < precio.length; i++){
        sumaM += precio[i].precioLV[index];
    }
    return sumaM
};

function promedioRefresco(precio, index = 0) {
    let sumaR = 0;
    for(let i = 0; i < precio[index].precioLV.length; i++){
        sumaR += precio[index].precioLV[i];
    }
    return sumaR/precio[index].precioLV.length;
}

console.log(totalLunes(productos));
console.log(totalMartes(productos));
console.log(promedioRefresco(productos));




