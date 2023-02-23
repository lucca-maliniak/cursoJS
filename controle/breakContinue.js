// continue e break agem acima de estruturas de repeticao e o switch apenas
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in nums){ // uso do for in na qual associa i ao numero de indices do array passando por todos eles
    if(i == 5){
        break // interrompe o laço e sair pra proxima sentença fora do laço que ele esta associado
    }
    console.log(`Numeros: ${nums[i]}, Indice: ${i}`)
}   

for(let j in nums){ // uso do for in na qual associa j ao numero de indices do array passando por todos eles
    if(j == 5){
        continue // interrompe a repeticao na qual o continue foi associado pulando para a proxima 
    }
    console.log(`Numeros: ${nums[j]}, Indice: ${j}`)
}

externo: // uso de rotulo evitar ao maximo 
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo // rotulo usado para identificar onde exatemente o break vai quebrar
        console.log(`Par = ${a},${b} `)
    }
}