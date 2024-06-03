/*5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

const  prompt = require(`prompt-sync`)();
const alternativas = ["Pedra", "Papel", "Tesoura"];

function obterEscolhaDoComputador(){
    return alternativas[Math.floor(Math.random() * alternativas.length)];
}
function obterEscolhaDoJogador(){
    let escolha = prompt("Escolha: Pedra, Papel ou Tesoura? ").toLowerCase();

    return escolha;
}

function vencedor(escolhaDoComputador, escolhaDoJogador){
    if(escolhaDoComputador === escolhaDoJogador){
        return "Empate!";
    }if((escolhaDoComputador === "Tesoura" && escolhaDoJogador === "Pedra") || (escolhaDoComputador === "Pedra" && escolhaDoJogador === "Papel") || (escolhaDoComputador === "Papel" && escolhaDoJogador === "Tesoura")){
        return "Você ganhou!";
    }else{
        return "Você perdeu!";
    }
}

let escolhaDoJogador = obterEscolhaDoJogador();
let escolhaDoComputador = obterEscolhaDoComputador();
let resultado = vencedor(escolhaDoComputador, escolhaDoJogador);

console.log(`Você escolheu: ${escolhaDoJogador}`);
console.log(`O computador escolheu: ${escolhaDoComputador}`);
console.log(`Resultado foi: ${resultado}`);
