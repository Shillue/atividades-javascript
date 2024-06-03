/*26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].*/
//O número de colunas da matriz A deve ser igual ao número de linhas da matriz B, pois para calcular o produto de duas matrizes, suas dimensões precisam ser compatíveis. Por isso fiz assim A[3x5] e B[5x3] e P[3x3]

let A = [
    [1 , 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
];
let B = [
    [6, 7, 8],
    [11, 12, 14],
    [1, 2, 3],
    [6, 7, 8],
    [11, 12, 14],
    [1, 2, 3]
];

let P = [];

for(let i = 0; i < 3; i++){
    P[i] = [];
    for(let j = 0; j < 3; j++){
        P[i][j] = 0;
        for (let k = 0; k < 5; k++){
            P[i][j] = P[i][j] + (A[i][k] * B[k][j]);
        }
    }
}

console.log("Matriz Produto P[3x3]: ");
for(let i = 0; i < 3; i++){
    console.log(P[i].join(" "));
}
