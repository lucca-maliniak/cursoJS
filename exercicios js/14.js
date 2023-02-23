/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

const vendinha = fruta => {
    switch (fruta) {
        case 'maçã': case 'Maçã':
            fruta = 'Não vendemos esta fruta aqui'
            break
        case 'kiwi': case 'Kiwi':
            fruta = 'Estamos com escassez de kiwis'
            break
        case 'melancia': case 'Melancia':
            fruta = 'Aqui está, são 3 reais o quilo'
            break
        default:
            fruta = 'Erro, fruta inválida'
            break
    
        }
    return fruta
}

console.log(vendinha('maçã'))
console.log(vendinha('Maçã'))
console.log(vendinha('kiwi'))
console.log(vendinha('Kiwi'))
console.log(vendinha('melancia'))
console.log(vendinha('Melancia'))
console.log(vendinha('Morango'))

