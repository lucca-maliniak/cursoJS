// a funcao carrega consigo o local onde foi definida dentro do escopo lexico onde foi escrita,
// no caso a variavel com valor Global foi a mais proxima no momento em q a func foi definida, 
// por esse motivo ela retorna este valor e não o valor Local que foi definido no momento da execucao
const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()