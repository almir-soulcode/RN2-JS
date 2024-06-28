// Objetos = servem para estruturar dados
/*
    let variavel = { 
        propriedade1: valor1,
        propriedade2: valor2,
        propriedade3: valor3 
    }
*/

// nome, idade, peso, altura (propriedades do objetos)
let pessoa1 = {
    nome: "José",
    idade: 29,
    peso: 70.5,
    altura: 1.75
};

let pessoa2 = {
    nome: "Maria",
    idade: 30,
    peso: 65.0,
    altura: 1.70,
    formado: true
};

// Acesso de propriedade
// console.log(pessoa1.nome);
// console.log(pessoa2.idade);
// console.log(pessoa1["peso"]);
// console.log(pessoa2["altura"]);
// console.log(pessoa1.email);

// Adicionando propriedades ao objeto
pessoa1["email"] = "jose@email.com";
//console.log(pessoa1);

// Alterar valores nas propriedades
pessoa1.idade = 40;
pessoa2["idade"] += 5; // acrescenta +5 a idade atual

//console.log(pessoa1.idade);
//console.log(pessoa2.idade);
//console.log("Pessoa 2: ", pessoa2);

// Removendo propriedades;
delete pessoa1["idade"]; // pessoa1.idade
//console.log("Pessoa 1: ", pessoa1);

// Conversão JSON
const dado = JSON.stringify(pessoa2);
console.log(JSON.parse(dado));