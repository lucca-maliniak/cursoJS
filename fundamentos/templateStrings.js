const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + "!"
const template = ` 
    Ola
    ${nome}!` // template string sempre entre crases
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // funcao que transforma em letras maiusculas 
console.log(`Ei... ${up('Cuidado')}!`) 

