/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

const valorAnuidade = (valor, mes) => {
    let montante = formulaJuros(valor, mes)
    return {
        Mes: mes,
        Valor: parseInt(montante)
    }

}

const associarMes = (mes) => {
    switch (mes) {
        case 1: case 'janeiro':
            return 0
        case 2: case 'fevereiro':
            return 1
        case 3: case 'março':
            return 2
        case 4: case 'abril':
            return 3
        case 5: case 'maio':
            return 4
        case 6: case 'junho':
            return 5
        case 7: case 'julho':
            return 6
        case 8: case 'agosto':
            return 7
        case 9: case 'setembro':
            return 8
        case 10: case 'outubro':
            return 9 
        case 11: case 'novembro':
            return 10
        case 12: case 'dezembro':
            return 11
        default:
            return 'Mês Inválido'
    }
}

const formulaJuros = (capital, mes) => {
    let numMes = associarMes(mes)
    let montante = capital * (Math.pow(1.05, numMes))
    return montante
}

console.log(valorAnuidade(400, 3))
console.log(valorAnuidade(1000, 2))
console.log(valorAnuidade(1500, 4))
console.log(valorAnuidade(700, 5))