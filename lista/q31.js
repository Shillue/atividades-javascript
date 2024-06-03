/*31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.*/
const prompt = require("prompt-sync")();

let a  = parseInt(prompt("Digite um número inteiro: "));
let v = [];

//Criando a Matriz v[30][30]
for (let i = 0; i < 30; i++){
    v[i] = [];
    for(let j = 0; j < 30; j++){
        v[i][j] =  parseInt(prompt(`Digite o valor para Matriz[${i}][${j}]: `));
        if(isNaN(v[i][j])){
            v[i][j] = parseInt(prompt(`Valor inválido! Apenas números. Digite o valor para Matriz[${i}][${j}]: `));
        }
    }
}
//Contar quantos valores iguais a A estão na matriz v
let contandoA = 0;
for(let i = 0; i < 30; i++){
    for(let j = 0; j < 30; j++){
        if(v[i][j] === a){
            contandoA++;
        }
    }
}
//Criar a matriz x contendo todos os elementos de v diferentes de A
let x = [];
for(let i = 0; i < 30; i++){
    x[i] = [];
    for(let j = 0; j < 30; j++){
        if(v[i][j] !== a){
            x.push(v[i][j]);
        }
    }
}

//Exibir
console.log("Matriz v: ");
for(let i = 0; i < 30; i++){
    console.log(v[i].join(" "));
}
console.log("");
console.log(`O número ${a} aparece ${contandoA} vezes na matriz v.`);
console.log("")
console.log(`Matriz X (sem os valores iguais a A): `)
for(let i = 0; i < 30; i++){
    let linha = x[i].map(value => (value === null ? "" : value)).join(" ");
    console.log(linha);
}
