"use strict";
//  Coleção heterogênia de valores - Armazenamento de valores de diferentes tipos - Podem ser passados como  parâmetros para funções
// é necessário seguir o padrão, caso ao contrario vai ter erro de sintaxe..
// Exemplo de erro => pessoa = [20, 'Homem', 29];
//  Exemplo 01 - Uso Simples de Tuplas em Typescript
let pessoa;
pessoa = ['Everton Walker', 'Homem', 29];
console.log(pessoa);
// Exemplo 02 - Acessando valor da Tupla;
console.log(pessoa[2]); // -> 29
// Exemplo 03 -> Outrra forma de usar Tuplas em Typescript( com labels )
let pessoa2 = ['Walker', 'Developer', 29];
console.log(pessoa2);
// Exemplo 04 - usando tuplas com Spread operator
let listaFrutas = ['Fruta1', 'Fruta2', 'Fruta3'];
console.log(...listaFrutas);
// Exemplo 05 - Lista Hererogênea com Tuplas
let listaFrutaDois = [5, true, ...listaFrutas];
console.log(listaFrutaDois);
// Exemplo 06 - Usa de funçãos com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['everton', 'walker'], [29, 30]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('everton', 'walker', 'lastName'));
