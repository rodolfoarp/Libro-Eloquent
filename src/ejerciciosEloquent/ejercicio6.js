/* Escribe una función "cuentaFs" que tome una cadena como su único
argumento y regrese un número que indique cuantos caracteres "F" mayúscula
hay en la cadena. A continuación, escribe una funcióon llamada cuentaCaracter 
que se comoporte como cuentaFs, con la diferencia de que tome un segundo caracter 
que indique el caracter que será contado(en vez de sólo caracteres “F”). 
Reescribe cuentaFs para hacer uso de esta nueva función. */

function cuentaCaracter(cadena,caracter){
    let cadenaString = String(cadena);
    let letraString = String(caracter) 
    let j = 0;
    let counter = 0;
    while(counter <= cadenaString.length){
        if (cadenaString.charAt(counter) == letraString) {
            j += 1;
        }
        counter += 1;
    }
    console.log (j);
};

console.log(cuentaCaracter("Ferrocarril", "r"));