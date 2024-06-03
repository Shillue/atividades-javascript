/*20. . Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).*/
const  prompt = require(`prompt-sync`)();

let funcionarios = [];

for(let i = 0; i < 3; i++){
    
    let matricula = prompt(`Digite a Matrícula do ${i + 1} funcionário: `);
    let nome = prompt(`Digite o nome do ${i + 1} funcionário: `);
    let salarioBruto = parseInt(prompt(`Digite o salário bruto do ${i + 1} funcionário: `));
    let deducaoInss = salarioBruto * 0.12;
    let salarioLiquido = salarioBruto - deducaoInss;
    console.log("");

    let funcionario = {
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto,
        deducaoInss: deducaoInss,
        salarioLiquido: salarioLiquido
    };

    funcionarios.push(funcionario);
}

//Exibir
console.log("Folha Mensal de Pagamentos");
console.log("-----------------------------------------");
for(let i = 0; i < funcionarios.length; i++){
    console.log(`Matrícula do ${i + 1} funcionário: ${funcionarios[i].matricula}`);
    console.log(`Nome do ${i + 1} funcionário: ${funcionarios[i].nome}`);
    console.log(`Salário bruto do ${i + 1} funcionário: ${funcionarios[i].salarioBruto}`);
    console.log(`Dedução INSS do ${i + 1} funcionário: ${funcionarios[i].deducaoInss}`);
    console.log(`Salário líquido do ${i + 1} funcionário: ${funcionarios[i].salarioLiquido}`);
    console.log("-----------------------------------------");
}
