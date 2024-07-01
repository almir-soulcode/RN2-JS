// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. 
// Por exemplo: jose.almir@dev.com -> j*********@dev.com.
const ofuscarEmail = (email) => {
    // Desestruturação do array
    // o valor do índice 0 é armazenado na variável 'usuario'
    // o valor do índice 1 é armazenado na variável 'dominio'
    const [ usuario, dominio ] = email.split("@");

    return usuario[0] + "******" + "@" + dominio;
}

console.log(ofuscarEmail("maria@hotmail.com"));

// Exemplo de desestruturação de arrays
const [nome1, nome2] = ["Almir", "Gabriel", "Victor", "Igor"];
console.log(nome1);
console.log(nome2);

// Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. 
// Dica: use objetos para guardar as contagens de cada caractere.
function contarCaracteres(str) {
    const contagem = {};

    for(let caractere of str) {
        if(contagem[caractere]) {
            contagem[caractere]++;
        } else {
            contagem[caractere] = 1;
        }
    }

    console.log(contagem);
}

contarCaracteres("batata");

// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo
// (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
function palindromo(str) {
    let strInvertida = str.split("").reverse().join("");
    return str.toLowerCase() === strInvertida.toLowerCase();
}

console.log(palindromo("Radar"));

// Exercício 4: Escreva uma função que conte o número de vogais em uma string. 
// Dica: Você pode usar um array com todas as vogais possíveis e verificar cada 
// letra da string para ir contando.
function contagemVogais(palavra) {
    const vogais = ["a", "e", "i", "o", "u"];
    let contagem = 0;
    const palavraLower = palavra.toLowerCase();

    for(let letra of palavraLower) {
        if(vogais.includes(letra)) {
            contagem++;
        }
    }

    return contagem;
}

console.log(contagemVogais("possivel"));