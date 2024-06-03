/*2.  Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const  prompt = require(`prompt-sync`)();
let velocidadeCarro = parseInt(prompt("Qual a velocidade do carro em km/h? "));

if(velocidadeCarro > 80){
    
    let kmAcimaDaVelocidade = velocidadeCarro - 80;

    let valorMulta = kmAcimaDaVelocidade * 5;

    console.log("Você foi multado por ultrapassar a velocidade permitida!");
    console.log(`Valor da multa: R$ ${valorMulta.toFixed(2)}`);
    console.log("");
} else {
    console.log("Velocidade dentro do limite permitido!");
    console.log("");
}
