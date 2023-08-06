const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora', () => {
    test('retorno do valor arredondado esta correto dado o valor informado no mes', () => {
        const valorMes = 5000;
        const resultado = calcularValorPorHora(valorMes);
        expect(resultado).toEqual(29);
    });
});