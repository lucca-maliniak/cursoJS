class Pessoa{ // funcao construtora e classe sao formas iguais com maneiras de escrever diferentes, porem possuem o mesmo problema do 'this' global
    
    constructor(nome){
        this.nome = nome // transforma a variavel em publica 
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => { // já a factory não, por nao utilizar da palavra reservada 'this'
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()