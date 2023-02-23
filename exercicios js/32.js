/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

const x = vetor => {
    let soma = 0, tamanho = 0
    tamanho = vetor.length
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return `Media: ${soma / tamanho}`
}

console.log(x([1,2,3,4]))
console.log(x([1,2,3,4,5,6,7,8,9]))