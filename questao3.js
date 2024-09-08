const faturamento = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},  // Fim de semana
    {"dia": 5, "valor": 0.0},  // Fim de semana
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 27289.3223},
    {"dia": 8, "valor": 22914.4241},
    {"dia": 9, "valor": 24123.5517},
    {"dia": 10, "valor": 25566.4371},
    {"dia": 11, "valor": 0.0},  // Fim de semana
    {"dia": 12, "valor": 0.0},  // Fim de semana
    {"dia": 13, "valor": 27651.1923},
    {"dia": 14, "valor": 28342.3294},
    {"dia": 15, "valor": 21045.2111},
    {"dia": 16, "valor": 23456.7990},
    {"dia": 17, "valor": 26089.3372},
    {"dia": 18, "valor": 0.0},  // Fim de semana
    {"dia": 19, "valor": 0.0},  // Fim de semana
    {"dia": 20, "valor": 28947.6712},
    {"dia": 21, "valor": 27543.1234},
    {"dia": 22, "valor": 22091.3421},
    {"dia": 23, "valor": 23267.1231},
    {"dia": 24, "valor": 25432.2231},
    {"dia": 25, "valor": 0.0},  // Fim de semana
    {"dia": 26, "valor": 0.0},  // Fim de semana
    {"dia": 27, "valor": 26988.6712},
    {"dia": 28, "valor": 28045.3321},
    {"dia": 29, "valor": 23156.8891},
    {"dia": 30, "valor": 25789.1345}
];

// Filtrar dias com faturamento válido (não zero)
const faturamentoValido = faturamento.filter(dia => dia.valor > 0);

// Calcular a média mensal
const mediaMensal = faturamentoValido.reduce((acc, dia) => acc + dia.valor, 0) / faturamentoValido.length;

const menorValor = Math.min(...faturamentoValido.map(dia => dia.valor));
const maiorValor = Math.max(...faturamentoValido.map(dia => dia.valor));

const diaMenorValor = faturamentoValido.find(dia => dia.valor === menorValor);
const diaMaiorValor = faturamentoValido.find(dia => dia.valor === maiorValor);

const diasAcimaDaMedia = faturamentoValido.filter(dia => dia.valor > mediaMensal);

console.log(`Média de faturamento mensal: ${mediaMensal.toFixed(2)}`);
console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)} no dia ${diaMenorValor.dia}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)} no dia ${diaMaiorValor.dia}`);

console.log("Dias com faturamento acima da média:");
diasAcimaDaMedia.forEach(dia => {
    console.log(`Dia ${dia.dia}: Faturamento = R$ ${dia.valor.toFixed(2)}`);
});
