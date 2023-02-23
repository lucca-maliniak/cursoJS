console.log(typeof String, typeof Object, typeof Array)
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

// String.prototype.toString = function (){ nao substituir comportamentos que ja existam como padrao
//     return 'Lascou tudo'
// }

console.log('Escola Cod3r'.reverse())