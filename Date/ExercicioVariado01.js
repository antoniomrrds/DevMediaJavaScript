//Exercicios variados
const produtos = ['Samsung x40', 'iPhone X', 'HD SSD'];

//Usando o for normal
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i])
}
//Usando o for in
for (const index in produtos) {
    console.log(index, produtos[index]);
}

//Usando o for of

for (const produto of produtos) {
    console.log(produto);
}