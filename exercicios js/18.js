/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

const leitura = num => {
    switch (num) {
        case 0:
            num = 'zero'
            break
        case 1:
            num = 'um'
            break
        case 2:
            num = 'dois'
            break
        case 3:
            num = 'três'
            break
        case 4:
            num = 'quatro'
            break
        case 5:
            num = 'cinco'
            break
        case 6:
            num = 'seis'
            break
        case 7:
            num = 'sete'
            break
        case 8:
            num = 'oito'
            break
        case 9:
            num = 'nove'
            break
        case 10:
            num = 'dez'
            break
        default:
            num = 'Numero fora do intervalo'
    }
    return num
}

console.log(leitura(0))
console.log(leitura(1))
console.log(leitura(2))
console.log(leitura(3))
console.log(leitura(4))
console.log(leitura(5))
console.log(leitura(6))
console.log(leitura(7))
console.log(leitura(8))
console.log(leitura(9))
console.log(leitura(10))
console.log(leitura(11))