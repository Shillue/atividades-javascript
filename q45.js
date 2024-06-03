/*45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.*/
let arrayDeStrings = ["maçã", "banana", "laranja", "banana", "maçã", "laranja", "banana"];
let contagem = {};
for(let i = 0; i < arrayDeStrings.length; i++){
    let strings = arrayDeStrings[i];
    if(contagem[strings]){
        contagem[strings]++;
    }else{
        contagem[strings] = 1;
    }
}
console.log(contagem)
