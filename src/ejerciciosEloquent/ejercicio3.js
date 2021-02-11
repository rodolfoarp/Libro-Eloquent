let hash = "#";
let empty = "";

for (let i = 1; i <= 8; i++ ){
    for ( let j = 1; j <= 8; j++){
        if (i % 2 == 0){
            if ( j % 2 == 0){
                console.log();
            } else {
                console.log(hash);
            }
        } else {
            if( j % 2 == 0){
                console.log(hash);
            } else {
                console.log()
            }
        }
    }
}

function rellenoConCero(numero, ancho) {
    let cadena = String(numero);
    while (cadena.length < ancho)
      cadena = "0" + cadena;
    return cadena;
  }
  
  function imprimeInvantarioGranja(vacas, pollos, puercos) {
    console.log(rellenoConCero(vacas, 3) + " Vacas");
    console.log(rellenoConCero(pollos, 3) + " Pollos");
    console.log(rellenoConCero(puercos, 3) + " Puercos");
  }
  
  imprimeInvantarioGranja(7, 16, 3);


    
  