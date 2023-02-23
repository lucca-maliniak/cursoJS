// JSON formato textual generico que nao carrega nada especifico de nenhum sistema para compartilhar o codigo
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // transformar um obj para um JSON

console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}')) // objeto gerado apartir de um JSON
console.log(JSON.parse('{"a": 1,"b": "string","c": true, "d": {}, "e": []}'))
