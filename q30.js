/*30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados*/
const prompt = require("prompt-sync")();

let matriz5 = [];
let somaLinha = new Array(5).fill(0);
let somaColuna = new Array(5).fill(0);

for(let i = 0; i < 5; i++){
    matriz5[i] = [];
    for(let j = 0; j < 5; j++){
        matriz5[i][j] = parseInt(prompt(`Digite o valor para Matriz[${i}][${j}]: `));
        if(isNaN(matriz5[i][j])){
            matriz5[i][j] = parseInt(prompt(`Valor inválido! Apenas números. Digite o valor para Matriz[${i}][${j}]: `));
        }
    }
}

//Calcular a soma das linhas e colunas
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        somaLinha[i] += matriz5[i][j];
        somaColuna[j] += matriz5[i][j];
    }
}

//Exibir
console.log("Matriz[5][5]: ");
for(let i = 0; i < 5; i++){
    console.log(matriz5[i].join(" "));
}
console.log(`Vetor SL (Soma das linhas): ${somaLinha.join(", ")}`);
console.log(`Vetor SC (Soma das colunas): ${somaColuna.join(", ")}`);
