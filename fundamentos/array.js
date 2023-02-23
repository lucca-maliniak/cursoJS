const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // quando não existir um indice no array js retona undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // retorna o numero de elementos no array

valores.push({id: 3}, false, null, 'teste') // adiciona elementos no array
console.log(valores)

console.log(valores.pop()) // tira do array e retorna o ultimo valor adicionado no caso 'teste'
delete valores[0] // deleta valores do array
console.log(valores)

console.log(typeof valores)