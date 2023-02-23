function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do { // executa no minimo uma vez antes de ir para o while
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima')