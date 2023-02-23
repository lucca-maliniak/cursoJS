function Pessoa(){
    this.idade = 0

    const self = this // o this esta apontando para a pessoa nesse contexto, entao associa self a ele para nunca mudar e sempre apontar para a func
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this) - outra solução com o bind para amarrar o this*/, 1000)
}

new Pessoa