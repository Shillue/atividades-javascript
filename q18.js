/*18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.*/

const  prompt = require(`prompt-sync`)();
let funcionarios = [];

while(true){
    let funcionario = {
        nome: prompt("Digite o nome do funcionário: "),
        cargo: prompt("Digite o cargo do funcionário: "),
        salario: parseInt(prompt("Digite o salário do funcionário: "))
    }
    
    funcionarios.push(funcionario);
    
    console.log("\nInformações do Funcionário:");
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);

    console.log("");
    let continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
    console.log("");
    if(continuar ==="N"){
        break;
    }
    while(continuar !== "N" && continuar !== "S"){
       continuar = prompt("Termo inválido. Por favor,digite S para continuar ou N para parar: ").toUpperCase();
       console.log("");
    }

}
for(let i = 0; i < funcionarios.length ; i++){
    console.log(`\nInformações do Funcionário ${i + 1}:`);
    console.log(`Nome: ${funcionarios[i].nome}`);
    console.log(`Cargo: ${funcionarios[i].cargo}`);
    console.log(`Salário: R$ ${funcionarios[i].salario.toFixed(2)}`);
}
