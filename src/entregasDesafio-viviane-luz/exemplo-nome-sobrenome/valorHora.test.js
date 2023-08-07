const { calcularValorPorHora } = require ('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora', () => {
    test('retornar o valor arredondado correto dado o valor informado por mês', () => {

        const valorMes = 5000;

        const resultado = calcularValorPorHora(valorMes);

        expect(resultado).toEqual(29);
    });
});