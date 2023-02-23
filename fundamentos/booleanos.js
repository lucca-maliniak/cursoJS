let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // "!" sinal de negação e forçando transformar em tipo booleano, podendo usar mais de um para negar a negação

console.log("os verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || " "))

let nome = ""

console.log(nome || 'Desconhecido') // se o nome não estiver preenchido retorna o Desconhecido (o retorno padrao)