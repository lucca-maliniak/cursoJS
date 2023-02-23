console.log('01)', '1' == 1) // == comparação ignora o tipo da variavel, === extritamente igual nao ignora o tipo da variavel
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // funcao que retona a data definida pelo 0 no caso (01-01-1970)
const d2 = new Date(0) 
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // funcao que pega os milisegundos ate a data de hj logo retorna um number por isso o true
console.log('12)', undefined == null)
console.log('13)', undefined === null)
