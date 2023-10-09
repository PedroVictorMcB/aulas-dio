
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