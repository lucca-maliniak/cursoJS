// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 5, 6, 7)
imprimirSoma()

// funcao com retorno
function soma(a, b = 1){ // valor padrao de b se nao dar o parametro
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())