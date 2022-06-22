function verificarValor(valor) {
    valorAnterior1 = 0;
    valorAnterior2 = 1;
    pertenceSequenciaFibonacci = false;

    for (let i = 0; i < valor; i++) {
        if (valorAnterior1 + valorAnterior2 === valor) {
            pertenceSequenciaFibonacci = true;
            break;
        } else {
            let auxiliar = valorAnterior2;
            valorAnterior2 += valorAnterior1;
            valorAnterior1 = auxiliar;
        }
    }

    console.log(`O número ${valor}${pertenceSequenciaFibonacci === true ? ' ' : ' não '}pertence a sequência de Fibonacci`);
}

//COLOCAR O NUMERO QUE PRETENDE ANALISAR DENTRO DA FUNÇÃO
verificarValor(34);