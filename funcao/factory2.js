function criarProduto(nome, preco, desconto = 10){
    const desc = desconto / 100
    return{
        nome, // nao tem necessidade de colocar nome: nome ja que é o mesmo nome do param
        preco, // nao tem necessidade de colocar preco: preco ja que é o mesmo nome do param
        desconto: desc,
        precoFinal: preco - (preco * desc)
    }
}

console.log(criarProduto('Ventilador', 300))
console.log(criarProduto('Cadeira Gamer', 800))
console.log(criarProduto('Placa de Vídeo', 2500, 50))