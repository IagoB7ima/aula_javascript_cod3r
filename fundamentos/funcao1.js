//Funççao sem retorno
function imprimirSoma(a ,b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
//imprimirSoma(2); // Erro!
imprimirSoma(2, 10, 4, 5, 6, 7, 8, 9); // Soma os dois primeiros e ignora o resto!
imprimirSoma();

//Função com retorno
function soma(a = 1, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());