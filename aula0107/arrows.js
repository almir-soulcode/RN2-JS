// Declaração de function
function soma(a, b) {
    return a + b;
}

let resultadoSoma = soma(10, 5);

// Arrow function => +concisa
const somaArrow = (a, b) => a + b;

let resultadoArrow = somaArrow(5, 20);

// Arrow com corpo
const checarPar = (num) => {
    if(num % 2 == 0) {
        console.log(`O número ${num} é par.`);
        return true;
    } else {
        console.log(`O número é ${num} é ímpar.`);
        return false;
    }
}

// Transformando em arrow
const compararString = (str1, str2) => str1 === str2;
console.log(compararString("soulcode", "soulcode"));

const soma2 = (a, b) => a + b;
const testeFuncao = () => 2 * soma2(5, 9);

// Exemplo: Converter a função abaixo em arrow
function extrairDigitosVerificadores(cpf) {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
}

const extrairDigitosArrow = (cpf) => cpf.split("-")[1];

// For Each -> executa uma função para cada elemento no array
const numeros = [1, 2, 3, 4, 5, 6, 7];

// Funcionamento similar ao do for-of
numeros.forEach((numero, index) => {
    // n = elemento no array
    // i = índice desse elemento
    console.log(`O elemento no índice ${index} é ${numero}`);
});

// Exemplo: somar todos os números de um array (forEach);
let soma = 0;

// Quando a arrow tem 1 parâmetro não é obrigatório os parênteses
// Se o corpo possui uma linha, pode ser simplificado dessa forma:
numeros.forEach(numero => soma += numero);

console.log(soma);

// Exemplo: Converter a função em arrow, e o for em forEach.
function repetirPalavra(palavra, qt) {
    let resultado = "";

    for(let i = 0; i < qt; i++) {
        resultado += palavra;
    }

    return resultado;
}

const repetirPalavra2 = (palavra, qt) => {
    let resultado = "";

    // Nesse exemplo, a repetição não é baseada em array
    for(let i = 0; i < qt; i++) {
        resultado += palavra;
    }

    return resultado;
}

// Exemplo: Converter a função abaixo em arrow e o for em forEach
function filtrarStrings(arr) {
    let stringsFiltradas = [];

    for(let str of arr) {
        if(str.length > 5) {
            stringsFiltradas.push(str);
        }
    }

    return stringsFiltradas;
}

const filtrarStrings2 = (arr) => {
    let stringsFiltradas = [];

    arr.forEach((str) => {
        if(str.length > 5) {
            stringsFiltradas.push(str);
        }
    });

    return stringsFiltradas;
}