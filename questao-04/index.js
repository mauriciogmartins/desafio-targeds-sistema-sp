const faturamentoEstados = [
    {
        uf: "SP",
        faturamento: 67836.43
    },
    {
        uf: "RJ",
        faturamento: 36678.66
    },
    {
        uf: "MG",
        faturamento: 29229.88
    },
    {
        uf: "ES",
        faturamento: 27165.48
    },
    {
        uf: "Outros",
        faturamento: 19849.53
    }
];

function gerarTotalFaturamento(listFaturamentoUF) {
    let valorTotal = 0;
    for (let dados of listFaturamentoUF) {
        valorTotal += dados.faturamento;
    }
    return valorTotal.toFixed(2);
}

function gerarListaPercent(listFaturamentoUF) {
    const faturamentoPercent = [];

    for (let dados of listFaturamentoUF) {
        let porcet = (100 * dados.faturamento / gerarTotalFaturamento(listFaturamentoUF)).toFixed(3);
        faturamentoPercent.push({ uf: dados.uf, porcetual: porcet });
    }

    return faturamentoPercent.sort((a, b) => {
        return b.porcetual - a.porcetual;
    });
}

for (let dados of gerarListaPercent(faturamentoEstados)) {
    console.log(`UF: ${dados.uf} - Representaçao (%): ${dados.porcetual}%`);
}