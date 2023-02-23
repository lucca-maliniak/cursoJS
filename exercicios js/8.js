/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

const calcularDesempenho = (p1) => {
    let recorde = 0
    let numero = 0
    let cont = -1
    let pior = Infinity
    for(let i = 0; i <= p1.length; i++){
        if(p1[i] > recorde){
            recorde = p1[i]
            cont++
        } 
        if(p1[i] < pior){
            pior = p1[i]
            numero++
        }
    }
    return [`Recorde: ${recorde} pontos, Quantas vezes bateu recorde: ${cont} vez(es), Pior Jogo: ${pior} pontos, Nº: ${numero}`]
}

console.log(calcularDesempenho([300,500]))
console.log(calcularDesempenho([300,500,800]))
console.log(calcularDesempenho([ ]))
