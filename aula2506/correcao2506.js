// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
let cont = 2;

while(cont <= 10) {
    console.log(cont);
    cont += 2;
}
// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21
    // ...
    // 7 x 10 = 70

let cont2 = 1;
let n = 7;
let produto;

while(cont2 <= 10) {
    produto = cont2*n;
    console.log(n + " x " + cont2 + " = " + produto);
    cont2++;
}

// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. 
// Utilize um if para verificar se o número é ímpar.
let cont3 = 1;
let soma = 0;

while(cont3 <= 999) {
    if(cont3 % 2 !== 0) {
        soma = soma + cont3;
    }
    cont3++;
}

console.log("Soma dos ímpares: " + soma);

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis 
// por 9 (NUMERO % 9 == 0), mostre o número e ao final exiba o total de números divisíveis por 9.
let cont4 = 1;
let qt = 0;

while(cont4 <= 1000) {
    if(cont4 % 9 === 0) {
        console.log(cont4 + " é divisível por 9.");
        qt++;
    }

    cont4++;
}

console.log("Total: " + qt);