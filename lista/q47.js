/*47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.*/
let pessoa = {
    nome: "João",
    idade: 30,
    altura: 1.75
};
function aplicarFuncaoEmObjeto(objeto, funcao) {
    let novoObjeto = {};
    for (let propriedade in objeto) {
        if (objeto.hasOwnProperty(propriedade)) {
            let valor = objeto[propriedade];
            if (typeof valor === 'number') {
                novoObjeto[propriedade] = funcao(valor);
            } else {
                novoObjeto[propriedade] = valor;
            }
        }
    }
    return novoObjeto;
}
function dobrar(valor) {
    return valor * 2;
}

let pessoaDobrada = aplicarFuncaoEmObjeto(pessoa, dobrar);
console.log(pessoaDobrada);