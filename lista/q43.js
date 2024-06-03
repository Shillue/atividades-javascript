/*43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.*/

let obj1 = {
    nome: "Mel",
    idade: 29,
    cidade: "Fortaleza"
};

let obj2 = {
    idade: 30,
    cidade:"Sobral",
    pais:"Brasil"
};

//Função para combinar
function combinarObjs(obj1, obj2){
    let combinado = {};
    //copiando o objeto 1
    for(let chave in obj1){
        combinado[chave] = obj1[chave];
    }
    //copiando o objeto 2 e se houver conflito com o objeto 1 substitui
    for(let chave in obj2){
        combinado[chave] = obj2[chave];
    }

    return combinado;
}
//chamando a função
let objetoCombinado = combinarObjs(obj1,obj2);
//Exibir
console.log(objetoCombinado);
