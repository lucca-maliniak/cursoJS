// forEach repete para todos os elementos do array
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){ // essa funcao sera considerada callback por repetir para todos os indices do array
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // funcao callback é quando acontece algum evento e a funcao é chamada novamente
fabricantes.forEach(x => console.log(x))