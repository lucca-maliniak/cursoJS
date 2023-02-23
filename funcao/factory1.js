// funcao factory é uma funcao que retorna um obj
// fabrica, fabricar objetos

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())