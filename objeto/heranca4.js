function meuobj() {}
console.log(meuobj.prototype) // quando criado por uma funcao construtora o prototipo é a propria funcao

const obj1 = new meuobj
const obj2 = new meuobj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === meuobj.prototype)

meuobj.prototype.nome = 'Anônimo'
meuobj.prototype.falar = function(){
    console.log(`Olá, meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {} // apontava para object.prototype
obj3.__proto__ = meuobj.prototype // definiu o prototipo depois e agora aponta para o meuobj.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log((new meuobj).__proto__ === meuobj.prototype)
console.log(meuobj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)