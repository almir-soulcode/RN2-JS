// 2. Simule a tabela do IMC com base no valor calculado pela formula: 
// IMC = PESO / (ALTURA x ALTURA).
// Indique o status com base no valor do IMC.

let peso = 80.0;
let altura = 1.7;
let imc = peso / altura ** 2;

console.log("Seu IMC é: " + imc);

if(imc < 17) {
    console.log("Muito abaixo do peso.");
} else if (imc >= 17 && imc <= 18.49) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Peso normal");
} else if(imc >= 25 && imc <= 29.99) {
    console.log("Acima do peso");
} else if(imc >= 30 && imc <= 34.99) {
    console.log("Obesidade I");
} else if(imc >= 35 && imc <= 39.99) {
    console.log("Obesidade II (severa)");
} else if(imc >= 40) {
    console.log("Obesidade III (mórbida)");
}

// 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!
let a = 30;
let b = 30;

if (a > b) {
    console.log("A é maior que B");
} else if(b > a) {
    console.log("B é maior que A");
} else { // Fica ímplicito
    console.log("A e B são iguais");
}

// 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar 
// ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, 
// se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.
let salario = 3000;
let qtDeps = 8;
let aumento = 0;

if(qtDeps === 0) {
    console.log("Sem dependentes. Sem ajustes no salário atual.");
} else if(qtDeps >= 1 && qtDeps <= 5) {
    console.log("Aumento de 30% no salário.");
    aumento = 0.3 * salario;
} else if(qtDeps > 5) {
    console.log("Aumento de 40% no salário.");
    aumento = 0.4 * salario;
}

salario = salario + aumento;
console.log("Salário: " + salario);

// 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
    // Caso 1) É um número divisível por 4, mas não é divisível por 100. 
    // Caso 2) É um número divisível por 4, por 100 e por 400.

let ano = 2000;

if(
    (ano % 4 == 0 && ano % 100 != 0) || 
    (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)
) {
    console.log("O ano de " + ano + " é bissexto.");
} else {
    console.log("O ano de " + ano + " não é bissexto.");
}
