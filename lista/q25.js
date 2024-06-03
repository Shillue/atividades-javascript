/*25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.*/
const prompt = require ("prompt-sync")();

let matriz = [];
let somaColunas = new Array(20).fill(0);

for(let i = 0; i < 15; i++){
    matriz[i]=[];
    for(let j = 0; j < 20; j++){
        let valor = parseFloat(prompt(`Digite o valor para a matriz[${i}][${j}]: `));
        matriz[i][j] = valor;
        somaColunas[j] += valor;
    }
}

console.log("Matriz 15x20: ");
for(let i = 0; i < 15; i++){
    console.log(matriz[i].join(" "));
}
console.log("Soma cada coluna: ");
for(let j = 0; j < 20; j++){
    console.log(`Coluna ${j}: ${somaColunas[j]}`);
}