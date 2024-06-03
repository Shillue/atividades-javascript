/*19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.*/
const  prompt = require(`prompt-sync`)();

let horarios = [];

//Expressão regular para validar o formato do horário
const regex = /^(2[0-4]|[01]?[0-9])\.([0-5][0-9])\.([0-5][0-9])$/;
for(let i = 0; i < 5; i++){
    horarios[i] = prompt(`Digite o horário ${i+1} no formato HH. MM. SS: `);
    while (!regex.test(horarios[i])){
        console.log("Formato inválido! O horário deve estar no formato HH.MM.SS.");
        horarios[i] = prompt(`Digite o horário ${i + 1} no formato HH.MM.SS: `);
    }
}

// Exibe os horários válidos lidos
console.log('Os horários válidos digitados foram:');
for(let i = 0; i < horarios.length; i++){
    console.log(`Horário ${i + 1}: ${horarios[i]}`);
}