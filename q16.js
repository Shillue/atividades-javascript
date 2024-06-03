/*16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

let numerosAleatorios = new Array (20);

function gerarNumerosAleatorio(){
    return Math.floor(Math.random() * 100);
}
for(let i = 0; i < 20; i++){
    numerosAleatorios[i] = gerarNumerosAleatorio();
}
console.log ("Numeros gerados: ");
console.log(numerosAleatorios);

//Números ordem crescente
numerosAleatorios.sort((a,b) => a - b);
console.log("Números em ordem crescente: ");
console.log(numerosAleatorios);
