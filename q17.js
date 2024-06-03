/*17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.*/
const  prompt = require(`prompt-sync`)();
let nome = []; 
let idade = [];

for(let i = 0; i < 9; i++){
    nome[i] = prompt(`Digite o nome da pessoa ${i + 1}: `);
    idade[i] = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `));
}
console.log("Pessoas menores de idade: ");
for(let i = 0; i < 9; i++){
    if(idade[i] < 18){
        console.log(`Nome: ${nome[i]}, Idade: ${idade[i]}`);
    }
}
