/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

const verificaInt = nota => nota % 3 == 0 ? !!' ' : !!''

console.log(verificaInt(9))
console.log(verificaInt(11))
console.log(verificaInt(12))
console.log(verificaInt(998))