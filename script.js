
function mostraSoma() {

    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    };

    alert(soma);
};

function sequenciaFibonacci() {
    const entrada = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

    if (entrada === 0 || entrada === 1) {
        return alert(`O número ${entrada} pertence à sequência de Fibonacci.`);
    }

    let a = 0;
    let b = 1;
    let next = a + b;

    while (next <= entrada) {
        if (next === entrada) {
            return alert(`O número ${entrada} pertence à sequência de Fibonacci.`);
        }
        a = b;
        b = next;
        next = a + b;
    }

    return alert(`O número ${entrada} não pertence à sequência de Fibonacci.`);
}

function calculaFaturamento() {

    let faturamentoMensal = [
        { "dia": 1, "valor": 22174.1664 },
        { "dia": 2, "valor": 24537.6698 },
        { "dia": 3, "valor": 26139.6134 },
        { "dia": 4, "valor": 0.0 },
        { "dia": 5, "valor": 0.0 },
        { "dia": 6, "valor": 26742.6612 },
        { "dia": 7, "valor": 0.0 },
        { "dia": 8, "valor": 42889.2258 },
        { "dia": 9, "valor": 46251.174 },
        { "dia": 10, "valor": 11191.4722 },
        { "dia": 11, "valor": 0.0 },
        { "dia": 12, "valor": 0.0 },
        { "dia": 13, "valor": 3847.4823 },
        { "dia": 14, "valor": 373.7838 },
        { "dia": 15, "valor": 2659.7563 },
        { "dia": 16, "valor": 48924.2448 },
        { "dia": 17, "valor": 18419.2614 },
        { "dia": 18, "valor": 0.0 },
        { "dia": 19, "valor": 0.0 },
        { "dia": 20, "valor": 35240.1826 },
        { "dia": 21, "valor": 43829.1667 },
        { "dia": 22, "valor": 18235.6852 },
        { "dia": 23, "valor": 4355.0662 },
        { "dia": 24, "valor": 13327.1025 },
        { "dia": 25, "valor": 0.0 },
        { "dia": 26, "valor": 0.0 },
        { "dia": 27, "valor": 25681.8318 },
        { "dia": 28, "valor": 1718.1221 },
        { "dia": 29, "valor": 13220.495 },
        { "dia": 30, "valor": 8414.61 },
    ];

    let faturamentoPositivo = faturamentoMensal.filter(dia => dia.valor > 0);

    let menorFaturamento = Math.min(...faturamentoPositivo.map(dia => dia.valor));
    let maiorFaturamento = Math.max(...faturamentoPositivo.map(dia => dia.valor));

    let somaFaturamento = faturamentoPositivo.reduce((total, dia) => total + dia.valor, 0);
    let mediaFaturamento = somaFaturamento / faturamentoPositivo.length;

    let formatarMoeda = (valor) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    };

    let faturamentoAcimaMedia = faturamentoPositivo.filter(dia => dia.valor > mediaFaturamento).length;
    alert(`
        Relatório de faturamento mensal:
        
        - Menor faturamento: ${formatarMoeda(menorFaturamento.toFixed(2))};
        - Maior faturamento: ${formatarMoeda(maiorFaturamento.toFixed(2))};
        - Média mensal: ${formatarMoeda(mediaFaturamento.toFixed(2))};
        - Número de dias no mês acima da média: ${faturamentoAcimaMedia}.
    `);

}

function calculaFaturamentoDist() {

    const faturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    let totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

    let percentoPorEstado = {};
    for (let estado in faturamentoPorEstado) {
        percentoPorEstado[estado] = (faturamentoPorEstado[estado] / totalFaturamento * 100).toFixed(2);
    };

    let resultado = 'Percentual de faturamento por estado:\n';
    for (let estado in percentoPorEstado) {
        alert(
            resultado += `
            - ${estado}: ${percentoPorEstado[estado]}%;
        `)
    }

};

function inverterString() {

    let entradaString = prompt("Digite uma palavra para ser invertida:");

    if (entradaString !== null) {
        let stringInvertida = '';

        for (let i = entradaString.length - 1; i >= 0; i--) {
            stringInvertida += entradaString[i];
        };

        alert(`De acordo com a palavra informada, o inverso dela é: ${stringInvertida}.`);
    };

};



