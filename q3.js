/*3.  Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.*/

const  prompt = require(`prompt-sync`)();
let distanciaPercorrer = parseInt(prompt("Qual a distância que o passageiro deseja percorrer em km? "));
if(distanciaPercorrer <= 200){
    let precoDaViagem = distanciaPercorrer * 0.50;
    console.log(`O preço da passagem é de: R$ ${precoDaViagem.toFixed(2)}`);
}else{
    let precoDaViagem = distanciaPercorrer * 0.45
    console.log(`O preço da passagem é de: R$ ${precoDaViagem.toFixed(2)}`);
}
