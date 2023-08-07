const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');


describe('valor por hora', () => {
    test('retorno do valor arredondado está correto dado o valor do mês', () => {

        const valorMes = 5000; //dado mockado

        const resultado = calcularValorPorHora(valorMes)

        expect(resultado).toEqual(29);
    })
});