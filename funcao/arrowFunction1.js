// arrow function é uma funcao anonima sempre armazenar numa variavel ou constante
let dobro = function (a){
     return a * 2
}

dobro = a => a * 2 // retorno implicito
console.log(dobro(2))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' // retorno implicito
ola = _ => 'Olá' // alternativa com parametro underline

console.log(ola())