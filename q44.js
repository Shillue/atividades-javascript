/*44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.*/
function contarStrings(obj){
    let contador = 0;
    for(let chave in obj){
        if(typeof obj[chave] === 'string'){
            contador++;
        }
    }
    return contador;
}

let exemploObjeto = {
    nome: "Lua",
    idade: 33,
    cidade: "Tiangua",
    pais: "Brasil",
    nota: 10
}

let numeroDeStrings = contarStrings(exemploObjeto);
console.log(`Número de propriedades do tipo string: ${numeroDeStrings}`);
