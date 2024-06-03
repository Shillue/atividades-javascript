/*46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.*/
let vendas = [
    {vendedor: "Luan", valor: 100},
    {vendedor: "Pedro", valor: 220},
    {vendedor: "Maria", valor: 150},
    {vendedor: "Luan", valor: 350},
    {vendedor: "Pedro", valor: 240},
];
function resumoVendas(vendas){
    let resumo = {};
    for(let i = 0; i < vendas.length; i++){
        let venda = vendas[i];
        let vendedor = venda.vendedor;
        let valor = venda.valor;
        if(resumo[vendedor]){
            resumo[vendedor] += valor;
        }else{
            resumo[vendedor] = valor;
        }
    }
    return resumo;
}

let resumo = resumoVendas(vendas);
console.log(resumo);
