const {calcularHorasDeProjeto, calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

describe('valor por hora', () => {
    test('retorno do valor arredondado está correto dado valor informado no mês', 
    () => {
        // arrange / setup
        const valorMes = 5000; // dado mockado

        // act / ação
        const resultado = calcularValorPorHora(valorMes);

        // assert / verificação
        expect(resultado).toEqual(29);

    });

    test('retorno deve ser 0 se não for informado nenhum valor', 
    () => {
        // arrange / setup
        const valorMes = ""; 

        // act / ação
        const resultado = calcularValorPorHora(valorMes);

        // assert / verificação
        expect(resultado).toEqual(0);

    });
});
