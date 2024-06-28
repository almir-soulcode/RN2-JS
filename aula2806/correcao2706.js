// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
function listarAusentes(alunos, lista) {
    let ausentes = [];

    for(let nome of alunos) {
        if(lista.includes(nome)) {
            console.log(`O aluno ${nome} está presente.`);
        } else {
            console.log(`O aluno ${nome} está ausente.`);
            ausentes.push(nome);
        }
    }

    return ausentes;
}

let turma = ["José Almir", "Gabriel Braga", "Victor Icoma", "Igor Gondim", "Bismark"];
let presenca = ["Gabriel Braga", "Victor Icoma", "Bismark"];

let faltas = listarAusentes(turma, presenca);
console.log(faltas);


// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
function elevarQuadrado(arr) { // [2, 3, 9] -> [4, 9, 81]
    let quadrado = [];

    for(let n of arr) {
        quadrado.push(n**2);
    }

    return quadrado;
}

let valores = [2, 3, 9];
let resultado = elevarQuadrado(valores);
console.log(resultado);

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
function filtrarArquivos(arquivos, ext) {
    let filtrados = [];

    for(let nome of arquivos) {
        if(nome.endsWith(ext)) {
            filtrados.push(nome);
        }
    }

    return filtrados;
}

let arquivosPasta = ["codigo.js", "estilos.css", "index.html", "sobre.html"];
let extensao = ".html";
let arquivosHtml = filtrarArquivos(arquivosPasta, extensao);
console.log(`Arquivos da extensão ${extensao}: ${arquivosHtml}`);

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
function exercicio4() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log("Mostrando os números com for-of: ");
    for(let n of numeros) {
        console.log(n);
    }
    console.log("Mostrando os números com for comum: ");
    for(let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

exercicio4();

// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
function filtrarStrings(arr) {
    let stringsFiltradas = [];

    for(let str of arr) {
        if(str.length > 5) {
            stringsFiltradas.push(str);
        }
    }

    return stringsFiltradas;
}

let palavras = ["batata", "pão", "arroz", "carne", "ovo", "alface"];
console.log(filtrarStrings(palavras));

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
function exercicio6() {
    let numeros = [1, 4, 9, 80, -100, 0, 49];
    let maior = numeros[0];

    for(let i = 1; i < numeros.length; i++) {
        if(numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    console.log(maior);
}
// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
function extrairDigitosVerificadores(cpf) {
    const partesCpf = cpf.split("-"); // gera um array com [numeros, verificadores]
    return partesCpf[1];
}

console.log(extrairDigitosVerificadores("056.985.990-23"));

// 8. Crie uma função que inverte uma string. Retorna ela invertida.
function inverterPalavra(palavra) {
    return palavra.split("").reverse().join("");
}

console.log(inverterPalavra("Batata"));

// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.
function repetirPalavra(palavra, qt) {
    // return palavra.repeat(qt);
    let resultado = "";

    for(let i = 0; i < qt; i++) {
        resultado += palavra;
    }

    return resultado;
}

console.log(repetirPalavra("batata", 3));

// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.
function compararString(str1, str2) {
    return str1 === str2;
}

console.log(compararString("batata", "batata"));

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'
let dataArray = ["20", "06", "2000"];

function formatarData(arr, sep) {
    return arr.join(sep);
}

console.log(formatarData(dataArray, "-"));

// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'

function busca(array, elemento, valorPadrao) {
    if(array.includes(elemento)) {
        return elemento;
    }

    // Caso não entre no if da L150, o código chegará na linha abaixo (equivale a um else);
    return valorPadrao;
}

let array = ["alface", "pimenta", "maionese", "ovo"];
console.log(busca(array, "batata", "Não tem batata =("));
console.log(busca(array, "pimenta", "Não tem pimenta =)"));
