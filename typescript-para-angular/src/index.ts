type heroi = {
    name: string;
    vulgo: string;
};

function printaObj(pessoa: heroi) {
    console.log(pessoa);
}

printaObj({
    name: "Peter Parker",
    vulgo: "Spider-Man",
});

console.log("Hello TypeScript!")