/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.*/

const  prompt = require(`prompt-sync`)();

let numeros = new Array(10);

for(let i = 0; i < 10; i++){
    numeros[i] = parseInt(prompt(`Digite o ${i + 1} número inteiro: `)); 
}
console.log("Números pares e suas posições: ");
for(let i = 0; i < 10; i++){
    if(numeros[i] % 2 === 0){
        console.log(`Número ${numeros[i]} na posição ${i}`);
    }
}
