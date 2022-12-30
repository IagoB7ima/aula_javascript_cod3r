Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}

const  imprimirResultados = function (nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra');
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação');
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado');
    } else{
        console.log('Entre com um valor valido');
    }

    console.log('Fim');
}

imprimirResultados(10);
imprimirResultados(8);
imprimirResultados(6.99);
imprimirResultados(2.3);
imprimirResultados(-1);