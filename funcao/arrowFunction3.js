let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) // o this na funcao normal não aponta para o this e sim para o global

const obj = {}
comparaComThis = comparaComThis.bind(obj) // força o this a apontar para o obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // o this de uma funcao arrow é um this associado ao contexto no qual a funcao foi escrita. Não muda
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // nao funciona bindar uma funcao arrow, o this de uma arrow nao muda 
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)