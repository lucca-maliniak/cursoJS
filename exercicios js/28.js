/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */
const contadorParImpar = (vetorNum) => {
    let contPar = 0
    let contImpar = 0
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] % 2 == 0){
            contPar++
        } else{
            contImpar++
        }
    }
    return `Numeros Pares: ${contPar}, Numeros Impares: ${contImpar}` 
}

console.log(contadorParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))