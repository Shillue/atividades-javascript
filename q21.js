/*21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/
const  prompt = require(`prompt-sync`)();
let pesoIdeal = 0; 

function calcularPesoIdeal(altura, sexo){
    if(sexo === "M"){
        return pesoIdeal = (72.7 * altura) - 58;
    } else if(sexo === "F"){
       return pesoIdeal = (62.1 * altura) - 44.7;
    }
} 
let altura = parseFloat(prompt(`Digite a altura em metros (por exemplo, 1.75): `));
let sexo = prompt(`Digite o sexo (M para masculino ou F para Feminino): `).toUpperCase();

if(isNaN(altura) || sexo !== "F" && sexo !== "F"){
    if(isNaN(altura)){
        altura = parseFloat(prompt(`Altura inválida! Digite a altura em metros (por exemplo, 1.75): `));
    }else {
        sexo = prompt(`Sexo Inválido! Digite o sexo (M para masculino ou F para Feminino): `).toUpperCase();
    }
}    

pesoIdeal = calcularPesoIdeal(altura, sexo);
console.log (`O peso ideal para a pessoa de ${altura}m e sexo ${sexo} é ${pesoIdeal.toFixed(2)}`);
