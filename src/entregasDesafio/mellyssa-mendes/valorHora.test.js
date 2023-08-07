const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Testa o valor por hora', () => {
    test('Retorno do valor arredondado está correto dado o valor informano no mês', () => {
        const valorMes = 5000;
        const resultado = calcularValorPorHora(valorMes);
        expect(resultado).toEqual(29);
    });
});