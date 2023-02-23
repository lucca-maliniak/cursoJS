/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const statusNota = (cod, n1, n2, n3) => {
    while (cod >= 0) {
        let mediaPonderada = 0
        let peso1 = 4
        let peso2 = 3
        mediaPonderada = [(n1 * peso1) + (n2 * peso2) + (n3 * peso2)] / peso1 + peso2

        return {
            Aluno: cod,
            Nota1: n1,
            Nota2: n2,
            Nota3: n3,
            Media: mediaPonderada.toFixed(2),
            Status: mediaPonderada >= 5 ? 'APROVADO' : 'REPROVADO'
        }
    }
}

console.log(statusNota(1,10,8,7))
console.log(statusNota(2,9,5,6))
console.log(statusNota(3,6,6,6))
console.log(statusNota(3,1,0,1))