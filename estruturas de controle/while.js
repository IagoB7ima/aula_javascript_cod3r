function getInteiroAleatoriEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao  != -1){
    opcao = getInteiroAleatoriEntre(-1, 10);
    console.log(`Opição escolhida foi ${opcao}.`);
}

console.log('Até a próxima');