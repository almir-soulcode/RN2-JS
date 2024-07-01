// Objetos -> são estruturas para representar dados
const pessoa = {
    nome: "José Almir",
    cpf: "999.999.999-99",
    dataNascimento: "10/01/2000",
    contato: { // objeto aninhado
        email: "jose.almir@soulcode.com",
        telefone: "(99) 9-9999-9999",
        fax: "+9 999 999 9999",
    },
    endereco: {
        cidade: "Fortaleza",
        estado: "CE",
        cep: "99999-999",
        rua: "Rua X",
        numero: "271",
    },
    objetivosProfissionais: ["Home Office", "Desenvolvedor Senior", "Exterior"],
    formacao: [
        { nome: "Ensino médio", periodo: "2000-2003" }, // 0
        { nome: "Técnico em Informática", periodo: "2003-2005" }, // 1
        { nome: "Bacharelado em Computação", periodo: "2005-2010" }, // 2
    ]
}

// console.log(pessoa.contato);
// console.log(pessoa.contato.email);
// console.log(pessoa.endereco);
// console.log(pessoa.endereco.estado);
// pessoa.objetivosProfissionais.push("Dólar");
// pessoa.objetivosProfissionais.forEach(objetivo => console.log(objetivo));
pessoa.formacao.push({ nome: "Mestrado em IA", periodo: "2010-2012" });
for(let f of pessoa.formacao) {
    console.log("Formação: ", f.nome);
    console.log("Período: ", f.periodo);
}

// Exemplo: Crie um objeto para representar um aluno:
    // nome -> string
    // serie -> string
    // materias (nome da materia, nome do professor) -> array de objetos (materia, professor)
    // notas -> array de number

const aluno = {
    nome: "Gabriel Braga",
    serie: "7º ano",
    materias: [
        { nome: "HTML", professor: "Almir" },
        { nome: "Inglês", professor: "Paul" },
        { nome: "Soft-skills", professor: "Bismark" },
    ],
    notas: [7.5, 8.0, 9.0]
};
