"use strict";
// definindo variáveis primitivas
let desliga = false; //definida por tipagem. Neste caso ele só pode receber valor booleano
let liga = true; //definida por inferencia. Mas neste caso ele pode receber qualquer outro valor
let nome = "Tia May";
let idade = 34;
let altura = 1.9;
//tipos especiais: null or undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any or void
let retorno; //usada em funções com retorno do tipo vazio
let retornoView = false; //retorno booleano
//objeto - sem previsibilidade
let identidade = {
    name: "Ricther Belmont",
    pais: "França",
    idade: "17",
};
let meuProduto = {
    nome: "Calça",
    preco: 119.90,
    unidades: 10,
};
//Arrays
let nomes = ["Ricther", "Morbius", "Blade", "Edward"];
console.log(nomes);
