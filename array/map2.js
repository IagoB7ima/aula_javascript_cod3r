const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.9}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Canete", "preco": 7.50}',
]

// //Retornar os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);

const prateleira = [
    '{"nome": "Trakinas", "preco": 1.99}',
    '{"nome": "Passa Tempo", "preco": 3.99}',
    '{"nome": "Rinchester", "preco": 4.99}',
    '{"nome": "Bonos", "preco": 2.99}',
    '{"nome": "Nescau", "preco": 4.99}'
]

const objeto = json => JSON.parse(json);
const preco = produto1 => produto1.preco;
const nome = produto1=> produto1.nome;

const resultado1 = prateleira.map(objeto).map(nome);
const resultado2 = prateleira.map(objeto).map(preco);
console.log(resultado1);
console.log(resultado2);







