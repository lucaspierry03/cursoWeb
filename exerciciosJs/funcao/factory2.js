function criarProdruto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProdruto('Notebook', 2199.99))
console.log(criarProdruto('iPad', 1009.29))