const prod1 = {} // forma de criar um objeto sem atributos previamente escritos 
prod1.nome = 'Celular'
prod1.preco = 4998.90
prod1["Desconto Legal "] = 0.40 

console.log(prod1)

const prod2 = { // forma de criar um objeto com atributos previamente escritos 
    nome: 'Camisa Polo',
    preco: 79.90
}
// json é um formato textual pra comunicacao entre sistemas para trocar dados ps: java script object notation
console.log(prod2)