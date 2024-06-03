/*50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.
2.Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.
4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.*/
const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];
let hotelId = 1;
let reservaId = 1;

//adicionar hotel
function adicionarHotel(){
    const nome = prompt(`Digite o nome do Hotel: `).toLowerCase();
    const cidade = prompt("Digite a cidade do Hotel: ").toLowerCase();
    const quartosTotais = parseInt(prompt("Digite o número total de quartos: "));
    const hotel = {
        id:hotelId++,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais,
        avaliacoes:[]
    };
    hoteis.push(hotel);
    console.log(`Hotel adicionado: ${JSON.stringify(hotel, null, 2)}`);
}

//Buscar Hoteis Por Cidade
function buscarHoteisPorCidade(){
    const cidade = prompt("Digite a cidade para buscar hotéis: ").toLowerCase();
    const encontrados = [];
    for(let i = 0; i < hoteis.length; i++){
        if(hoteis[i].cidade === cidade){
            encontrados.push(hoteis[i]);
        }
    }
    console.log(`Hotéis em ${cidade}: ${JSON.stringify(encontrados, null, 2)}`);
}

//Fazer reserva
function fazerReserva(){
    const idHotel = parseInt(prompt("Digite o ID do Hotel para a reserva: "))
    const nomeCliente = prompt("Digite o nome do cliente: ");
    let hotel = null;
    for(let i = 0; i < hoteis.length; i++){
        if(hoteis[i].id === idHotel){
            hotel = hoteis[i];
            break;
        }
    }
    if(hotel && hotel.quartosDisponiveis > 0){
        const reserva = {
            idReserva: reservaId++,
            idHotel: idHotel,
            nomeCliente:nomeCliente
        };
        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        console.log(`Reserva feita: ${JSON.stringify(reserva, null, 2)}`);
        
    }else{
        console.log("Reserva não pôde ser feita. Quartos indisponíveis ou hotel não encontrado");
    }
}
//Cancelar reserva
function cancelarReserva(){
    const idReserva = parseInt(prompt("Digite o ID da reserva a ser cancelada: "));
    let reservaIndex = -1;
    for(let i = 0; i < reservas.length; i++){
        if(reservas[i].idReserva === idReserva){
            reservaIndex= i;
            break;
        }
    }
    if(reservaIndex !== -1){
        const reserva = reservas[reservaIndex];
        if(reserva){
            let hotel;
            for(let i = 0; i < hoteis.length; i++){
                if(hoteis[i].id === reserva.idHotel){
                    hotel = hoteis[i];
                    break;
                }
            } 
            if(hotel){
                hotel.quartosDisponiveis++;
                reservas.splice(reservaIndex, 1);
                console.log(`Reserva cancelada: ${JSON.stringify(reserva, null, 2)}`);
                return;
            } 
        } else{
                console.log("Hotel não encontrado.");
            }
    }else{
        console.log("Reserva não encontrada."); 
    }
}

//Listar de reservas
function listarReservas(){
    console.log(`Todas as Reservas: `);
    for(let i = 0; i < reservas.length; i++){
        let reserva = reservas[i];
        let hotel = null;
        for(let j = 0; j < hoteis.length; j++){
            if(hoteis[j].id === reserva.idHotel){
                hotel = hoteis[j];
                break;
            }
        }
        if(hotel){
            console.log(`Rerva ID:${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`)
        }
    }
}

//Check-in
function checkIn(){
    const idReserva = parseInt(prompt("Digite o ID da reserva para check-in: "));
    let reserva = null;
    for(let i = 0; i < reservas.length; i++){
        if(reservas[i].idReserva === idReserva){
            reserva = reservas[i];
            break;
        }
    }
    if(reserva){
        console.log(`Check-in realizado para a reserva: ${JSON.stringify(reserva, null, 2)}`);
    }else{
        console.log("Reserva não encontrada.");
    }
}

