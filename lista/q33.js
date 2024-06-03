/*33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.*/
const prompt = require("prompt-sync")();

let matriz = [];

for(let i = 0; i < 3; i++){
    matriz[i] = [];
    for(let j = 0; j < 3; j++){
        matriz[i][j] = parseInt(prompt(`Digite o valor para a Matriz[${i}][${j}]`));
        if(isNaN(matriz[i][j])){
            matriz[i][j] = parseInt(prompt(`Valor inválido! Digite o valor para a Matriz[${i}][${j}]`));
        }
    }
}
//Exibir matriz[3][3]
console.log("Matriz[3][3]: ");
for(let i = 0; i < 3; i++){
    console.log(matriz[i].join(" "));
}
//calcular a média dos elementos da diagonal secundária
let somaDiagonalSecundaria = 0;
for(let i = 0; i < 3; i++){
    somaDiagonalSecundaria += matriz[i][2 - i];
}
let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;

//multiplicar os elementos da diagonal principal pela média da secundária
let resultadoMultiplicacao = [];
for(let i = 0; i < 3; i++){
  resultadoMultiplicacao[i] = matriz[i][i] * mediaDiagonalSecundaria;
}
//Exibir a média da diagonal secundária e o resultado da multiplicação
console.log(`Média da diagonal secundária: ${mediaDiagonalSecundaria.toFixed(2)}`);
console.log("Resultado da multiplicação da diagonal principal pela média da diagonal secundária")
for(let i = 0; i < 3; i++ ){
console.log(`O elemento [${i+1}][${i+1}] multiplicado pela média da diagonal secundária: ${resultadoMultiplicacao[i].toFixed(2)}`);
}
