/*49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */
let transacoesFinanceiras = [
    {id: 1, valor: 100, data:"01/04/2024", categoria: "alimentação"},
    {id: 2, valor: 200, data:"02/04/2024", categoria: "transporte"},
    {id: 3, valor: 300, data:"04/04/2024", categoria: "lazer"},
    {id: 4, valor: 400, data:"05/04/2024", categoria: "alimentação"},
    {id: 5, valor: 250, data:"06/04/2024", categoria: "transporte"},
];
function transacoesPorCategorias(transacoesFinanceiras){
    let resultado = {};

    for(let transacao of transacoesFinanceiras){
        let {categoria, valor} = transacao;
        if(!resultado[categoria]){
            resultado[categoria] = {
                transacoes:[],
                subtotal:0
            };
        }
        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += valor;
    }
    return resultado;
}
let transacoesCategorias = transacoesPorCategorias(transacoesFinanceiras);
console.log(JSON.stringify(transacoesCategorias, null, 2));