//Check-out e avaliação
function checkOutEAvaliacao(){
    const idReserva = parseInt(prompt("Digite o ID da reserva para check-out: "));
    let reservaIndex = -1;
    for(let i = 0; i < reservas.length; i++){
        if(reservas[i].idReserva === idReserva){
            reservaIndex = i;
            break;
        }
    }
    if(reservaIndex !== -1){
        const reserva = reservas[reservaIndex];
        let hotel = null;
        for(let i = 0; i < hoteis.length; i++){
            if(hoteis[i].id === reserva.idHotel){
                hotel = hoteis[i];
                break;
            }
        }
        if(hotel){
            hotel.quartosDisponiveis++;
            reservas.splice(reservaIndex, 1);
            const avaliacao = parseInt(prompt("Avalie o hotel de 1 a 5: "));
            hotel.avaliacoes.push(avaliacao);
            console.log(`Check-out realizado e avaliação resgistrada: ${avaliacao}`);
        }
    }else{
        console.log("Reserva não encontrada.");
    }
}

//Gerar relatório de ocupação
function gerarRelatorioOcupacao(){
    const idHotel= parseInt(prompt("Digite o ID do hotel para gerar relatório: "));
    let hotel = null;
    for(let i = 0; i< hoteis.length; i++){
        if(hoteis[i].id === idHotel){
            hotel = hoteis[i];
            break;
        }
    }
    if(hotel){
        const ocupacao = ((hotel.quartosTotais - hotel.quartosDisponiveis) / hotel.quartosTotais * 100);
        console.log(`Relatório de Ocupação do Hotel ${hotel.nome}:`);
        console.log(`Quartos Totais: ${hotel.quartosTotais}`);
        console.log(`Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
        console.log(`Taxa de Ocupação: ${ocupacao.toFixed(2)}%`);
    } else {
        console.log("Hotel não encontrado.");
    }
}

//Mostrar avalições dos hoteis
function mostrarAvaliacoes() {
    const idHotel = parseInt(prompt("Digite o ID do hotel para ver as avaliações: "));
    let hotel = null;
    for (let i = 0; i < hoteis.length; i++) {
        if (hoteis[i].id === idHotel) {
            hotel = hoteis[i];
            break;
        }
    }
    if (hotel) {
        if (hotel.avaliacoes.length > 0) {
            console.log(`Avaliações para o Hotel ${hotel.nome}:`);
            for (let i = 0; i < hotel.avaliacoes.length; i++) {
                console.log(`Avaliação ${i + 1}: ${hotel.avaliacoes[i]}`);
            }
        } else {
            console.log(`Nenhuma avaliação encontrada para o Hotel ${hotel.nome}.`);
        }
    } else {
        console.log("Hotel não encontrado.");
    }
}

//Menu
function menu(){
    while(true){
        console.log("\n--------Menu---------");
        console.log("1. Adicionar Hotel");
        console.log("2. Buscar Hotéis por Cidade");
        console.log("3. Fazer Reserva");
        console.log("4. Cancelar Reserva");
        console.log("5. Listar Reservas");
        console.log("6. Check-in");
        console.log("7. Check-out e Avaliar Hotel");
        console.log("8. Gerar Relatório de Ocupação");
        console.log("9. Mostrar Avaliações de um Hotel");
        console.log("10. Sair");

        const escolha = parseInt(prompt("Escolha uma opção: "));
        switch (escolha) {
            case 1: adicionarHotel();
              break;
            case 2: buscarHoteisPorCidade();
              break;
            case 3: fazerReserva();
              break;
            case 4: cancelarReserva();
              break;
            case 5: listarReservas();
              break;
            case 6: checkIn();
              break;
            case 7: checkOutEAvaliacao();
              break;
            case 8: gerarRelatorioOcupacao();
              break;
            case 9:mostrarAvaliacoes();
              break;
            case 10: console.log("Saindo...");
              return;
            default: console.log("Opção inválida.");
          }
    }
}
//Iniciar menu
menu();