/*41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.*/
const prompt = require("prompt-sync")();

let pessoa = {
    nome: "João",
    idade: 30
}

console.log(`Idade: ${pessoa.idade}`);

let email = (prompt("Digite o email: "));
//validando email
const regex = /\S+@\S+\.\S+/;
while(!regex.test(email)){
    console.log("Email inválido! Tente novamente.");
    email = prompt("Digite o email: ");
}
pessoa.email = email;

//Exibir objeto
console.log("")
console.log(pessoa);
