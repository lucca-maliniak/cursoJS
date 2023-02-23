/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar */

const troca = (v1, v2) => {
    [v1, v2] = [v2, v1]
    return [v1, v2]
}

console.log(troca([1,2,3,4],[5,6,7,8]))