const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora', () => {
    
    test('retorno do valor arredondado está correto dado o valor informado no mês em number', () => {
        const valorMes = 5000;
        const resultado = calcularValorPorHora(valorMes);
        expect(resultado).toEqual(29);
    });

    test('retorno do valor arredondado está correto dado o valor informado no mês em string', () => {
        const valorMes = '5000'; 
        const resultado = calcularValorPorHora(valorMes);
        expect(resultado).toEqual(29);
    });

    test('retorno deve ser um NaN pois valorMes é undefined', () => {
        const valorMes = undefined; 
        const resultado = calcularValorPorHora(valorMes);
        expect(resultado).toBeNaN();
    });

    test('Retorno deve ser 0 pois valoMes é null', () => {
        const valorMes = null;
        const resultado = calcularValorPorHora(valorMes);
        expect(resultado).toBe(0);
      });
});