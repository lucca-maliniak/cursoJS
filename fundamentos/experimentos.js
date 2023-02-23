let a = 3

global.b = 3

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports) // global do node.js 

// criando variavel sem var ou let, vai direto pro global do node 
abc = 3
console.log(global.abc)