/*Faça um algoritmo que calcule o fatorial de um número.*/

const fatorial = num => {
    let res = 1
    for(let i = 0; i < num; i++){
        res = res * (num - i)
    }
    return `${num}! = ${res}`    
}

console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(8))
console.log(fatorial(9))    
    