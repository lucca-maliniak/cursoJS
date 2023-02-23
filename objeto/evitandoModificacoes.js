// Object.preventExtensions -> objeto pode ser modificado mas nao pode adicionar novos atributos
const produto = Object.preventExtensions({ // previne extensoes ou seja nao da para adicionar nenhum atributo 
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // nao consegue adicionar nem excluir atributos mas consegue modificar os atributos
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)