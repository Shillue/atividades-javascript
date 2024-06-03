/*29. . Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/
const prompt =  require("prompt-sync")();

let matriz = [];
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

for(let i = 0; i < 5; i++){
    matriz[i] = [];
    for(let j = 0; j < 5; j++){
        matriz[i][j] = parseInt(prompt(`Digite o valor para Matriz[${i}][${j}]`));
        if(isNaN(matriz[i][j])){
            matriz[i][j] = parseInt(prompt(`Valor inválido. Apenas números. Digite o valor para Matriz[${i}][${j}]`));
        }
    }
}
//calcular a soma da linha 4
for (let j = 0; j < 5; j++){
    somaLinha4 += matriz[3][j];
}
//calcular a soma da coluna 2
for(let i = 0; i < 5; i++){
    somaColuna2 += matriz[i][1];
}
//calcular a soma da diagonal principal
for(let i = 0; i < 5; i++){
    somaDiagonalPrincipal += matriz[i][i];
}
//calcular a soma de todos os elementos da matriz
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        somaTotal += matriz[i][j];
    }
}
//Exibir
console.log("Matriz[5][5]: ");
for(let i = 0; i < 5; i++){
    console.log(matriz[i].join(" "));
}
console.log(`A soma da linha 4 é: ${somaLinha4}`);
console.log(`A soma da coluna 2 é: ${somaColuna2}`);
console.log(`A soma da diagonal principal é: ${somaDiagonalPrincipal}`);
console.log(`A soma de todos os elementos da matriz é: ${somaTotal}`);
