/**
 * 
 * @method imprimir
 * Método con el que se busca imprimir los números en cosola.
 * Se convierte a String el array (,)
 */
function imprimir(numeroImprimir, arrayAux) {
    var b = [arrayAux.length];
    for (let i = 0; i < arrayAux.length; i++) {
        b[i] = arrayAux[i].concat(" ", numeroImprimir[i].toString());
    }
    return b;
}
/**
 * 
 * @method imprimirReal
 * Método para convertir el string anterior en matriz y quitando
 * los espacios llenos de (,) por espacios en blanco
 * usando una expresión regular.
 */
function imprimirReal(aux) {
    var b = [];
    for (let i = 0; i < aux.length; i++) {
        b[i] = aux[i].replace(/,/g, ' ');
    }

    for (let j = 0; j < b.length; j++) {
        console.log(b[j]);
    }


}


module.exports = {
    imprimir,
    imprimirReal
}