const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('valor total do projeto', () => {

  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_intermediario');
  })

  test('retorna valor total do projeto do pacote basico de acordo com as funcionalidades passadas', () => {
    //setup
    const funcionalidades = [
      'setup', //8
      'responsividade', //16
      'construcao_1_pagina', //8
      'integracao_mailchimp', //16
      'otimizacao_seo', //16
      'integracao_api_propria', //16
    ]; // 80 hrs

    const valorHora = 110;

    //ação
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    //verificação
    expect(resultado).toEqual(9856);
  });
});