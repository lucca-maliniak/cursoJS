console.log(soma(3, 4))

// function declaration - tem a vantagem de poder ser chamada antes mesmo de seu codigo por o js carregar todas as function declaration antes de ler o codigo
function soma(x, y){
    return x + y
}

// function expression - caso que ja nao acontece com a function expression que so foi declarada a partir da linha 8 
const sub = function(x, y){
    return x -y
}
console.log(sub(3, 4))

// named function expression - caso que tambem nao acontece com a named function expression que so foi declarada a partir da linha 14 
const multi = function multi(x, y){
    return x * y
}
console.log(multi(3, 4))