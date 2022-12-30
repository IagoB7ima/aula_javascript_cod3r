const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad', preco: 4199, fragil: true},
    {nome:'Capa de Vidro', preco: 12.49, fragil: true},
    {nome:'Capa de Plástico', preco: 18.99, fragil: false},
]

//funnção filter que varre o array de produtos e filtra o elementos do array
console.log(produtos.filter(function(p){
    return false;
}))

//duas arowFunctions que filtram os profutos por preço e fragilidade respectivamente
const caro = produtos => produtos.preco >= 500;
const fragil = produtos => produtos.fragil;

console.log(produtos.filter(caro).filter(fragil));

