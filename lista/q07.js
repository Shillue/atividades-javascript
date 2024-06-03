/**7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const  prompt = require(`prompt-sync`)();

let tipoCarro = prompt("Qual o tipo de carro que você alugou (popular ou luxo)? ");
let diasAlugado = parseInt(prompt("Quantos dias você alugou o carro? "))
let kmPercorrido = parseInt(prompt("Quantos km foram percorridos? "));

let aluguelPopular = 90;
let aluguelLuxo = 150;
let precoAluguel = 0;

if((tipoCarro.toLowerCase() === "popular") || (tipoCarro.toLowerCase() === "luxo")){
    if(tipoCarro.toLowerCase() === "popular"){
        if(kmPercorrido <= 100){
            precoAluguel = (aluguelPopular * diasAlugado) + (kmPercorrido * 0.20);     
        }else {
            precoAluguel = (aluguelPopular * diasAlugado) + (kmPercorrido * 0.10);     
        }
    }else{
        if(kmPercorrido <= 200){
            precoAluguel = (aluguelLuxo * diasAlugado) + (kmPercorrido * 0.30); 
        }else {
            precoAluguel = (aluguelLuxo * diasAlugado) + (kmPercorrido * 0.25);   
        }
    }  
    console.log(`O preço total do aluguel a ser pago é: R$ ${precoAluguel.toFixed(2)}`);
}else{
    console.log("Tipo de carro inválido.")
}
