function aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Ate breve', 456)
console.log(aula1, aula2)

// simulando o new 
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params) // apply define para onde o this aponta no caso para obj
    return obj
}

console.log(novo(aula,'Bem vindo', 123), novo(aula,'Ate breve', 456))
