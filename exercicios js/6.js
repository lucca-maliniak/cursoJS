/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/ 
const jurosSimples = (capitalInicial, taxa, tempo) => {
    let juros = 0
    juros = capitalInicial * (taxa/100) * tempo
    let montante = juros + capitalInicial
    return {
        capitalInicial,
        juros,
        tempo: `${tempo} meses`,
        montante
    }
}

console.log(jurosSimples(1500,10,2))

const jurosCompostos = (capitalInicial, taxa, tempo) => {
    let montante = 0
    montante = capitalInicial * (1 + (taxa/100)) * tempo
    let juros = montante - capitalInicial
    return {
        capitalInicial,
        juros: parseInt(juros),
        tempo: `${tempo} meses`,
        montante: parseInt(montante)
    }
}

console.log(jurosCompostos(1500,10,2))

