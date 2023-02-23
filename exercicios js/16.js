/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

const calculadora = (a = 0, operacao = '', b = 0) => {
    let res = 0
    switch (operacao) {
        case '+':
            res = a + b
            break
        case '-':
            res = a - b
            break
        case '*':
            res = a * b
            break
        case '/':
            res = a / b
            break
        default:
            res = `Operação inválida`
    }
    return res
}

console.log(calculadora())
console.log(calculadora(1,'+',2))
console.log(calculadora(3,'*',7))
console.log(calculadora(8,'-',9))
console.log(calculadora(12,'/',6))