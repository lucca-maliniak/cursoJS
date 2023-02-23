// Closure (fechamento, algo que envolve alguma coisa) é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto Lexico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){ // x mais perto da funcao quando escrita é o Local, por isso retorna ele
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())