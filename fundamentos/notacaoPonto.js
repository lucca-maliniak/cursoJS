console.log(Math.ceil(6.1)) // arredonda pra cima 

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){ // this criar tanto atributos quanto funcoes para serem visiveis fora da function
    this.nome = nome 
    this.exec = function(){
        console.log('exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()