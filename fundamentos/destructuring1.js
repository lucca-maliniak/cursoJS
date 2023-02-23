// novo recurso feito para extrair dados de objetos e arrays de forma mais pratica
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // operador destructuring { ... } = objName
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)


