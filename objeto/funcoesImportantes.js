const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // funcao que retorna todas as chaves
console.log(Object.values(pessoa)) // funcao que retorna todos os valores
console.log(Object.entries(pessoa)) // funcao que retorna todas as chaves e os valores

Object.entries(pessoa).forEach(([chave, valor]) => { // object.entries retorna array de duas posições atribuindo para chave e valor retornando os dados
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser mostrada e enumerada 
    writable: false, // pode ser reescrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) 

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // atribui, concatena todos os atributos dos outros objetos para o primeiro objeto, se existir nome igual ele substitui o valor

Object.freeze(obj) // congela
obj.c = 1234
console.log(obj)