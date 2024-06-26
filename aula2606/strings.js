// Strings = cadeias de caracteres

const nome = "Almir";
const sobrenome = "Batata";

// Interpolação de string
const nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

// Formação de strings
let meuPet = "Fred";
// 0 -> "F",
// 1 -> "r",
// 2 -> "e",
// 3 -> "d"

let comida = "Batata Assada"; // 0 até 12
// console.log(comida[0]); // B
// console.log(comida[1]); // a
// console.log(comida[2]); // t
// console.log(comida[6]); // Espaço em branco
// console.log(comida[12]); // a -> último caractere
// console.log(comida[500]); // undefined = não existe essa posição na string

// Tamanho da string
// console.log(comida.length); // total de caracteres da string
// console.log(comida[comida.length - 1]); // ultimo caractere da string

// Percorrendo a string caractere por caractere
// 0 1 2 3 4 5 6 7 8 9 10 11 12
for(let i = 0; i < comida.length; i++) {
    console.log(comida[i]); // Mostra um caractere por vez
}

// Funções de string
let palavra = "Java Script";
console.log(palavra.toLowerCase()); // Minuscula
let palavraMin = palavra.toLowerCase();

console.log(palavra.toUpperCase()); // Maiuscula

console.log(palavra.charAt(0)); // palavra[0]

console.log(palavra.replace("Java", "Type"));
console.log(palavra.replace("J", "R"));
console.log(palavra.replaceAll("a", "x"));

let frase = "Eu comi arroz, feijão, batata e carne";

console.log(frase.includes("carne"));

if(frase.includes("alface")) {
    console.log("Muito bem!");
} else {
    console.log("Coma algo saudável!");
}

let arquivo = "musica.mp3";

console.log(arquivo.endsWith("mp3")); // verifica se termina com 'mp3'
console.log(arquivo.endsWith("mp4"));
console.log(arquivo.startsWith("mus"));

// Slice
console.log(arquivo.slice(0, 3)); // recorta a string do indice 0 até o 3
console.log(arquivo.slice(0, 4));
console.log(arquivo.slice(4, 6));
