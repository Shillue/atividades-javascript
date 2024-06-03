/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/
const prompt = require("prompt-sync")();

let matriz = [];
let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for(let i = 0; i < 10; i++){
    matriz[i] = [];
    for(let j = 0; j < 10; j++){
        matriz[i][j] = parseInt(prompt(`Digite o valor para Matriz[${i}][${j}]`));
    }
}
// Exibir a matriz Matriz
console.log("Matriz M[10][10]:");
for (let i = 0; i < 10; i++) {
    console.log(matriz[i].join(" "));
}
//calcular a soma dos elementos acima da diagonal
for(let i = 0; i < 10; i++){
    for(let j = i + 1; j < 10; j++){
        somaAcimaDiagonal += matriz[i][j];
    }
}
//calcular a soma dos elementos abaixo da diagonal
for(let i = 0; i < 10; i++){
    for(let j = 0; j < i; j++){
        somaAbaixoDiagonal += matriz[i][j];
    }
}
// Exibir
console.log("O resultado da soma dos elementos acima da diagonal principal é:", somaAcimaDiagonal);
console.log("O resultado da soma dos elementos abaixo da diagonal principal é:", somaAbaixoDiagonal);
