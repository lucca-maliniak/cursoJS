// js ignora os blocos, exceto de funcoes para o uso de var
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)