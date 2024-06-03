/*9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.*/

const  prompt = require(`prompt-sync`)();

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while(true){
    let salario = parseFloat(prompt("Digite o salário do funcionário: "));
    let sexo = prompt("Digite o sexo do funcionário sendo 'M' para masculino ou 'F' para feminino: ").toUpperCase();

    if(sexo === "M"){
        totalSalarioHomens += salario;
    }else if(sexo === "F"){
        totalSalarioMulheres += salario;
    }else{
        console.log("Sexo inválido. Por favor, digite 'M' para masculino ou 'F' para feminino.");
    }
    let continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
    if(continuar ==="N"){
        break;
    }
    while(continuar !== "N" && continuar !== "S"){
       continuar = prompt("Termo inválido. Por favor,digite S para continuar ou N para parar: ").toUpperCase();
    }
}

console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
