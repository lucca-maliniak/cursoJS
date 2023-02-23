function soma(){
    let soma = 0
    for(i in arguments){ // arguments é um array que toda funcao possui, que indica os parametros passados na chamada da funcao
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a','b','c'))