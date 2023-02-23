function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco()) // quando chamado diretamente por um objeto ira usar o this como o produto para ser resolvido

const carro = { preco: 49990, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

// diferenca entre o call e o apply é a chamada de param na funcao
// no call o 1º param é o contexto para o this, e os outros dois são os param da funcao
// ja no apply o 1º param tambem é o contexto para o this, mas os param da funcao tem que estar em um array
