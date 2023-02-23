/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const aumentoSalarial = (plano = '', salario = 0) => {
    let res = 0
    switch (plano) {
        case 'A': case 'a':
            res = salario + (salario * 0.1)
            break
        case 'B': case 'b':
            res = salario + (salario * 0.15)
            break
        case 'C': case 'c':
            res = salario + (salario * 0.2)
            break
        default:
            res = 'Plano inválido'
    }
    return res
}

console.log(aumentoSalarial([]))
console.log(aumentoSalarial('a', 1500))
console.log(aumentoSalarial('b', 1500))
console.log(aumentoSalarial('c', 1500))