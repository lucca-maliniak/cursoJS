/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

const vendedoraCarros = carro => {
    switch (carro) {
        case 'hatch': case 'Hatch':
            carro = 'Compra efetuada com sucesso'
            break
        case 'sedans': case 'sedan': case 'Sedan': case 'Sedans':
            carro = 'Tem certeza que não prefere este modelo?'
            break
        case 'motocicletas': case 'motocicleta': case 'Motocicleta': case 'Motocicletas':
            carro = 'Tem certeza que não prefere este modelo?'
            break
        case 'caminhonetes': case 'caminhonete': case 'Caminhonete': case 'Caminhonetes':
            carro = 'Tem certeza que não prefere este modelo?'
            break
        default:
            carro = 'Não trabalhamos com este tipo de automóvel aqui'
    }
    return carro
}

console.log(vendedoraCarros('hatch'))
console.log(vendedoraCarros('Hatch'))
console.log(vendedoraCarros('Sedan'))
console.log(vendedoraCarros('Sedans'))
console.log(vendedoraCarros('Motocicleta'))
console.log(vendedoraCarros('motocicletas'))
console.log(vendedoraCarros('Caminhonete'))
console.log(vendedoraCarros('caminhonetes'))
console.log(vendedoraCarros('triciclo'))