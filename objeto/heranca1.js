const ferrari = {
    modelo: 'f40',
    velMax: 324,
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__) // maneira de acessar os prototipos pai em js .__proto__
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
