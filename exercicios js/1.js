/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const resultado = (x, y) => {
    return {
        soma: x + y,
        subtracao: x - y,
        multiplicao: x * y,
        divisao: x / y
    }
}

console.log(resultado(10,5))