function inverterString(valor) {
    let resultado = '';

    for (let i = valor.length; i > 0; i--) {
        resultado += valor[i - 1];
    }

    return resultado;
}

console.log(inverterString('Targed'));