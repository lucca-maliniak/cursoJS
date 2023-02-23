function Pessoa(){
    this.idade = 0
    setInterval(() => { // arrow function possui a propriedade de invariar o this
        this.idade++ // nesse caso da arrow func o this nao varia de acordo com quem esta chamando, fato que acontecia antes com o this sendo chamado pelo temporizador do setInterval
        console.log(this.idade)
    }, 1000)
}

new Pessoa