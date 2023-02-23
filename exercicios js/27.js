/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

const calcularAltura = (h1, taxaCresc1, h2, taxaCresc2) => {
    let anos = 0
    if(h1 > h2 && taxaCresc2 > taxaCresc1){
        while(h1 >= h2){
            h2 += taxaCresc2
            h1 += taxaCresc1
            anos++
        }
        return `A 2ª criança com altura ${h2}cm demorou ${anos} anos para ultrapassar a 1ª com altura de ${h1}cm`
    }else if(h2 > h1 && taxaCresc1 > taxaCresc2){
        while(h2 >= h1){
            h1 += taxaCresc1
            h2 += taxaCresc2
            anos++
        }
        return `A 1ª criança com altura ${h1}cm demorou ${anos} anos para ultrapassar a 2ª com altura de ${h2}cm`
    } else if(h2 == h1 && taxaCresc1 == taxaCresc2){
        return 'As alturas são iguais'
    } else{
        return 'A criança menor nunca ultrapassará a maior'
    }
}

console.log(calcularAltura(120,5,100,10))
console.log(calcularAltura(120,10,100,10))
console.log(calcularAltura(100,10,100,10))
console.log(calcularAltura(100,10,100,20))
console.log(calcularAltura(100,15,100,20))