/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/
const prompt = require("prompt-sync")();

let vetor6 = [];

console.log("Digite 6 números para o vetor:");
for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt(`Número ${i + 1}: `));
    vetor6.push(numero);
}

console.log("\nPara escolher uma operação digite: 1, 2, 3, 4, 5: ");
console.log("1 - Soma dos elementos");
console.log("2 - Produto dos elementos");
console.log("3 - Média dos elementos");
console.log("4 - Ordene os elementos em ordem crescente");
console.log("5 - Mostre o vetor");

while(true){
    let operacao = parseInt(prompt("Digite o número da operação escolhida: "));
switch(operacao){
        case 1:
            let soma = 0;
            for(let i = 0; i < vetor6.length; i++){
                soma+=vetor6[i];
            }
            console.log(`Soma dos elementos: ${soma}`);
            break;
        case 2:
            let produto = 1;
            for(let i = 0; i < vetor6.length; i++){
                produto *= vetor6[i];
            }
            console.log(`Produto dos elementos: ${produto}`);
            break;
        case 3:
            let somaMedia = 0;
            for(let i = 0; i < vetor6.length; i++){
                somaMedia += vetor6[i];
            }
            let media = somaMedia / vetor6.length;
            console.log(`Média dos elementos: ${media}`);
            break;
        case 4:
            vetor6.sort((a, b) => a - b);
            console.log(`Vetor em ordem crescente: ${vetor6}`);
            break;
        case 5:
            console.log(`Vetor original: ${vetor6}`);
            break;
        default:
            console.log("Operação inválida");
            break;
    }
    let continuar = prompt("Deseja inserir dados de outra pessoa? (S/N): ").toUpperCase();
    if(continuar !== "S"){
        break;
    }
}
