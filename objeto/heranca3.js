const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // aponta para o prototipo definido, sem apontar para object.prototype (o padrao de todos os obj criados)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { // apos o atributo que sera apontado como prototipo pode adicionar atributos do objeto filho (*prototipo*, *atributos*)
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){ // verificar se a propriedade pertence ao objeto ou for herdado 
    filha2.hasOwnProperty(key) ? // forma para saber se um atributo veio por heranca ou nao -> .hasOwnProperty(*atributo*)
        console.log(key) : console.log(`Por herança: ${key}`)
}