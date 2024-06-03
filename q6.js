/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.*/

const  prompt = require(`prompt-sync`)();
let numeroSorteado = Math.floor(Math.random() * 5) + 1;

let palpite = parseInt(prompt("Tente adivinhar o número sorteado entre 1 e 5: "));

while(numeroSorteado !== palpite){
    if(palpite >= 1 && palpite <= 5){
        if(palpite < numeroSorteado){
            palpite = parseInt(prompt(`É maior que: ${palpite}.Tente de novo: `));
        }else{
            palpite = parseInt(prompt(`É menor que: ${palpite}.Tente de novo: `));
        }
    }else{
        palpite = parseInt(prompt("Tem que ser um número entre 1 e 5: "));
    }
}
console.log(`Parabéns! Você acertou o número sorteado: ${numeroSorteado}`);