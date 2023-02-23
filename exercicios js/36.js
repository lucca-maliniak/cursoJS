/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

const multiplicador = (n1, num) => {
    let resultado = []
    for (let i = 0; i < n1.length; i++) {
        resultado.push(num * n1[i])
    }
    return resultado
}

const multiplicador2 = (n1, num) => {
    let resultado2 = []
    for (let i = 0; i < n1.length; i++) {
        if (num > 5) {
            resultado2.push(num * n1[i])
        } else return 'Numero inválido'
    }
    return resultado2
}

console.log(multiplicador([1, 2, 3, 4, 5], 2))
console.log(multiplicador2([1, 2, 3, 4, 5], 2))
console.log(multiplicador2([1, 2, 3, 4, 5], 6))