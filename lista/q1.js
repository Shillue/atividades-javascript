/*1.  Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.*/
const  prompt = require(`prompt-sync`)();
let quantidadeCigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dias? "));
let quantosAnosFuma = parseInt(prompt("Por quantos anos você já fumou? "));

let totalDeCigarros = (quantidadeCigarrosPorDia * 365) * quantosAnosFuma;

let tempoPerdidoEmMinutos = totalDeCigarros * 10;
// Converter minutos para dias (considerando 24 horas em um dia e 60 minutos em uma hora)
let tempoPerdidoEmDias = tempoPerdidoEmMinutos / (24 * 60);

console.log("Você perdeu aproximadamente " + tempoPerdidoEmDias.toFixed(2) + " dias de vida devido ao hábito de fumar.");

