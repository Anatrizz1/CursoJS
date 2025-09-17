let ListadeCompras = []
ListadeCompras.push('Arroz')
ListadeCompras.push('Feijão')
ListadeCompras.push('Alface')

console.log(ListadeCompras)

ListadeCompras.sort() //ordena a lista em ordem alfabética
console.log(ListadeCompras)

ListadeCompras.length //mostra o tamanho da lista
console.log(`A lista tem ${ListadeCompras.length} itens`)

ListadeCompras.pop() //remove o último item da lista
console.log(ListadeCompras)
ListadeCompras.shift() //remove o primeiro item da lista
console.log(ListadeCompras) 
ListadeCompras.unshift('Batata') //adiciona um item no início da lista
console.log(ListadeCompras)
ListadeCompras.splice(1, 0, 'Tomate', 'Cebola') //adiciona itens em uma posição específica (posição, quantos remover, itens a adicionar)
console.log(ListadeCompras)
