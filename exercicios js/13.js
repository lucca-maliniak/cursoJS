/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const diaSemana = dia => {
    switch (dia) {
        case 1:
            dia = 'Domingo'
            break
        case 2:
            dia = 'Segunda'
            break
        case 3:
            dia = 'Terça'
            break
        case 4:
            dia = 'Quarta'
            break
        case 5:
            dia = 'Quinta'
            break
        case 6:
            dia = 'Sexta'
            break
        case 7:
            dia = 'Sabado'
            break
        default:
            dia = 'Dia inválido'
    }
    return dia
}

console.log(diaSemana(1))
console.log(diaSemana(2))
console.log(diaSemana(3))
console.log(diaSemana(4))
console.log(diaSemana(5))
console.log(diaSemana(6))
console.log(diaSemana(7))