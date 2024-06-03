/*36.  Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".*/

const prompt = require("prompt-sync")();

let gabarito = [];

console.log("Digite o gabarito (13 números):");
for (let i = 0; i < 13; i++) {
    let resposta = parseInt(prompt(`Resposta ${i + 1}: `));
    gabarito.push(resposta);
}

let respostasApostadores = [];

// Leitura das respostas dos jogadores
for (let i = 0; i < 100; i++) {
    let numeroCartao = prompt("Digite o número do cartão do apostador: ");
    let respostas = [];
    console.log(`Digite as 13 respostas do apostador ${numeroCartao}:`);
    for (let j = 0; j < 13; j++) {
        let resposta = parseInt(prompt(`Resposta ${j + 1}: `));
        respostas.push(resposta);
    }
    respostasApostadores.push({ numeroCartao, respostas});
}

// Exibir o gabarito
console.log("\nGabarito:");
console.log(gabarito.join(", "));

// Exibir respostas de cada apostador e comparar com o gabarito
respostasApostadores.forEach(apostador => {
    let numeroCartao = apostador.numeroCartao;
    let respostas = apostador.respostas;

    // Comparando as respostas com o gabarito e contando os acertos
    let acertos = 0;
    for (let j = 0; j < 13; j++) {
        if (respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    // Exibir 
    if (acertos === 13) {
        console.log(`\n----------------------------`);
        console.log("Parabéns, tu foi o GANHADOR!");
        console.log(`Apostador ${numeroCartao}:`);
        console.log("Respostas:");
        console.log(respostas.join(", "));
        console.log(`Número de acertos = ${acertos}`);
    }else{
        console.log(`\n----------------------------`);
        console.log(`Apostador ${numeroCartao}:`);
        console.log("Respostas:");
        console.log(respostas.join(", "));
        console.log(`Número de acertos = ${acertos}`);
    }
});
