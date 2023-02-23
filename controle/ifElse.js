// const imprimirResultado2 = (nota) => console.log(nota >= 7 ? 'Aprovado' : 'Reprovado') // forma com operador ternario e funcao arrow

const imprimirResultado = (nota) => {
    if(nota >= 7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa') // cuidado linguagem fracamente tipada corrigir com excecoes


