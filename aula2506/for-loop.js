/*
    for (inicializacao; condicao; atualizacao) {
        // código que será repetido
    }
*/

for(let cont = 1; cont <= 10; cont++) {
    console.log(cont);
} // após executar o bloco, ele faz a atualização cont++;

// For = sequências
// While = repetição indefinida

// 0 até 1000, pulando de 5 em 5
for(let cont = 0; cont <= 1000; cont += 5) {
    console.log(cont);
}

// 1000 até 0
for(let cont = 1000; cont >= 0; cont--) {
    console.log(cont)
}

// Adaptar os exercícios
// 1. Use um laço for para imprimir na tela todos os números pares de 2 a 10.
for(let c = 2; c <= 10; c += 2) {
    console.log(c);
}

// 2. Imprimir a tabuada do 7
let n = 7;
for(let c = 1; c <= 10; c++) {
    console.log(`${n} x ${c} = ${n*c}`);
}

// 3. 
let soma = 0;
for(let c = 1; c <= 999; c++) {
    if(c % 2 !== 0) {
        soma = soma + c;
    }
}

// Interpolação / Template string
console.log(`Soma dos números: ${soma}`);

// 4. 
let qt = 0;

for (let c = 1; c <= 1000; c++) {
    if(c % 9 === 0) {
        console.log(`${c} é divisível por 9.`);
        qt++;
    }
}

console.log(`Total: ${qt}`);