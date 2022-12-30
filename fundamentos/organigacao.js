console.log("Sentença de código");

//Comentário  de uma linha
/*Comenntário de
multiplas linhas*/

// Variáveis e constantes

var a = 3;
const b = 4;
let c = 5;

var a = 30;
c = 50;

console.log(a, b, c);

// Tipagem Fraca

let qualquer = "Legal";

console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.1516;
console.log(qualquer);
console.log(typeof qualquer);
// Evitar nome genéricos e siglas

// Numéricos

const peso1 = 1.0;
const peso2 = Number(2.0);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));


const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores.length);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 1}, false, null, "teste");
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);
console.log(typeof valores);