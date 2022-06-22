const dadosAnalisar = require("./dados.json");

dadosAnalisar.sort((a, b) => {
    return a.valor - b.valor;
});

const diaMenorFaturamento = dadosAnalisar.find((obj) => {
    return obj.valor > 0;
});

console.log(`Dia com o menor faturamento => Dia ${diaMenorFaturamento.dia} - Faturamento: R$ ${diaMenorFaturamento.valor.toFixed(2)}`);
console.log(`Dia com o maior faturamento => Dia ${dadosAnalisar[dadosAnalisar.length - 1].dia} - Faturamento: R$ ${dadosAnalisar[dadosAnalisar.length - 1].valor.toFixed(2)}`);