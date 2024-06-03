/*27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.*/
const prompt = require("prompt-sync")();

let m = [];
let v = [];
let a;

for(let i = 0; i < 6; i++){
    m[i] = [];
    for(let j = 0; j < 6; j++){
        m[i][j] = parseFloat(prompt(`Digite o valor para M[${i}][${j}]`));
    }
}
a = parseInt(prompt("Digite o valor de A: "));

let index = 0;
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        v[index] = m[i][j] * a;
        index++;
    }
}
console.log("Vetor V: ");
console.log(v.join(", "));
