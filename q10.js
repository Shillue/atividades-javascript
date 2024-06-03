/*10.Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const  prompt = require(`prompt-sync`)();

let soma = 0;
let menorValor=0;
let media = 0;
let quantosPares = 0;
let quantidadeNumeros = 0;
let continuar;

do{
    let numero = parseInt(prompt("Digite um número: "));
    // O somatório entre todos os valores
    soma += numero;
    // Qual foi o menor valor digitado
    if(menorValor === 0 || numero < menorValor){
        menorValor = numero;
    }
    // Quantos valores são pares
    if(numero % 2 === 0){
        quantosPares++;
    }

    quantidadeNumeros++;

    continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
}while(continuar === "S");

media = soma / quantidadeNumeros;

console.log(`a) O somatório entre todos os valores: ${soma}`);
console.log(`b)Qual foi o menor valor digitado: ${menorValor}`);
console.log(`c) A média entre todos os valores: ${media}`);
console.log(`d) Quantos valores são pares: ${quantosPares}`);
