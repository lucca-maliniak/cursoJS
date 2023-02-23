// try - tentar fazer algo, catch - capturar o erro gerado pelo try, throw - lançar o tratamento para o usuario
function tratarErro(erro){
    // throw new Error('...')
    // throw 10
    // throw 'Algo de errado aconteceu'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase(), '!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('Final')
    }
}

const obj = { name: 'Lucca' }
imprimirNomeGritado(obj)