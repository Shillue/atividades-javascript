/*24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.*/

const prompt = require('prompt-sync')();

let M = [
    [1, -1, 2, -2, 3, -3, 4, -4],
    [1, -1, 2, -2, 3, -3, 4, -4],
    [1, -1, 2, -2, 3, -3, 4, -4],
    [1, -1, 2, -2, 3, -3, 4, -4],
    [1, -1, 2, -2, 3, -3, 4, -4],
    [1, -1, 2, -2, 3, -3, 4, -4]
]
let vetorC = new Array(6).fill(0);

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 8; j++){
        if(M[i][j] < 0){
            vetorC[i]++;
        }
    }
}
console.log("Matriz M[6][8]: ");
for(let i = 0; i < 6; i++){
    console.log(M[i].join(" "));
}
console.log( `O vetor C mostra a quantidade de elementos negativo por linha que é: ${vetorC}`);
