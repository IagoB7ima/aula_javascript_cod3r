console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Anna');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Annaa'];

console.log[0];
console.log[1];
console.log[2];
console.log[3];

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1];

console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Anna'];
aprovados.splice(1, 2, 'Elemento1', 'Elemento2');
console.log(aprovados);