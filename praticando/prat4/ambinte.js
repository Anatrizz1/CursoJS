let catalogo = [
    {
        nome: "celular",
        id: 2,
        preco: 2600,
        emEstoque: true
    },
    {
        nome: "Notebook",
        id: 1,
        preco: 3500,
        emEstoque: true
    },
    {
        nome: "Tablet",
        id: 3,
        preco: 1200,
        emEstoque: false
    },
    {
        nome: "Monitor",
        id: 4,
        preco: 800,
        emEstoque: true
    }
];

console.log("Catalgo de produtos completo:")

for (let i = 0; i < catalogo.length; i++) {
    console.log(`Nome: ${catalogo[i].nome} | Preço: R$${catalogo[i].preco} | Em estoque: ${catalogo[i].emEstoque ? "Sim" : "Não"}`);
}

console.log('------------------------------');
console.log("Resultado de busca:");
console.log('------------------------------');

let busca = "monitor";
let resultadoBusca = catalogo.filter(produto => produto.nome.toLowerCase() === busca.toLowerCase());  

if (resultadoBusca.length > 0) {
        resultadoBusca.forEach(produto => {
            console.log(`Nome: ${produto.nome} | Preço: R$${produto.preco} | Em estoque: ${produto.emEstoque ? "Sim" : "Não"}`);
        });
    }
else {
    console.log("Produto não encontrado.");
}