
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

// type heroi = {
//     name: string;
//     vulgo: string;
// };

// function printaObj(pessoa: heroi) {
//     console.log(pessoa);
// }

// printaObj({
//     name: "Peter Parker",
//     vulgo: "Spider-Man",
// });

// console.log("Hello TypeScript!")