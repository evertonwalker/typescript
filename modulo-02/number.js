"use strict";
// É interessante lembrar que o tipo number do typescritp engloba todos sesses tipos:
// inteiros, flutuantes, positivos, negativos, infinito, NaN etc
// já o BigInt ( foi lançado na sua versão 3.2) tipo primitivo novo e permite trabalhar com números
// inteiros grandes sem ter problemas com arrendodamentos.
let valueOne = 10; // number
let valueTwo = 0x37CF; // hexadeciimal;
let valueThree = 0o377; // octal;
let valuefour = 0b111001; // binary; 
// por sinal o bigint só funciona com target ácima do ES2020
let big1 = 9007199254740991n;
