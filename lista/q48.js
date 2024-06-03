/*48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.*/

let inventarioLojaA = {
    "maçã":15,
    "laranja":10,
    "jaca":5,
    "mamão":6,
    "banana":8
}

let inventarioLojaB = {
    "maçã":10,
    "pera":10,
    "uva":5,
    "manga":6,
    "banana":2
}

function combinarInvantarios (inventarioLojaA, inventarioLojaB){
    let invenatarioCombinado = {};
    //add os itens do inventarioLojaA ao inventarioCombinado
    for(let itemA in inventarioLojaA){
        invenatarioCombinado[itemA] = inventarioLojaA[itemA];
    }
    //add os itens do inventarioLojaB ao invenatarioCombinado combinando
    for(let itemB in inventarioLojaB){
        if(invenatarioCombinado[itemB]){
            invenatarioCombinado[itemB] += inventarioLojaB[itemB];
        }else{
            invenatarioCombinado[itemB] = inventarioLojaB[itemB];
        }
    }
    return invenatarioCombinado;

}
let invenatarioCombinado = combinarInvantarios(inventarioLojaA, inventarioLojaB);
console.log(invenatarioCombinado);
