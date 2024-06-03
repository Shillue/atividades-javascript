/*42.  Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.*/
let dados = {
    nome: "Maria",
    idade: 24,
    hobbies: ["Assistir animes", "Natação","Leitura"],
    notas:[6, 9, 10, 7, 8 ]
}
function filtrar(obj){
    let resultado = {};
    for(let chave in obj){
        if(Array.isArray(obj[chave])){
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

let arraysDoObjeto = filtrar(dados);
//Exibir
console.log(arraysDoObjeto);
