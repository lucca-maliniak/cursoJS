const pessoa = {
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const fala = pessoa.falar
fala() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind passando o obj na qual o this sera resolvido 
falarDePessoa()

