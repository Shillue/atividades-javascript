/*32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.*/
const prompt = require("prompt-sync")();

let matriz = [];
let matrizModificada = [];

for(let i = 0; i < 12; i++){
    matriz[i] = [];
    for(let j = 0; j < 13; j++){
        matriz[i][j] = parseInt(prompt(`Digite o valor para M[${i}][${j}]: `));
        if(isNaN(matriz[i][j])){
            matriz[i][j] = parseInt(prompt(`Valor inválido! Digite o valor para M[${i}][${j}]: `));
        }
    }
}
//Exibir matriz original
console.log("Matriz Original M[12][13]: ");
for(let i = 0; i < 12; i++){
    console.log(matriz[i].join(" "));
}
//maior número módulo da matriz
for( let i = 0; i < 12; i++){
    let maiorValorModulo = Math.abs(matriz[i][0]);
    for(let j = 0; j < 13; j++){
        if(Math.abs(matriz[i][j]) > maiorValorModulo){
            maiorValorModulo = Math.abs(matriz[i][j]);
        }
    }
}
//Dividir cada elementos da linha pelo maior valor em módulo.
for(let i = 0; i < 12; i++){
    let maiorValorModulo = Math.abs(matriz[i][0]);
    for(let j = 0; j < 13; j++){
        if(Math.abs(matriz[i][j]) > maiorValorModulo){
            maiorValorModulo = Math.abs(matriz[i][j]);
        }
    }
    matrizModificada[i] = matriz[i].map(elemento => (elemento /maiorValorModulo).toFixed(2));
}

//Exibir matriz modificada
console.log("Matriz modificada: ");
for(let i = 0; i < 12; i++){
    console.log(matrizModificada[i].join(" "));
}
