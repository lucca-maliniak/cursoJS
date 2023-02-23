const escola = "cotemig"

console.log(escola.charAt(4)) // mostra o caracter na 4 posição
console.log(escola.charCodeAt(3)) // mostra o codigo ASCII do caracter na posicao
console.log(escola.indexOf('m')) // mostra o indice do valor dado na funcao
console.log(escola.substring(1)) // retorna do indice 1 pra frente
console.log(escola.substring(0, 3)) // retorna do indice 0 ate o indice 3

console.log("Escola: ".concat(escola).concat("!")) // concatenar strings
console.log(escola.replace('m', 'i')) // troca um valor pelo outro. 
// /\d/ -> expressao regular para substituir todos os digitos pelo caracter dado
// /\w/g -> expressao regular para substituir todos os caracteres pela caracter dado

console.log('ana, maria, pedro'.split(',')) // split gera um array usando o texto 
