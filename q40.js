/*40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, 
correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de  vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)*/
const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite o resultado oficial da Loto: ")
for(let i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Número ${i+1}: `));
    vetor.push(numero);
}
let apostas = [];
for(let i = 0; i < 50; i++){
    let aposta = [];
    console.log(`\nDigite os 5 números da aposta ${i + 1}`);
    for(let j = 0; j < 5; j++){
       let numero = parseInt(prompt(`Digite o ${j+1}: `));
       if(isNaN(numero)){
        numero = parseInt(prompt(`Valor inválido! Digite o ${j+1}: `));
       }
       aposta.push(numero);
    }
    apostas.push(aposta);
}
//Comparando
for(let i = 0; i < apostas.length; i++){
    let aposta = apostas[i];
    let ganhador = true;

    for(let j = 0; j < 5; j++){
        if(aposta[j] !== vetor[j]){
            ganhador = false;
            break;
        }
    }
    if(ganhador){
        console.log(`Aposta ${i+1}: Ganhador.`);
    }else{
        console.log(`Aposta ${i+1}: Não é ganhador.`);
    }
}
