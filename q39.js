/*39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.*/

const prompt = require("prompt-sync")();

let vetorA = [];

console.log("Digite 100 números para o vetor A: ");
for(let i = 0; i < 100; i++){
    let numero = parseInt(prompt(`Número ${i+1}: `));
    vetorA.push(numero);
}
let vetorB = [];
for(let i = 0; i < vetorA.length; i++){
    if(vetorA[i] > 0){
        vetorB.push(vetorA[i]);
    }
}
console.log(`Vetor A original: ${vetorA}`);
console.log(`Vetor B compactado, sem valores nulos e negativos: ${vetorB}`);
