/**
 * @author Katiusca Herrera Franco
 * 
 */

/**
 * @method readLine
 * Para interpretar en la consola Javascript usando Node
 */
const { numeros, numeroUno, numeroDos, numeroTres, numeroCuatro, numeroCinco,
    numeroSeis, numeroSiete, numeroOcho, numeroNueve, numeroCero } = require('./Numero');

const { imprimir, imprimirReal } = require('./Imprimir');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function promptInput(prompt, handler) {
    rl.question(prompt, input => {
        if (handler(input) !== false) {
            promptInput(prompt, handler);
        }
        else {
            rl.close();
        }
    });
}

/**
 * @method prompInput
 * Para obtener los datos de entrada del usuario
 * y validar los posibles casos para la cadena
 * de entrada.
 * Además de imprimir los números según sea el caso.
 */

promptInput('Ingrese los números (X,XXX), donde el primero es el tamaño y después de la coma el número a mostrar. Finalice con 0,0> ', input => {
    var entrada = input.split(',');
    var entrada2 = [];

    if (entrada.length != 2) {
        console.log("Debe tener la forma X,XXX");

    } else if (!Number.isInteger(+entrada[0]) || !Number.isInteger(+entrada[1])) {
        console.log("No son enteros");

    } else if (input === '0,0') {
        console.log("Software Finalizado");
        return false;

    } else {
        if (+entrada[0] > 10 || +entrada[0] <= 0) {
            console.log('Debe ingresar un número menor o igual a 10 y mayor o igual a 1');
        }

        entrada2 = entrada[1].split('');
        var aux = new Array((2 * (+entrada[0])) + 3);
        aux.fill("");

        for (let i = 0; i < entrada2.length; i++) {
            switch (+entrada2[i]) {
                case 1:
                    aux = imprimir(numeroUno(+entrada[0]), aux);
                    break;
                case 2:
                    aux = imprimir(numeroDos(+entrada[0]), aux);
                    break;
                case 3:
                    aux = imprimir(numeroTres(+entrada[0]), aux);
                    break;
                case 4:
                    aux = imprimir(numeroCuatro(+entrada[0]), aux);
                    break;
                case 5:
                    aux = imprimir(numeroCinco(+entrada[0]), aux);
                    break;
                case 6:
                    aux = imprimir(numeroSeis(+entrada[0]), aux);
                    break;
                case 7:
                    aux = imprimir(numeroSiete(+entrada[0]), aux);
                    break;
                case 8:
                    aux = imprimir(numeroOcho(+entrada[0]), aux);
                    break;
                case 9:
                    aux = imprimir(numeroNueve(+entrada[0]), aux);
                    break;
                case 0:
                    aux = imprimir(numeroCero(+entrada[0]), aux);
                    break;

                default:
                    break;
            }
            
        }
        imprimirReal(aux);
    }
});


