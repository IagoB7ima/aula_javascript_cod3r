const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop();//Massa quebrou o carro  KKK, Método pop remove ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen');// Verstappen entrou na corrida kkk, Método que adiciona o elemento a ultima posição do Array
console.log(pilotos);

pilotos.shift(); // Método shift remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); //Método unshift adiciona ao primeiro elemento
console.log(pilotos);

// Método splice adiciona e remove elementos nas posições desejadas

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); // Primeiro indice indca aprtir de qual endereço será incerido o novo elemento e o segundo indice indica quantos elementos serão removidos, se 0 nenhum será removido se 1 o ele mento daquela pisição será removido
console.log(pilotos);

// Remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4);// Primeiro indice indica o primeiro elemento a entrar no novo array e ultimo indice indica o ultimo elemento, porem não o adicona no novo array 
console.log(algunsPilotos2);