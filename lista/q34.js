/*34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.*/

let matriz = [];
function geradorMatriz(){
    return Math.floor(Math.random() * 100); 
}
for(let i = 0; i < 50; i++){
    matriz[i] = [];
    for(let j = 0; j < 50; j++){
        matriz[i][j] = geradorMatriz();
    }
}
//Exibir matriz[50][50]
console.log("Matriz[50][50]: ");
for(let i = 0; i < 50; i++){
    console.log(matriz[i].join(" "));
}
//Multiplicando cada linha pelo elemento da diagonal principal
for(let i = 0; i < 50; i++){
    let diagonalElemento = matriz[i][i];
    console.log(`Elemento da diagonal principal de cada linha é ${diagonalElemento}`);
    for(let j = 0; j < 50; j++){
        matriz[i][j] *= diagonalElemento;
    }
}
//Exibir
console.log("Matriz modificada");
for(let i = 0; i < 50; i++){
    console.log(matriz[i].join(" "));
}
