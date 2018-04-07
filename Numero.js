


/**
 * 
 * @method numeros
 * Método para crear la matriz inicial con el tamaño
 * indicado inicialmente.
 */
function numeros(size) {
    var fila = (2 * size) + 3, columna = size + 2;
    var matrizNum = new Array(fila);
    for (let i = 0; i < fila; i++) {
        matrizNum[i] = new Array(columna).fill(" ");
    }
    return matrizNum;
}

/**
 * 
 * Conjunto de métodos para crear los números representados
 * por - y | en la matriz creada con el método anterior.
 */
function numeroCero(size) {
    var horizontal = "-", vertical = "|";
    var a = numeros(size);

    for (let i = 1; i < a.length - 1; i++) {
        a[i][0] = vertical;
        a[i][a[0].length - 1] = vertical;

    }

    for (let j = 1; j < a[0].length - 1; j++) {
        a[0][j] = horizontal;
        a[a.length - 1][j] = horizontal;

    }
    a[Math.floor((a.length) / 2)][a[0].length - 1] = " ";
    a[Math.floor((a.length) / 2)][0] = " ";
    return a;
}

function numeroUno(size) {
    var horizontal = "-", vertical = "|";
    var a = numeros(size);
   
    for (let i = 1; i < a.length - 1; i++) {
        a[i][a[0].length - 1] = vertical;
    }
    a[Math.floor((a.length) / 2)][a[0].length - 1] = " ";
    return a;
}

function numeroDos(size) {
    var horizontal = "-", vertical = "|";
    var a = numeros(size);

    for (let i = 1; i < a[0].length - 1; i++) {
        a[0][i] = horizontal;
        a[Math.floor((a.length) / 2)][i] = horizontal;
        a[a.length - 1][i] = horizontal;
    }
    for (let j = 1; j < a.length - 1; j++) {
        if ((a.length / 2) - 1 > j)
            a[j][a[0].length - 1] = vertical;
        if ((a.length / 2) < j)
            a[j][0] = vertical;

    }
    return a;
}

function numeroTres(size) {
    var horizontal = "-", vertical = "|";
    var a = numeros(size);
    for (let i = 1; i < a[0].length - 1; i++) {
        a[0][i] = horizontal;
        a[Math.floor((a.length) / 2)][i] = horizontal;
        a[a.length - 1][i] = horizontal;
    }

    for (let j = 1; j < a.length - 1; j++) {
        a[j][a[0].length - 1] = vertical;
    }
    a[Math.floor((a.length) / 2)][a[0].length - 1] = " ";

    return a;
}

function numeroCuatro(size) {
    var horizontal = "-", vertical = "|";
    var a = numeroUno(size);

    for (let j = 1; j < a.length - 1; j++) {
        if ((a.length / 2) - 1 > j)
            a[j][0] = vertical;
    }
    for (let j = 1; j < a[0].length; j++) {
        a[Math.floor(a.length / 2)][j] = horizontal;
    }
    a[Math.floor((a.length) / 2)][a[0].length - 1] = " ";
    return a;
}

function numeroCinco(size) {
    var horizontal = "-", vertical = "|";
    var a = numeros(size);

    for (let i = 1; i < a[0].length - 1; i++) {
        a[0][i] = horizontal;
        a[Math.floor((a.length) / 2)][i] = horizontal;
        a[a.length - 1][i] = horizontal;
    }
    for (let j = 1; j < a.length - 1; j++) {
        if ((a.length / 2) < j)
            a[j][a[0].length - 1] = vertical;
        if ((a.length / 2) - 1 > j)
            a[j][0] = vertical;

    }
    return a;
}

function numeroSeis(size) {
    var horizontal = "-", vertical = "|";
    var a = numeroCinco(size);
    for (let i = 1; i < a.length - 1; i++) {
        if (Math.floor((a.length) / 2) < i)
            a[i][0] = vertical;
    }

    return a;
}

function numeroSiete(size) {
    var horizontal = "-", vertical = "|";
    var a = numeroUno(size);
    for (let i = 1; i < a[0].length - 1; i++) {
        a[0][i] = horizontal;
    }
    a[0][a[0].length - 1] = " ";
    return a;
}

function numeroOcho(size) {
    var horizontal = "-", vertical = "|";
    var a = numeroCero(size);
    for (let i = 1; i < a[0].length - 1; i++) {
        a[Math.floor((a.length) / 2)][i] = horizontal;
    }
    return a;
}

function numeroNueve(size) {
    var horizontal = "-", vertical = "|";
    var a = numeroTres(size);
    for (let i = 1; i < (a.length - 1) / 2; i++) {
        a[i][0] = vertical;
    }
    return a;
}

module.exports = {
    numeros,
    numeroUno,
    numeroDos,
    numeroTres,
    numeroCuatro,
    numeroCinco,
    numeroSeis,
    numeroSiete,
    numeroOcho,
    numeroNueve,
    numeroCero
}