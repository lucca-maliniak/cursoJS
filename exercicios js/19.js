/*O cardápio de uma lanchonete é o seguinte:
Código      Descrição do Produto     Preço
100         Cachorro Quente         R$ 3,00
200         Hambúrguer Simples      R$ 4,00
300         Cheeseburguer           R$ 5,50
400         Bauru                   R$ 7,50
500         Refrigerante            R$ 3,50
600         Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const lanchonete = (cod = 0, quant = 1) => {
    let res = 0
    switch (cod) {
        case 100:
            res = 'R$' + (3 * quant).toFixed(2)
            break
        case 200:
            res = 'R$' + (4 * quant).toFixed(2)
            break
        case 300:
            res = 'R$' + (5.5 * quant).toFixed(2)
            break
        case 400:
            res = 'R$' + (7.5 * quant).toFixed(2)
            break
        case 500:
            res = 'R$' + (3.5 * quant).toFixed(2)
            break
        case 600:
            res = 'R$' + (2.8 * quant).toFixed(2)
            break
        default:
            res = 'Produto não existente'
    }
    return res
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 3))
console.log(lanchonete(400, 4))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 2))