/*35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.*/
const prompt = require("prompt-sync")();
let vetorPar = [];
let vetorImpar = [];
let vetorParCompleto = [];
let vetorImparCompleto = [];
let vetorCompleto = [];

for(let i = 0; i < 30; i++){
    let valor = parseInt(prompt("Digite um número: "));
    if(isNaN(valor)){
        valor = parseInt(prompt("Valor inválido! Digite um número: "));
    }else{
        if(valor % 2 === 0){
            vetorPar.push(valor);
            if(vetorPar.length === 5){
                console.log("Vetor de pares cheio: ");
                console.log(vetorPar.join(", "));
                vetorCompleto = vetorCompleto.concat(vetorPar);
                vetorParCompleto = vetorParCompleto.concat(vetorPar);
                vetorPar = [];//limpar vetor
            }
        }else{
            vetorImpar.push(valor);
            if(vetorImpar.length === 5){
                console.log("Vetor de ímpares cheio: ");
                console.log(vetorImpar.join(", "));
                vetorCompleto = vetorCompleto.concat(vetorImpar);
                vetorImparCompleto = vetorImparCompleto.concat(vetorImpar);
                vetorImpar = [];//limpar vetor
            }
        }
    }
}
//Exibir
console.log("------------------------------------");
console.log(`Vetor completo: ${vetorCompleto.join(", ")}`);
console.log(`Vetor de pares completo: ${vetorParCompleto.join(", ")}`);
console.log(`Vetor de ímpares completos: ${vetorImparCompleto.join(", ")}`);
