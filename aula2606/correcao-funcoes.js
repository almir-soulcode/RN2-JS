// 1. Crie uma função para calcular e retornar o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function mostrarStatusIMC(imc) {
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
}

let imcCalculado = calcularIMC(60, 1.78);
console.log(`O IMC calculado é ${imcCalculado}`);
mostrarStatusIMC(imcCalculado);

// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%
function montarPorcentagem(valor) {
    let porcentagem = valor*100 + "%";
    return porcentagem;
}

let p = montarPorcentagem(0.767);
console.log(p);


// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true
function ehNegativo(num) {
    if(num < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(ehNegativo(-2));
console.log(ehNegativo(0));

// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.
function contar(num) {
    for(let c = 1; c <= num; c++) {
        console.log(c);
    }
}

contar(10);
console.log("----");
contar(5);

// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.
function criarNomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let nomeCompleto = criarNomeCompleto("José", "Almir");

// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.
function calcularAreaCirculo(raio) {
    const PI = 3.14;
    let area = PI * raio * raio;

    return area; // O valor dentro da variável é retornado
}

// console.log(calcularAreaCirculo(8));

// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido
function mostrarNivelCirculo(area) {
    console.log(`Analisando círculo de área: ${area}`);
    if(area >= 1 && area <= 20) {
        console.log("Nível I");
    } else if(area >= 21 && area <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido");
    }
}

let areaCirculo1 = calcularAreaCirculo(3);
mostrarNivelCirculo(areaCirculo1);

// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
function stringMinuscula(palavra) {
    return palavra.toLowerCase();
}

console.log(stringMinuscula("BATATA"));
console.log(stringMinuscula("REACT"));
console.log(stringMinuscula("Node"));

// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function contarCaracteres(palavra, caractere) {
    let ocorrencias = 0;
    
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === caractere) {
            ocorrencias++;
        }
    }

    return ocorrencias;
}

console.log(contarCaracteres("BATATA", "A"));
console.log(contarCaracteres("Soulcode", "o"));