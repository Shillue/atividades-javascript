/*4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.*/

const  prompt = require(`prompt-sync`)();

let segmento1 = parseInt(prompt("Digite o comprimento do 1º segmento de reta: "));
let segmento2 = parseInt(prompt("Digite o comprimento do 2º segmento de reta: "));
let segmento3 = parseInt(prompt("Digite o comprimento do 3º segmento de reta: "));

if(segmento1 < segmento2 + segmento3 && segmento2 < segmento1 + segmento3 && segmento3 < segmento1 + segmento2){
    console.log("Com esses comprimentos é possível formar um triângulo!");
}else{
    console.log("Com esses comprimentos não é possível forma um triângulo!");
}
