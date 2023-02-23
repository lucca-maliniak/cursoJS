const imprimirResultado = (nota) => {
    switch (Math.floor(nota)){ // se nao tiver o break entra no case e executa todos abaixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: // executar o mesmo codigo para o case 8 e case 7
            console.log('Quadro de Honra')
            break
        case 6: case 5: case 4: // executar o mesmo codigo para o case 6 e case 5 e case 4
            console.log('Recuperação')       
            break
        case 3: case 2: case 1: case 0: // executar o mesmo codigo para o case 3 e case 2 e case 1 e case 0
            console.log('Reprovado')
            break
        default: 
            console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)