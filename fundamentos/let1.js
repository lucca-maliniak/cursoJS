// variaveis do tipo let tem escopo global, de funcao e de blocos
var numero = 1
{
    let numero = 2
    console.log('dentro:', numero)
}
console.log('fora:', numero)