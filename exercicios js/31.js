/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const x = vetor => {
    let cont = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            cont++
        }
    }
    return `Quantidade de numeros negativos: ${cont}`
}

console.log(x([-20,-1,-2,3,-4,-5,6,7,8,9,10,11]))