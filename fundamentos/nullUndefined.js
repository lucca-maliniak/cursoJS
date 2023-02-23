const a = {name: 'Teste'}
const b = a
b.name = 'Opa'
console.log(a, b) 

/* 
    Com tipos primitivos da linguagem (number, string, etc) o tipo de atribuição sera por valor, ou seja, ira copiar o valor de a para b de modo que 
    se tornam independentes, o mesmo nao acontece com objetos a atribuicao nesse caso sera por referencia, ou seja, a e b vao apontar para o mesmo
    endereco de memoria logo se mudar algo no objeto quem estiver apontando para o objeto percebera a mudança
*/

let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, quando quiser limpar uma variavel opte por 0 ou null
console.log(!!produto.preco)
console.log(produto.preco)

produto.preco = null
console.log(!!produto.preco)
console.log(produto.preco)
