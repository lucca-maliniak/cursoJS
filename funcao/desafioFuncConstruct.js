// funcao construtora e classe sao formas iguais com maneiras de escrever diferentes, porem possuem o mesmo problema do 'this' global
function Pessoa(nome){ 
    this.nome = nome
    
    this.falar = function(){
        return `Meu nome é ${this.nome}`
    }
}

const p1 = new Pessoa('João')
console.log(p1.falar())
// já a factory não, por nao utilizar da palavra reservada 'this'