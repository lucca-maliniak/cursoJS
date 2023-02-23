/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const contadorCedulas = valor => {
    let qnt100 = 0
    let qnt50 = 0
    let qnt10 = 0
    let qnt5 = 0
    let qnt1 = 0
    while (valor > 0) {
        if (valor / 100 >= 1) {
            qnt100++
            valor -= 100
        } else if (valor / 50 >= 1) {
            qnt50++
            valor -= 50
        } else if (valor / 10 >= 1) {
            qnt10++
            valor -= 10
        } else if (valor / 5 >= 1) {
            qnt5++
            valor -= 5
        } else {
            qnt1++
            valor -= 1
        }
    }
    return `${qnt100} nota(s) de R$100, ${qnt50} nota(s) de R$50, ${qnt10} nota(s) de R$10, ${qnt5} nota(s) de R$5, ${qnt1} nota(s) de R$1`
    
}

console.log(contadorCedulas(153))
