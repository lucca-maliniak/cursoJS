/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

const mostrarNota = nota => {
    nota.forEach(conceitos)
}

const conceitos = nota => {
    if(nota < 5){
        console.log(nota = 'Conceito D')
    } else if(nota < 7){
        console.log(nota = 'Conceito C')
    } else if(nota < 9){
        console.log(nota = 'Conceito B')
    } else{
        console.log(nota = 'Conceito A')
    }
    return 0
}

console.log(mostrarNota([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))