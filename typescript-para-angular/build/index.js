"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//Funções
//A única diferença da função em TS para JS é que em TS você pode tipar a função
//Variáveis que recebem uma função tipada, precisam receber a mesma tipagem da função
//declaração de função tipada explicita
function addNumber(x, y) {
    return x + y;
}
//declaração de função implicita
function helloName(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
let ola = helloName("Pedro");
//Funções Multitipos
//A função multitipos recebe mais de um tipo com auxílio de operadores lógicos
//No TS o opr lógico OU pode ser representado apenas com um | ao invés de ||
//declaração explicita de dois tipos
function callToPhone(phone) {
    return phone;
}
//declaração explicita de qualquer tipo
function saveContact(phone, name, male) {
    return console.log(`Nome ${name}\nTelefone ${phone}\nHomen ${male}`);
}
//caso utilize uma função multitipos em uma variável, esta deverá ser multitipos também
let phone1 = callToPhone(11903021);
//neste console.log quando chamamos a função podemos declarar tanto número quanto string
// console.log(callToPhone("oito, " + 6 + ", cinco, " + 3), phone1);
// console.log(saveContact(90909921, "João Neves", true));
//Funções Assincronas
//Sempre que você declara uma função async, deve-se retornar uma promise
//O caso multitype pode ser aplicado aqui também
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Pedro Víctor";
    });
}
// const bot: robot = {
//     id: 1,
//     name: "Zero"
// }
// console.log(bot.id = "X"); //exemplo do readonly ativo
// console.log(bot.name = "Megaman")
//Se você declarar o método na interface, mas não utilizar na classe. O nome da classe ficará grifado como erro. Selecione "quick fix" para criar o método automaticamente
class Android {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello! I'm ${this.name}!`;
    }
}
const droid = new Android(3, "Foxy Girl");
// console.log(droid.sayHello());
//CLASSES
//A classe é uma forma que pode ser utilizada para criar novos objetos no mesmo formato
class Character {
    constructor(strength, skill) {
        this.strength = strength;
        this.skill = skill;
    }
    //como o tipo de retorno é vazio e estamos retornando uma ação podemos apenas chamar o método no código
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const charcter1 = new Character(50, 100);
//atribuimos um valor ao name. Mas você pode testar comentar a linha 169:170 e rodar o código para ver que não muda nada na declaração do character1. Teste comentar a 168 também para ver as diferentes declarações possíveis
charcter1.name = "Ryu";
// console.log(charcter1.name);
// charcter1.attack();
console.log(charcter1);
/*
Data Modifiers

Usaando em classes:
public - todos tem acesso aquele atributo. Comportamento padrão
private - só pode ser acessado dentro da classe
protected - O att pode ser acessado apenas pela própria classe e subclasses que herdem esta classe

Usando em Métodos:
Você pode usar em métodos também
*/
class SecretID {
    constructor(heroName, name, age) {
        this.heroName = heroName;
        this.name = name;
        this.age = age;
    }
    helloHero() {
        console.log(`Hello ${this.heroName}! Or I would say ${this.name}?`);
    }
}
const hero = new SecretID("Spider-Man", "Miles Morales", 17);
//o modificador protected usando no método "helloHero()" impede que outra pessoa possa acessá-lo de fora da classe. Tente acessá-la na linha seguinte usando: hero. ; e veja se o método aparece como sugestão
//teste aqui
//SUBCLASSES
//É uma classe que herda propriedades da superclass(classe pai) e acrescenta novos atributos na mesma.
class heroID extends SecretID {
    constructor(heroName, name, age, mutant, multverse) {
        super(heroName, name, age);
        this.mutant = mutant;
        this.multverse = multverse;
    }
}
const EdBrock = new heroID("Venom", "Ed Brock", 30, false, "Terra " + 145);
console.log(EdBrock);
