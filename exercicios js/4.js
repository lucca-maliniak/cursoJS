/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

const calcularResto = (dividendo, divisor) => {
    const resultado = dividendo / divisor
    const resto = dividendo % divisor
    return `Resultado: ${resultado.toFixed(1)}, Resto: ${resto}`
}

console.log(calcularResto(10, 3))
console.log(calcularResto(10, 5))
console.log(calcularResto(11, 2))

