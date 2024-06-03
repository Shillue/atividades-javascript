/*12.  Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/
const  prompt = require(`prompt-sync`)();

let termo1 = 1;
let termo2 = 1;
let proximoTermo = 0;
for(let i = 1; i <= 10; i++ ){
    proximoTermo = termo1 + termo2;

    console.log(`Termo ${i} é: ${proximoTermo}`);
    termo1 = termo2;
    termo2 = proximoTermo;
}
