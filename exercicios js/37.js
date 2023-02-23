/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos*/

const PA = (n, a1, r) => {
    let an = 0
    let soma = 0
    an = a1 + (n - 1) * r
    soma = ((a1 + an) * n) / 2
    for (let i = 0; i < n; i++) {
        console.log(`Termo ${i}: ${(a1 + (r * i))}`)
    }
    return `Soma dos termos: ${soma}`
}

const PG = (n, a1, q) => {
    let an = 0
    let soma = 0
    an = a1 * Math.pow(q, n - 1)
    soma = (a1 * (Math.pow(q, n) - 1)) / q - 1
    for (let i = 0; i < n; i++) {
        console.log(`Termo ${i}: ${(a1 * (q * i))}`)
    }
    return `Soma dos termos: ${parseInt(soma)}`
}

console.log(PA(5, 10, 3))
console.log(PG(5, 10, 3))
