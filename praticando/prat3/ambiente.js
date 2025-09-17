let aluno = 
    {
    nome: "João",
    idade: 20,
    curso: "Engenharia", 
    materias: ["Cálculo", "Física", "Programação"]
    }
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Curso: ${aluno.curso}`);
console.log(`Primeiras matérias: ${aluno.materias[0]}, ${aluno.materias[1]}, ${aluno.materias[2]}`);

aluno.materias.push("Química");
console.log(`Matérias atualizadas: ${aluno.materias.join(", ")}`);  

aluno.status = "Ativo";
console.log(`Status do aluno: ${aluno.status}`);

console.log(`Propriedades do aluno: Nome: ${aluno.nome}, Idade: ${aluno.idade},Curso: ${aluno.curso}, Status: ${aluno.status}`);