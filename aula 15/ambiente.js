let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
num.sort()
console.log(`Nosso vetor ordenado é o ${num}`)
/*for (let pos = 0; pos < num.length; pos++) { //pos é a posição que recebe o valor de 0 até o tamanho do vetor
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 

for (let pos in num) { //pos é a posição que recebe o valor do vetor
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
let valor = num.indexOf(4) //indexOf procura o valor dentro do vetor e retorna a posição
if (valor == -1) {
    console.log('O valor não foi encontrado!') //se o valor não for encontrado, retorna -1
} else {
    console.log(`O valor 8 está na posição ${valor}`) //se o valor for encontrado, retorna a posição
}