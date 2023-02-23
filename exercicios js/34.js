/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const x = (string1, string2) => {
    let y = 0
    for(let i = 0; i < string1.length; i++){
        for(let j = 0; j < string2.length; j++){
            y = string1.charAt(j) == string2.charAt(j) ? !!1 : !!0            
        }
    }
    if(y == !!1){
        return !!1
    }else{
        return !!0
    }
}

console.log(x('abcdf','dcba'))

// return string1.substring(0) == string2.substring(0) ? !!1 : !!0