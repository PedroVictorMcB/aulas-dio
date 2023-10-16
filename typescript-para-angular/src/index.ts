
// definindo variáveis primitivas
let desliga: boolean = false; //definida por tipagem. Neste caso ele só pode receber valor booleano
let liga= true; //definida por inferencia. Mas neste caso ele pode receber qualquer outro valor
let nome: string = "Tia May";
let idade: number = 34;
let altura: number = 1.9;

//tipos especiais: null or undefined
let nulo : null = null;
let indefinido : undefined = undefined;

//tipos abrangentes: any or void
let retorno:void; //usada em funções com retorno do tipo vazio
let retornoView:any = false; //retorno booleano

//objeto - sem previsibilidade
let identidade: object = {
    name: "Ricther Belmont",
    pais: "França",
    idade: "17", 
}

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Calça",
    preco: 119.90,
    unidades: 10,
}

//Arrays simples

let nomes: string[] = ["Ricther", "Morbius", "Blade", "Edward"];

let nomes2: Array<string> = ["Alucard", "Peter", "Inimigo do Blade", "Lobinho"];

//Arrays de Multitipos

let nomePoder: (string | number)[] = ["Peter", 60, "Alucard", 80, "Terminator", 140, 220];

//Tuplas

let boleto:[string, number, number] = ["agua conta", 199.90, 32289]

//Arrays Métodos
//Todos os métodos do JS são reutilizados no TS

//Dates

let aniversario: Date = new Date("1970-10-30 03:00");
console.log(aniversario.toString); // por algum motivo o print não deu certo. Me aprofundar mais nisto.

//Funções
//A única diferença da função em TS para JS é que em TS você pode tipar a função
//Variáveis que recebem uma função tipada, precisam receber a mesma tipagem da função

//declaração de função tipada explicita
function addNumber(x: number, y: number): number {
    return x + y
}

//declaração de função implicita
function helloName(name: string) {
    return `Hello ${name}`;
}

let soma: number = addNumber(4, 7);
let ola: string = helloName("Pedro")

//Funções Multitipos
//A função multitipos recebe mais de um tipo com auxílio de operadores lógicos
//No TS o opr lógico OU pode ser representado apenas com um | ao invés de ||

//declaração explicita de dois tipos
function callToPhone(phone: number | string): number | string {
    return phone;
}

//declaração explicita de qualquer tipo
function saveContact(phone: number | string, name: string, male: boolean): any {
    return console.log(`Nome ${name}\nTelefone ${phone}\nHomen ${male}`);
}

//caso utilize uma função multitipos em uma variável, esta deverá ser multitipos também
let phone1: number | string = callToPhone(11903021);

//neste console.log quando chamamos a função podemos declarar tanto número quanto string
// console.log(callToPhone("oito, " + 6 + ", cinco, " + 3), phone1);
// console.log(saveContact(90909921, "João Neves", true));

//Funções Assincronas
//Sempre que você declara uma função async, deve-se retornar uma promise

//O caso multitype pode ser aplicado aqui também
async function getDataBase(id: number): Promise<string> {
    return "Pedro Víctor";
}

// console.log(getDataBase(10));

//INTERFACES
//Muito utilizada para tipar classes. Seu formato de declaração é identico ao do type
//É como se fosse um contrato para a classe e quem herdar tal classe precisa utilizá-lo
//Os atributos da inteface também aceitam a declaração multtype e possuiem uma propriedade chamada "readonly" (serve para apenas leitura. Após criada a variável/obj não é possível modificá-la posteriormente)
//Na declaração de interface você também pode implementar um método
//Type ou Interface são compilados sempre no mesmo arquivo que você está trabalhando. Ou seja, eles possuem um valor semântico.

interface robot {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: "Zero"
}


console.log(bot.id = "X"); //exemplo do readonly ativo
console.log(bot.name = "Megaman")

//Se você declarar o método na interface, mas não utilizar na classe. O nome da classe ficará grifado como erro. Selecione "quick fix" para criar o método automaticamente
class Android implements robot {
    id: number | string;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }
    
    sayHello(): string {
        return `Hello! I'm ${this.name}!`;
    }
}

const droid = new Android (3, "Foxy Girl");
console.log(droid.sayHello());