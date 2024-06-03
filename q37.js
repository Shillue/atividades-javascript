/*37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.*/

const prompt = require("prompt-sync")();

let gabaritoProva = [];

console.log("Digite o gabarito (A, B, C ou D):");
for (let i = 0; i < 20; i++) {
    let resposta = (prompt(`Questão ${i + 1} resposta: `).toUpperCase());
    gabaritoProva.push(resposta);
}
let acertos = 0;
for (let aluno = 1; aluno <= 50; aluno++) {
    console.log(`\nAluno ${aluno}`);
    for (let i = 0; i < 20; i++) {
        let respostaAluno = prompt(`Resposta do aluno para questão ${i + 1}: `).toUpperCase();
        if (respostaAluno === gabaritoProva[i]) {
            acertos++;
        }
    }

    console.log(`Aluno ${aluno} acertou: ${acertos}.`);
    if (acertos >= 12) {
        console.log(`APROVADO com o total de ${acertos} acertos.`);
        acertos = 0;
        
    } else {
        console.log(`REPROVADOcom o total de ${acertos} acertos.`);
        acertos = 0;
    }
}
