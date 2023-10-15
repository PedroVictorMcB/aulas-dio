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
//Arrays simples
let nomes = ["Ricther", "Morbius", "Blade", "Edward"];
let nomes2 = ["Alucard", "Peter", "Inimigo do Blade", "Lobinho"];
//Arrays de Multitipos
let nomePoder = ["Peter", 60, "Alucard", 80, "Terminator", 140, 220];
//Tuplas
let boleto = ["agua conta", 199.90, 32289];
//Arrays Métodos
//Todos os métodos do JS são reutilizados no TS
//Dates
let aniversario = new Date("1970-10-30 03:00");
console.log(aniversario.toString); // por algum motivo o print não deu certo. Me aprofundar mais nisto.
//funções
//A única diferença da função em TS para JS é que em TS você pode tipar a função
//Variáveis que recebem uma função tipada, precisam receber a mesma tipagem da função
//declaração de função tipada explicita
function addNumber(x, y) {
    return x + y;
}
function helloName(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
let ola = helloName("Pedro");
console.log(`${ola}! A soma é = ${soma}`);
