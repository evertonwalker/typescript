"use strict";
// Exemplo 01 -> Uso de colchetes:
let frutasArray = ['abacaxi', 'laranja'];
console.log(frutasArray[0]); // Retorna Abacaxi
// Exemplo 02 -> Array Object
let frutasArrayObject = ['abacaxi', 'laranja'];
console.log(frutasArrayObject[1]); // Retorna Laranja;
// Exemplo 03 -> Adicionando itens com método 'push'
let idiomas = ['pt', 'en'];
idiomas.push('xr');
console.log(idiomas[2]); // Retorna XR
// Exemplo 04 -> Sabendo tamanho do array
console.log(idiomas.length); // Retorna 3, dado que o array de idiomas possue 3 itens.
// Exemplo 05 -> Spread operator 
let numberArray = [1, 2, 3];
let numberArrayTwo = [4, 5, 6];
let unificando = [...numberArray, ...numberArrayTwo];
console.log(unificando); // Retorna [1, 2, 3, 4 ,5 ,6];
// Exemplo 06 -> Iteração de laço ( for )
for (let i = 0; i < unificando.length; i++) {
    console.log('Operação no valor', unificando[i]); // Retorna o número do valor
}
