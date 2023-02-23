function Carro(velocidadeMax = 200, delta = 5){ // func construtora igual uma classe 
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        velocidadeAtual + delta <= velocidadeMax ? velocidadeAtual += delta : velocidadeAtual = velocidadeMax // mesmo resultado do caso abaixo
        // if(velocidadeAtual + delta <= velocidadeMax){
        //     velocidadeAtual += delta
        // } else{
        //     velocidadeAtual = velocidadeMax
        // }
    }
    // para adicionar um metodo privado usar const ou let por serem de escopo fechado
    this.getVelocidadeAtual = function(){ // com o uso do this se torna publico por estar seu escopo abranger fora da funcao
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof ferrari) // novo objeto criado pela func construtora e a palavra reservada 'new Carro'