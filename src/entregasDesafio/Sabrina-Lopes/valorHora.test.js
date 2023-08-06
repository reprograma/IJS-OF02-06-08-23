const{calcularValorPorHora} = require ('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora',() => {
    test ('retorno do valor arredondado está correto dado o valor informado no mês' , ( ) => { 
        //arrange
        const valorMes = 5000;
        //act
        const resultado = calcularValorPorHora(valorMes);
        //assert
        expect(resultado). toEqual(29);
    });
});