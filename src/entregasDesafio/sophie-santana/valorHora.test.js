const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe('calculo de horas totais', () => {
  test('calcular o valor da hora de acordo com a renda mensal', () => {
    //setup
    const rendaMensal = 4000;

    //ação
    const resultado = calcularValorPorHora(rendaMensal);

    //verificação
    expect(resultado).toEqual(23);
  });
});