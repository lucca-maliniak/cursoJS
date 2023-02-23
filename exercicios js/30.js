/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

const x = vetor => {
    let maior = 0
    let menor = Infinity
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
        if(vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return `Menor valor: ${menor}, Maior valor: ${maior}`
}

console.log(x([-20,1,2,3,4,5,6,7,8,9,10,11]))