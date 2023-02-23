/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

const imprimirImpares = (inicio = 0, fim = 100) => {
    let x = []
    if(inicio > fim){
        [inicio, fim] = [fim, inicio]
    }
    for (let i = 0; i < fim; i++) {
        if ((inicio + i) % 2 == 1 && (inicio + i) < fim) {
            x.push(inicio + i)
        }
    }
    return x
}

console.log(imprimirImpares(20,50))
console.log(imprimirImpares(50,20))