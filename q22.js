/*22.  A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.*/

const  prompt = require(`prompt-sync`)();
function calcularPesquisa(){
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let salarioAte350 = 0;
    let totalPessoas = 0;

    while(true){
        let salario = parseFloat(prompt("Digite o salário da pessoa R$: "));
        let filhos = parseInt(prompt("Digite o número de filhos da pessoa: "));
        totalSalario += salario;
        totalFilhos += filhos;
        totalPessoas++;

        if(salario > maiorSalario){
            maiorSalario = salario;
        }
        if(salario <= 350){
            salarioAte350++;
        }
        let continuar = prompt("Deseja inserir dados de outra pessoa? (S/N): ").toUpperCase();
        if(continuar !== "S"){
            break;
        }
    }
    let mediaSalario = totalSalario / totalPessoas;
    let mediaFilhos = totalFilhos / totalPessoas;
    let percentualSalarioAte350 = (salarioAte350 / totalPessoas) * 100;

    return{
        mediaSalario,
        mediaFilhos,
        maiorSalario,
        percentualSalarioAte350
    };
}

let pesquisa = calcularPesquisa();
console.log(`Média de salário da população: R$${pesquisa.mediaSalario.toFixed(2)}`);
console.log(`Média do número de filhos: ${pesquisa.mediaFilhos.toFixed(2)}`);
console.log(`Maior salário: R$${pesquisa.maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${pesquisa.percentualSalarioAte350.toFixed(2)}%`);
